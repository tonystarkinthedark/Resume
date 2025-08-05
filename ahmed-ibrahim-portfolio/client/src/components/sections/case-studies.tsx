import { useParallax, useScrollReveal } from "@/hooks/use-parallax";

export default function CaseStudies() {
  const scrollY = useParallax();
  useScrollReveal();

  return (
    <section 
      className="py-32 relative overflow-hidden min-h-screen flex items-center"
      style={{ 
        background: `linear-gradient(135deg, var(--accent-blue) 0%, var(--accent-purple) 100%)`,
        transform: `translateY(${scrollY * -0.25}px)`
      }}
    >
      {/* Enhanced parallax floating elements */}
      <div 
        className="absolute top-10 right-10 w-40 h-40 rounded-full blur-2xl opacity-20"
        style={{ 
          backgroundColor: 'var(--accent-green)',
          transform: `translateY(${scrollY * 0.25}px) scale(${1 + scrollY * 0.0003}) rotate(${scrollY * 0.04}deg)`
        }}
      ></div>
      <div 
        className="absolute bottom-20 left-10 w-56 h-56 rounded-full blur-3xl opacity-15"
        style={{ 
          backgroundColor: 'var(--accent-blue)',
          transform: `translateY(${scrollY * -0.18}px) translateX(${scrollY * 0.08}px) scale(${1 + scrollY * 0.0002})`
        }}
      ></div>
      <div 
        className="absolute top-1/3 left-1/3 w-32 h-32 rounded-full blur-xl opacity-25"
        style={{ 
          backgroundColor: 'var(--accent-purple)',
          transform: `translateY(${scrollY * 0.35}px) translateX(${scrollY * -0.06}px) rotate(${scrollY * -0.06}deg)`
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="scroll-reveal text-reveal text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Real client results that demonstrate the power of strategic digital marketing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="scroll-reveal slide-in-left stagger-1 glass-card p-8 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">Teca Restaurant</h3>
            <p className="text-slate-300 mb-6">Complete website redesign and online ordering system implementation</p>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-slate-400">Gift Card Sales (3 months)</span>
                <span className="text-green-400 font-semibold">$20,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Private Event Bookings</span>
                <span className="text-green-400 font-semibold">20+ Events</span>
              </div>
            </div>
          </div>

          <div className="scroll-reveal slide-in-right stagger-2 glass-card p-8 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-bold text-purple-400 mb-4">Ascent Dental</h3>
            <p className="text-slate-300 mb-6">Full digital marketing strategy with website rebuild and multi-channel campaigns</p>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-slate-400">Market Position</span>
                <span className="text-green-400 font-semibold">#1 in Area</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Partnership Duration</span>
                <span className="text-green-400 font-semibold">8 Months</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
