"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Card com borda que brilha seguindo o mouse (inspirado no BorderGlow do
 * React Bits), na nossa paleta violeta. O efeito está em globals.css (.border-glow).
 */
export function BorderGlow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--gx", `${e.clientX - r.left}px`);
    el.style.setProperty("--gy", `${e.clientY - r.top}px`);
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={cn("glow-frame relative", className)}
    >
      {children}
    </div>
  );
}
