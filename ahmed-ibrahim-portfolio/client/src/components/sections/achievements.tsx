import { Award, BarChart, Code, TrendingUp, Users, GraduationCap } from "lucide-react";
import { useParallax, useScrollReveal } from "@/hooks/use-parallax";

export default function Achievements() {
  const scrollY = useParallax();
  useScrollReveal();

  return (
    <section 
      id="achievements" 
      className="py-32 relative overflow-hidden transition-colors duration-300 min-h-screen" 
      style={{ 
        backgroundColor: 'var(--card-bg)',
        transform: `translateY(${scrollY * -0.05}px)`
      }}
    >
      {/* Enhanced parallax background elements */}
      <div 
        className="absolute top-20 left-10 w-48 h-48 rounded-full blur-3xl opacity-8"
        style={{ 
          backgroundColor: 'var(--accent-green)',
          transform: `translateY(${scrollY * 0.22}px) scale(${1 + scrollY * 0.0002}) rotate(${scrollY * 0.04}deg)`
        }}
      ></div>
      <div 
        className="absolute bottom-10 right-1/4 w-32 h-32 rounded-full blur-2xl opacity-12"
        style={{ 
          backgroundColor: 'var(--accent-blue)',
          transform: `translateY(${scrollY * -0.16}px) translateX(${scrollY * -0.07}px) scale(${1 + scrollY * 0.0001})`
        }}
      ></div>
      <div 
        className="absolute top-1/2 left-1/3 w-28 h-28 rounded-full blur-xl opacity-15"
        style={{ 
          backgroundColor: 'var(--accent-purple)',
          transform: `translateY(${scrollY * 0.3}px) translateX(${scrollY * 0.05}px) rotate(${scrollY * -0.05}deg)`
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="scroll-reveal text-reveal text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Certifications & Achievements</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Professional credentials that validate expertise and commitment to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="scroll-reveal scale-reveal stagger-1 glass-card p-8 rounded-xl text-center hover:transform hover:scale-105 transition-all duration-300 border border-blue-200/20">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>Google Ads Certified</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Search, Display, Shopping, Apps, Video</p>
          </div>

          <div className="scroll-reveal scale-reveal stagger-2 glass-card p-8 rounded-xl text-center hover:transform hover:scale-105 transition-all duration-300 border border-green-200/20">
            <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <BarChart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>Google Analytics Certified</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Advanced Analytics & Reporting</p>
          </div>

          <div className="scroll-reveal scale-reveal stagger-3 glass-card p-8 rounded-xl text-center hover:transform hover:scale-105 transition-all duration-300 border border-purple-200/20">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <Code className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>Automation Expert</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Custom scripts & process optimization</p>
          </div>

          <div className="scroll-reveal scale-reveal stagger-4 glass-card p-8 rounded-xl text-center hover:transform hover:scale-105 transition-all duration-300 border border-orange-200/20">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>Performance Leader</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Consistent high-performing campaigns</p>
          </div>

          <div className="scroll-reveal scale-reveal stagger-5 glass-card p-8 rounded-xl text-center hover:transform hover:scale-105 transition-all duration-300 border border-teal-200/20">
            <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-teal-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>Team Leadership</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Training & knowledge sharing</p>
          </div>

          <div className="scroll-reveal scale-reveal stagger-6 glass-card p-8 rounded-xl text-center hover:transform hover:scale-105 transition-all duration-300 border border-indigo-200/20">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>Digital Marketing Degree</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Wilmington University (In Progress)</p>
          </div>
        </div>
      </div>
    </section>
  );
}
