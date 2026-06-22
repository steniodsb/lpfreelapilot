"use client";

import { Check } from "lucide-react";
import { BlurFade } from "@/components/magic/blur-fade";
import { RevealText } from "@/components/magic/reveal-text";
import { AppImage } from "@/components/magic/app-image";
import { deepDives } from "@/lib/site";
import { cn } from "@/lib/utils";

export function FeatureDeep() {
  return (
    <div className="relative">
      {deepDives.map((d) => (
        <section key={d.key} className="py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-2 lg:gap-16">
            {/* texto */}
            <div className={cn(d.reverse && "lg:order-2")}>
              <BlurFade>
                <span className="inline-flex items-center gap-2 rounded-full border border-stroke bg-white px-3 py-1 text-xs font-medium text-brand-600 shadow-card">
                  <d.icon size={14} />
                  {d.eyebrow}
                </span>
              </BlurFade>
              <RevealText
                as="h2"
                per="word"
                preset="blur"
                highlight={d.highlight}
                className="mt-5 font-display text-3xl font-normal leading-tight tracking-tight text-ink sm:text-4xl"
              >
                {d.title}
              </RevealText>
              <BlurFade delay={0.12}>
                <p className="mt-4 text-lg text-muted">{d.desc}</p>
              </BlurFade>
              <ul className="mt-7 space-y-3">
                {d.checklist.map((item, i) => (
                  <BlurFade key={item} delay={0.1 + i * 0.06}>
                    <li className="flex items-center gap-3">
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600">
                        <Check size={13} strokeWidth={3} />
                      </span>
                      <span className="text-body">{item}</span>
                    </li>
                  </BlurFade>
                ))}
              </ul>
            </div>

            {/* imagem grande */}
            <BlurFade delay={0.15} yOffset={40} className={cn(d.reverse && "lg:order-1")}>
              <div className="relative rounded-2xl border border-stroke bg-white p-2 shadow-float">
                <div
                  className={cn(
                    "pointer-events-none absolute -inset-x-8 -bottom-8 h-32 rounded-full blur-3xl",
                    d.reverse ? "bg-brand-400/20" : "bg-brand-500/20",
                  )}
                />
                <AppImage
                  src={d.img}
                  alt={d.eyebrow}
                  className="relative aspect-[16/11] rounded-xl border border-stroke"
                />
              </div>
            </BlurFade>
          </div>
        </section>
      ))}
    </div>
  );
}
