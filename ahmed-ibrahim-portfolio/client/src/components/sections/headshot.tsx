import { useParallax, useScrollReveal } from "@/hooks/use-parallax";
import { User, Award, Target, TrendingUp } from "lucide-react";

export default function Headshot() {
  const scrollY = useParallax();
  useScrollReveal();

  return (
    <section 
      className="py-32 relative overflow-hidden transition-colors duration-300 min-h-screen flex items-center" 
      style={{ 
        background: `linear-gradient(135deg, var(--accent-blue) 0%, var(--accent-purple) 100%)`,
        transform: `translateY(${scrollY * -0.4}px)`
      }}
    >
      {/* Enhanced parallax floating elements with more depth */}
      <div 
        className="absolute top-20 left-10 w-32 h-32 rounded-full blur-2xl opacity-20"
        style={{ 
          backgroundColor: 'var(--accent-green)',
          transform: `translateY(${scrollY * 0.25}px) scale(${1 + scrollY * 0.0002}) rotate(${scrollY * -0.02}deg)`
        }}
      ></div>
      <div 
        className="absolute bottom-20 right-10 w-48 h-48 rounded-full blur-3xl opacity-15"
        style={{ 
          backgroundColor: 'var(--accent-purple)',
          transform: `translateY(${scrollY * -0.2}px) translateX(${scrollY * 0.08}px) scale(${1 - scrollY * 0.0001})`
        }}
      ></div>
      <div 
        className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full blur-xl opacity-25"
        style={{ 
          backgroundColor: 'var(--accent-blue)',
          transform: `translateY(${scrollY * 0.35}px) rotate(${scrollY * 0.15}deg) scale(${1 + scrollY * 0.0001})`
        }}
      ></div>
      <div 
        className="absolute top-10 left-1/3 w-20 h-20 rounded-full blur-lg opacity-30"
        style={{ 
          backgroundColor: 'var(--accent-green)',
          transform: `translateY(${scrollY * -0.15}px) translateX(${scrollY * -0.05}px)`
        }}
      ></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="scroll-reveal text-reveal mb-8">
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Meet <span className="gradient-text">Ahmed Ibrahim</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              A strategic digital marketing professional with an entrepreneurial mindset, 
              specializing in performance marketing that drives real business growth and measurable results.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Professional photo placeholder */}
          <div className="scroll-reveal scale-reveal stagger-1 text-center">
            <div className="relative inline-block">
              <div 
                className="w-64 h-64 mx-auto rounded-full shadow-2xl relative overflow-hidden"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  border: '4px solid var(--accent-blue)',
                  transform: `translateY(${scrollY * 0.05}px)`
                }}
              >
                <div className="flex items-center justify-center h-full">
                  <User className="w-20 h-20" style={{ color: 'var(--accent-blue)' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Key attributes grid */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-8">
            <div className="scroll-reveal scale-reveal stagger-2 text-center p-8 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:transform hover:scale-105 transition-all duration-300">
              <TrendingUp className="w-10 h-10 text-green-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">6+ Years</div>
              <div className="text-blue-100">Digital Marketing Experience</div>
            </div>
            
            <div className="scroll-reveal scale-reveal stagger-3 text-center p-8 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:transform hover:scale-105 transition-all duration-300">
              <Target className="w-10 h-10 text-purple-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">$1.5M+</div>
              <div className="text-blue-100">Ad Spend Managed</div>
            </div>
          </div>
        </div>

        {/* Core competencies */}
        <div className="mt-20 text-center">
          <div className="scroll-reveal slide-in-up stagger-4">
            <h3 className="text-2xl font-bold text-white mb-8">Core Competencies</h3>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {['Google Ads', 'Facebook Ads', 'Marketing Automation', 'Performance Analytics', 'Lead Generation', 'Conversion Optimization'].map((skill, index) => (
                <span 
                  key={skill}
                  className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-blue-100 border border-white/20 hover:bg-white/20 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}