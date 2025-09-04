import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

// 👇 NUEVO: deps y setup de SQLite persistente en /data
import fs from "fs";
import path from "path";
import Database from "better-sqlite3";

const DATA_DIR = process.env.DATA_DIR || "/data";
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });

const db = new Database(path.join(DATA_DIR, "metrics.db"));
db.pragma("journal_mode = WAL");
db.exec(`
  CREATE TABLE IF NOT EXISTS counters (
    key TEXT PRIMARY KEY,
    value INTEGER NOT NULL
  );
`);
const getStmt = db.prepare("SELECT value FROM counters WHERE key = ?");
const upsertStmt = db.prepare(`
  INSERT INTO counters(key, value) VALUES(?, ?)
  ON CONFLICT(key) DO UPDATE SET value = counters.value + excluded.value
`);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ---- Logger JSON para /api (se mantiene tu lógica)
app.use((req, res, next) => {
  const start = Date.now();
  const pathName = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json.bind(res);
  // @ts-ignore
  res.json = function (bodyJson: any, ...args: any[]) {
    capturedJsonResponse = bodyJson;
    return originalResJson(bodyJson, ...args);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (pathName.startsWith("/api")) {
      let logLine = `${req.method} ${pathName} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        try {
          logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
        } catch {}
      }
      if (logLine.length > 80) logLine = logLine.slice(0, 79) + "…";
      log(logLine);
    }
  });

  next();
});

// 👇 NUEVO: Endpoints del contador
app.get("/api/visits", (_req: Request, res: Response) => {
  const row = getStmt.get("total_visits");
  res.json({ value: row?.value ?? 0 });
});

app.post("/api/visits/hit", (_req: Request, res: Response) => {
  upsertStmt.run("total_visits", 1);
  const row = getStmt.get("total_visits");
  res.json({ value: row?.value ?? 0 });
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });

  // Vite dev vs estáticos
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // Puerto único permitido
  const port = parseInt(process.env.PORT || "5000", 10);
  server.listen(
    {
      port,
      host: "0.0.0.0",
      reusePort: true,
    },
    () => {
      log(`serving on port ${port}`);
    }
  );
})();
