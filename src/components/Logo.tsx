import logoMark from "../assets/logo-mark.png";
import { cn } from "../utils/cn";

type LogoProps = {
  className?: string;
  markClassName?: string;
  showWordmark?: boolean;
};

export function Logo({
  className,
  markClassName,
  showWordmark = false,
}: LogoProps) {
  return (
    <a
      href="#home"
      className={cn("group flex items-center gap-2.5", className)}
      aria-label="Pegasus Tech home"
    >
      <span className="relative grid h-11 w-11 shrink-0 place-items-center">
        <span className="absolute inset-0 rounded-full bg-cyan-400/20 blur-md opacity-70 group-hover:opacity-100 transition-opacity" />
        <img
          src={logoMark}
          alt="Pegasus Tech logo"
          className={cn(
            "relative h-11 w-11 object-contain mix-blend-screen drop-shadow-[0_0_12px_rgba(34,211,238,0.45)]",
            markClassName,
          )}
        />
      </span>
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span className="text-[15px] font-semibold tracking-[0.2em] text-white">
            PEGASUS
          </span>
          <span className="mt-0.5 text-[10px] font-medium tracking-[0.38em] text-sky-300/90">
            TECH
          </span>
        </span>
      )}
    </a>
  );
}
