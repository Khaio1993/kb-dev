"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { getFeaturedProjects } from "@/lib/projects";
import TechBadge from "./TechBadge";

export function Projects() {
  const projects = getFeaturedProjects();

  return (
    <section id="projects" className="py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-gray-200 pb-8">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tight"
          >
            Selected Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-gray-500 max-w-md text-lg font-light"
          >
            Selected works showcasing full-stack capabilities and AI integration.
          </motion.p>
        </div>

        <div className="grid gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group grid md:grid-cols-12 gap-8 md:gap-12 items-start border-b border-gray-100 pb-16 last:border-0"
            >
              <div className="md:col-span-4">
                <Link href={`/projects/${project.slug}`}>
                  <h3 className="text-3xl font-medium mb-3 group-hover:text-orange-accent transition-colors cursor-pointer">
                    {project.title}
                  </h3>
                </Link>
                <p className="text-gray-400 text-sm uppercase tracking-wider font-medium">{project.subtitle}</p>
              </div>

              <div className="md:col-span-5">
                <p className="text-gray-600 leading-relaxed text-lg font-light">{project.description}</p>
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-2 mt-4 text-orange-accent hover:gap-3 transition-all"
                >
                  View project
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>

              <div className="md:col-span-3 flex flex-wrap gap-2 content-start justify-start md:justify-end">
                {project.technologies.map((tech, tIndex) => (
                  <TechBadge key={tIndex} tech={tech} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
