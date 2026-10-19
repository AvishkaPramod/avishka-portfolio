import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";

export default function CTASection() {
  return (
    <section className="py-8 md:py-10">
      <div className="container-custom">
        <FadeIn>
          <div className="card text-center max-w-3xl mx-auto bg-gradient-to-br from-azure-900/20 to-azure-500/5 border-azure-500/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's build something together
            </h2>
            <p className="text-[var(--text-muted)] mb-8 max-w-xl mx-auto">
              Available for full-time roles and freelance opportunities.
              Let's talk about how I can help your team.
            </p>
            <Link href="/about#contact" className="btn-primary">
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}