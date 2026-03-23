"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";

const icons: Record<string, React.ReactNode> = {
  diamond: (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75L12 3l8.25 3.75M3.75 6.75v10.5L12 21l8.25-3.75V6.75M3.75 6.75L12 10.5l8.25-3.75"
      />
    </svg>
  ),
  zap: (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
      />
    </svg>
  ),
  layers: (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0L12 17.25 6.429 14.25m11.142 0l4.179 2.25L12 21.75l-9.75-5.25 4.179-2.25"
      />
    </svg>
  ),
  tv: (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z"
      />
    </svg>
  ),
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute -bottom-16 -left-10 w-[250px] h-[250px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.06),transparent_70%)]" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="text-[#818cf8] text-xs tracking-[3px] font-medium mb-2">
            WORK
          </div>
          <h2 className="text-3xl font-bold text-[#f1f5f9]">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group bg-white/[0.03] border border-white/[0.06] rounded-xl p-6 relative overflow-hidden hover:border-white/[0.12] hover:-translate-y-1 transition-all duration-300"
            >
              {/* Corner gradient */}
              <div className="absolute -top-5 -right-5 w-20 h-20 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.08),transparent)] group-hover:bg-[radial-gradient(circle,rgba(99,102,241,0.15),transparent)] transition-all duration-300" />

              <div className="relative">
                <div className="text-[#818cf8] mb-4">
                  {icons[project.icon]}
                </div>

                <h3 className="text-[#f1f5f9] text-base font-bold mb-2">
                  {project.title}
                </h3>

                <p className="text-[#94a3b8] text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[#64748b] text-xs bg-white/[0.04] px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
