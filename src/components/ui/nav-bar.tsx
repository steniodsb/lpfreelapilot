"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

export function NavBar({
  items,
  className,
}: {
  items: NavItem[];
  className?: string;
}) {
  const [activeTab, setActiveTab] = useState(items[0].name);

  useEffect(() => {
    const onResize = () => {};
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-0 left-1/2 z-50 mb-6 -translate-x-1/2 sm:top-0 sm:mb-0 sm:pt-4",
        className,
      )}
    >
      <div className="glass-card flex items-center gap-0.5 rounded-full px-1.5 py-1.5 shadow-card">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;

          return (
            <a
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative inline-flex cursor-pointer items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                "text-body hover:bg-brand-50/70 hover:text-brand-700",
                isActive && "text-brand-700",
              )}
            >
              <Icon size={17} strokeWidth={2.2} className="xl:hidden" />
              <span className="hidden xl:inline">{item.name}</span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 -z-10 w-full rounded-full bg-brand-500/10"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <div className="absolute -top-2 left-1/2 h-1 w-8 -translate-x-1/2 rounded-t-full bg-brand-500">
                    <div className="absolute -left-2 -top-2 h-6 w-12 rounded-full bg-brand-500/20 blur-md" />
                    <div className="absolute -top-1 h-6 w-8 rounded-full bg-brand-500/20 blur-md" />
                    <div className="absolute left-2 top-0 h-4 w-4 rounded-full bg-brand-500/20 blur-sm" />
                  </div>
                </motion.div>
              )}
            </a>
          );
        })}
      </div>
    </div>
  );
}
