"use client";

import { BlurFade } from "@/components/magic/blur-fade";
import { RevealText } from "@/components/magic/reveal-text";
import { BorderGlow } from "@/components/magic/border-glow";
import { GlassIcon } from "@/components/magic/glass-icon";
import { solution } from "@/lib/site";

export function Solution() {
  return (
    <section id="solucao" className="bg-aurora relative py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <BlurFade>
          <span className="text-sm font-medium uppercase tracking-[0.18em] text-brand-500">
            {solution.eyebrow}
          </span>
        </BlurFade>
        <RevealText
          as="h2"
          per="word"
          preset="blur"
          highlight={["FreelaPilot"]}
          className="mt-4 font-display text-4xl font-normal tracking-tight text-ink sm:text-5xl"
        >
          {solution.title}
        </RevealText>
        <BlurFade delay={0.15}>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted">
            {solution.body}
          </p>
        </BlurFade>

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {solution.pillars.map((p, i) => (
            <BlurFade key={p.title} delay={0.1 * i}>
              <BorderGlow className="h-full rounded-2xl border border-stroke bg-white p-7 text-left shadow-card transition-transform duration-300 hover:-translate-y-1">
                <GlassIcon icon={p.icon} />
                <h3 className="mt-5 font-display text-lg font-normal text-ink">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {p.desc}
                </p>
              </BorderGlow>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
