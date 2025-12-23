"use client";

import { motion } from "framer-motion";
import { siteData } from "@/lib/data";

export function Process() {
  return (
    <section className="py-32 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{siteData.process.title}</h2>
        </motion.div>

        <div className="space-y-16">
          {siteData.process.steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="flex gap-8 md:gap-12 items-start group"
            >
              <span className="text-5xl md:text-6xl font-light text-gray-200 group-hover:text-orange-accent transition-colors duration-500 font-mono shrink-0">
                0{index + 1}
              </span>
              <div className="pt-3">
                <h3 className="text-xl md:text-2xl font-medium mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed max-w-xl font-light text-lg">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
