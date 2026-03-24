"use client";

import { motion } from "framer-motion";
import { personalInfo, stats } from "@/data/portfolio";
import AnimatedCounter from "./AnimatedCounter";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Gradient orbs */}
      <div className="absolute -top-20 -right-16 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.12),transparent_70%)] animate-[drift_20s_ease-in-out_infinite]" />
      <div className="absolute -bottom-16 -left-10 w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.08),transparent_70%)] animate-[drift_25s_ease-in-out_infinite_reverse]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.06),transparent_70%)]" />

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left column */}
        <div className="flex-1 min-w-0">
          {/* Avatar + greeting */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex items-center gap-4 mb-6"
          >
            {/* Profile picture */}
            <div className="relative group/avatar">
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] opacity-25 blur-sm group-hover/avatar:opacity-40 transition-opacity" />
              <div className="relative w-20 h-20 rounded-full overflow-hidden">
                <img src="/jishnu.png" alt={personalInfo.name} width={80} height={80} className="w-full h-full object-cover" />
              </div>
              {/* Status indicator */}
              <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 bg-green-500 rounded-full border-[3px] border-[#0a0a0a]" />
            </div>

            <div>
              <div className="text-[#94a3b8] text-sm">Hello, I&apos;m</div>
              <div className="text-[#f1f5f9] text-lg font-semibold">
                {personalInfo.name}
              </div>
              <div className="flex items-center gap-1.5 mt-0.5">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[#64748b] text-xs">{personalInfo.currentFocus}</span>
              </div>
            </div>
          </motion.div>

          {/* Role badge */}
          <motion.div
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex items-center gap-2 mb-4"
          >
            <div className="h-[1px] w-8 bg-gradient-to-r from-[#6366f1] to-transparent" />
            <span className="text-[#818cf8] text-sm tracking-[2px] font-medium">
              {personalInfo.role.toUpperCase()}
            </span>
          </motion.div>

          {/* Tagline as headline */}
          <motion.h1
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold leading-[1.1] text-[#f1f5f9] mb-5"
          >
            {personalInfo.headline}
          </motion.h1>

          {/* Summary */}
          <motion.p
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-[#94a3b8] text-base leading-relaxed mb-8 max-w-lg"
          >
            {personalInfo.summary}
          </motion.p>

          {/* Social links */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex gap-3"
          >
            {[
              {
                label: "GitHub",
                href: personalInfo.github,
                icon: (
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                ),
              },
              {
                label: "LinkedIn",
                href: personalInfo.linkedin,
                icon: (
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                ),
              },
              {
                label: "Email",
                href: `mailto:${personalInfo.email}`,
                icon: (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                ),
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-[#94a3b8] hover:text-[#e2e8f0] hover:bg-white/[0.1] transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </motion.div>

          {/* Download Resume */}
          <motion.div
            custom={5}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-6"
          >
            <a
              href="/Jishnu Mohan.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* Right column - stat cards */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-row lg:flex-col gap-4 w-full lg:w-auto lg:flex-shrink-0"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.15, duration: 0.5 }}
              className="flex-1 lg:flex-initial bg-white/[0.04] border border-white/[0.08] rounded-xl p-5 backdrop-blur-sm lg:min-w-[180px]"
            >
              <div className="text-[#818cf8] text-3xl font-extrabold">
                <AnimatedCounter value={stat.value} />
              </div>
              <div className="text-[#94a3b8] text-xs mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
