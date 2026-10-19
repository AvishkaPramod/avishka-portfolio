import Bio from "@/components/sections/Bio";
import Timeline from "@/components/sections/Timeline";
import WhatIDo from "@/components/sections/WhatIDo";
import DocumentsSection from "@/components/sections/DocumentsSection";
import Languages from "@/components/sections/Languages";
import ContactSection from "@/components/sections/ContactSection";

export const metadata = {
  title: "About — Avishka Pramod Pathirana",
  description:
    "Full Stack Engineer currently working at SYNCONIC (Pvt) Ltd. Learn more about my journey, skills, and background.",
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-16">
      <Bio />
      <Timeline />
      <WhatIDo />
      <DocumentsSection />
      <Languages />
      <ContactSection />
    </div>
  );
}