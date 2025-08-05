import { Code, Zap, TrendingUp, BarChart3, ChefHat, AlertTriangle, Smartphone } from "lucide-react";
import { useParallax, useScrollReveal } from "@/hooks/use-parallax";

export default function Projects() {
  const scrollY = useParallax();
  useScrollReveal();

  return (
    <section 
      className="py-32 relative overflow-hidden transition-colors duration-300 min-h-screen" 
      style={{ 
        backgroundColor: 'var(--card-bg)',
        transform: `translateY(${scrollY * -0.1}px)`
      }}
    >
      {/* Enhanced parallax background elements */}
      <div 
        className="absolute top-20 left-10 w-44 h-44 rounded-full blur-2xl opacity-8"
        style={{ 
          backgroundColor: 'var(--accent-purple)',
          transform: `translateY(${scrollY * 0.18}px) scale(${1 + scrollY * 0.0002}) rotate(${scrollY * 0.03}deg)`
        }}
      ></div>
      <div 
        className="absolute bottom-20 right-20 w-64 h-64 rounded-full blur-3xl opacity-6"
        style={{ 
          backgroundColor: 'var(--accent-green)',
          transform: `translateY(${scrollY * -0.22}px) translateX(${scrollY * 0.07}px) scale(${1 + scrollY * 0.0001})`
        }}
      ></div>
      <div 
        className="absolute top-1/3 right-1/3 w-36 h-36 rounded-full blur-xl opacity-10"
        style={{ 
          backgroundColor: 'var(--accent-blue)',
          transform: `translateY(${scrollY * 0.25}px) translateX(${scrollY * -0.06}px) rotate(${scrollY * -0.04}deg)`
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="scroll-reveal text-reveal text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Innovation Projects</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Custom solutions built to solve real business problems, automate processes, and deliver exceptional results.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Red Flag Campaign Monitor */}
          <div className="scroll-reveal slide-in-left stagger-1 glass-card p-8 rounded-xl hover:transform hover:scale-105 transition-all duration-300 border border-red-200/30">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mr-4">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-slate-200">Red Flag Campaign Monitor</h3>
                <p className="text-gray-600 dark:text-slate-400">Google Ads Automation Script</p>
              </div>
            </div>
            
            <p className="text-gray-700 dark:text-slate-300 mb-6">
              Custom Google Ads script that automatically monitors campaigns across all accounts and flags 
              underperforming ads, budget issues, and optimization opportunities in real-time.
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <Code className="w-5 h-5 text-blue-400 mr-3" />
                <span className="text-gray-700 dark:text-slate-300">Built with Google Apps Script & JavaScript</span>
              </div>
              <div className="flex items-center">
                <Zap className="w-5 h-5 text-yellow-400 mr-3" />
                <span className="text-gray-700 dark:text-slate-300">Automated 80% of manual campaign reviews</span>
              </div>
              <div className="flex items-center">
                <BarChart3 className="w-5 h-5 text-green-400 mr-3" />
                <span className="text-gray-700 dark:text-slate-300"><strong className="text-green-400">$65K+</strong> annual cost savings</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-4 rounded-lg">
              <p className="text-sm text-gray-700 dark:text-slate-300">
                <strong>Business Impact:</strong> Enabled the company to hire an additional team member with the time savings, 
                while preventing costly campaign errors before they impact client budgets.
              </p>
            </div>
          </div>

          {/* Chef Management App */}
          <div className="scroll-reveal scale-reveal stagger-3 glass-card p-8 rounded-xl hover:transform hover:scale-105 transition-all duration-300 border border-green-200/30">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mr-4">
                <ChefHat className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-slate-200">ChefPro Business Suite</h3>
                <p className="text-gray-600 dark:text-slate-400">Full-Stack Web Application</p>
              </div>
            </div>
            
            <p className="text-gray-700 dark:text-slate-300 mb-6">
              Comprehensive business management platform for professional chefs and catering businesses, 
              featuring client management, automated invoicing, and revenue tracking with analytics dashboard.
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <Code className="w-5 h-5 text-blue-400 mr-3" />
                <span className="text-gray-700 dark:text-slate-300">React, Node.js, PostgreSQL, Stripe Integration</span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-5 h-5 text-purple-400 mr-3" />
                <span className="text-gray-700 dark:text-slate-300">Increased chef efficiency by <strong className="text-purple-400">60%</strong></span>
              </div>
              <div className="flex items-center">
                <BarChart3 className="w-5 h-5 text-cyan-400 mr-3" />
                <span className="text-gray-700 dark:text-slate-300">Real-time revenue tracking & forecasting</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-4 rounded-lg">
              <p className="text-sm text-gray-700 dark:text-slate-300">
                <strong>Innovation:</strong> First-to-market solution combining client CRM, automated invoicing, 
                and financial analytics specifically designed for culinary professionals.
              </p>
            </div>
          </div>
        </div>

        {/* High-ROI Campaign Showcase */}
        <div className="scroll-reveal slide-in-up stagger-4 glass-card p-8 rounded-xl hover:transform hover:scale-[1.02] transition-all duration-300 border border-purple-200/30">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-800 dark:text-slate-200 mb-4">
              Elite Performance Campaigns
            </h3>
            <p className="text-gray-600 dark:text-slate-400">
              Exceptional ROI achievements that set industry benchmarks
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-green-500 mb-2">30:1</div>
              <div className="text-gray-700 dark:text-slate-300 font-semibold">Peak ROI</div>
              <div className="text-sm text-gray-600 dark:text-slate-400 mt-2">Facebook Ad Campaign</div>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-blue-500 mb-2">15:1</div>
              <div className="text-gray-700 dark:text-slate-300 font-semibold">Consistent ROI</div>
              <div className="text-sm text-gray-600 dark:text-slate-400 mt-2">Multi-Platform Average</div>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-purple-500 mb-2">$2.4M</div>
              <div className="text-gray-700 dark:text-slate-300 font-semibold">Revenue Generated</div>
              <div className="text-sm text-gray-600 dark:text-slate-400 mt-2">Single Campaign</div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-700/50 rounded-lg">
            <p className="text-gray-700 dark:text-slate-300 font-medium">
              🎯 <strong>Campaign Strategy:</strong> Advanced audience segmentation, dynamic creative optimization, 
              and automated bid management combining data science with creative psychology to maximize conversions 
              while maintaining profitability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}