"use client";

import { Marquee } from "@/components/magic/marquee";
import { marqueeFeatures } from "@/lib/site";

export function Logos() {
  return (
    <section className="glass-strip relative py-8">
      <div className="relative [mask-image:linear-gradient(to_right,transparent,#000_6%,#000_94%,transparent)]">
        <Marquee pauseOnHover className="[--gap:1.5rem]">
          {marqueeFeatures.map((f) => (
            <div
              key={f.label}
              className="flex items-center gap-3 rounded-full glass-card py-2.5 pl-2.5 pr-6 shadow-sm transition-transform duration-300 hover:-translate-y-0.5"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-primary text-white shadow-[0_5px_14px_rgba(112,71,152,0.4)]">
                <f.icon size={19} />
              </span>
              <span className="whitespace-nowrap font-display text-[15px] font-medium text-ink">
                {f.label}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
