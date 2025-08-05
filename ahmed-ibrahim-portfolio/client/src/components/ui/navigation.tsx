import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ui/theme-toggle";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl gradient-text">Ahmed Ibrahim</div>
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
              <button onClick={() => scrollToSection('experience')} className="nav-link">Experience</button>
              <button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button>
              <button onClick={() => scrollToSection('skills')} className="nav-link">Skills</button>
              <button onClick={() => scrollToSection('achievements')} className="nav-link">Achievements</button>
              <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
              <ThemeToggle />
            </div>
            <div className="flex items-center space-x-2 md:hidden">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-700 dark:text-slate-300"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="glass-card h-full pt-20 backdrop-blur-md">
            <div className="flex flex-col space-y-6 px-6">
              <button onClick={() => scrollToSection('home')} className="nav-link text-lg text-left">Home</button>
              <button onClick={() => scrollToSection('experience')} className="nav-link text-lg text-left">Experience</button>
              <button onClick={() => scrollToSection('projects')} className="nav-link text-lg text-left">Projects</button>
              <button onClick={() => scrollToSection('skills')} className="nav-link text-lg text-left">Skills</button>
              <button onClick={() => scrollToSection('achievements')} className="nav-link text-lg text-left">Achievements</button>
              <button onClick={() => scrollToSection('contact')} className="nav-link text-lg text-left">Contact</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
