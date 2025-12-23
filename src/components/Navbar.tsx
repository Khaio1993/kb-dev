"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Services", href: "/#services" },
  { name: "Why Me", href: "/#why-me" },
  { name: "Projects", href: "/#projects" },
  { name: "Testimonials", href: "/#testimonials" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-[#FBF9F3]/80 backdrop-blur-md"
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-tighter uppercase">
          KB.
        </Link>
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-600 hover:text-orange-accent transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <Link
          href="/contact"
          className="hidden md:block bg-black text-white px-5 py-2.5 text-sm font-medium rounded-full hover:bg-orange-accent transition-colors"
        >
          Book a call
        </Link>
      </div>
    </motion.nav>
  );
}
