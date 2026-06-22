"use client";

import { Marquee } from "@/components/magic/marquee";
import { marqueeFeatures } from "@/lib/site";

export function Logos() {
  return (
    <section className="glass-strip relative py-6">
      <div className="relative [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
        <Marquee pauseOnHover className="[--gap:3.5rem]">
          {marqueeFeatures.map((f) => (
            <div key={f.label} className="flex items-center gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/70 bg-white/50 text-brand-600 shadow-sm backdrop-blur-md">
                <f.icon size={20} />
              </span>
              <span className="whitespace-nowrap font-display text-base font-medium text-ink">
                {f.label}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
