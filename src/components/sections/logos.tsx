"use client";

import { Marquee } from "@/components/magic/marquee";
import { marqueeFeatures } from "@/lib/site";

export function Logos() {
  return (
    <section className="border-y border-stroke bg-white/60 py-6">
      <div className="relative [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
        <Marquee pauseOnHover className="[--gap:3.5rem]">
          {marqueeFeatures.map((f) => (
            <div key={f.label} className="flex items-center gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-stroke bg-brand-50 text-brand-600 shadow-sm">
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
