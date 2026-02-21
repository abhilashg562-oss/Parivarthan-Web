import { Button } from '@/components/ui/button';
import { useNavigate } from '@tanstack/react-router';
import { Download, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 py-20 md:py-28">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="text-foreground">Hire trusted</span>
                <br />
                <span className="bg-gradient-to-r from-trust-blue to-trust-green bg-clip-text text-transparent">
                  local workers
                </span>
                <br />
                <span className="text-foreground">easily</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                Connect with verified workers for factory work, construction, school staff, drivers, cleaners, and more. Fast, reliable, and trusted by thousands.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-trust-blue hover:bg-trust-blue/90 text-white shadow-lg"
                onClick={() => navigate({ to: '/download' })}
              >
                <Download className="mr-2 h-5 w-5" />
                Download APK
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-trust-green text-trust-green hover:bg-trust-green/10"
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

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/assets/generated/hero-workers.dim_1200x600.svg"
                alt="Workers illustration showing construction, factory, and school staff"
                className="w-full h-auto"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-trust-blue/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-trust-green/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
