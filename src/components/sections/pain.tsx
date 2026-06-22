"use client";

import { BlurFade } from "@/components/magic/blur-fade";
import { RevealText } from "@/components/magic/reveal-text";
import { pain } from "@/lib/site";

export function Pain() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <BlurFade>
            <span className="text-sm font-medium uppercase tracking-[0.18em] text-brand-500">
              {pain.eyebrow}
            </span>
          </BlurFade>
          <RevealText
            as="h2"
            per="word"
            preset="blur"
            highlight={["ferramentas", "demais"]}
            className="mt-4 font-display text-4xl font-normal leading-tight tracking-tight text-ink sm:text-5xl"
          >
            {pain.title}
          </RevealText>
          <BlurFade delay={0.15}>
            <p className="mt-4 text-muted">{pain.lead}</p>
          </BlurFade>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pain.items.map((item, i) => (
            <BlurFade key={item.title} delay={0.08 * i}>
              <div className="h-full rounded-2xl glass-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-500">
                  <item.icon size={22} />
                </span>
                <h3 className="mt-5 font-display text-lg font-normal text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.desc}
                </p>
              </div>
            </BlurFade>
          ))}
        </div>

        <BlurFade delay={0.2}>
          <p className="mx-auto mt-12 max-w-xl text-center font-display text-xl font-normal text-ink sm:text-2xl">
            O problema nunca foi você.{" "}
            <span className="grad-text">É a falta de um lugar só.</span>
          </p>
        </BlurFade>
      </div>
    </section>
  );
}
