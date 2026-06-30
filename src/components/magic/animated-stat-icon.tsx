"use client";

import type { LucideIcon } from "lucide-react";
import { motion } from "motion/react";

/**
 * Ícone "futurista" animado para a seção de Números: tile de vidro com gradiente
 * da marca, flutuação suave, glow pulsante e anéis de pulso que se expandem —
 * tudo na paleta violeta do FreelaPilot.
 */
export function AnimatedStatIcon({
  icon: Icon,
  delay = 0,
}: {
  icon: LucideIcon;
  delay?: number;
}) {
  return (
    <div className="relative mx-auto mb-3 grid size-14 place-items-center">
      {/* glow difuso atrás */}
      <motion.span
        aria-hidden
        className="absolute size-12 rounded-full bg-brand-400 blur-xl"
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [0.9, 1.1, 0.9] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay }}
      />

      {/* anéis de pulso */}
      {[0, 1].map((i) => (
        <motion.span
          key={i}
          aria-hidden
          className="absolute inset-0 rounded-2xl border border-brand-300"
          initial={{ opacity: 0.55, scale: 1 }}
          animate={{ opacity: 0, scale: 1.7 }}
          transition={{
            duration: 2.6,
            repeat: Infinity,
            ease: "easeOut",
            delay: delay + i * 1.3,
          }}
        />
      ))}

      {/* tile de vidro com gradiente */}
      <motion.span
        className="relative grid size-12 place-items-center rounded-2xl bg-gradient-primary text-white shadow-[0_8px_22px_rgba(108,70,200,0.4)] ring-1 ring-white/40"
        animate={{ y: [0, -4, 0] }}
        transition={{
          duration: 3.6,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        }}
      >
        <Icon size={22} strokeWidth={2} />
        {/* brilho que percorre */}
        <motion.span
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl"
        >
          <motion.span
            className="absolute -inset-y-2 w-1/3 -skew-x-12 bg-white/25 blur-[2px]"
            initial={{ x: "-150%" }}
            animate={{ x: "350%" }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              repeatDelay: 2.4,
              ease: "easeInOut",
              delay,
            }}
          />
        </motion.span>
      </motion.span>
    </div>
  );
}
