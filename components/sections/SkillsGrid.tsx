import * as Icons from "lucide-react";
import { skills } from "@/data/skills";
import FadeIn from "@/components/animations/FadeIn";

export default function SkillsGrid() {
  return (
    <section className="py-8 md:py-10">
      <div className="container-custom">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="section-title">Skills & Expertise</h2>
            <p className="section-subtitle">
              Tools and technologies I work with daily
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((group, i) => {
            const Icon = (Icons[group.icon as keyof typeof Icons] ||
              Icons.Code) as React.ComponentType<{ className?: string }>;
            return (
              <FadeIn key={group.category} delay={i * 0.05}>
                <div className="card h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-azure-500/10 border border-azure-500/20">
                      <Icon className="w-5 h-5 text-azure-500" />
                    </div>
                    <h3 className="font-semibold text-lg">{group.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs px-2.5 py-1 rounded-md bg-[var(--bg-primary)] border border-[var(--border)] text-[var(--text-muted)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}