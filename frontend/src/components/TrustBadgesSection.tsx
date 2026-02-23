import { Shield, CreditCard, Award, CheckCircle, Lock, Verified } from 'lucide-react';
import { useEffect, useState } from 'react';

const badges = [
  {
    icon: Shield,
    image: '/assets/generated/trust-badge-1.dim_128x128.svg',
    title: 'Verified Platform',
    description: 'All workers are background-checked and verified',
    color: 'from-green-500 to-emerald-600',
    stat: '100%',
  },
  {
    icon: CreditCard,
    image: '/assets/generated/trust-badge-2.dim_128x128.svg',
    title: 'Secure Payments',
    description: 'Multiple payment options with 256-bit encryption',
    color: 'from-blue-500 to-indigo-600',
    stat: 'Secure',
  },
  {
    icon: Award,
    image: '/assets/generated/trust-badge-3.dim_128x128.svg',
    title: 'Quality Service',
    description: 'Rated 4.9/5 by thousands of satisfied users',
    color: 'from-purple-500 to-pink-600',
    stat: '4.9★',
  },
];

const features = [
  {
    icon: CheckCircle,
    text: 'Verified Workers',
  },
  {
    icon: Lock,
    text: 'Secure Transactions',
  },
  {
    icon: Verified,
    text: 'Trusted Platform',
  },
];

export default function TrustBadgesSection() {
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

    const section = document.getElementById('trust-badges');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="trust-badges" className="py-20 bg-gradient-to-b from-white via-blue-50/50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-green-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full text-sm font-medium text-green-600 mb-4">
            <Shield className="w-4 h-4" />
            Your Safety First
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-800 via-blue-700 to-slate-800 bg-clip-text text-transparent">
            Why Trust GigMarket
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We prioritize your safety and satisfaction with industry-leading security and verification measures
          </p>
        </div>

        {/* Main Trust Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {badges.map((badge, index) => {
            return (
              <div
                key={index}
                className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-100 hover:border-gray-200 hover:shadow-2xl transition-all duration-300 text-center group">
                  {/* Icon with gradient background */}
                  <div className="relative inline-block mb-6">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${badge.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <img 
                        src={badge.image} 
                        alt={badge.title} 
                        className="w-12 h-12 object-contain" 
                      />
                    </div>
                    {/* Stat badge */}
                    <div className={`absolute -top-2 -right-2 w-10 h-10 rounded-full bg-gradient-to-br ${badge.color} flex items-center justify-center shadow-md`}>
                      <span className="text-xs font-bold text-white">{badge.stat}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-trust-blue transition-colors">
                    {badge.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {badge.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md border border-gray-100 transition-all duration-500 hover:shadow-lg ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                style={{ transitionDelay: `${(index + 3) * 100}ms` }}
              >
                <Icon className="w-5 h-5 text-trust-green" />
                <span className="text-sm font-medium text-gray-700">{feature.text}</span>
              </div>
            );
          })}
        </div>

        {/* Security Note */}
        <div className="mt-10 text-center">
          <p className="text-sm text-muted-foreground">
            🔒 Your data is protected with enterprise-grade security
          </p>
        </div>
      </div>
    </section>
  );
}
