import { Button } from '@/components/ui/button';
import { useNavigate } from '@tanstack/react-router';
import { Download, ArrowRight, Sparkles, CheckCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

const benefits = [
  'Quick worker hiring',
  'Verified professionals',
  'Secure payments',
  '24/7 support',
];

export default function CTAFooter() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('cta-footer');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="cta-footer" className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-green-500/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container relative z-10">
        <div className={`max-w-4xl mx-auto text-center space-y-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-medium">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span>Join 50,000+ Happy Users</span>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Ready to Transform
            <span className="bg-gradient-to-r from-blue-400 via-green-400 to-emerald-400 bg-clip-text text-transparent"> Your Hiring?</span>
          </h2>

          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Join thousands of employers and workers who trust GigMarket for their hiring needs. Start today and experience the difference!
          </p>

          {/* Benefits List */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-sm font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-trust-blue to-trust-green text-white hover:opacity-90 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 px-8 py-6 text-lg"
              onClick={() => navigate({ to: '/download' })}
            >
              <Download className="mr-2 h-5 w-5" />
              Download APK Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 bg-transparent px-8 py-6 text-lg"
              onClick={() => navigate({ to: '/about' })}
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Trust Note */}
          <p className="text-sm text-slate-400 mt-4">
            ✨ Free to download • No hidden charges • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}
