import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI MVP Development | Full-Stack & AI Engineer | Khalil Ben Cherifa",
  description: "Full-stack and AI engineer building fast, production-ready MVPs and SaaS products using Next.js, Firebase, and modern AI. Book a free consultation.",
  keywords: ["AI MVP development", "AI engineer", "Next.js developer", "SaaS builder", "AI automation", "Firebase developer", "MCP server", "AI solutions"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black selection:bg-gray-200`}
      >
        {children}
      </body>
    </html>
  );
}
