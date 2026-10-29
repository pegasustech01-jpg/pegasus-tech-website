import { motion } from "framer-motion";
import { technologyCategories } from "../data";
import techCubes from "../assets/tech-cubes.png";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { cn } from "../utils/cn";
import { techIconMap } from "./TechIcons";

export function TechStack() {
  const reduced = usePrefersReducedMotion();

  return (
    <section id="tech" className="section tech-section relative overflow-hidden">
      <div
        className="tech-section__art"
        style={{ backgroundImage: `url("${techCubes}")` }}
        aria-hidden="true"
      />
      <div className="tech-section__scrim" aria-hidden="true" />
      <div className="container-pg tech-section__content relative z-10 px-5 md:px-6">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow">Our Tech Stack</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Technologies
          </h2>
          <p className="mt-2 max-w-md text-slate-400">
            A curated set of modern tools we use to build secure, scalable
            digital experiences.
          </p>
        </motion.div>

        <div className="tech-section__grid mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {technologyCategories.map((category, ci) => {
            return (
              <motion.div
                key={category.id}
                initial={reduced ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: ci * 0.05 }}
                className={cn(
                  "tech-category group rounded-[16px] border p-4 sm:p-[17px]",
                  "transition-all duration-300 hover:-translate-y-1",
                )}
              >
                <div className="mb-2.5 flex items-center">
                  <span className="tech-category__label inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    {category.title}
                  </span>
                </div>

                <div
                  className={cn(
                    "grid gap-1.5",
                    category.id === "creative-motion"
                      ? "grid-cols-2"
                      : "grid-cols-2 sm:grid-cols-3",
                  )}
                >
                  {category.technologies.map((tech, ti) => {
                    const Icon = techIconMap[tech.id];
                    return (
                      <motion.div
                        key={tech.id}
                        initial={reduced ? false : { opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: ti * 0.02 }}
                        className="tech-tile flex min-h-[68px] flex-col items-center justify-center gap-1 rounded-[12px] border px-2 py-1 transition-all duration-200 hover:-translate-y-0.5"
                      >
                        <span
                          aria-hidden="true"
                          className="tech-tile__icon grid h-8 w-8 place-items-center rounded-[9px]"
                        >
                          <Icon className="h-[21px] w-[21px]" />
                        </span>
                        <span className="text-center text-[10px] font-medium leading-tight text-slate-300">
                          {tech.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
