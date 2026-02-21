import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck, MapPin, Zap, Star, Briefcase } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Verified workers',
    description: 'All workers are background-checked and verified for your safety',
  },
  {
    icon: MapPin,
    title: 'Location based hiring',
    description: 'Find workers near you for quick and convenient service',
  },
  {
    icon: Zap,
    title: 'Quick hiring',
    description: 'Hire workers in minutes with our streamlined process',
  },
  {
    icon: Star,
    title: 'Ratings & reviews',
    description: 'Make informed decisions with transparent worker ratings',
  },
  {
    icon: Briefcase,
    title: 'Multi-category workers',
    description: 'Access workers across 7+ job categories in one platform',
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose GigMarket</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The most trusted platform for hiring local workers with features designed for your convenience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-2 hover:border-trust-green/50 transition-all hover:shadow-lg">
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-trust-green/20 to-trust-blue/20 flex items-center justify-center">
                      <Icon className="h-7 w-7 text-trust-green" />
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
