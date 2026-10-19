import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import Badge from "@/components/ui/Badge";

type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  live: string;
  stack: string[];
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="card h-full flex flex-col group">
      {/* Category */}
      <Badge className="self-start mb-4">{project.category}</Badge>

      {/* Title (links to detail) */}
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
  );
}