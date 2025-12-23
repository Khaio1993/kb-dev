"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { siteData } from "@/lib/data";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function Hero() {
  return (
    <section className="min-h-[85vh] flex items-center justify-center py-32 px-6">
      <div className="container mx-auto max-w-6xl grid md:grid-cols-12 gap-8 items-center">
        {/* Text Column */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="md:col-span-7 flex flex-col gap-6"
        >
          <motion.span variants={fadeUp} className="text-sm font-medium tracking-wide text-gray-500 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-accent"></span>
            Hey, I am Khalil Ben Cherifa
          </motion.span>

          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] -ml-1">
            Designing to <br />
            Connect & <span className="text-orange-accent">Inspire.</span>
          </motion.h1>
          
          <motion.p variants={fadeUp} className="text-lg text-gray-600 max-w-md leading-relaxed font-light mt-2">
            {siteData.hero.subtitle}
          </motion.p>
          
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mt-6">
            <Link
              href="/contact"
              className="bg-black text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-orange-accent transition-colors duration-300"
            >
              Book 30 Min Intro Call
            </Link>
            <Link
              href="#projects"
              className="px-8 py-4 rounded-full text-sm font-medium border border-gray-200 hover:bg-white/50 transition-colors"
            >
              View Work
            </Link>
          </motion.div>
          
          <motion.p variants={fadeUp} className="text-xs text-gray-400 mt-2">
            {siteData.hero.trustText}
          </motion.p>
        </motion.div>

        {/* Image Column - Rapprochée du texte */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
          animate={{ opacity: 1, scale: 1, rotate: 3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-5 relative w-full max-w-[340px] mr-auto md:ml-0 ml-auto mt-12 md:mt-0"
        >
          <div className="relative aspect-[3/4] w-full rounded-sm overflow-hidden shadow-2xl">
             <Image
              src="/profile.jpeg"
              alt="Khalil Ben Cherifa"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
