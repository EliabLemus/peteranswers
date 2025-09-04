import { useEffect, useState } from "react";

export function VisitCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const KEY = "linkedin-2025-09-05"; // etiqueta de campaña opcional
    const today = new Date().toISOString().slice(0, 10);
    const localKey = `vc_${KEY}`;
    const lastHit = localStorage.getItem(localKey);

    const url = lastHit === today ? "/api/visits" : "/api/visits/hit";
    const method = lastHit === today ? "GET" : "POST";

    fetch(url, { method })
      .then((r) => r.json())
      .then(({ value }) => {
        if (lastHit !== today) localStorage.setItem(localKey, today);
        setCount(value);
      })
      .catch(() => setCount(0));
  }, []);

  return (
    <div className="fixed bottom-4 right-4 px-4 py-3 rounded-lg bg-black/60 text-white text-sm font-semibold shadow-lg backdrop-blur flex flex-col items-start gap-1 z-50">
      <div className="flex items-center gap-2">
        <span role="img" aria-label="eyes">👀</span>
        <span className="opacity-85">Visits</span>
        <span className="font-extrabold">{count !== null ? count.toLocaleString() : "…"}</span>
      </div>
      <a
        href="https://github.com/EliabLemus"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-white underline opacity-80 hover:text-primary hover:opacity-100 transition"
      >
        github.com/EliabLemus
      </a>
    </div>
  );
}
