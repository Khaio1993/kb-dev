"use client";

import { motion } from "framer-motion";
import { siteData } from "@/lib/data";
import { Check } from "lucide-react";

export function Services() {
  return (
    <section id="services" className="py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">{siteData.services.title}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {siteData.services.items.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-10 rounded-sm border border-gray-100 shadow-sm hover:border-orange-accent/30 transition-colors group"
            >
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-orange-accent transition-colors">{service.title}</h3>
              {service.duration && (
                <span className="inline-block bg-orange-accent/10 text-orange-accent text-xs font-medium px-3 py-1 rounded-full mb-6">
                  {service.duration}
                </span>
              )}
              <p className="text-gray-600 mb-8 leading-relaxed font-light">{service.description}</p>
              
              <ul className="space-y-4">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                    <Check size={16} className="mt-1 text-orange-accent shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
