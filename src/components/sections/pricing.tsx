"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { motion } from "motion/react";
import { BlurFade } from "@/components/magic/blur-fade";
import { RevealText } from "@/components/magic/reveal-text";
import { Button } from "@/components/ui/button";
import { plans } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="precos" className="relative py-20 sm:py-28">
      <div className="bg-aurora pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <BlurFade>
            <span className="text-sm font-medium uppercase tracking-[0.18em] text-brand-500">
              Planos
            </span>
          </BlurFade>
          <RevealText
            as="h2"
            per="word"
            preset="blur"
            highlight={["negócio"]}
            className="mt-4 font-display text-4xl font-normal tracking-tight text-ink sm:text-5xl"
          >
            Encontre o plano para o seu negócio
          </RevealText>
          <BlurFade delay={0.15}>
            <p className="mt-4 text-muted">
              Comece de graça. Faça upgrade quando o negócio crescer. Sem
              fidelidade.
            </p>
          </BlurFade>

          <BlurFade delay={0.2}>
            <div className="mt-7 inline-flex items-center gap-1 rounded-full glass-card p-1 shadow-card">
              <button
                onClick={() => setYearly(false)}
                className={cn(
                  "relative rounded-full px-5 py-2 text-sm font-medium transition-colors",
                  !yearly ? "text-white" : "text-muted hover:text-ink",
                )}
              >
                {!yearly && (
                  <motion.span
                    layoutId="billing-pill"
                    className="absolute inset-0 rounded-full bg-gradient-primary"
                  />
                )}
                <span className="relative">Mensal</span>
              </button>
              <button
                onClick={() => setYearly(true)}
                className={cn(
                  "relative rounded-full px-5 py-2 text-sm font-medium transition-colors",
                  yearly ? "text-white" : "text-muted hover:text-ink",
                )}
              >
                {yearly && (
                  <motion.span
                    layoutId="billing-pill"
                    className="absolute inset-0 rounded-full bg-gradient-primary"
                  />
                )}
                <span className="relative">
                  Anual
                  <span
                    className={cn(
                      "ml-1.5 rounded-full px-1.5 py-0.5 text-[10px] font-semibold",
                      yearly ? "bg-white/25" : "bg-brand-50 text-brand-600",
                    )}
                  >
                    -2 meses
                  </span>
                </span>
              </button>
            </div>
          </BlurFade>
        </div>

        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <BlurFade key={plan.name} delay={0.1 + i * 0.1}>
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-1",
                  plan.highlight
                    ? "bg-gradient-primary text-white shadow-cta lg:scale-[1.04]"
                    : "glass-card text-ink shadow-card",
                )}
              >
                {plan.highlight && (
                  <span className="absolute right-6 top-6 rounded-full bg-white/20 px-3 py-1 text-xs font-medium backdrop-blur">
                    Mais popular
                  </span>
                )}

                <h3 className="font-display text-lg font-normal">{plan.name}</h3>
                <p
                  className={cn(
                    "mt-1 text-sm",
                    plan.highlight ? "text-white/80" : "text-muted",
                  )}
                >
                  {plan.desc}
                </p>

                <div className="mt-5 flex items-end gap-1">
                  <span className="font-display text-5xl font-normal">
                    {yearly ? plan.priceYearly : plan.priceMonthly}
                  </span>
                  <span
                    className={cn(
                      "mb-1.5 text-sm",
                      plan.highlight ? "text-white/70" : "text-muted",
                    )}
                  >
                    /mês
                  </span>
                </div>
                {yearly && plan.priceMonthly !== "R$0" && (
                  <p
                    className={cn(
                      "mt-1 text-xs",
                      plan.highlight ? "text-white/70" : "text-muted",
                    )}
                  >
                    cobrado anualmente
                  </p>
                )}

                <ul className="mt-7 flex-1 space-y-3.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm">
                      <span
                        className={cn(
                          "grid h-5 w-5 shrink-0 place-items-center rounded-full",
                          plan.highlight
                            ? "bg-white/20 text-white"
                            : "bg-brand-50 text-brand-600",
                        )}
                      >
                        <Check size={12} strokeWidth={3} />
                      </span>
                      <span className={plan.highlight ? "text-white/90" : "text-body"}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button
                    variant={plan.highlight ? "white" : "primary"}
                    size="lg"
                    className="group w-full"
                  >
                    {plan.cta}
                  </Button>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
