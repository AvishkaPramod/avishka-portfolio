import Link from "next/link";
import { MapPin, FileText, Briefcase, GraduationCap } from "lucide-react";
import { experience } from "@/data/experience";
import { education } from "@/data/education";
import FadeIn from "@/components/animations/FadeIn";

export const metadata = {
  title: "Experience — Avishka Pramod Pathirana",
  description:
    "Work experience and education of Avishka Pramod Pathirana — Software Developer at SYNCONIC (Pvt) Ltd.",
};

export default function ExperiencePage() {
  return (
    <div className="pt-28 pb-16">
      <div className="container-custom max-w-3xl">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-12">
            <h1 className="section-title">Experience & Education</h1>
            <p className="section-subtitle">
              My professional journey so far
            </p>
          </div>
        </FadeIn>

        {/* WORK EXPERIENCE */}
        <FadeIn>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-azure-500/10 border border-azure-500/20">
              <Briefcase className="w-5 h-5 text-azure-500" />
            </div>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </div>
        </FadeIn>

        <div className="space-y-5 mb-16">
          {experience.map((exp, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="card">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-3">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3 className="text-lg font-bold">{exp.role}</h3>
                      {exp.current && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-azure-500 font-medium">
                      {exp.company}
                    </p>
                    <div className="flex items-center gap-3 mt-1 text-xs text-[var(--text-muted)]">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                      <span>·</span>
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-[var(--text-muted)] mb-4 leading-relaxed">
                  {exp.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] px-2 py-0.5 rounded bg-azure-500/10 text-azure-400 border border-azure-500/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Letter link */}
                {exp.letter && (
                  <Link
                    href={exp.letter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-azure-500 hover:text-azure-400 transition-colors pt-3 border-t border-[var(--border)]"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    View Letter →
                  </Link>
                )}
              </div>
            </FadeIn>
          ))}
        </div>

        {/* EDUCATION */}
        <FadeIn>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-azure-500/10 border border-azure-500/20">
              <GraduationCap className="w-5 h-5 text-azure-500" />
            </div>
            <h2 className="text-xl font-bold">Education</h2>
          </div>
        </FadeIn>

        <div className="space-y-4">
          {education.map((edu, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="card">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div>
                    <h3 className="text-base font-semibold">{edu.degree}</h3>
                    <p className="text-sm text-[var(--text-muted)] mt-0.5">
                      {edu.institution}
                    </p>
                  </div>
                  <div className="flex flex-col md:items-end gap-1">
                    <span className="text-xs text-[var(--text-muted)] font-mono">
                      {edu.period}
                    </span>
                    {edu.grade && (
                      <span className="text-xs text-emerald-400 italic">
                        {edu.grade}
                      </span>
                    )}
                    {edu.certificate && (
                        <a
                        href={edu.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-azure-500 hover:text-azure-400 transition-colors mt-1"
                        >
                        <FileText className="w-3 h-3" />
                        View Certificate
                        </a>
                    )}    
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}