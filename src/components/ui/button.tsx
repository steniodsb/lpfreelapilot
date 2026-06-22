import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 disabled:pointer-events-none disabled:opacity-50 overflow-hidden",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-primary text-white shadow-[0_8px_24px_rgba(124,92,255,0.35)] hover:-translate-y-0.5 hover:shadow-[0_14px_38px_rgba(124,92,255,0.5)]",
        secondary:
          "bg-surface text-ink border border-stroke hover:border-brand-300 hover:-translate-y-0.5",
        ghost: "text-body hover:text-ink hover:bg-brand-50",
        white:
          "bg-white text-brand-700 hover:-translate-y-0.5 hover:shadow-lg",
      },
      size: {
        sm: "h-9 px-4",
        md: "h-11 px-6",
        lg: "h-13 px-8 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        <span className="relative z-10 inline-flex items-center gap-2">
          {children}
        </span>
        {variant === "primary" && (
          <span className="pointer-events-none absolute inset-0 -translate-x-[120%] bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />
        )}
      </button>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
