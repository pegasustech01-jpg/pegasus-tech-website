import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import projectObsidian from "../assets/project-obsidian.png";
import projectPropx from "../assets/project-propx.png";
import projectSarvacart from "../assets/project-sarvacart.png";
import projectShiftdraw from "../assets/project-shiftdraw.png";
import { projects } from "../data";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { GlowCard } from "./GlowCard";

const images = {
  shiftdraw: projectShiftdraw,
  propx: projectPropx,
  sarvacart: projectSarvacart,
  obsidian: projectObsidian,
};

export function Work() {
  const reduced = usePrefersReducedMotion();

  return (
    <section id="work" className="section pt-4">
      <div className="container-pg px-5 md:px-6">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow">Our Work</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Featured Projects
            </h2>
            <p className="mt-2 text-slate-400">
              Ideas into powerful digital products.
            </p>
          </motion.div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={reduced ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
            >
              <GlowCard className="group h-full">
                <div className="relative overflow-hidden rounded-t-[1.05rem]">
                  <img
                    src={images[project.image as keyof typeof images]}
                    alt={`${project.title} product interface`}
                    className="aspect-[16/9] w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030711]/70 via-transparent to-transparent" />
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-black/30 text-white opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100"
                      aria-label={`View ${project.title}`}
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-slate-400">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
