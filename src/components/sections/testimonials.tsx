"use client";

import { BlurFade } from "@/components/magic/blur-fade";
import { RevealText } from "@/components/magic/reveal-text";
import { TestimonialsColumn } from "@/components/magic/testimonials-column";
import { testimonials } from "@/lib/site";

const firstColumn = testimonials.slice(0, 2);
const secondColumn = testimonials.slice(2, 4);
const thirdColumn = testimonials.slice(4, 6);

export function Testimonials() {
  return (
    <section id="depoimentos" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <BlurFade>
          <span className="text-sm font-medium uppercase tracking-[0.18em] text-brand-500">
            Depoimentos
          </span>
        </BlurFade>
        <RevealText
          as="h2"
          per="word"
          preset="blur"
          className="mt-4 font-display text-3xl font-normal tracking-tight text-ink sm:text-4xl"
        >
          O que dizem os freelancers
        </RevealText>
        <BlurFade delay={0.15}>
          <p className="mt-4 text-muted">
            Milhares de freelancers já organizaram o negócio com o FreelaPilot.
          </p>
        </BlurFade>
      </div>

      <div className="mx-auto mt-12 flex max-h-[700px] justify-center gap-6 overflow-hidden px-6 [mask-image:linear-gradient(to_bottom,transparent,#000_15%,#000_85%,transparent)]">
        <TestimonialsColumn testimonials={firstColumn} duration={15} />
        <TestimonialsColumn
          testimonials={secondColumn}
          duration={19}
          className="hidden md:block"
        />
        <TestimonialsColumn
          testimonials={thirdColumn}
          duration={17}
          className="hidden lg:block"
        />
      </div>
    </section>
  );
}
