import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { lazy, Suspense } from "react";
import heroPegasus from "../assets/hero-pegasus.png";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { useWebGL } from "../hooks/useWebGL";
import { setPointerFromEvent } from "../lib/pointer";
import { CanvasErrorBoundary } from "./CanvasErrorBoundary";
import { MagneticButton } from "./MagneticButton";

const HeroScene = lazy(() => import("./HeroScene"));

export function Hero() {
  const reduced = usePrefersReducedMotion();
  const webgl = useWebGL();
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const x = useSpring(px, { stiffness: 60, damping: 20 });
  const y = useSpring(py, { stiffness: 60, damping: 20 });

  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden"
      onMouseMove={(e) => {
        setPointerFromEvent(e);
        if (reduced) return;
        px.set((e.clientX / window.innerWidth - 0.5) * 24);
        py.set((e.clientY / window.innerHeight - 0.5) * 16);
      }}
    >
      <div className="absolute inset-0 z-0 bg-[#030711]" />

      <div className="pointer-events-none absolute inset-0 z-[1]">
        <motion.img
          src={heroPegasus}
          alt="Metallic winged Pegasus standing on cosmic rocks with electric cyan circuitry"
          className="absolute right-[-12%] top-0 h-full w-[78%] max-w-none object-cover object-center md:right-[-6%] md:w-[70%] lg:right-[-2%] lg:w-[62%]"
          fetchPriority="high"
          style={reduced ? undefined : { x, y }}
          initial={reduced ? false : { opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.15, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030711] from-10% via-[#030711]/80 to-transparent md:via-[#030711]/55 lg:w-[52%]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#030711] to-transparent" />
        <div className="absolute inset-y-0 right-0 hidden w-[18%] bg-gradient-to-l from-[#030711]/50 to-transparent lg:block" />
      </div>

      {webgl && !reduced && (
        <div className="pointer-events-none absolute inset-0 z-[2]">
          <CanvasErrorBoundary>
            <Suspense fallback={null}>
              <HeroScene />
            </Suspense>
          </CanvasErrorBoundary>
        </div>
      )}

      <div className="glow-orb -left-24 top-24 z-[3] h-80 w-80 bg-cyan-500/15" />
      <div className="glow-orb right-[20%] bottom-10 h-72 w-72 bg-sky-600/10" />

      <div className="relative z-10 container-pg flex min-h-[100svh] flex-col justify-center px-5 pb-16 pt-28 md:px-6">
        <div className="max-w-xl lg:max-w-[540px]">
          <motion.p
            className="eyebrow mb-5"
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Pegasus Tech
          </motion.p>

          <motion.h1
            className="text-[2.35rem] font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.55rem]"
            initial={reduced ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
          >
            We Engineer
            <br />
            Digital Experiences
            <br />
            That{" "}
            <span className="bg-gradient-to-r from-sky-300 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Move Business
            </span>
            <br />
            Forward.
          </motion.h1>

          <motion.p
            className="mt-6 max-w-md text-[15px] leading-relaxed text-slate-300/90 sm:text-base"
            initial={reduced ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34 }}
          >
            We design and build intelligent digital experiences, powerful
            software, and transformative technology solutions for ambitious
            businesses.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-3"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.44 }}
          >
            <MagneticButton href="#contact" className="px-6 py-3">
              Start a Project
              <ArrowRight className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton
              href="#work"
              variant="secondary"
              className="px-6 py-3"
            >
              Explore Our Work
            </MagneticButton>
          </motion.div>
        </div>

        <motion.a
          href="#about"
          className="mt-16 inline-flex w-fit items-center gap-2 text-xs font-medium tracking-wide text-slate-400 hover:text-cyan-300"
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <span className="grid h-7 w-7 place-items-center rounded-full border border-white/15">
            <ChevronDown className="h-3.5 w-3.5 animate-bounce" />
          </span>
          Scroll Down
        </motion.a>
      </div>
    </section>
  );
}
