"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute top-1/2 -right-20 w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.06),transparent_70%)]" />

      <div className="max-w-4xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="text-[#818cf8] text-xs tracking-[3px] font-medium mb-2">
            CAREER
          </div>
          <h2 className="text-3xl font-bold text-[#f1f5f9]">
            Work Experience
          </h2>
        </motion.div>

        <div className="relative pl-8">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-[#6366f1] to-[rgba(99,102,241,0.1)] rounded-full" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className={`relative ${
                i < experiences.length - 1 ? "mb-8" : ""
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute -left-[25px] top-6 w-3.5 h-3.5 rounded-full border-2 bg-[#0a0a0a] ${
                  exp.current
                    ? "border-[#6366f1]"
                    : "border-[rgba(99,102,241,0.4)]"
                }`}
              >
                <div
                  className={`absolute inset-1 rounded-full ${
                    exp.current
                      ? "bg-[#6366f1]"
                      : "bg-[rgba(99,102,241,0.4)]"
                  }`}
                />
              </div>

              <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-6 hover:border-white/[0.12] transition-colors duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-[#f1f5f9] text-base font-bold">
                      {exp.title}
                    </h3>
                    <div className="text-[#818cf8] text-sm font-medium mt-0.5">
                      {exp.company}
                    </div>
                  </div>
                  <span className="text-[#64748b] text-xs bg-white/[0.04] px-3 py-1.5 rounded-md whitespace-nowrap self-start">
                    {exp.period}
                  </span>
                </div>

                <ul className="text-[#94a3b8] text-sm leading-7 list-disc pl-4 mb-4 space-y-1">
                  {exp.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-[rgba(99,102,241,0.1)] border border-[rgba(99,102,241,0.2)] text-[#a5b4fc] px-2.5 py-1 rounded-md text-xs"
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
