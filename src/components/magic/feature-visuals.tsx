"use client";

import { motion } from "motion/react";
import { Check, Search, CreditCard } from "lucide-react";
import { NumberTicker } from "@/components/magic/number-ticker";

/* ---------------------------------------------------------------------------
   Mini-UIs animadas para a seção de Funcionalidades.
   Inspiradas em cards "vivos" (estilo Zouti), mas no design system claro/violeta
   do FreelaPilot. Cada visual preenche o container (h-full) com aspecto definido
   pelo card pai. Animações leves e em loop para os cards "respirarem".
--------------------------------------------------------------------------- */

const EASE = [0.2, 0.7, 0.2, 1] as const;

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl border border-stroke bg-gradient-to-br from-white to-brand-50">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" />
      {children}
    </div>
  );
}

/* ---------- Financeiro: valor + gráfico de área que desenha ---------- */
function FinanceiroViz() {
  const line =
    "M0 84 C 26 66, 52 94, 84 74 S 138 46, 170 64 S 230 34, 262 56 S 300 28, 320 46";
  const area = `${line} L320 120 L0 120 Z`;
  return (
    <Frame>
      <div className="absolute inset-x-4 top-4 flex items-start justify-between">
        <div>
          <p className="text-[11px] font-medium text-muted">Receita do mês</p>
          <p className="mt-0.5 font-display text-2xl font-medium text-ink">
            <NumberTicker value={12480} prefix="R$ " />
          </p>
        </div>
        <motion.span
          initial={{ opacity: 0, y: -6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="rounded-full bg-success/10 px-2 py-1 text-[11px] font-semibold text-success"
        >
          ↑ 18%
        </motion.span>
      </div>

      <div className="absolute inset-x-3 bottom-3 flex items-end gap-1.5">
        {[40, 64, 52, 80, 60, 92].map((h, i) => (
          <motion.span
            key={i}
            initial={{ height: 6, opacity: 0.4 }}
            whileInView={{ height: h * 0.5, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.08, ease: EASE, duration: 0.6 }}
            className="w-full rounded-t bg-brand-200"
            style={{ maxWidth: 14 }}
          />
        ))}
      </div>

      <svg
        viewBox="0 0 320 120"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 h-1/2 w-full"
      >
        <defs>
          <linearGradient id="fin-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#966ac2" stopOpacity="0.28" />
            <stop offset="1" stopColor="#966ac2" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="fin-line" x1="0" y1="0" x2="320" y2="0">
            <stop offset="0" stopColor="#a87ad3" />
            <stop offset="1" stopColor="#704798" />
          </linearGradient>
        </defs>
        <motion.path
          d={area}
          fill="url(#fin-fill)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        />
        <motion.path
          d={line}
          fill="none"
          stroke="url(#fin-line)"
          strokeWidth={2.5}
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: EASE }}
        />
      </svg>
    </Frame>
  );
}

/* ---------- Kanban: colunas com card em progresso ---------- */
function KanbanViz() {
  const cols = [
    { dot: "#a87ad3", label: "A fazer", cards: 2 },
    { dot: "#966ac2", label: "Fazendo", cards: 1 },
    { dot: "#22c55e", label: "Feito", cards: 1 },
  ];
  return (
    <Frame>
      <div className="absolute inset-3 grid grid-cols-3 gap-2">
        {cols.map((c, ci) => (
          <div key={c.label} className="flex flex-col gap-1.5">
            <div className="flex items-center gap-1.5">
              <span
                className="size-1.5 rounded-full"
                style={{ background: c.dot }}
              />
              <span className="text-[9px] font-semibold text-ink/70">
                {c.label}
              </span>
            </div>
            {Array.from({ length: c.cards }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 * (ci + i), ease: EASE }}
                className="rounded-lg border border-stroke bg-white p-1.5 shadow-sm"
              >
                <span
                  className="block h-1 w-7 rounded-full"
                  style={{ background: c.dot, opacity: 0.7 }}
                />
                <span className="mt-1 block h-1 w-full rounded-full bg-stroke" />
                {ci === 1 ? (
                  <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-brand-100">
                    <motion.span
                      className="block h-full rounded-full bg-gradient-primary"
                      initial={{ width: "10%" }}
                      animate={{ width: ["10%", "80%", "10%"] }}
                      transition={{
                        duration: 3.2,
                        repeat: Infinity,
                        ease: EASE,
                      }}
                    />
                  </div>
                ) : (
                  <span className="mt-1 block h-1 w-2/3 rounded-full bg-stroke" />
                )}
                {ci === 2 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
                    className="mt-1 inline-flex size-3.5 items-center justify-center rounded-full bg-success text-white"
                  >
                    <Check size={9} strokeWidth={3} />
                  </motion.span>
                )}
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </Frame>
  );
}

/* ---------- Notas: notas coloridas que entram em stagger e flutuam ---------- */
function NotasViz() {
  const notes = [
    { c: "#ede4f7", b: "#a87ad3", w: "70%" },
    { c: "#fdebd0", b: "#f3b15b", w: "55%" },
    { c: "#d9f3e3", b: "#22c55e", w: "80%" },
    { c: "#e9dcf2", b: "#966ac2", w: "60%" },
  ];
  return (
    <Frame>
      <div className="absolute inset-x-3 top-3">
        <div className="flex items-center gap-1.5 rounded-full border border-stroke bg-white px-2 py-1">
          <Search size={11} className="text-muted" />
          <span className="text-[9px] text-muted">Buscar nas notas</span>
          <motion.span
            className="ml-0.5 h-2.5 w-px bg-brand-500"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1.1, repeat: Infinity }}
          />
        </div>
      </div>
      <div className="absolute inset-x-3 bottom-3 grid grid-cols-2 gap-2">
        {notes.map((n, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 * i, ease: EASE }}
          >
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{
                duration: 3 + i * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="rounded-lg p-1.5 shadow-sm"
              style={{ background: n.c }}
            >
              <span
                className="block h-1 rounded-full"
                style={{ background: n.b, width: n.w }}
              />
              <span
                className="mt-1 block h-1 w-full rounded-full"
                style={{ background: n.b, opacity: 0.35 }}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </Frame>
  );
}

/* ---------- Mapa mental: nó central + ramos que desenham ---------- */
function MapaViz() {
  const branches = [
    { x: 56, y: 30, d: "M160 60 C 120 60, 100 30, 64 30" },
    { x: 56, y: 92, d: "M160 60 C 120 60, 100 92, 64 92" },
    { x: 264, y: 28, d: "M160 60 C 200 60, 224 28, 256 28" },
    { x: 264, y: 94, d: "M160 60 C 200 60, 224 94, 256 94" },
  ];
  return (
    <Frame>
      <svg viewBox="0 0 320 120" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="map-line" x1="0" y1="0" x2="320" y2="0">
            <stop offset="0" stopColor="#a87ad3" />
            <stop offset="1" stopColor="#704798" />
          </linearGradient>
        </defs>
        {branches.map((b, i) => (
          <motion.path
            key={i}
            d={b.d}
            fill="none"
            stroke="url(#map-line)"
            strokeWidth={1.6}
            strokeOpacity={0.6}
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 + i * 0.15, ease: EASE }}
          />
        ))}
        {branches.map((b, i) => (
          <motion.circle
            key={`n${i}`}
            cx={b.x}
            cy={b.y}
            r={8}
            fill="#fff"
            stroke="url(#map-line)"
            strokeWidth={1.6}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.6 + i * 0.15,
              type: "spring",
              stiffness: 280,
            }}
            style={{ transformOrigin: `${b.x}px ${b.y}px` }}
          />
        ))}
        <motion.circle
          cx={160}
          cy={60}
          r={26}
          fill="#966ac2"
          fillOpacity={0.12}
          animate={{ r: [24, 30, 24], fillOpacity: [0.12, 0.04, 0.12] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-gradient-primary px-2.5 py-1 text-[10px] font-semibold text-white shadow-md">
        Projeto
      </div>
    </Frame>
  );
}

/* ---------- Pagamentos: valor + PIX + parcelas com check ---------- */
function PagamentosViz() {
  const options = [
    { x: "3x", v: "R$ 333,33", on: false },
    { x: "6x", v: "R$ 166,67", on: true },
    { x: "12x", v: "R$ 83,33", on: false },
  ];
  return (
    <Frame>
      <div className="absolute inset-3 flex flex-col gap-1.5">
        <div className="flex items-center justify-between rounded-lg border border-stroke bg-white px-2.5 py-1.5">
          <div className="flex items-center gap-1.5">
            <CreditCard size={13} className="text-brand-500" />
            <span className="text-[10px] font-semibold text-ink">
              Designer Pro
            </span>
          </div>
          <span className="font-display text-[12px] font-medium text-ink">
            R$ 1.000
          </span>
        </div>
        {options.map((o, i) => (
          <motion.div
            key={o.x}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 * i, ease: EASE }}
            className={`flex items-center justify-between rounded-lg border px-2.5 py-1.5 ${
              o.on
                ? "border-brand-300 bg-brand-50"
                : "border-stroke bg-white/70"
            }`}
          >
            <div className="flex items-center gap-1.5">
              <motion.span
                initial={false}
                animate={
                  o.on
                    ? { scale: 1, backgroundColor: "#966ac2" }
                    : { scale: 1 }
                }
                className={`inline-flex size-3.5 items-center justify-center rounded ${
                  o.on ? "" : "border border-stroke bg-white"
                }`}
                style={o.on ? { background: "#966ac2" } : undefined}
              >
                {o.on && (
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, type: "spring", stiffness: 320 }}
                    className="text-white"
                  >
                    <Check size={9} strokeWidth={3} />
                  </motion.span>
                )}
              </motion.span>
              <span className="text-[10px] font-semibold text-ink">{o.x}</span>
            </div>
            <span className="text-[10px] text-muted">{o.v}</span>
          </motion.div>
        ))}
      </div>
    </Frame>
  );
}

export function FeatureVisual({ k }: { k: string }) {
  switch (k) {
    case "financeiro":
      return <FinanceiroViz />;
    case "kanban":
      return <KanbanViz />;
    case "notas":
      return <NotasViz />;
    case "mapa":
      return <MapaViz />;
    case "pagamentos":
      return <PagamentosViz />;
    default:
      return null;
  }
}
