import { Zap, Code, Globe } from "lucide-react";
import { useParallax, useScrollReveal } from "@/hooks/use-parallax";

export default function Skills() {
  const scrollY = useParallax();
  useScrollReveal();

  return (
    <section 
      id="skills" 
      className="py-32 relative overflow-hidden transition-colors duration-300 min-h-screen" 
      style={{ 
        backgroundColor: 'var(--bg-primary)',
        transform: `translateY(${scrollY * -0.15}px)`
      }}
    >
      {/* Enhanced parallax background elements */}
      <div 
        className="absolute top-20 right-10 w-64 h-64 rounded-full blur-2xl opacity-10"
        style={{ 
          backgroundColor: 'var(--accent-blue)',
          transform: `translateY(${scrollY * 0.2}px) translateX(${scrollY * -0.08}px) scale(${1 + scrollY * 0.0002}) rotate(${scrollY * 0.04}deg)`
        }}
      ></div>
      <div 
        className="absolute bottom-20 left-10 w-96 h-96 rounded-full blur-3xl opacity-8"
        style={{ 
          backgroundColor: 'var(--accent-green)',
          transform: `translateY(${scrollY * -0.15}px) translateX(${scrollY * 0.06}px) scale(${1 + scrollY * 0.0001})`
        }}
      ></div>
      <div 
        className="absolute top-1/3 left-1/3 w-28 h-28 rounded-full blur-xl opacity-15"
        style={{ 
          backgroundColor: 'var(--accent-purple)',
          transform: `translateY(${scrollY * 0.25}px) translateX(${scrollY * -0.04}px) rotate(${scrollY * -0.06}deg)`
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="scroll-reveal text-reveal text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Core Expertise</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Specialized skills honed through years of hands-on experience and continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Advertising Platforms */}
          <div className="scroll-reveal slide-in-left stagger-1 glass-card p-8 text-center hover:transform hover:scale-105 transition-all duration-300">
            <div className="mb-6">
              <Zap className="w-16 h-16 mx-auto mb-4" style={{ color: 'var(--accent-blue)' }} />
              <h3 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                Advertising Platforms
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span style={{ color: 'var(--text-secondary)' }}>Google Ads</span>
                <span style={{ color: 'var(--accent-blue)' }} className="font-semibold">Expert</span>
              </div>
              <div className="flex justify-between">
                <span style={{ color: 'var(--text-secondary)' }}>Facebook Ads</span>
                <span style={{ color: 'var(--accent-green)' }} className="font-semibold">Expert</span>
              </div>
              <div className="flex justify-between">
                <span style={{ color: 'var(--text-secondary)' }}>Microsoft Ads</span>
                <span style={{ color: 'var(--accent-purple)' }} className="font-semibold">Advanced</span>
              </div>
            </div>
          </div>

          {/* Automation & Technical */}
          <div className="scroll-reveal scale-reveal stagger-2 glass-card p-8 text-center hover:transform hover:scale-105 transition-all duration-300">
            <div className="mb-6">
              <Code className="w-16 h-16 mx-auto mb-4" style={{ color: 'var(--accent-green)' }} />
              <h3 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                Automation & Technical
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span style={{ color: 'var(--text-secondary)' }}>Google Ads Scripts</span>
                <span style={{ color: 'var(--accent-blue)' }} className="font-semibold">Expert</span>
              </div>
              <div className="flex justify-between">
                <span style={{ color: 'var(--text-secondary)' }}>Google Sheets</span>
                <span style={{ color: 'var(--accent-green)' }} className="font-semibold">Expert</span>
              </div>
              <div className="flex justify-between">
                <span style={{ color: 'var(--text-secondary)' }}>Process Automation</span>
                <span style={{ color: 'var(--accent-purple)' }} className="font-semibold">Advanced</span>
              </div>
            </div>
          </div>

          {/* Analytics & Insights */}
          <div className="scroll-reveal slide-in-right stagger-3 glass-card p-8 text-center hover:transform hover:scale-105 transition-all duration-300">
            <div className="mb-6">
              <Globe className="w-16 h-16 mx-auto mb-4" style={{ color: 'var(--accent-purple)' }} />
              <h3 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                Analytics & Insights
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span style={{ color: 'var(--text-secondary)' }}>Google Analytics</span>
                <span style={{ color: 'var(--accent-blue)' }} className="font-semibold">Expert</span>
              </div>
              <div className="flex justify-between">
                <span style={{ color: 'var(--text-secondary)' }}>Looker Studio</span>
                <span style={{ color: 'var(--accent-green)' }} className="font-semibold">Advanced</span>
              </div>
              <div className="flex justify-between">
                <span style={{ color: 'var(--text-secondary)' }}>Data Analysis</span>
                <span style={{ color: 'var(--accent-purple)' }} className="font-semibold">Expert</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}