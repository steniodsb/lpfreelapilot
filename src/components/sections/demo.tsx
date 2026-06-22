"use client";

import { Play } from "lucide-react";
import { motion } from "motion/react";
import { BlurFade } from "@/components/magic/blur-fade";
import { RevealText } from "@/components/magic/reveal-text";
import { Button } from "@/components/ui/button";
import { AppImage } from "@/components/magic/app-image";
import { demo } from "@/lib/site";

export function Demo() {
  return (
    <section id="demo" className="bg-aurora relative py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <BlurFade>
          <span className="text-sm font-medium uppercase tracking-[0.18em] text-brand-500">
            {demo.eyebrow}
          </span>
        </BlurFade>
        <RevealText
          as="h2"
          per="word"
          preset="blur"
          highlight={["FreelaPilot"]}
          className="mt-4 font-display text-3xl font-normal tracking-tight text-ink sm:text-4xl"
        >
          {demo.title}
        </RevealText>
        <BlurFade delay={0.15}>
          <p className="mx-auto mt-4 max-w-xl text-muted">{demo.desc}</p>
        </BlurFade>

        <BlurFade delay={0.25} yOffset={40}>
          <div className="group relative mt-12 overflow-hidden rounded-2xl glass-card p-2 shadow-float">
            <div className="pointer-events-none absolute -inset-x-10 -bottom-10 h-40 rounded-full bg-brand-500/20 blur-3xl" />
            <AppImage
              src={demo.img}
              alt="Demonstração do FreelaPilot"
              className="relative aspect-video rounded-xl border border-stroke"
            />
            {/* botão play */}
            <button className="absolute inset-0 z-10 grid place-items-center" aria-label="Reproduzir demonstração">
              <motion.span
                whileHover={{ scale: 1.08 }}
                className="grid h-20 w-20 place-items-center rounded-full bg-gradient-primary text-white shadow-cta"
              >
                <span className="absolute h-20 w-20 animate-ping rounded-full bg-brand-500/40" />
                <Play size={28} className="relative ml-1 fill-current" />
              </motion.span>
            </button>
          </div>
        </BlurFade>

        <BlurFade delay={0.35}>
          <div className="mt-8">
            <a href="#precos">
              <Button variant="secondary" size="lg">
                Agendar demonstração
              </Button>
            </a>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
