"use client";

import { useState } from "react";
import * as Icons from "lucide-react";
import { Copy, Check, ArrowUpRight } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import { contact } from "@/data/contact";

export default function ContactSection() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = async (value: string, label: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(label);
      setTimeout(() => setCopied(null), 1500);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  return (
    <section id="contact" className="py-10 md:py-14">
      <div className="container-custom">
        <FadeIn>
          <div className="text-center mb-8">
            <h2 className="section-title">📬 Let's Connect</h2>
            <p className="section-subtitle">
              Open to full-time roles and freelance opportunities
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {contact.map((item, i) => {
            const Icon = (Icons[item.icon as keyof typeof Icons] ||
              Icons.Link) as React.ComponentType<{ className?: string }>;

            const isCopied = copied === item.label;
            const hasLink = !!item.href;

            return (
              <FadeIn key={item.label} delay={i * 0.05}>
                <div className="card flex items-center gap-3">
                  {/* Left icon */}
                  <div className="p-2.5 rounded-lg bg-azure-500/10 border border-azure-500/20 flex-shrink-0">
                    <Icon className="w-5 h-5 text-azure-500" />
                  </div>

                  {/* Label + value */}
                  <div className="flex-1 min-w-0">
                    <p className="text-xs uppercase tracking-wider text-[var(--text-muted)] font-medium">
                      {item.label}
                    </p>
                    <p className="text-sm text-[var(--text-primary)] truncate mt-0.5">
                      {item.value}
                    </p>
                  </div>

                  {/* Action icons */}
                  <div className="flex items-center gap-1 flex-shrink-0">
                    {/* Copy icon */}
                    <button
                      onClick={() => handleCopy(item.value, item.label)}
                      aria-label={`Copy ${item.label}`}
                      className="p-1.5 rounded-md text-[var(--text-muted)] hover:text-azure-500 hover:bg-azure-500/10 transition-all"
                    >
                      {isCopied ? (
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>

                    {/* Open icon (only if link exists) */}
                    {hasLink && (
                      <a
                        href={item.href!}
                        target={item.href!.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        aria-label={`Open ${item.label}`}
                        className="p-1.5 rounded-md text-[var(--text-muted)] hover:text-azure-500 hover:bg-azure-500/10 transition-all"
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
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