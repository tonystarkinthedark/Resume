import { Download, Linkedin, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useParallax, useScrollReveal } from "@/hooks/use-parallax";

export default function Hero() {
  const { toast } = useToast();
  const scrollY = useParallax();
  useScrollReveal();

  const downloadResume = async () => {
    try {
      const response = await fetch('/api/resume/download');
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Ahmed_Ibrahim_Resume.pdf';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
        
        toast({
          title: "Resume Downloaded",
          description: "Your resume has been downloaded successfully!",
        });
      } else {
        throw new Error('Download failed');
      }
    } catch (error) {
      toast({
        title: "Download Failed",
        description: "Unable to download resume. Please try again.",
        variant: "destructive",
      });
    }
  };

  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/ahmed-ibrahim-486215158', '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden transition-colors duration-300" style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Enhanced Parallax background elements with more depth */}
      <div 
        className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl opacity-20" 
        style={{ 
          backgroundColor: 'var(--accent-blue)',
          transform: `translateY(${scrollY * 0.5}px) scale(${1 + scrollY * 0.0003})`
        }}
      ></div>
      <div 
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-15" 
        style={{ 
          backgroundColor: 'var(--accent-green)',
          transform: `translateY(${scrollY * -0.4}px) translateX(${scrollY * 0.1}px)`
        }}
      ></div>
      <div 
        className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full blur-3xl opacity-10" 
        style={{ 
          backgroundColor: 'var(--accent-purple)',
          transform: `translateY(${scrollY * 0.6}px) translateX(${scrollY * 0.2}px) rotate(${scrollY * 0.05}deg)`
        }}
      ></div>
      <div 
        className="absolute top-10 right-1/4 w-48 h-48 rounded-full blur-2xl opacity-8" 
        style={{ 
          backgroundColor: 'var(--accent-blue)',
          transform: `translateY(${scrollY * -0.3}px) scale(${1 - scrollY * 0.0001})`
        }}
      ></div>
      <div 
        className="absolute bottom-10 left-1/4 w-32 h-32 rounded-full blur-xl opacity-12" 
        style={{ 
          backgroundColor: 'var(--accent-purple)',
          transform: `translateY(${scrollY * 0.7}px) translateX(${scrollY * -0.1}px)`
        }}
      ></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div>
          {/* Animated availability badge */}
          <div className="scroll-reveal slide-in-up stagger-1 inline-flex items-center px-6 py-3 rounded-full mb-8 text-sm font-medium" 
               style={{ 
                 backgroundColor: 'var(--accent-green)',
                 color: 'white'
               }}>
            Available for New Opportunities
          </div>
          
          {/* Staggered title animation */}
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            <div className="scroll-reveal text-reveal stagger-2">
              <span className="gradient-text">Ahmed Ibrahim</span>
            </div>
            <div className="scroll-reveal text-reveal stagger-3">
              <span style={{ color: 'var(--text-primary)' }}>Digital Marketing Expert</span>
            </div>
          </h1>
          
          {/* Animated description */}
          <div className="scroll-reveal slide-in-up stagger-4">
            <p className="text-xl lg:text-2xl mb-12 leading-relaxed max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Scaling businesses through <strong style={{ color: 'var(--accent-blue)' }}>Google & Facebook Ads</strong>, 
              <strong style={{ color: 'var(--accent-green)' }}>marketing automation</strong>, and 
              <strong style={{ color: 'var(--accent-purple)' }}>performance optimization</strong>
            </p>
          </div>

          {/* Animated stats with staggered reveals */}
          <div className="grid grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
            <div className="scroll-reveal scale-reveal stagger-1 text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: 'var(--accent-blue)' }}>6+</div>
              <div className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>Years Experience</div>
            </div>
            <div className="scroll-reveal scale-reveal stagger-2 text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: 'var(--accent-green)' }}>$1.5M+</div>
              <div className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>Ad Spend Managed</div>
            </div>
            <div className="scroll-reveal scale-reveal stagger-3 text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: 'var(--accent-purple)' }}>50+</div>
              <div className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>Client Accounts</div>
            </div>
          </div>
            
          {/* Animated CTA buttons */}
          <div className="scroll-reveal slide-in-up stagger-4 flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button onClick={downloadResume} className="btn-primary text-lg px-8 py-4">
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
            <Button onClick={openLinkedIn} className="btn-secondary text-lg px-8 py-4">
              <Linkedin className="w-5 h-5 mr-2" />
              View LinkedIn
            </Button>
          </div>
          
          {/* Animated contact info */}
          <div className="scroll-reveal slide-in-up stagger-4 flex flex-col sm:flex-row sm:items-center justify-center sm:space-x-8 space-y-3 sm:space-y-0" style={{ color: 'var(--text-secondary)' }}>
            <div className="flex items-center justify-center">
              <MapPin className="w-5 h-5 mr-3" style={{ color: 'var(--accent-blue)' }} />
              <span className="font-medium">Phoenix, AZ</span>
            </div>
            <div className="flex items-center justify-center">
              <Phone className="w-5 h-5 mr-3" style={{ color: 'var(--accent-blue)' }} />
              <span className="font-medium">(602) 339-9737</span>
            </div>
          </div>
          
          {/* Repositioned scroll indicator - moved to bottom right */}
          <div className="scroll-reveal slide-in-up stagger-4 fixed bottom-8 right-8 z-20">
            <div className="animate-bounce">
              <div className="w-6 h-10 border-2 rounded-full flex justify-center bg-white/10 backdrop-blur-sm" style={{ borderColor: 'var(--accent-blue)' }}>
                <div className="w-1 h-3 rounded-full mt-2" style={{ backgroundColor: 'var(--accent-blue)' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
