"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/cards/ProjectCard";
import { projects, projectCategories } from "@/data/projects";
import { cn } from "@/lib/utils";

export default function ProjectsContent() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <div className="pt-28 pb-16">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="section-title">My Projects</h1>
          <p className="section-subtitle">
            Real, deployed projects — click to explore live
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium border transition-all",
                filter === cat
                  ? "bg-azure-500 text-white border-azure-500"
                  : "bg-transparent text-[var(--text-muted)] border-[var(--border)] hover:border-azure-500 hover:text-azure-500"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <p className="text-center text-[var(--text-muted)] py-12">
            No projects in this category yet.
          </p>
        )}
      </div>
    </div>
  );
}