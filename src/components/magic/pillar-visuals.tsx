"use client";

import { motion } from "motion/react";

/* ---------------------------------------------------------------------------
   Versões ANIMADAS das artes dos 3 pilares da Solução (antes SVGs estáticos).
   Mesma linguagem visual (fundo violeta claro + grid de pontos), agora com
   movimento em loop: linhas que desenham, anéis que pulsam, dados fluindo,
   anel de progresso, selo que aparece e brilhos. Paleta do design system.
--------------------------------------------------------------------------- */

const EASE = [0.2, 0.7, 0.2, 1] as const;
const VB = "0 0 480 240";

function PillarFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-[#EFEAFD] to-[#FBFAFE]">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-50" />
      {children}
    </div>
  );
}

function Defs() {
  return (
    <defs>
      <linearGradient id="pv-brand" x1="120" y1="40" x2="360" y2="200" gradientUnits="userSpaceOnUse">
        <stop stopColor="#a87ad3" />
        <stop offset="0.55" stopColor="#966ac2" />
        <stop offset="1" stopColor="#704798" />
      </linearGradient>
      <radialGradient id="pv-core" cx="0.5" cy="0.42" r="0.65">
        <stop stopColor="#a87ad3" />
        <stop offset="0.6" stopColor="#966ac2" />
        <stop offset="1" stopColor="#573a76" />
      </radialGradient>
    </defs>
  );
}

/* ---------- Centralize tudo: hub com dados fluindo ao núcleo ---------- */
function CentralizeViz() {
  const sats = [
    { x: 96, y: 56, r: 13 },
    { x: 388, y: 52, r: 11 },
    { x: 70, y: 150, r: 11 },
    { x: 410, y: 158, r: 13 },
    { x: 150, y: 200, r: 10 },
    { x: 330, y: 198, r: 11 },
  ];
  const flow = [0, 3, 4]; // satélites que enviam "dados"
  return (
    <PillarFrame>
      <svg viewBox={VB} className="absolute inset-0 h-full w-full">
        <Defs />
        {/* linhas que desenham */}
        {sats.map((s, i) => (
          <motion.line
            key={`l${i}`}
            x1={240}
            y1={118}
            x2={s.x}
            y2={s.y}
            stroke="url(#pv-brand)"
            strokeWidth={2}
            strokeOpacity={0.5}
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 + i * 0.1, ease: EASE }}
          />
        ))}
        {/* dados fluindo até o núcleo */}
        {flow.map((idx, k) => (
          <motion.circle
            key={`f${k}`}
            r={3}
            fill="#966ac2"
            initial={{ cx: sats[idx].x, cy: sats[idx].y, opacity: 0 }}
            animate={{
              cx: [sats[idx].x, 240],
              cy: [sats[idx].y, 118],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              repeatDelay: 0.6,
              delay: 1 + k * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}
        {/* satélites */}
        {sats.map((s, i) => (
          <motion.g
            key={`n${i}`}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + i * 0.08, type: "spring", stiffness: 280 }}
            style={{ transformOrigin: `${s.x}px ${s.y}px` }}
          >
            <circle cx={s.x} cy={s.y} r={s.r} fill="#fff" stroke="url(#pv-brand)" strokeWidth={2} />
            <circle cx={s.x} cy={s.y} r={s.r * 0.34} fill="#966ac2" />
          </motion.g>
        ))}
        {/* anéis de pulso do núcleo */}
        {[0, 1].map((i) => (
          <motion.circle
            key={`r${i}`}
            cx={240}
            cy={118}
            r={30}
            fill="none"
            stroke="#966ac2"
            strokeWidth={1.5}
            initial={{ scale: 1, opacity: 0.5 }}
            animate={{ scale: 1.9, opacity: 0 }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeOut", delay: i * 1.3 }}
            style={{ transformOrigin: "240px 118px" }}
          />
        ))}
        {/* núcleo */}
        <circle cx={240} cy={118} r={30} fill="url(#pv-core)" />
        <g stroke="#fff" strokeWidth={2.4} strokeLinejoin="round" strokeLinecap="round" fill="none">
          <path d="M240 104 L255 112 L240 120 L225 112 Z" />
          <path d="M227 118 L240 125.5 L253 118" />
          <path d="M227 124.5 L240 132 L253 124.5" />
        </g>
      </svg>
    </PillarFrame>
  );
}

/* ---------- Ganhe tempo: anel de progresso + avanço ---------- */
function TempoViz() {
  return (
    <PillarFrame>
      <svg viewBox={VB} className="absolute inset-0 h-full w-full">
        <Defs />
        {/* streaks de velocidade */}
        {[
          { y: 92, w: 92, x: 58, sw: 4 },
          { y: 120, w: 88, x: 44, sw: 5 },
          { y: 148, w: 86, x: 64, sw: 4 },
        ].map((s, i) => (
          <motion.line
            key={i}
            x1={s.x}
            y1={s.y}
            x2={s.x + s.w}
            y2={s.y}
            stroke="url(#pv-brand)"
            strokeWidth={s.sw}
            strokeLinecap="round"
            strokeOpacity={0.5}
            animate={{ x: [-6, 6, -6], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
          />
        ))}

        {/* trilho */}
        <circle cx={240} cy={120} r={62} fill="none" stroke="#e9dcf2" strokeWidth={10} />
        {/* progresso */}
        <motion.circle
          cx={240}
          cy={120}
          r={62}
          fill="none"
          stroke="url(#pv-brand)"
          strokeWidth={10}
          strokeLinecap="round"
          transform="rotate(-90 240 120)"
          initial={{ pathLength: 0.05 }}
          animate={{ pathLength: [0.05, 0.82, 0.05] }}
          transition={{ duration: 3.4, repeat: Infinity, ease: EASE }}
        />
        {/* dado percorrendo o anel */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "240px 120px" }}
        >
          <circle cx={240} cy={58} r={5.5} fill="#fff" stroke="url(#pv-brand)" strokeWidth={3} />
        </motion.g>

        {/* fast-forward */}
        <motion.g
          fill="url(#pv-brand)"
          animate={{ scale: [1, 1.12, 1], opacity: [0.85, 1, 0.85] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "240px 120px" }}
        >
          <path d="M218 104 L238 120 L218 136 Z" />
          <path d="M242 104 L262 120 L242 136 Z" />
        </motion.g>
      </svg>
    </PillarFrame>
  );
}

/* ---------- Seja profissional: documento + selo verificado ---------- */
function ProfissionalViz() {
  return (
    <PillarFrame>
      <svg viewBox={VB} className="absolute inset-0 h-full w-full">
        <Defs />
        <clipPath id="pv-doc">
          <rect x={186} y={62} width={124} height={148} rx={14} />
        </clipPath>

        {/* documento de trás */}
        <motion.rect
          x={178}
          y={58}
          width={124}
          height={148}
          rx={14}
          fill="#fff"
          stroke="#e9dcf2"
          strokeWidth={2}
          initial={{ opacity: 0, x: -8, rotate: -10 }}
          whileInView={{ opacity: 1, x: 0, rotate: -7 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          style={{ transformOrigin: "240px 124px" }}
        />

        {/* documento da frente */}
        <motion.g
          initial={{ opacity: 0, y: 10, rotate: 9 }}
          whileInView={{ opacity: 1, y: 0, rotate: 5 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
          style={{ transformOrigin: "240px 124px" }}
        >
          <rect x={186} y={62} width={124} height={148} rx={14} fill="#fff" stroke="url(#pv-brand)" strokeWidth={2.2} />
          <rect x={186} y={62} width={124} height={34} rx={14} fill="url(#pv-brand)" />
          <rect x={186} y={84} width={124} height={12} fill="url(#pv-brand)" />
          {[118, 134, 150, 168, 184].map((y, i) => (
            <motion.line
              key={y}
              x1={204}
              y1={y}
              x2={i < 3 ? (i === 2 ? 264 : 292) : i === 4 ? 248 : 292}
              y2={y}
              stroke={i < 3 ? "#c4a8db" : "#e9dcf2"}
              strokeWidth={4}
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.1, ease: EASE }}
            />
          ))}
          {/* shine que percorre o documento */}
          <motion.rect
            x={150}
            y={40}
            width={26}
            height={200}
            fill="#fff"
            fillOpacity={0.45}
            transform="skewX(-18)"
            clipPath="url(#pv-doc)"
            initial={{ x: 60 }}
            animate={{ x: [60, 230, 230] }}
            transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 1.6, ease: "easeInOut" }}
          />
        </motion.g>

        {/* selo verificado */}
        <motion.g
          initial={{ scale: 0, rotate: -30 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9, type: "spring", stiffness: 260, damping: 14 }}
          style={{ transformOrigin: "316px 158px" }}
        >
          <motion.circle
            cx={316}
            cy={158}
            r={30}
            fill="none"
            stroke="#966ac2"
            strokeWidth={1.4}
            initial={{ scale: 1, opacity: 0.5 }}
            animate={{ scale: 1.7, opacity: 0 }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut", delay: 1.3 }}
            style={{ transformOrigin: "316px 158px" }}
          />
          <circle cx={316} cy={158} r={30} fill="url(#pv-core)" />
          <motion.path
            d="M303 159 L312 169 L330 148"
            fill="none"
            stroke="#fff"
            strokeWidth={4.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.2, ease: EASE }}
          />
        </motion.g>

        {/* brilhos */}
        {[
          { x: 150, y: 70, s: 10 },
          { x: 360, y: 70, s: 7 },
        ].map((sp, i) => (
          <motion.path
            key={i}
            d={`M${sp.x} ${sp.y - sp.s} L${sp.x + sp.s * 0.32} ${sp.y - sp.s * 0.32} L${sp.x + sp.s} ${sp.y} L${sp.x + sp.s * 0.32} ${sp.y + sp.s * 0.32} L${sp.x} ${sp.y + sp.s} L${sp.x - sp.s * 0.32} ${sp.y + sp.s * 0.32} L${sp.x - sp.s} ${sp.y} L${sp.x - sp.s * 0.32} ${sp.y - sp.s * 0.32} Z`}
            fill="#a87ad3"
            animate={{ scale: [0.7, 1, 0.7], opacity: [0.4, 0.9, 0.4] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: i * 0.7 }}
            style={{ transformOrigin: `${sp.x}px ${sp.y}px` }}
          />
        ))}
      </svg>
    </PillarFrame>
  );
}

export function PillarVisual({ k }: { k: string }) {
  switch (k) {
    case "centralize":
      return <CentralizeViz />;
    case "tempo":
      return <TempoViz />;
    case "profissional":
      return <ProfissionalViz />;
    default:
      return null;
  }
}
