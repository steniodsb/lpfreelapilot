"use client";

import { BlurFade } from "@/components/magic/blur-fade";
import { NumberTicker } from "@/components/magic/number-ticker";
import { AnimatedStatIcon } from "@/components/magic/animated-stat-icon";
import { stats } from "@/lib/site";

export function Stats() {
  return (
    <section className="px-6 py-12">
      <BlurFade>
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 rounded-3xl glass-card px-6 py-10 shadow-card backdrop-blur sm:px-10 lg:grid-cols-4">
          {stats.map((s, i) => (
            <BlurFade key={s.label} delay={0.08 * i} className="text-center">
              <AnimatedStatIcon icon={s.icon} delay={0.2 * i} />
              <p className="font-display text-4xl font-normal tracking-tight text-ink sm:text-5xl">
                <span className="grad-text">
                  <NumberTicker
                    value={s.value}
                    prefix={s.prefix ?? ""}
                    suffix={s.suffix ?? ""}
                  />
                </span>
              </p>
              <p className="mt-2 text-sm text-muted">{s.label}</p>
            </BlurFade>
          ))}
        </div>
      </BlurFade>
    </section>
  );
}
