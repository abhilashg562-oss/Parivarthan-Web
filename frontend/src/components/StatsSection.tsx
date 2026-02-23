import { Users, Briefcase, Star, MapPin, TrendingUp, Award } from 'lucide-react';
import { useEffect, useState } from 'react';

const stats = [
  {
    icon: Users,
    value: '50,000+',
    label: 'Active Workers',
    color: 'from-blue-400 to-blue-600',
    description: 'Verified & ready to work',
  },
  {
    icon: Briefcase,
    value: '100,000+',
    label: 'Jobs Completed',
    color: 'from-green-400 to-green-600',
    description: 'Successful placements',
  },
  {
    icon: Star,
    value: '4.9/5',
    label: 'Average Rating',
    color: 'from-yellow-400 to-orange-500',
    description: 'Based on reviews',
  },
  {
    icon: MapPin,
    value: '500+',
    label: 'Cities Covered',
    color: 'from-purple-400 to-purple-600',
    description: 'Pan India coverage',
  },
];

export default function StatsSection() {
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

    const section = document.getElementById('stats');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-medium text-white mb-4">
            <TrendingUp className="w-4 h-4" />
            Our Impact
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Join the fastest growing hiring platform with proven results and satisfied users across the nation
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`relative group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 h-full">
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Value */}
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold mb-1 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="font-semibold text-white mb-1">{stat.label}</div>
                    <div className="text-xs text-slate-400">{stat.description}</div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Achievement Badge */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
            <Award className="w-6 h-6 text-yellow-400" />
            <span className="text-sm font-medium">Award Winning Platform 2024</span>
          </div>
        </div>
      </div>
    </section>
  );
}
