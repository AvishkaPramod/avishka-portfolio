import * as Icons from "lucide-react";
import { Download } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import { documents } from "@/data/documents";

export default function DocumentsSection() {
  return (
    <section id="documents" className="py-10 md:py-14">
      <div className="container-custom">
        <FadeIn>
          <div className="text-center mb-8">
            <h2 className="section-title">📥 Documents</h2>
            <p className="section-subtitle">
              Download my CV and official letters
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {documents.map((doc, i) => {
            const Icon = (Icons[doc.icon as keyof typeof Icons] ||
              Icons.FileText) as React.ComponentType<{ className?: string }>;
            return (
              <FadeIn key={doc.title} delay={i * 0.05}>
                <a
                  href={doc.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card h-full flex flex-col group"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2.5 rounded-lg bg-azure-500/10 border border-azure-500/20">
                      <Icon className="w-5 h-5 text-azure-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold group-hover:text-azure-500 transition-colors">
                        {doc.title}
                      </h3>
                      <p className="text-xs text-[var(--text-muted)] mt-1">
                        {doc.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-medium text-azure-500 mt-auto pt-3 border-t border-[var(--border)] group-hover:gap-2.5 transition-all">
                    <Download className="w-3.5 h-3.5" />
                    Download PDF
                  </div>
                </a>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}