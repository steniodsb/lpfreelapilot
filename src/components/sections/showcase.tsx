"use client";

import { ArrowRight } from "lucide-react";
import { BlurFade } from "@/components/magic/blur-fade";
import { RevealText } from "@/components/magic/reveal-text";
import { Button } from "@/components/ui/button";
import { CardSwap } from "@/components/magic/card-swap";
import { showcase } from "@/lib/site";

export function Showcase() {
  return (
    <section className="bg-aurora relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute -right-20 top-10 h-80 w-80 rounded-full bg-brand-400/15 blur-[120px]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
        <div>
          <BlurFade>
            <span className="text-sm font-medium uppercase tracking-[0.18em] text-brand-500">
              {showcase.eyebrow}
            </span>
          </BlurFade>
          <RevealText
            as="h2"
            per="word"
            preset="blur"
            className="mt-4 font-display text-3xl font-normal leading-tight tracking-tight text-ink sm:text-4xl"
          >
            {showcase.title}
          </RevealText>
          <BlurFade delay={0.15}>
            <p className="mt-4 max-w-md text-lg text-muted">{showcase.desc}</p>
          </BlurFade>
          <BlurFade delay={0.25}>
            <div className="mt-8">
              <a href="#precos">
                <Button variant="primary" size="lg" className="group">
                  {showcase.cta}
                  <ArrowRight size={18} />
                </Button>
              </a>
            </div>
          </BlurFade>
        </div>

        <BlurFade delay={0.2} className="flex justify-center lg:justify-end">
          <CardSwap cards={showcase.cards} />
        </BlurFade>
      </div>
    </section>
  );
}
