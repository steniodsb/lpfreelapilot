"use client";

import { useRef } from "react";
import { useInView, type UseInViewOptions } from "motion/react";
import { TextEffect } from "./text-effect";

type Props = React.ComponentProps<typeof TextEffect> & {
  margin?: UseInViewOptions["margin"];
};

/**
 * TextEffect disparado quando entra na viewport (scroll-triggered).
 * Reserva altura para evitar pulo de layout enquanto o texto não apareceu.
 */
export function RevealText({ margin = "-80px", className, ...props }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin });

  return (
    <span ref={ref} className="block min-h-[1.1em]">
      <TextEffect {...props} trigger={inView} className={className} />
    </span>
  );
}
