"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { NavBar } from "@/components/ui/nav-bar";
import { nav, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.21, 0.7, 0.2, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-300",
          scrolled
            ? "border-b border-stroke bg-white/70 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
          <a href="#" className="flex items-center" aria-label={siteConfig.name}>
            <Image
              src="/logo.png"
              alt={siteConfig.name}
              width={150}
              height={28}
              priority
              className="h-7 w-auto"
            />
          </a>

          <div className="flex items-center gap-2">
            <a href={siteConfig.login.href} className="hidden sm:block">
              <Button variant="ghost" size="sm">
                {siteConfig.login.label}
              </Button>
            </a>
            <a href={siteConfig.cta.href}>
              <Button variant="primary" size="sm" className="group">
                {siteConfig.cta.label}
                <ArrowRight size={15} />
              </Button>
            </a>
          </div>
        </div>
      </motion.header>

      <NavBar items={nav} />
    </>
  );
}
