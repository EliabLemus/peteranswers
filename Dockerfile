# ---------- Builder ----------
FROM node:20-alpine AS builder
WORKDIR /app

COPY package.json package-lock.json ./

COPY client ./client
COPY server ./server
COPY shared ./shared
COPY tsconfig.json vite.config.ts postcss.config.js tailwind.config.ts ./

# archivos opcionales (si existen)
COPY components.json* drizzle.config.ts* ./

RUN npm ci
RUN npm run build


# ---------- Runtime ----------
FROM node:20-alpine AS runner

ENV NODE_ENV=production
WORKDIR /app

# Copia solo lo necesario para instalar deps de producción
COPY package.json package-lock.json ./

# Instala SOLO prod deps (express, etc. externos al bundle)
RUN npm ci --omit=dev && npm cache clean --force

# Copiamos artefactos listos
COPY --from=builder /app/dist ./dist

# Usuario no root por seguridad
RUN addgroup -S nodeapp && adduser -S nodeapp -G nodeapp
USER nodeapp

EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 CMD node -e "fetch('http://127.0.0.1:3000/').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"

CMD ["node", "dist/index.js"]
