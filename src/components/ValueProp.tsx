"use client";

import { motion } from "framer-motion";
import { siteData } from "@/lib/data";

export function ValueProp() {
  return (
    <section id="why-me" className="py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold tracking-tight mb-16"
        >
          {siteData.valueProp.title}
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {siteData.valueProp.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="space-y-4 group"
            >
              <h3 className="text-xl font-semibold group-hover:text-orange-accent transition-colors">{item.title}</h3>
              <div className="w-12 h-0.5 bg-orange-accent/30 group-hover:bg-orange-accent transition-colors" />
              <p className="text-gray-600 leading-relaxed font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
