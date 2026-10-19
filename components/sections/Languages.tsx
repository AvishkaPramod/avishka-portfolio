import { Languages as LanguagesIcon } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";

const languages = [
  { name: "English", level: "Basic", percent: 60 },
  { name: "Sinhala", level: "Native", percent: 100 },
];

export default function Languages() {
  return (
    <section className="py-10 md:py-14">
      <div className="container-custom">
        <FadeIn>
          <div className="text-center mb-8">
            <h2 className="section-title">Languages</h2>
            <p className="section-subtitle">Communication I bring to the table</p>
          </div>
        </FadeIn>

        <div className="max-w-2xl mx-auto space-y-5">
          {languages.map((lang, i) => (
            <FadeIn key={lang.name} delay={i * 0.05}>
              <div className="card">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <LanguagesIcon className="w-4 h-4 text-azure-500" />
                    <span className="font-semibold">{lang.name}</span>
                  </div>
                  <span className="text-xs text-[var(--text-muted)]">
                    {lang.level}
                  </span>
                </div>
                <div className="h-1.5 rounded-full bg-[var(--bg-primary)] overflow-hidden">
                  <div
                    className="h-full bg-azure-500 rounded-full transition-all"
                    style={{ width: `${lang.percent}%` }}
                  />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}