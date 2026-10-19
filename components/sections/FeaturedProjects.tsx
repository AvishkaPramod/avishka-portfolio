"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  return (
    <section className="py-16 md:py-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Real, deployed projects — click to explore live
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="card h-full flex flex-col group">
                {/* Category */}
                <span className="inline-block text-xs px-2.5 py-1 rounded-full bg-azure-500/10 text-azure-400 border border-azure-500/20 mb-4 self-start">
                  {project.category}
                </span>

                {/* Title — links to detail page */}
                <Link
                  href={`/projects/${project.slug}`}
                  className="text-xl font-bold mb-2 group-hover:text-azure-500 transition-colors"
                >
                  {project.title}
                </Link>

                {/* Description */}
                <p className="text-sm text-[var(--text-muted)] mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Stack */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.stack.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="text-[10px] px-2 py-0.5 rounded bg-[var(--bg-primary)] border border-[var(--border)] text-[var(--text-muted)]"
                    >
                      {t}
                    </span>
                  ))}
                  {project.stack.length > 4 && (
                    <span className="text-[10px] px-2 py-0.5 text-[var(--text-muted)]">
                      +{project.stack.length - 4}
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-[var(--border)] mt-auto">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-azure-500 hover:text-azure-400 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    View Live
                  </a>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1 text-xs text-[var(--text-muted)] group-hover:text-azure-500 transition-colors"
                  >
                    Details <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/projects" className="btn-outline">
            View All Projects <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}