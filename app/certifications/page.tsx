"use client";

import { useState } from "react";
import { Award, ExternalLink, Download, Clock } from "lucide-react";
import CertCard from "@/components/cards/CertCard";
import Modal from "@/components/ui/Modal";
import { certifications } from "@/data/certifications";

type Cert = (typeof certifications)[number];

export default function CertificationsPage() {
  const [selected, setSelected] = useState<Cert | null>(null);

  return (
    <div className="pt-28 pb-16">
      <div className="container-custom max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="section-title">Certifications</h1>
          <p className="section-subtitle">
            Verified credentials — click any card to preview
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert) => (
            <CertCard
              key={cert.title}
              cert={cert}
              onClick={() => setSelected(cert)}
            />
          ))}
        </div>

        <p className="text-center text-xs text-[var(--text-muted)] mt-10">
          🔒 Certificates are view-only. Verify authenticity via the issuer's
          official portal.
        </p>
      </div>

      {/* Modal */}
      <Modal open={!!selected} onClose={() => setSelected(null)}>
        {selected && (
          <div className="p-5 md:p-7">
            {/* Header */}
            <div className="mb-5 pr-10">
              <div className="flex items-start gap-3">
                <div className={`p-2.5 rounded-lg border ${
                  selected.status === "in-progress"
                    ? "bg-amber-500/10 border-amber-500/20"
                    : "bg-azure-500/10 border-azure-500/20"
                }`}>
                  <Award className={`w-5 h-5 ${
                    selected.status === "in-progress"
                      ? "text-amber-400"
                      : "text-azure-500"
                  }`} />
                </div>
                <div>
                  <h2 className="text-xl font-bold leading-snug">
                    {selected.title}
                  </h2>
                  <p className="text-sm text-[var(--text-muted)] mt-1">
                    {selected.issuer}
                    {selected.date && ` · ${selected.date}`}
                  </p>
                </div>
              </div>
            </div>

            {/* Body */}
            {selected.file ? (
              <>
                <div className="relative w-full rounded-lg overflow-hidden border border-[var(--border)] bg-[var(--bg-primary)]">
                  {selected.file.endsWith(".pdf") ? (
                    <iframe
                      src={`${selected.file}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                      className="w-full h-[60vh]"
                      title={selected.title}
                    />
                  ) : (
                    <img
                      src={selected.file}
                      alt={selected.title}
                      className="w-full h-auto max-h-[60vh] object-contain mx-auto pointer-events-none select-none"
                      draggable={false}
                      onContextMenu={(e) => e.preventDefault()}
                    />
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  {selected.verifyUrl && (
                    <a
                      href={selected.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex-1 justify-center"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Verify on {selected.issuer}
                    </a>
                  )}
                  <a
                    href={selected.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline flex-1 justify-center"
                  >
                    <Download className="w-4 h-4" />
                    Open Full View
                  </a>
                </div>
              </>
            ) : (
              <div className="rounded-lg border border-amber-500/20 bg-amber-500/5 p-8 text-center">
                <div className="inline-flex p-3 rounded-full bg-amber-500/10 border border-amber-500/20 mb-4">
                  <Clock className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Currently in progress
                </h3>
                <p className="text-sm text-[var(--text-muted)] max-w-md mx-auto">
                  I'm currently taking this course on {selected.issuer}. The
                  certificate will be added here once completed.
                </p>
              </div>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
}