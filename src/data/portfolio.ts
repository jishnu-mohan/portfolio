export const personalInfo = {
  name: "Jishnu Mohan",
  initials: "JM",
  role: "Backend Engineer",
  headline: "Building Distributed Systems & AI-Powered Platforms",
  summary:
    "7+ years designing resilient, event-driven architectures for high-traffic SaaS platforms. Currently building AI-enabled retail products at Treez Inc.",
  email: "jishnumpr@gmail.com",
  phone: "+91-8281378980",
  linkedin: "https://www.linkedin.com/in/jishnu-mohan",
  github: "https://github.com/jishnumohan",
};

export const stats = [
  { value: "7+", label: "Years Experience" },
  { value: "15+", label: "AWS Services" },
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
      "Architected a Retail AI Platform with event-driven microservices for automated invoice processing and catalog onboarding with AI agent orchestration.",
      "Integrated LLM-based description agents and vision-driven image discovery agents into catalog workflows, automating product content generation.",
      "Designed a distributed Product Collection Service using AWS EventBridge and SQS, processing 5K+ events/day with 99.9%+ reliability.",
      "Built an internal Event Registry from a hackathon into a shared platform for event schema discovery across 10+ services.",
      "Implemented secure authentication with AWS Cognito, SSO, and role-based access control across platform services.",
    ],
    technologies: [
      "TypeScript",
      "AWS",
      "EventBridge",
      "SQS",
      "DynamoDB",
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
      "Developed serverless backend services for 3 OTT applications, handling millions of requests per month using AWS Lambda, API Gateway, and DynamoDB.",
      "Built scalable REST and GraphQL APIs for content delivery, user authentication, and CMS workflows.",
      "Configured CI/CD pipelines with GitHub Actions and CircleCI for zero-downtime production releases.",
      "Collaborated directly with clients to gather requirements and translate business specs into scalable solutions.",
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
}

export const projects: Project[] = [
  {
    title: "Retail AI Platform",
    description:
      "Event-driven microservices platform automating invoice processing and catalog onboarding with AI agent orchestration.",
    technologies: ["Python", "EventBridge", "AWS Cognito", "SQS", "LLM"],
    icon: "diamond",
  },
  {
    title: "Product Collection Service",
    description:
      "Distributed event processing system handling 5K+ events/day with idempotent consumers and 99.9%+ message processing reliability.",
    technologies: ["TypeScript", "AWS Lambda", "Serverless", "EventBridge", "SQS", "PostgreSQL"],
    icon: "zap",
  },
  {
    title: "Event Registry",
    description:
      "Hackathon project turned shared platform for centralized event schema discovery and validation across 10+ services.",
    technologies: ["TypeScript", "AWS Lambda", "Serverless", "PostgreSQL"],
    icon: "layers",
  },
  {
    title: "OTT Backend Platform",
    description:
      "Serverless backend powering 3 OTT applications with REST and GraphQL APIs, handling millions of requests per month.",
    technologies: ["AWS Lambda", "AWS Cognito", "GraphQL", "DynamoDB"],
    icon: "tv",
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
    skills: ["REST", "GraphQL", "Event-Driven", "Microservices"],
  },
  {
    name: "Databases",
    icon: "DB",
    color: "rgba(34,211,238,0.12)",
    borderColor: "rgba(34,211,238,0.15)",
    textColor: "#a5f3fc",
    bgColor: "rgba(34,211,238,0.08)",
    skills: ["PostgreSQL", "DynamoDB"],
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
    skills: ["Docker", "Kubernetes", "GitHub Actions", "Prometheus", "Grafana"],
  },
  {
    name: "AI & Automation",
    icon: "AI",
    color: "rgba(236,72,153,0.12)",
    borderColor: "rgba(236,72,153,0.15)",
    textColor: "#f9a8d4",
    bgColor: "rgba(236,72,153,0.08)",
    skills: ["LLM Integration", "AI Agents", "MCP"],
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
