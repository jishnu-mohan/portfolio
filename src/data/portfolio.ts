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
  currentFocus: "Building AI-powered retail workflows at Treez Inc.",
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
    challenge:
      "Manual invoice processing and catalog onboarding were slow and error-prone, requiring significant human effort to maintain product data quality.",
    approach:
      "Built event-driven microservices with AI agent orchestration — LLM-based description agents and vision-driven image discovery agents integrated into catalog workflows.",
    outcome:
      "Automated product content generation end-to-end, significantly reducing manual effort and improving catalog data consistency across the platform.",
  },
  {
    title: "Product Collection Service",
    description:
      "Distributed event processing system handling 5K+ events/day with idempotent consumers and 99.9%+ message processing reliability.",
    technologies: ["TypeScript", "AWS Lambda", "Serverless", "EventBridge", "SQS", "PostgreSQL"],
    icon: "zap",
    challenge:
      "Product collections needed to stay in sync across distributed services, with strict reliability requirements and no tolerance for duplicate processing.",
    approach:
      "Designed an event-driven architecture using AWS EventBridge and SQS with idempotent consumers, ensuring exactly-once processing semantics.",
    outcome:
      "Achieved 99.9%+ message processing reliability handling 5K+ events/day across the distributed system.",
  },
  {
    title: "Event Registry",
    description:
      "Hackathon project turned shared platform for centralized event schema discovery and validation across 10+ services.",
    technologies: ["TypeScript", "AWS Lambda", "Serverless", "PostgreSQL"],
    icon: "layers",
    challenge:
      "With 10+ services publishing events, there was no central way to discover event schemas or validate payloads, leading to integration issues.",
    approach:
      "Started as a hackathon project — built a centralized registry for event schema discovery and validation that services could integrate with.",
    outcome:
      "Adopted across the organization as a shared platform, enabling reliable event-driven communication between 10+ services.",
  },
  {
    title: "OTT Backend Platform",
    description:
      "Serverless backend powering 3 OTT applications with REST and GraphQL APIs, handling millions of requests per month.",
    technologies: ["AWS Lambda", "AWS Cognito", "GraphQL", "DynamoDB"],
    icon: "tv",
    challenge:
      "Three OTT streaming applications needed a unified, scalable backend capable of handling millions of monthly requests with minimal operational overhead.",
    approach:
      "Built a fully serverless architecture using AWS Lambda, API Gateway, and DynamoDB with both REST and GraphQL APIs for flexible content delivery.",
    outcome:
      "Successfully serving millions of requests per month across 3 OTT applications with zero-downtime deployments via CI/CD pipelines.",
  },
  {
    title: "COWIN Vaccine Slot Checker",
    description:
      "Vaccine slot availability checker that monitors the COWIN API and publishes real-time slot availability updates to a Telegram channel.",
    technologies: ["Node.js", "Raspberry Pi", "Telegram API"],
    icon: "monitor",
    github: "https://github.com/jishnu-mohan/cowin-vaccine-availability-checker",
  },
  {
    title: "s3-dir-utils",
    description:
      "Published npm package that retrieves the file structure of AWS S3 buckets and returns it in a structured JSON format.",
    technologies: ["Node.js", "npm", "AWS S3"],
    icon: "package",
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
    skills: ["OpenClaw", "LLM Integration", "AI Agents", "MCP"],
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
      "Designing resilient, event-driven architectures that process thousands of events daily with 99.9%+ reliability.",
    icon: "network",
    tags: ["EventBridge", "SQS", "Microservices"],
  },
  {
    title: "Cloud Infrastructure",
    description:
      "Building and operating production systems on AWS with 15+ services, from Lambda to CloudFront.",
    icon: "cloud",
    tags: ["AWS", "Lambda", "DynamoDB", "S3"],
  },
  {
    title: "AI / LLM Integration",
    description:
      "Integrating LLM-based agents and vision models into production workflows for content automation.",
    icon: "ai",
    tags: ["OpenClaw", "LLM", "AI Agents", "MCP", "Python"],
  },
  {
    title: "Backend APIs",
    description:
      "Building scalable REST and GraphQL APIs serving millions of requests, with CI/CD and zero-downtime deployments.",
    icon: "api",
    tags: ["REST", "GraphQL", "Node.js", "TypeScript"],
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
