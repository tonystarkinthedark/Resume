import { useState } from "react";
import { Mail, Phone, Linkedin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useParallax, useScrollReveal } from "@/hooks/use-parallax";

export default function Contact() {
  const scrollY = useParallax();
  useScrollReveal();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: (data: typeof formData) => apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I will get back to you soon.",
      });
      setFormData({ name: "", email: "", company: "", message: "" });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

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

  return (
    <section 
      id="contact" 
      className="py-32 relative overflow-hidden transition-colors duration-300 min-h-screen flex items-center" 
      style={{ 
        backgroundColor: 'var(--bg-primary)',
        transform: `translateY(${scrollY * 0.05}px)`
      }}
    >
      {/* Enhanced parallax background elements */}
      <div 
        className="absolute top-20 right-20 w-48 h-48 rounded-full blur-3xl opacity-10"
        style={{ 
          backgroundColor: 'var(--accent-green)',
          transform: `translateY(${scrollY * 0.18}px) scale(${1 + scrollY * 0.0002}) rotate(${scrollY * 0.03}deg)`
        }}
      ></div>
      <div 
        className="absolute bottom-10 left-10 w-64 h-64 rounded-full blur-2xl opacity-8"
        style={{ 
          backgroundColor: 'var(--accent-blue)',
          transform: `translateY(${scrollY * -0.22}px) translateX(${scrollY * 0.07}px) scale(${1 + scrollY * 0.0001})`
        }}
      ></div>
      <div 
        className="absolute top-1/3 left-1/2 w-32 h-32 rounded-full blur-xl opacity-12"
        style={{ 
          backgroundColor: 'var(--accent-purple)',
          transform: `translateY(${scrollY * 0.28}px) translateX(${scrollY * -0.06}px) rotate(${scrollY * -0.04}deg)`
        }}
      ></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="scroll-reveal text-reveal text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Let's Work Together</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Ready to drive measurable growth? Let's discuss your marketing goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="scroll-reveal slide-in-left stagger-1">
            <h3 className="text-3xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Ready to Drive Results?</h3>
            <p className="text-xl leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
              I'm always interested in discussing new opportunities where I can leverage my expertise 
              in PPC management, automation, and performance marketing to drive measurable business growth.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center hover:transform hover:scale-105 transition-all duration-300">
                <Mail className="w-6 h-6 mr-4" style={{ color: 'var(--accent-blue)' }} />
                <span className="text-lg" style={{ color: 'var(--text-primary)' }}>ahmedibrahim@email.com</span>
              </div>
              <div className="flex items-center hover:transform hover:scale-105 transition-all duration-300">
                <Phone className="w-6 h-6 mr-4" style={{ color: 'var(--accent-green)' }} />
                <span className="text-lg" style={{ color: 'var(--text-primary)' }}>(602) 339-9737</span>
              </div>
              <div className="flex items-center hover:transform hover:scale-105 transition-all duration-300">
                <Linkedin className="w-6 h-6 mr-4" style={{ color: 'var(--accent-purple)' }} />
                <a 
                  href="https://www.linkedin.com/in/ahmed-ibrahim-486215158" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium hover:scale-105 transition-all duration-300"
                  style={{ color: 'var(--accent-purple)' }}
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>

            <div className="mt-8">
              <Button onClick={downloadResume} className="btn-primary hover:transform hover:scale-105 transition-all duration-300">
                <Download className="w-5 h-5 mr-2" />
                Download Full Resume PDF
              </Button>
            </div>
          </div>

          <div className="scroll-reveal slide-in-right stagger-2 glass-card p-8 rounded-xl hover:transform hover:scale-[1.02] transition-all duration-300">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="block text-gray-700 dark:text-slate-300 mb-2">Name</Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-4 py-3 bg-gray-100 dark:bg-navy-700 border-gray-300 dark:border-slate-600 text-gray-900 dark:text-slate-100 focus:border-cyan-500"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email" className="block text-gray-700 dark:text-slate-300 mb-2">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-4 py-3 bg-gray-100 dark:bg-navy-700 border-gray-300 dark:border-slate-600 text-gray-900 dark:text-slate-100 focus:border-cyan-500"
                  required
                />
              </div>
              <div>
                <Label htmlFor="company" className="block text-slate-300 mb-2">Company</Label>
                <Input
                  id="company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                  className="w-full px-4 py-3 bg-navy-700 border-slate-600 text-slate-100 focus:border-cyan-400"
                />
              </div>
              <div>
                <Label htmlFor="message" className="block text-slate-300 mb-2">Message</Label>
                <Textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  className="w-full px-4 py-3 bg-navy-700 border-slate-600 text-slate-100 focus:border-cyan-400"
                  required
                />
              </div>
              <Button 
                type="submit" 
                disabled={contactMutation.isPending}
                className="w-full btn-primary"
              >
                {contactMutation.isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
