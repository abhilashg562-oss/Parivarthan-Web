import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck, MapPin, Zap, Star, Briefcase, Clock, CreditCard, Headphones } from 'lucide-react';
import { useEffect, useState } from 'react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Verified Workers',
    description: 'All workers are background-checked and verified for your safety and peace of mind',
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: MapPin,
    title: 'Location Based Hiring',
    description: 'Find workers near you for quick and convenient service delivery',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    icon: Zap,
    title: 'Quick Hiring',
    description: 'Hire workers in minutes with our streamlined and efficient process',
    color: 'from-yellow-500 to-orange-600',
  },
  {
    icon: Star,
    title: 'Ratings & Reviews',
    description: 'Make informed decisions with transparent worker ratings and feedback',
    color: 'from-purple-500 to-pink-600',
  },
  {
    icon: Briefcase,
    title: 'Multi-Category Workers',
    description: 'Access workers across 7+ job categories all in one platform',
    color: 'from-indigo-500 to-blue-600',
  },
  {
    icon: Clock,
    title: 'Real-Time Tracking',
    description: 'Track worker arrival and job progress in real-time',
    color: 'from-red-500 to-rose-600',
  },
  {
    icon: CreditCard,
    title: 'Secure Payments',
    description: 'Multiple payment options with secure transaction processing',
    color: 'from-teal-500 to-green-600',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock customer support for all your needs',
    color: 'from-violet-500 to-purple-600',
  },
];

export default function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('features');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white via-blue-50/50 to-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-200/20 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full text-sm font-medium text-green-600 mb-4">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Why Choose GigMarket
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-800 via-blue-700 to-slate-800 bg-clip-text text-transparent">
            The Trusted Platform for Hiring
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Experience the future of hiring with features designed for your convenience, safety, and satisfaction
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Card className="border-0 hover:border-transparent hover:shadow-2xl transition-all duration-300 group bg-white/80 backdrop-blur-sm h-full">
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      {/* Icon with gradient background */}
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-bold mb-2 group-hover:text-trust-blue transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
