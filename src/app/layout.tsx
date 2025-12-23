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
  openGraph: {
    title: "Khalil Ben Cherifa - Full-Stack & AI Engineer",
    description: "Full-Stack and AI Engineer using Next.js, Firebase, and modern AI frameworks. I help founders and SMBs launch functional products in weeks, not months.",
    url: "https://khalilbencherifa.com",
    siteName: "Khalil Ben Cherifa Portfolio",
    images: [
      {
        url: "/Thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Khalil Ben Cherifa - Full-Stack & AI Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khalil Ben Cherifa - Full-Stack & AI Engineer",
    description: "Full-Stack and AI Engineer using Next.js, Firebase, and modern AI frameworks. I help founders and SMBs launch functional products in weeks, not months.",
    images: ["/Thumbnail.png"],
  },
  metadataBase: new URL("https://khalilbencherifa.com"),
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
