"use client";

import { motion } from "framer-motion";
import { siteData } from "@/lib/data";
import { Quote } from "lucide-react";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold tracking-tight mb-20"
        >
          {siteData.testimonials.title}
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteData.testimonials.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="bg-white p-10 rounded-sm shadow-sm border border-gray-100 relative group hover:shadow-md transition-all"
            >
              <Quote className="absolute top-8 left-8 text-orange-accent/20 w-10 h-10 -z-0 group-hover:text-orange-accent transition-colors" />
              <div className="relative z-10 pt-8 flex flex-col gap-4">
                <p className="text-gray-700 leading-relaxed italic font-light text-lg">
                  "{item.quote}"
                </p>
                <p className="text-sm font-medium text-gray-500">
                  <span className="text-orange-accent">—</span> {item.author}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
