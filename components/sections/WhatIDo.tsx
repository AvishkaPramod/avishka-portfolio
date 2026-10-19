import { Code2, Cloud, Users } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";

const items = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description:
      "End-to-end web application development — from database schema design to responsive, production-ready interfaces.",
  },
  {
    icon: Cloud,
    title: "Cloud Deployment",
    description:
      "Deploying and managing applications on Microsoft Azure, with CI/CD pipelines via Azure DevOps and GitHub Actions.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Working within agile teams using version control, code reviews, and modern engineering practices to ship quality software.",
  },
];

export default function WhatIDo() {
  return (
    <section className="py-10 md:py-14">
      <div className="container-custom">
        <FadeIn>
          <div className="text-center mb-8">
            <h2 className="section-title">What I Do</h2>
            <p className="section-subtitle">
              Where I focus my engineering energy
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <FadeIn key={item.title} delay={i * 0.05}>
                <div className="card h-full text-center">
                  <div className="inline-flex p-3 rounded-xl bg-azure-500/10 border border-azure-500/20 mb-4">
                    <Icon className="w-6 h-6 text-azure-500" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}