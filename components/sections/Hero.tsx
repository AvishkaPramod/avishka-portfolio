"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react";
import { personal } from "@/data/contact";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background glow */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-azure-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-azure-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10 text-center">
        {/* Currently badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-4 py-1.5 rounded-full text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          Currently @ {personal.currentCompany}
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
        >
          Hi, I'm{" "}
          <span className="text-azure-500">{personal.name}</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-[var(--text-muted)] font-medium mb-4"
        >
          {personal.title}
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base md:text-lg text-[var(--text-muted)] max-w-2xl mx-auto mb-10"
        >
          {personal.tagline}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center"
        >
          <Link href="/projects" className="btn-primary">
            View Projects <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/about" className="btn-outline">
            About Me
          </Link>
          <a
            href="/cv.html"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <Download className="w-4 h-4" /> Download CV
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex gap-3 justify-center mt-10"
        >
          <a
            href="https://github.com/AvishkaPramod"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2.5 rounded-lg border border-[var(--border)] hover:border-azure-500 hover:text-azure-500 transition-all"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/avishka-pramod"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2.5 rounded-lg border border-[var(--border)] hover:border-azure-500 hover:text-azure-500 transition-all"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:avishpramod1031@gmail.com"
            aria-label="Email"
            className="p-2.5 rounded-lg border border-[var(--border)] hover:border-azure-500 hover:text-azure-500 transition-all"
          >
            <Mail className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}