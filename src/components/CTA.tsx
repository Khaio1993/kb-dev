"use client";

import { motion } from "framer-motion";
import { siteData } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="py-32 px-6 bg-black text-white text-center">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-8"
        >
          {siteData.cta.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-400 mb-12 font-light max-w-2xl mx-auto"
        >
          {siteData.cta.subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <a
            href="/contact"
            className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full font-medium hover:bg-orange-accent hover:text-white transition-all duration-300 text-lg group"
          >
            {siteData.cta.button} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
