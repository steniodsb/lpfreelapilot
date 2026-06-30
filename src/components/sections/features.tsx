"use client";

import { ArrowRight } from "lucide-react";
import { BlurFade } from "@/components/magic/blur-fade";
import { RevealText } from "@/components/magic/reveal-text";
import { FeatureVisual } from "@/components/magic/feature-visuals";
import { GlassIcon } from "@/components/magic/glass-icon";
import { features, featuresHighlight } from "@/lib/site";

export function Features() {
  return (
    <section id="funcionalidades" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <BlurFade>
            <span className="text-sm font-medium uppercase tracking-[0.18em] text-brand-500">
              Funcionalidades
            </span>
          </BlurFade>
          <RevealText
            as="h2"
            per="word"
            preset="blur"
            highlight={["verdade"]}
            className="mt-4 font-display text-4xl font-normal tracking-tight text-ink sm:text-5xl"
          >
            Tudo num só lugar, de verdade
          </RevealText>
          <BlurFade delay={0.15}>
            <p className="mt-4 text-muted">
              Os módulos que você usa todo dia para gerenciar seu negócio.
            </p>
          </BlurFade>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <BlurFade key={f.key} delay={0.06 * i} className={f.span}>
              <div className="group h-full overflow-hidden rounded-3xl glass-card p-4 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-200">
                <div className="aspect-[16/9] w-full">
                  <FeatureVisual k={f.key} />
                </div>
                <div className="px-2 pb-1 pt-5">
                  <div className="flex items-center gap-3">
                    <GlassIcon icon={f.icon} size={40} iconSize={18} />
                    <h3 className="font-display text-lg font-normal text-ink">
                      {f.title}
                    </h3>
                  </div>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">
                    {f.desc}
                  </p>
                </div>
              </div>
            </BlurFade>
          ))}

          {/* banner destaque full-width */}
          <BlurFade delay={0.3} className="sm:col-span-2 lg:col-span-3">
            <div className="group relative flex flex-col items-start justify-between gap-5 overflow-hidden rounded-3xl bg-gradient-primary p-7 shadow-cta sm:flex-row sm:items-center">
              <div className="bg-grid absolute inset-0 opacity-20" />
              <div className="relative">
                <h3 className="font-display text-xl font-normal text-white sm:text-2xl">
                  {featuresHighlight.title}
                </h3>
                <p className="mt-2 max-w-xl text-sm text-white/85">
                  {featuresHighlight.desc}
                </p>
              </div>
              <a
                href="#precos"
                className="relative inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-brand-700 transition-transform hover:-translate-y-0.5"
              >
                {featuresHighlight.cta}
                <ArrowRight size={16} />
              </a>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
