import { Briefcase, MapPin, FileText } from "lucide-react";
import Link from "next/link";
import { experience } from "@/data/experience";
import FadeIn from "@/components/animations/FadeIn";

export default function CurrentRole() {
  const current = experience.find((e) => e.current);
  if (!current) return null;

  return (
    <section className="py-14 md:py-18">
      <div className="container-custom">
        <FadeIn>
          <div className="card max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                💼 Currently Working
              </span>
            </div>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
              <div>
                <h3 className="text-2xl font-bold">
                  {current.role} @ {current.company}
                </h3>
                <div className="flex items-center gap-4 mt-2 text-sm text-[var(--text-muted)]">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {current.location}
                  </span>
                  <span>·</span>
                  <span>{current.period}</span>
                </div>
              </div>
            </div>

            <p className="text-[var(--text-muted)] mb-5">
              {current.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-5">
              {current.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1 rounded-full bg-azure-500/10 text-azure-400 border border-azure-500/20"
                >
                  {t}
                </span>
              ))}
            </div>

            <Link
              href="/experience"
              className="inline-flex items-center gap-2 text-sm text-azure-500 hover:text-azure-400 transition-colors font-medium"
            >
              <FileText className="w-4 h-4" />
              Verify Employment →
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}