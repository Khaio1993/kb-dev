"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    if (!name || !email || !details) {
      setErrorMessage("Tous les champs sont requis.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, details }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        setErrorMessage(
          data?.error || "Impossible d'envoyer le message pour le moment."
        );
        return;
      }

      setSuccessMessage(
        "Thank you, your message has been sent. I’ll get back to you as soon as possible."
      );
      setName("");
      setEmail("");
      setDetails("");
      setIsSubmitted(true);
    } catch (err) {
      setErrorMessage("Une erreur est survenue. Merci de réessayer plus tard.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="flex-grow pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-5xl">
          
          {!isSubmitted ? (
            <>
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
                onSubmit={handleSubmit}
                className="grid gap-12 max-w-3xl"
              >
                <div className="group">
                  <label htmlFor="name" className="block text-xl font-semibold mb-2 text-black">Full Name</label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe" 
                    className="input-underline bg-transparent"
                  />
                </div>

                <div className="group">
                  <label htmlFor="email" className="block text-xl font-semibold mb-2 text-black">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com" 
                    className="input-underline bg-transparent"
                  />
                </div>

                <div className="group">
                  <label htmlFor="details" className="block text-xl font-semibold mb-2 text-black">Project Details</label>
                  <textarea 
                    id="details"
                    rows={4}
                    required
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder="Tell me about your project, timeline, and budget..." 
                    className="input-underline bg-transparent resize-none"
                  />
                </div>

                {errorMessage && (
                  <p className="text-sm text-red-600">
                    {errorMessage}
                  </p>
                )}

                <div className="pt-8">
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-black text-white px-10 py-5 rounded-full text-lg font-medium hover:bg-orange-accent disabled:opacity-60 disabled:cursor-not-allowed transition-colors flex items-center gap-2 group"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>

              </motion.form>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="max-w-xl rounded-3xl border border-gray-200 bg-white/80 px-8 py-10 shadow-sm"
            >
              <h2 className="text-2xl font-semibold mb-3">
                Message sent successfully
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {successMessage}
              </p>
              <p className="text-gray-400 text-sm mt-4">
                You can close this page or refresh it if you want to send another message.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}

