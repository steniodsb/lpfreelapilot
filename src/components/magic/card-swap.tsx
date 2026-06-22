"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { AppImage } from "./app-image";

type Card = { img: string; alt: string };

/**
 * Stack de cards 3D que se alternam (inspirado no CardSwap do React Bits),
 * adaptado à nossa paleta e ao motion. O card da frente vai para o fundo
 * a cada `interval`.
 */
export function CardSwap({
  cards,
  interval = 2800,
}: {
  cards: Card[];
  interval?: number;
}) {
  const [order, setOrder] = useState(() => cards.map((_, i) => i));

  useEffect(() => {
    const t = setInterval(
      () => setOrder((o) => [...o.slice(1), o[0]]),
      interval,
    );
    return () => clearInterval(t);
  }, [interval]);

  const offX = 36;
  const offY = 28;
  const w = 420;
  const h = 268;
  const depth = cards.length - 1;

  return (
    <div
      className="relative origin-center scale-[0.7] sm:scale-90 lg:scale-100"
      style={{ width: w + depth * offX, height: h + depth * offY }}
    >
      {cards.map((card, idx) => {
        const slot = order.indexOf(idx); // 0 = frente
        return (
          <motion.div
            key={idx}
            className="absolute bottom-0 left-0 overflow-hidden rounded-2xl glass-card p-1.5 shadow-float"
            style={{
              width: w,
              height: h,
              zIndex: cards.length - slot,
              transformOrigin: "bottom left",
            }}
            animate={{
              x: slot * offX,
              y: -slot * offY,
              scale: 1 - slot * 0.05,
              rotate: slot * 1.5,
            }}
            transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
          >
            {/* glow sob o card */}
            <div className="pointer-events-none absolute -inset-x-6 -bottom-6 h-16 rounded-full bg-brand-500/30 blur-2xl" />
            <AppImage
              src={card.img}
              alt={card.alt}
              className="relative h-full w-full rounded-xl border border-stroke"
            />
            <span className="absolute left-3 top-3 rounded-full bg-white/85 px-2.5 py-1 text-[11px] font-medium text-brand-700 backdrop-blur">
              {card.alt}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}
