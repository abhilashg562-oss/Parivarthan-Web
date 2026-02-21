import { Users, Briefcase, Star, MapPin } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '15,000+',
    label: 'Workers Onboarded',
  },
  {
    icon: Briefcase,
    value: '25,000+',
    label: 'Jobs Posted',
  },
  {
    icon: Star,
    value: '4.8/5',
    label: 'Average Rating',
  },
  {
    icon: MapPin,
    value: '50+',
    label: 'Cities Covered',
  },
];

export default function StatsSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-trust-blue to-trust-green text-white">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center space-y-3">
                <div className="flex justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
                    <Icon className="h-7 w-7" />
                  </div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm md:text-base text-white/90">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
