"use client";

import { BlurFade } from "@/components/magic/blur-fade";
import { Marquee } from "@/components/magic/marquee";
import { trustLogos } from "@/lib/site";

export function Logos() {
  return (
    <section className="border-y border-stroke bg-white/50 py-10">
      <div className="mx-auto max-w-5xl px-6">
        <BlurFade>
          <p className="text-center text-sm text-muted">
            Usado por freelancers que trabalham com as melhores ferramentas
          </p>
        </BlurFade>
      </div>
      <div className="relative mt-7 [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
        <Marquee pauseOnHover className="[--gap:4rem]">
          {trustLogos.map((name) => (
            <span
              key={name}
              className="font-display text-2xl font-normal text-muted/50 transition-colors hover:text-brand-500"
            >
              {name}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
