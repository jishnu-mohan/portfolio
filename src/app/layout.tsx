import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jishnu Mohan - Backend Engineer",
  description:
    "Backend Engineer with 7+ years of experience designing and scaling distributed systems, event-driven architectures, and AI-powered platforms.",
  openGraph: {
    title: "Jishnu Mohan - Backend Engineer",
    description:
      "Backend Engineer with 7+ years of experience in distributed systems, AWS, and AI/LLM integration.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
