import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../utils/cn";

type GlowCardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function GlowCard({ children, className, onMouseMove, ...props }: GlowCardProps) {
  return (
    <div
      className={cn("card", className)}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
        e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
        onMouseMove?.(e);
      }}
      {...props}
    >
      <div className="relative z-[1] h-full">{children}</div>
    </div>
  );
}
