import Hero from "@/components/sections/Hero";
import CurrentRole from "@/components/sections/CurrentRole";
import SkillsGrid from "@/components/sections/SkillsGrid";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <CurrentRole />
      <SkillsGrid />
      <FeaturedProjects />
      <CTASection />
    </>
  );
}