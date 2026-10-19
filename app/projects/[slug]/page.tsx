import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github, CheckCircle2 } from "lucide-react";
import Badge from "@/components/ui/Badge";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} — Avishka Pramod`,
    description: project.description,
  };
}

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const prev = projects[currentIndex - 1];
  const next = projects[currentIndex + 1];

  return (
    <div className="pt-28 pb-16">
      <div className="container-custom max-w-3xl">
        {/* Back link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-azure-500 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        {/* Category */}
        <Badge className="mb-4">{project.category}</Badge>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold mb-3">
          {project.title}
        </h1>

        {/* Description */}
        <p className="text-lg text-[var(--text-muted)] mb-8">
          {project.description}
        </p>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-3 mb-12">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <ExternalLink className="w-4 h-4" />
            View Live Project
          </a>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          )}
        </div>

        {/* Overview */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-3">Overview</h2>
          <p className="text-[var(--text-muted)] leading-relaxed">
            {project.overview}
          </p>
        </section>

        {/* Tech Stack */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-3">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="text-xs px-3 py-1.5 rounded-md bg-[var(--bg-primary)] border border-[var(--border)] text-[var(--text-muted)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Highlights */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-3">Highlights</h2>
          <ul className="space-y-2.5">
            {project.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2.5 text-[var(--text-muted)]">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-1" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Explore Live panel */}
        <section className="mb-12">
          <div className="card text-center bg-gradient-to-br from-azure-900/20 to-azure-500/5 border-azure-500/20">
            <h2 className="text-xl font-bold mb-2">🌐 Explore Live</h2>
            <p className="text-sm text-[var(--text-muted)] mb-5 max-w-md mx-auto">
              This project is live and fully accessible. Click below to explore
              it directly in your browser — no installation required.
            </p>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <ExternalLink className="w-4 h-4" />
              Open {new URL(project.live).hostname}
            </a>
          </div>
        </section>

        {/* Prev / Next nav */}
        <nav className="flex items-center justify-between pt-8 border-t border-[var(--border)]">
          {prev ? (
            <Link
              href={`/projects/${prev.slug}`}
              className="group flex flex-col text-left max-w-[45%]"
            >
              <span className="text-xs text-[var(--text-muted)] mb-1">
                ← Previous
              </span>
              <span className="text-sm font-medium group-hover:text-azure-500 transition-colors truncate">
                {prev.title}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {next ? (
            <Link
              href={`/projects/${next.slug}`}
              className="group flex flex-col text-right max-w-[45%]"
            >
              <span className="text-xs text-[var(--text-muted)] mb-1">
                Next →
              </span>
              <span className="text-sm font-medium group-hover:text-azure-500 transition-colors truncate">
                {next.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </nav>
      </div>
    </div>
  );
}