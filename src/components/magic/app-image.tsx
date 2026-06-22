"use client";

import { useState } from "react";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function AppImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [ok, setOk] = useState(true);

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-gradient-to-br from-brand-50 to-brand-100",
        className,
      )}
    >
      {ok ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          onError={() => setOk(false)}
          className="h-full w-full object-cover object-left-top"
        />
      ) : (
        <div className="grid h-full w-full place-items-center text-brand-400">
          <div className="flex flex-col items-center gap-2 px-4 text-center">
            <ImageIcon size={26} />
            <span className="text-xs font-medium">{alt}</span>
            <span className="text-[10px] text-brand-300">
              {src.replace("/app/", "/public/app/")}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
