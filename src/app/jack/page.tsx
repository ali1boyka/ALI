import { HeroSection } from "@/components/jack/hero-section";
import { MarqueeSection } from "@/components/jack/marquee-section";
import { AboutSection } from "@/components/jack/about-section";
import { ServicesSection } from "@/components/jack/services-section";
import { ProjectsSection } from "@/components/jack/projects-section";

export default function JackPage() {
  return (
    <main className="jack-root" style={{ overflowX: "clip" }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
    </main>
  );
}
