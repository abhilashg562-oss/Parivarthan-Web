import { Button } from '@/components/ui/button';
import { useNavigate } from '@tanstack/react-router';
import { Download, ArrowRight, Shield, Users, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-blue-50/50 to-muted/30 py-20 md:py-28">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-200/20 to-green-200/20 rounded-full blur-3xl" />
        
        {/* Floating Shapes */}
        <div className="absolute top-32 right-20 w-4 h-4 bg-trust-blue rounded-full animate-bounce" style={{ animationDuration: '3s' }} />
        <div className="absolute bottom-40 left-16 w-3 h-3 bg-trust-green rounded-full animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDuration: '2s', animationDelay: '1s' }} />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-sm font-medium text-trust-blue">
              <span className="w-2 h-2 bg-trust-blue rounded-full animate-pulse" />
              Trusted by 10,000+ Employers
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="text-foreground">Hire trusted</span>
                <br />
                <span className="bg-gradient-to-r from-trust-blue via-blue-600 to-trust-green bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                  local workers
                </span>
                <br />
                <span className="text-foreground">easily</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                Connect with verified workers for factory work, construction, school staff, drivers, cleaners, and more. Fast, reliable, and trusted by thousands.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 py-4">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-trust-blue/10 rounded-lg">
                  <Users className="h-5 w-5 text-trust-blue" />
                </div>
                <div>
                  <div className="text-2xl font-bold">50K+</div>
                  <div className="text-sm text-muted-foreground">Workers</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-2 bg-trust-green/10 rounded-lg">
                  <Shield className="h-5 w-5 text-trust-green" />
                </div>
                <div>
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm text-muted-foreground">Verified</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <Zap className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-trust-blue hover:bg-trust-blue/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                onClick={() => navigate({ to: '/download' })}
              >
                <Download className="mr-2 h-5 w-5" />
                Download APK
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-trust-green text-trust-green hover:bg-trust-green/10 hover:scale-105 transition-all duration-300"
                onClick={() => {
                  const element = document.getElementById('how-it-works');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Right Image with Effects */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Main Card */}
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-trust-blue via-blue-500 to-trust-green rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              
              {/* Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white">
                <img
                  src="/assets/generated/hero-workers.dim_1200x600.svg"
                  alt="Workers illustration showing construction, factory, and school staff"
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Floating Card 1 */}
              <div className="absolute -top-4 -left-6 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Shield className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Verified Workers</div>
                    <div className="text-xs text-muted-foreground">100% Trusted</div>
                  </div>
                </div>
              </div>

              {/* Floating Card 2 */}
              <div className="absolute -bottom-4 -right-6 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Zap className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Quick Response</div>
                    <div className="text-xs text-muted-foreground">Under 1 hour</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-16 h-16 bg-trust-blue/20 rounded-full blur-2xl animate-pulse" />
            <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-trust-green/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
