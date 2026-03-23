import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-[#64748b] text-xs">
          Designed & Built by {personalInfo.name}
        </div>
        <div className="flex gap-6">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#64748b] text-xs hover:text-[#94a3b8] transition-colors"
          >
            GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#64748b] text-xs hover:text-[#94a3b8] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-[#64748b] text-xs hover:text-[#94a3b8] transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
