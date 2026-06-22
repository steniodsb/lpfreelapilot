"use client";

import { ArrowRight } from "lucide-react";
import { BlurFade } from "@/components/magic/blur-fade";
import { RevealText } from "@/components/magic/reveal-text";
import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section className="px-6 pb-20 sm:pb-28">
      <BlurFade>
        <div className="bg-aurora relative mx-auto max-w-4xl overflow-hidden rounded-[1.75rem] border border-stroke bg-white px-8 py-14 text-center shadow-card sm:px-16">
          <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_60%_at_50%_0%,#000,transparent)]" />
          <div className="relative">
            <RevealText
              as="h2"
              per="word"
              preset="blur"
              highlight={["decolar"]}
              className="font-display text-3xl font-normal tracking-tight text-ink sm:text-4xl"
            >
              Pronto para decolar?
            </RevealText>
            <BlurFade delay={0.15}>
              <p className="mx-auto mt-4 max-w-md text-muted">
                Junte-se a milhares de freelancers que já transformaram sua
                gestão. Crie sua conta grátis em menos de 1 minuto.
              </p>
            </BlurFade>
            <BlurFade delay={0.25}>
              <div className="mt-8">
                <a href="#precos">
                  <Button variant="primary" size="lg" className="group">
                    Criar conta grátis
                    <ArrowRight size={18} />
                  </Button>
                </a>
              </div>
              <p className="mt-4 text-xs text-muted">
                Sem cartão de crédito · Cancele quando quiser
              </p>
            </BlurFade>
          </div>
        </div>
      </BlurFade>
    </section>
  );
}
