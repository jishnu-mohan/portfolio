"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.06),transparent_70%)]" />

      <div className="max-w-4xl mx-auto px-6 relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-[#818cf8] text-xs tracking-[3px] font-medium mb-2">
            GET IN TOUCH
          </div>
          <h2 className="text-3xl font-bold text-[#f1f5f9] mb-3">
            Let&apos;s Work Together
          </h2>
          {/* <p className="text-[#94a3b8] text-base mb-10">
            Always open to discussing new opportunities and interesting
            projects.
          </p> */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center justify-center gap-3 bg-white/[0.04] border border-white/[0.08] rounded-xl px-6 py-4 text-[#e2e8f0] text-sm font-medium hover:bg-white/[0.08] transition-colors"
          >
            <svg
              className="w-4 h-4 text-[#818cf8]"
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
            {personalInfo.email}
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-white/[0.04] border border-white/[0.08] rounded-xl px-6 py-4 text-[#e2e8f0] text-sm font-medium hover:bg-white/[0.08] transition-colors"
          >
            <svg
              className="w-4 h-4 text-[#818cf8]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>

          <a
            href={`tel:${personalInfo.phone}`}
            className="flex items-center justify-center gap-3 bg-white/[0.04] border border-white/[0.08] rounded-xl px-6 py-4 text-[#e2e8f0] text-sm font-medium hover:bg-white/[0.08] transition-colors"
          >
            <svg
              className="w-4 h-4 text-[#818cf8]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            {personalInfo.phone}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
