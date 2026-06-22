import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Ícone glassmorphism (inspirado no GlassIcons do React Bits), na nossa
 * paleta violeta. Camada de fundo gradiente + frente de vidro fosco que
 * inclina no hover revelando o brilho.
 */
export function GlassIcon({
  icon: Icon,
  size = 52,
  iconSize = 22,
  className,
}: {
  icon: LucideIcon;
  size?: number;
  iconSize?: number;
  className?: string;
}) {
  return (
    <span
      className={cn("glass-icon", className)}
      style={{ width: size, height: size }}
    >
      <span className="glass-icon__back" />
      <span className="glass-icon__front">
        <Icon size={iconSize} />
      </span>
    </span>
  );
}
