import Navigation from "@/components/ui/navigation";
import Hero from "@/components/sections/hero";
import Metrics from "@/components/sections/metrics";
import Headshot from "@/components/sections/headshot";
import Experience from "@/components/sections/experience";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import Achievements from "@/components/sections/achievements";
import CaseStudies from "@/components/sections/case-studies";
import Contact from "@/components/sections/contact";
import ScrollProgress from "@/components/ui/scroll-progress";

export default function Home() {
  return (
    <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <ScrollProgress />
      <Navigation />
      <main className="relative overflow-hidden">
        <Hero />
        <Metrics />
        <Headshot />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <CaseStudies />
        <Contact />
      </main>
      <footer className="py-8 transition-colors duration-300" style={{ backgroundColor: 'var(--card-bg)', borderTop: '1px solid var(--card-border)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p style={{ color: 'var(--text-secondary)' }}>© 2025 Ahmed Ibrahim. All rights reserved.</p>
            <p style={{ color: 'var(--text-secondary)' }} className="mt-2">Built with performance and conversion in mind.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
