export const personalInfo = {
  name: "Jishnu Mohan",
  initials: "JM",
  role: "Senior Backend Engineer",
  headline: "Architecting Distributed Systems & AI-Powered Platforms at Scale",
  summary:
    "7+ years architecting resilient, event-driven systems for high-traffic SaaS platforms. Led end-to-end design and delivery of AI-powered retail products at Treez Inc., from system design through production.",
  email: "jishnumpr@gmail.com",
  phone: "+91-8281378980",
  linkedin: "https://www.linkedin.com/in/jishnu-mohan",
  github: "https://github.com/jishnumohan",
  currentFocus: "Leading AI platform development at Treez Inc.",
};

export const stats = [
  { value: "7+", label: "Years Experience" },
  { value: "50K+", label: "Events Processed Daily" },
  { value: "99.9%", label: "System Reliability" },
];

export interface Experience {
  title: string;
  company: string;
  period: string;
  current: boolean;
  highlights: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    title: "Software Development Engineer II",
    company: "Treez Inc.",
    period: "Mar 2022 - Present",
    current: true,
    highlights: [
      "Architected and led development of a Retail AI Platform with event-driven microservices, automating invoice processing and catalog onboarding — reducing manual effort by 80% and improving catalog data consistency.",
      "Designed and integrated LLM-based description agents and vision-driven image discovery agents into production catalog workflows, automating content generation for thousands of SKUs.",
      "Owned end-to-end design and delivery of a distributed Product Collection Service using EventBridge and SQS, processing 50K+ events/day with 99.9%+ reliability and zero data loss.",
      "Championed and built an internal Event Registry — from hackathon prototype to org-wide platform — enabling event schema discovery and validation across 10+ services.",
      "Designed and implemented platform-wide authentication and authorization using AWS Cognito, SSO, and RBAC, securing services.",
      "Mentored junior engineers through code reviews and design sessions, and led technical design reviews for new platform features.",
    ],
    technologies: [
      "TypeScript",
      "AWS",
      "EventBridge",
      "SQS",
      "DynamoDB",
      "PostgreSQL",
      "Redis",
      "LLM",
      "Python",
    ],
  },
  {
    title: "Software Development Engineer",
    company: "Diagnal Technologies",
    period: "May 2019 - Feb 2022",
    current: false,
    highlights: [
      "Designed and built serverless backend services for 3 OTT streaming applications, handling 1M+ requests/month on AWS Lambda, API Gateway, and DynamoDB.",
      "Architected REST and GraphQL APIs for content delivery, user authentication, and CMS workflows, serving 10000 end users across multiple platforms.",
      "Established CI/CD pipelines with GitHub Actions and CircleCI, enabling zero-downtime deployments and reducing release cycle time.",
      "Worked directly with clients to translate business requirements into technical architecture, owning the solution design from proposal through production delivery.",
    ],
    technologies: [
      "Node.js",
      "Lambda",
      "GraphQL",
      "DynamoDB",
      "S3",
      "CircleCI",
    ],
  },
];

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  icon: string;
  tag?: string;
  github?: string;
  challenge?: string;
  approach?: string;
  outcome?: string;
}

export const projects: Project[] = [
  {
    title: "Retail AI Platform",
    description:
      "Event-driven microservices platform automating invoice processing and catalog onboarding with AI agent orchestration.",
    technologies: ["Python", "EventBridge", "AWS Cognito", "SQS", "LLM"],
    icon: "diamond",
    tag: "Production",
    challenge:
      "Manual invoice processing and catalog onboarding were slow and error-prone, requiring significant human effort to maintain product data quality.",
    approach:
      "Built event-driven microservices with AI agent orchestration — LLM-based description agents and vision-driven image discovery agents integrated into catalog workflows.",
    outcome:
      "Automated product content generation end-to-end, reducing manual catalog effort by 80% and improving data consistency across the platform.",
  },
  {
    title: "Product Collection Service",
    description:
      "Distributed event processing system handling 50K+ events/day with idempotent consumers and 99.9%+ message processing reliability.",
    technologies: ["TypeScript", "AWS Lambda", "Serverless", "EventBridge", "SQS", "PostgreSQL"],
    icon: "zap",
    tag: "Production",
    challenge:
      "Product collections needed to stay in sync across distributed services, with strict reliability requirements and no tolerance for duplicate processing.",
    approach:
      "Designed an event-driven architecture using AWS EventBridge and SQS with idempotent consumers, ensuring exactly-once processing semantics.",
    outcome:
      "Achieved 99.9%+ message processing reliability with zero data loss, handling 50000+ events/day and ensuring consistent data across the platform.",
  },
  {
    title: "Event Registry",
    description:
      "Hackathon project turned shared platform for centralized event schema discovery and validation across 10+ services.",
    technologies: ["TypeScript", "AWS Lambda", "Serverless", "PostgreSQL"],
    icon: "layers",
    tag: "Internal Platform",
    challenge:
      "With 10+ services publishing events, there was no central way to discover event schemas or validate payloads, leading to integration issues.",
    approach:
      "Started as a hackathon project — built a centralized registry for event schema discovery and validation that services could integrate with.",
    outcome:
      "Adopted org-wide as the standard for event-driven integration, reducing cross-team schema mismatches and cutting integration debugging time.",
  },
  {
    title: "OTT Backend Platform",
    description:
      "Serverless backend powering 3 OTT applications with REST and GraphQL APIs, handling millions of requests per month.",
    technologies: ["AWS Lambda", "AWS Cognito", "GraphQL", "DynamoDB"],
    icon: "tv",
    tag: "Production",
    challenge:
      "Three OTT streaming applications needed a unified, scalable backend capable of handling millions of monthly requests with minimal operational overhead.",
    approach:
      "Built a fully serverless architecture using AWS Lambda, API Gateway, and DynamoDB with both REST and GraphQL APIs for flexible content delivery.",
    outcome:
      "Serving 1M+ requests/month across 3 OTT applications with zero-downtime deployments via CI/CD pipelines.",
  },
  {
    title: "llm-key-validator",
    description:
      "Published npm + PyPI library, CLI, and GitHub Action that validates API keys for 12 LLM providers — OpenAI, Anthropic, Gemini, Groq, Mistral, and more — with zero runtime dependencies.",
    technologies: ["TypeScript", "Node.js", "Python", "npm", "GitHub Actions"],
    icon: "key",
    tag: "npm Package",
    github: "https://github.com/jishnu-mohan/llm-key-validator",
  },
  {
    title: "3D Lithophane Generator",
    description:
      "Browser-based tool that turns any image into a 3D-printable lithophane — real-time Three.js preview with flat, curved, cylindrical, and lampshade shapes, exported as binary STL.",
    technologies: ["React", "TypeScript", "Three.js", "Vite", "Tailwind"],
    icon: "cube",
    tag: "Web App",
    github: "https://github.com/jishnu-mohan/3d-Lithophage-Generator",
  },
  {
    title: "AI Overview Blocker for Google",
    description:
      "Manifest V3 Chrome extension that blocks, hides, or auto-expands Google AI Overviews and Sponsored results, with zero-flash rendering and a low-CPU MutationObserver.",
    technologies: ["JavaScript", "Chrome Extension", "Manifest V3"],
    icon: "shield",
    tag: "Chrome Extension",
    github: "https://github.com/jishnu-mohan/google-ai-blocker-and-expander",
  },
  {
    title: "WikiShorts",
    description:
      "Automated pipeline that turns Wikipedia articles into high-retention 9:16 short-form videos — script, voiceover, sourced media, and word-aligned captions, generated end to end.",
    technologies: ["Python", "Claude", "Whisper", "FFmpeg", "Remotion"],
    icon: "film",
    tag: "Automation",
    challenge:
      "Producing engaging short-form video at scale is manual and slow — scripting, narration, sourcing relevant visuals, and aligning captions each take significant effort per video.",
    approach:
      "Built a multi-stage pipeline: Claude writes a viral script, TTS synthesizes a cinematic voiceover, per-scene Wikimedia images are vision-scored for relevance, and Whisper aligns word-level captions — every stage with a graceful fallback chain.",
    outcome:
      "Generates finished, captioned 9:16 shorts for YouTube, TikTok, and Reels end to end — running with premium API keys, a single key, or fully offline in mock mode.",
  },
  {
    title: "Personal Expense Tracker",
    description:
      "Self-updating expense dashboard that parses Gmail transaction alerts and bank/credit-card PDF statements into a private local SQLite store, served over a home tailnet.",
    technologies: ["Python", "Gmail API", "SQLite", "launchd"],
    icon: "chart",
    tag: "Automation",
    challenge:
      "Tracking spending across multiple banks and cards meant manually reconciling alert emails and password-protected PDF statements — tedious and easy to fall behind on.",
    approach:
      "Built an hourly automation that polls the Gmail API, parses transaction emails and decrypts/parses PDF statements, and writes idempotently to a local SQLite database before regenerating an HTML dashboard.",
    outcome:
      "A private, hands-off dashboard that refreshes every hour and is served on the home tailnet — ~1,500 lines of Python, read-only mail access, and no data ever leaving the machine.",
  },
  {
    title: "COWIN Vaccine Slot Checker",
    description:
      "Vaccine slot availability checker that monitors the COWIN API and publishes real-time slot availability updates to a Telegram channel.",
    technologies: ["Node.js", "Raspberry Pi", "Telegram API"],
    icon: "monitor",
    tag: "Telegram Bot",
    github: "https://github.com/jishnu-mohan/cowin-vaccine-availability-checker",
  },
  {
    title: "s3-dir-utils",
    description:
      "Published npm package that retrieves the file structure of AWS S3 buckets and returns it in a structured JSON format.",
    technologies: ["Node.js", "npm", "AWS S3"],
    icon: "package",
    tag: "npm Package",
    github: "https://github.com/jishnu-mohan/s3-dir-utils",
  },
];

export interface SkillCategory {
  name: string;
  icon: string;
  color: string;
  borderColor: string;
  textColor: string;
  bgColor: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    icon: "</>",
    color: "rgba(99,102,241,0.12)",
    borderColor: "rgba(99,102,241,0.15)",
    textColor: "#a5b4fc",
    bgColor: "rgba(99,102,241,0.08)",
    skills: ["TypeScript", "Node.js", "Python"],
  },
  {
    name: "Backend & APIs",
    icon: "API",
    color: "rgba(139,92,246,0.12)",
    borderColor: "rgba(139,92,246,0.15)",
    textColor: "#c4b5fd",
    bgColor: "rgba(139,92,246,0.08)",
    skills: ["REST", "GraphQL", "Event-Driven", "Microservices", "System Design"],
  },
  {
    name: "Databases",
    icon: "DB",
    color: "rgba(34,211,238,0.12)",
    borderColor: "rgba(34,211,238,0.15)",
    textColor: "#a5f3fc",
    bgColor: "rgba(34,211,238,0.08)",
    skills: ["PostgreSQL", "DynamoDB", "Redis"],
  },
  {
    name: "Cloud (AWS)",
    icon: "AWS",
    color: "rgba(251,146,60,0.12)",
    borderColor: "rgba(251,146,60,0.15)",
    textColor: "#fdba74",
    bgColor: "rgba(251,146,60,0.08)",
    skills: [
      "Lambda",
      "EventBridge",
      "SQS",
      "API Gateway",
      "S3",
      "CloudFront",
      "Cognito",
      "IAM",
    ],
  },
  {
    name: "DevOps & Observability",
    icon: "CI",
    color: "rgba(74,222,128,0.12)",
    borderColor: "rgba(74,222,128,0.15)",
    textColor: "#86efac",
    bgColor: "rgba(74,222,128,0.08)",
    skills: ["Docker", "Kubernetes", "GitHub Actions", "CloudWatch", "Prometheus", "Grafana"],
  },
  {
    name: "AI & Automation",
    icon: "AI",
    color: "rgba(236,72,153,0.12)",
    borderColor: "rgba(236,72,153,0.15)",
    textColor: "#f9a8d4",
    bgColor: "rgba(236,72,153,0.08)",
    skills: ["OpenClaw", "LLM Integration", "AI Agents", "Prompt Engineering", "MCP"],
  },
];

export interface Specialization {
  title: string;
  description: string;
  icon: string;
  tags: string[];
}

export const specializations: Specialization[] = [
  {
    title: "Distributed Systems",
    description:
      "Designing and owning resilient, event-driven architectures at scale — from schema design and idempotent consumers to dead-letter handling and production observability.",
    icon: "network",
    tags: ["EventBridge", "SQS", "Microservices"],
  },
  {
    title: "Cloud Infrastructure",
    description:
      "Building and operating production systems on AWS with 15+ services, from Lambda to CloudFront.",
    icon: "cloud",
    tags: ["AWS Lambda", "Serverless", "DynamoDB", "S3"],
  },
  {
    title: "AI / LLM Integration",
    description:
      "Designing and deploying LLM-based agents and vision models in production — including prompt engineering, agent orchestration, and automated content generation pipelines.",
    icon: "ai",
    tags: ["OpenClaw", "LLM", "AI Agents", "MCP", "Python"],
  },
  {
    title: "System Design & Technical Leadership",
    description:
      "Driving end-to-end system architecture — from API design and data modeling to event-driven patterns, mentoring engineers, and leading technical design reviews.",
    icon: "api",
    tags: ["System Design", "Architecture", "Technical Leadership", "Design Reviews"],
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
