import { motion } from "framer-motion";
import {
  Brain,
  Code2,
  PenTool,
  Settings2,
  ShoppingCart,
  TrendingUp,
} from "lucide-react";
import { services } from "../data";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { GlowCard } from "./GlowCard";

const iconMap = {
  code: Code2,
  cog: Settings2,
  brain: Brain,
  cart: ShoppingCart,
  pen: PenTool,
  chart: TrendingUp,
};

export function Services() {
  const reduced = usePrefersReducedMotion();

  return (
    <section id="services" className="section pt-4">
      <div className="container-pg px-5 md:px-6">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow">Our Services</p>
            <h2 className="mt-3 max-w-md text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Digital Solutions for Modern Businesses
            </h2>
          </motion.div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={reduced ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <GlowCard className="h-full min-h-[220px] p-6">
                  <span className="icon-tile mb-5">
                    <Icon className="h-4.5 w-4.5" strokeWidth={1.8} />
                  </span>
                  <h3 className="text-lg font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {service.description}
                  </p>
                </GlowCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
