import { motion } from "framer-motion";
import {
  Activity,
  Code2,
  Map,
  PenTool,
  Rocket,
  Search,
} from "lucide-react";
import heroPegasus from "../assets/hero-pegasus.png";
import { processSteps } from "../data";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const iconMap = {
  search: Search,
  map: Map,
  pen: PenTool,
  code: Code2,
  rocket: Rocket,
  activity: Activity,
};

export function Process() {
  const reduced = usePrefersReducedMotion();

  return (
    <section id="process" className="section relative overflow-hidden pt-4">
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[48%] opacity-40">
        <img
          src={heroPegasus}
          alt=""
          className="h-full w-full object-cover object-left"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030711] via-[#030711]/80 to-[#030711]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030711] via-transparent to-[#030711]/70" />
      </div>

      <div className="container-pg relative px-5 md:px-6">
        <motion.div
          className="max-w-xl"
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow">Our Process</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            From Idea to Impact
          </h2>
          <p className="mt-3 text-slate-400">
            A streamlined process to turn your vision into reality.
          </p>
        </motion.div>

        <div className="relative mt-12 max-w-2xl">
          <div className="absolute bottom-6 left-[19px] top-6 w-px bg-gradient-to-b from-cyan-400/70 via-cyan-400/25 to-transparent" />
          <ol className="space-y-7">
            {processSteps.map((step, i) => {
              const Icon = iconMap[step.icon];
              return (
                <motion.li
                  key={step.num}
                  className="relative flex gap-5"
                  initial={reduced ? false : { opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                >
                  <div className="relative z-[1] flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cyan-400/40 bg-[#07111f] text-[11px] font-semibold text-cyan-300 shadow-[0_0_16px_rgba(34,211,238,0.25)]">
                    {step.num}
                  </div>
                  <div className="flex flex-1 items-start gap-4 rounded-2xl border border-cyan-400/10 bg-white/[0.03] px-4 py-3.5">
                    <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-cyan-400/15 bg-cyan-400/10 text-cyan-300">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div>
                      <h3 className="font-semibold text-white">{step.title}</h3>
                      <p className="mt-1 text-sm text-slate-400">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
