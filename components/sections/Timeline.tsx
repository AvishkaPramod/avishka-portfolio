import FadeIn from "@/components/animations/FadeIn";
import TimelineItem from "@/components/ui/TimelineItem";
import { experience } from "@/data/experience";
import { education } from "@/data/education";

type TimelineEntry = {
  order: number;
  year: string;
  title: string;
  subtitle: string;
  badge?: string;
  note?: string;
  timeline?: string;
};

export default function Timeline() {
  // Merge and sort by descending (newest first)
  const work: TimelineEntry[] = experience.map((e) => ({
    order: e.order,
    year: e.period.split("–")[1]?.trim() || e.period,
    title: `${e.role}`,
    subtitle: e.company,
    badge: e.current ? "Current" : undefined,
    note: e.period,
  }));

  const edu: TimelineEntry[] = education.map((e) => ({
    order: e.order,
    year: e.period.split("–")[1]?.trim() || e.period,
    title: e.degree,
    subtitle: e.institution,
    note: e.grade,
    badge: undefined,
    timeline: e.period,
  }));

  const all: TimelineEntry[] = [...work, ...edu].sort(
    (a, b) => b.order - a.order
  );

  return (
    <section className="py-10 md:py-14">
      <div className="container-custom">
        <FadeIn>
          <div className="text-center mb-8">
            <h2 className="section-title">My Journey</h2>
            <p className="section-subtitle">
              Education and experience that shaped where I am today
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="max-w-2xl mx-auto">
            {all.map((item, i) => (
              <TimelineItem
                key={i}
                year={item.year}
                title={item.title}
                subtitle={item.subtitle}
                note={item.note}
                badge={item.badge}
                timeline={item.timeline}
                last={i === all.length - 1}
              />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}