import { CheckCircle, TrendingUp, Target, Code, Users, Zap, DollarSign, BarChart3, Briefcase } from "lucide-react";
import { useParallax, useScrollReveal } from "@/hooks/use-parallax";

export default function Experience() {
  const scrollY = useParallax();
  useScrollReveal();

  return (
    <section 
      id="experience" 
      className="py-32 relative overflow-hidden transition-colors duration-300 min-h-screen" 
      style={{ 
        backgroundColor: 'var(--bg-primary)',
        transform: `translateY(${scrollY * -0.2}px)`
      }}
    >
      {/* Enhanced parallax background elements */}
      <div 
        className="absolute top-20 right-20 w-40 h-40 rounded-full blur-2xl opacity-10"
        style={{ 
          backgroundColor: 'var(--accent-purple)',
          transform: `translateY(${scrollY * -0.25}px) scale(${1 + scrollY * 0.0002}) rotate(${scrollY * 0.03}deg)`
        }}
      ></div>
      <div 
        className="absolute bottom-20 left-10 w-60 h-60 rounded-full blur-3xl opacity-8"
        style={{ 
          backgroundColor: 'var(--accent-green)',
          transform: `translateY(${scrollY * 0.15}px) translateX(${scrollY * 0.08}px) scale(${1 + scrollY * 0.0001})`
        }}
      ></div>
      <div 
        className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full blur-xl opacity-12"
        style={{ 
          backgroundColor: 'var(--accent-blue)',
          transform: `translateY(${scrollY * 0.3}px) translateX(${scrollY * -0.06}px) rotate(${scrollY * -0.04}deg)`
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="scroll-reveal text-reveal text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Professional Journey</span>
          </h2>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            From Junior Media Buyer to Senior Digital Marketing Strategist. A story of growth, innovation, and measurable impact across diverse marketing challenges.
          </p>
        </div>
        
        <div className="space-y-16">
          {/* Current Senior Role with scroll animations */}
          <div className="scroll-reveal slide-in-left stagger-1 glass-card p-8 rounded-xl hover:transform hover:scale-[1.02] transition-all duration-300 border border-blue-200/20">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
              <div className="flex-1">
                <div className="flex items-center mb-3">
                  <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                  <h3 className="text-2xl lg:text-3xl font-bold text-blue-600 dark:text-blue-400">Senior Digital Marketing Strategist</h3>
                </div>
                <p className="text-lg mb-2" style={{ color: 'var(--text-secondary)' }}>V Digital Services • Phoenix, AZ</p>
                <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold" 
                     style={{ backgroundColor: 'var(--accent-green)', color: 'white' }}>
                  Oct 2024 - Present • Remote Ready
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-6">
              <div>
                <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">Strategic Leadership & Results</h4>
                <ul className="space-y-4 text-slate-700 dark:text-slate-300">
                  <li className="flex items-start">
                    <DollarSign className="w-5 h-5 text-green-600 dark:text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    Managed <strong className="text-green-600 dark:text-green-400">$1.5M+</strong> annual ad spend across 50+ accounts in healthcare, legal, and hospitality
                  </li>
                  <li className="flex items-start">
                    <BarChart3 className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                    Consistently delivered cost-effective campaigns while driving 28–200+ monthly conversions per account
                  </li>
                  <li className="flex items-start">
                    <Users className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                    Collaborated with CSMs to develop optimization plans and monthly reports that boosted client retention and upsells
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">Innovation & Automation</h4>
                <ul className="space-y-4 text-slate-700 dark:text-slate-300">
                  <li className="flex items-start">
                    <Code className="w-5 h-5 text-purple-600 dark:text-purple-400 mr-3 mt-0.5 flex-shrink-0" />
                    Built and deployed custom Google Ads QA script saving <strong className="text-purple-600 dark:text-purple-400">$65K+ annually</strong>
                  </li>
                  <li className="flex items-start">
                    <Zap className="w-5 h-5 text-orange-600 dark:text-orange-400 mr-3 mt-0.5 flex-shrink-0" />
                    Automated campaign review process, reducing manual work by <strong className="text-orange-600 dark:text-orange-400">80%</strong>
                  </li>
                  <li className="flex items-start">
                    <Users className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    Led company-wide training on automation tools, enabling hire of additional team member
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-50 to-green-50 dark:from-cyan-900/20 dark:to-green-900/20 p-6 rounded-lg">
              <p className="text-gray-700 dark:text-slate-300">
                <strong>Entrepreneurial Impact:</strong> Brought agency owner mindset to corporate role, identifying inefficiencies 
                and implementing solutions that directly contributed to company growth and profitability.
              </p>
            </div>
          </div>

          {/* Entrepreneurial Experience */}
          <div className="scroll-reveal slide-in-right stagger-2 glass-card p-8 rounded-xl hover:transform hover:scale-[1.02] transition-all duration-300 border border-green-200/20">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
              <div className="flex-1">
                <div className="flex items-center mb-3">
                  <Briefcase className="w-6 h-6 text-purple-400 mr-3" />
                  <h3 className="text-2xl lg:text-3xl font-bold text-purple-400">Founder & Marketing Strategist</h3>
                </div>
                <p className="text-lg text-gray-700 dark:text-slate-300 mb-2">IbraMarketing (Digital Marketing Agency) • Remote</p>
                <div className="inline-flex items-center bg-purple-400/20 text-purple-400 px-4 py-2 rounded-full text-sm font-semibold">
                  2017 - 2022 • Agency Owner
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-slate-200 mb-4">Business Development</h4>
                <ul className="space-y-3 text-gray-700 dark:text-slate-300">
                  <li className="flex items-start">
                    <Users className="w-5 h-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" />
                    Built and managed full-service digital marketing agency serving 15+ clients across multiple industries
                  </li>
                  <li className="flex items-start">
                    <DollarSign className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    Generated <strong className="text-green-400">$500K+</strong> in revenue through strategic client partnerships
                  </li>
                  <li className="flex items-start">
                    <BarChart3 className="w-5 h-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                    Achieved average <strong className="text-cyan-400">20:1 ROI</strong> for clients through data-driven campaigns
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-slate-200 mb-4">Client Success Stories</h4>
                <ul className="space-y-3 text-gray-700 dark:text-slate-300">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    Teca Restaurant: <strong className="text-green-400">$20K</strong> in gift card sales, 20+ private events booked
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                    Ascent Dental: Became <strong className="text-blue-400">#1 practice</strong> in Dallas area within 6 months
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Corporate Experience - Growth Path */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-slate-200 mb-4">Corporate Career Progression</h3>
              <p className="text-gray-600 dark:text-slate-400">Rapid advancement from Junior to Senior roles through consistent performance and innovation</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="experience-card">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-6 h-6 text-blue-400 mr-3" />
                  <h3 className="text-xl font-bold text-gray-800 dark:text-slate-200">Media Buyer</h3>
                </div>
                <p className="text-gray-700 dark:text-slate-300 mb-3">Blueprint Digital LLC • Atlanta, GA | Feb 2022 - Oct 2023</p>
                <ul className="space-y-2 text-gray-700 dark:text-slate-300">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-2 mt-1 flex-shrink-0" />
                    Scaled client base by <strong className="text-blue-400">50%</strong> through strategic PPC execution
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-2 mt-1 flex-shrink-0" />
                    Led cross-channel teams driving <strong className="text-blue-400">20%</strong> overall revenue growth
                  </li>
                </ul>
              </div>

              <div className="experience-card">
                <div className="flex items-center mb-4">
                  <Target className="w-6 h-6 text-orange-400 mr-3" />
                  <h3 className="text-xl font-bold text-gray-800 dark:text-slate-200">Associate Media Buyer</h3>
                </div>
                <p className="text-gray-700 dark:text-slate-300 mb-3">ReachMobi • Philadelphia, PA | Feb 2021 - Feb 2022</p>
                <ul className="space-y-2 text-gray-700 dark:text-slate-300">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-orange-400 mr-2 mt-1 flex-shrink-0" />
                    Achieved <strong className="text-orange-400">15:1 ROI</strong> managing $1M+ budget for mobile app acquisitions
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-orange-400 mr-2 mt-1 flex-shrink-0" />
                    Reduced CPA by <strong className="text-orange-400">25%</strong> through advanced segmentation strategies
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
