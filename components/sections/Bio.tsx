import Image from "next/image";
import { MapPin, Briefcase } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import { personal } from "@/data/contact";

export default function Bio() {
  return (
    <section className="py-10 md:py-14">
      <div className="container-custom">
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 md:gap-12 items-center">
            {/* Photo */}
            <div className="flex justify-center md:justify-start">
              <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-azure-500/30 shadow-2xl shadow-azure-500/10">
                <Image
                  src={personal.avatar}
                  alt={personal.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Text */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-3">
                Hi, I'm <span className="text-azure-500">{personal.shortName}</span> 👋
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)] mb-5">
                <span className="flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4" />
                  {personal.title}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  {personal.location}
                </span>
              </div>

              <div className="space-y-4 text-[var(--text-muted)] leading-relaxed">
                <p>
                  I'm a Full Stack Engineer currently working at{" "}
                  <span className="text-[var(--text-primary)] font-medium">
                    {personal.currentCompany}
                  </span>
                  , where I build scalable web applications across the full
                  development lifecycle — from system analysis and design to
                  deployment and maintenance.
                </p>
                <p>
                  My day-to-day work spans the modern engineering stack:
                  Next.js and Angular on the frontend, C# and .NET Core on the
                  backend, and MySQL, Supabase, and MS SQL Server for data.
                  Cloud deployments run on Microsoft Azure and also support CI/CD pipeline management via Azure DevOps.
                </p>
                <p>
                  I enjoy turning complex problems into clean, maintainable
                  solutions. Whether it's architecting a RESTful API,
                  optimizing database performance, or building an intuitive
                  user interface, I care about writing code that lasts.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}