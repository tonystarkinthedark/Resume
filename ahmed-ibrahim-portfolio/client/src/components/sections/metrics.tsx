import { useParallax, useScrollReveal } from "@/hooks/use-parallax";
import { TrendingUp, Target, Users, DollarSign } from "lucide-react";
import AnimatedCounter from "@/components/ui/animated-counter";

export default function Metrics() {
  const scrollY = useParallax();
  useScrollReveal();

  return (
    <>
      {/* Parallax transition section */}
      <section 
        className="py-32 relative overflow-hidden min-h-screen flex items-center"
        style={{ 
          background: `linear-gradient(135deg, var(--bg-primary) 0%, var(--accent-blue) 100%)`,
          transform: `translateY(${scrollY * -0.5}px)`
        }}
      >
        {/* Enhanced floating elements with more depth */}
        <div 
          className="absolute top-10 left-1/4 w-32 h-32 rounded-full blur-3xl opacity-20"
          style={{ 
            backgroundColor: 'var(--accent-green)',
            transform: `translateY(${scrollY * 0.35}px) scale(${1 + scrollY * 0.0003}) rotate(${scrollY * 0.05}deg)`
          }}
        ></div>
        <div 
          className="absolute bottom-10 right-1/4 w-48 h-48 rounded-full blur-3xl opacity-15"
          style={{ 
            backgroundColor: 'var(--accent-purple)',
            transform: `translateY(${scrollY * -0.25}px) scale(${1 + scrollY * 0.0002}) translateX(${scrollY * 0.1}px)`
          }}
        ></div>
        <div 
          className="absolute top-1/3 right-10 w-24 h-24 rounded-full blur-2xl opacity-25"
          style={{ 
            backgroundColor: 'var(--accent-blue)',
            transform: `translateY(${scrollY * 0.4}px) translateX(${scrollY * -0.08}px) rotate(${scrollY * -0.06}deg)`
          }}
        ></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="scroll-reveal text-reveal">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8">
              Proven <span className="gradient-text">Performance</span>
            </h2>
          </div>
          <div className="scroll-reveal slide-in-up stagger-2">
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-16">
              Data-driven results that speak for themselves. Every campaign optimized for maximum ROI and sustainable growth.
            </p>
          </div>

          {/* Animated metrics cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="scroll-reveal scale-reveal stagger-1 glass-card p-8 text-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:transform hover:scale-105 hover:bg-white/15 transition-all duration-300">
              <DollarSign className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">$1.5M+</div>
              <div className="text-blue-100">Ad Spend Managed</div>
            </div>
            <div className="scroll-reveal scale-reveal stagger-2 glass-card p-8 text-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:transform hover:scale-105 hover:bg-white/15 transition-all duration-300">
              <TrendingUp className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">15:1</div>
              <div className="text-blue-100">Average ROI</div>
            </div>
            <div className="scroll-reveal scale-reveal stagger-3 glass-card p-8 text-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:transform hover:scale-105 hover:bg-white/15 transition-all duration-300">
              <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-blue-100">Client Accounts</div>
            </div>
            <div className="scroll-reveal scale-reveal stagger-4 glass-card p-8 text-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:transform hover:scale-105 hover:bg-white/15 transition-all duration-300">
              <Target className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">$65K+</div>
              <div className="text-blue-100">Annual Savings</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
