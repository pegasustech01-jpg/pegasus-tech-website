import { motion } from "framer-motion";
import { Handshake, Network, Sparkles } from "lucide-react";
import aboutOffice from "../assets/about-office.png";
import { aboutHighlights } from "../data";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const icons = {
  spark: Sparkles,
  nodes: Network,
  handshake: Handshake,
};

export function About() {
  const reduced = usePrefersReducedMotion();

  return (
    <section id="about" className="section">
      <div className="container-pg px-5 md:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="eyebrow">About Us</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              About Pegasus Tech
            </h2>
            <p className="mt-3 text-lg text-slate-300">
              Engineering intelligent digital experiences
            </p>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-slate-400">
              Pegasus Tech is a technology-driven company focused on building
              intelligent software, digital products, and innovative technology
              solutions. We partner with ambitious businesses to design and
              develop software that moves forward.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {aboutHighlights.map((item) => {
                const Icon = icons[item.icon];
                return (
                  <div
                    key={item.title}
                    className="flex items-center gap-3 rounded-2xl border border-cyan-400/10 bg-white/[0.03] px-3 py-3"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="text-[13px] font-medium leading-tight text-slate-200">
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={reduced ? false : { opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="absolute -inset-6 rounded-[2rem] bg-cyan-400/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-cyan-300/25 shadow-[0_0_60px_rgba(14,165,233,0.18)]">
              <img
                src={aboutOffice}
                alt="Pegasus Tech workspace with multi-monitor cyan dashboards and pegasus emblem"
                className="aspect-[16/11] w-full object-cover"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-cyan-300/20" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
