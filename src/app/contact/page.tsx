"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="flex-grow pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-5xl">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Let's <br/>
              Collaborate
            </h1>
            <p className="text-gray-600 max-w-xl text-lg leading-relaxed">
              Ready to build your AI-powered MVP or SaaS? Whether you need a rapid prototype, 
              a custom automation system, or a scalable full-stack application, I help founders 
              launch in weeks, not months.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="grid gap-12 max-w-3xl"
          >
            <div className="group">
              <label htmlFor="name" className="block text-xl font-semibold mb-2 text-black">Full Name</label>
              <input 
                type="text" 
                id="name"
                placeholder="John Doe" 
                className="input-underline bg-transparent"
              />
            </div>

            <div className="group">
              <label htmlFor="email" className="block text-xl font-semibold mb-2 text-black">Email Address</label>
              <input 
                type="email" 
                id="email"
                placeholder="john@example.com" 
                className="input-underline bg-transparent"
              />
            </div>

            <div className="group">
              <label htmlFor="details" className="block text-xl font-semibold mb-2 text-black">Project Details</label>
              <textarea 
                id="details"
                rows={4}
                placeholder="Tell me about your project, timeline, and budget..." 
                className="input-underline bg-transparent resize-none"
              />
            </div>

            <div className="pt-8">
              <button 
                type="submit"
                className="bg-black text-white px-10 py-5 rounded-full text-lg font-medium hover:bg-orange-accent transition-colors flex items-center gap-2 group"
              >
                Send Message 
                <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>

          </motion.form>
        </div>
      </section>

      <Footer />
    </main>
  );
}

