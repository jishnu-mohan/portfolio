import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jishnumohan.dev"),
  title: "Jishnu Mohan - Backend Engineer",
  description:
    "Backend Engineer with 7+ years of experience designing and scaling distributed systems, event-driven architectures, and AI-powered platforms.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Jishnu Mohan - Backend Engineer",
    description:
      "Backend Engineer with 7+ years of experience in distributed systems, AWS, and AI/LLM integration.",
    type: "website",
    url: "https://jishnumohan.dev",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jishnu Mohan - Backend Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jishnu Mohan - Backend Engineer",
    description:
      "Backend Engineer with 7+ years of experience in distributed systems, AWS, and AI/LLM integration.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jishnu Mohan",
  jobTitle: "Backend Engineer",
  description:
    "Backend Engineer with 7+ years of experience designing and scaling distributed systems, event-driven architectures, and AI-powered platforms.",
  url: "https://jishnumohan.dev",
  sameAs: [
    "https://github.com/jishnumohan",
    "https://www.linkedin.com/in/jishnu-mohan",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Treez Inc.",
  },
  knowsAbout: [
    "TypeScript",
    "Node.js",
    "Python",
    "AWS",
    "Distributed Systems",
    "Event-Driven Architecture",
    "Microservices",
    "LLM Integration",
    "AI Agents",
    "GraphQL",
    "PostgreSQL",
    "DynamoDB",
    "Docker",
    "Kubernetes",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <a
          href="#home"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[#6366f1] focus:text-white focus:text-sm focus:font-medium"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
