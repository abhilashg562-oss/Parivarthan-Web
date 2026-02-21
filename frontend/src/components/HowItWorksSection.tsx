import { Card, CardContent } from '@/components/ui/card';
import { FileText, Users, CheckCircle, Activity } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    title: 'Post a job',
    description: 'Create a job posting with your requirements and budget in minutes',
    step: '01',
  },
  {
    icon: Users,
    title: 'Workers apply',
    description: 'Verified workers in your area apply with their profiles and experience',
    step: '02',
  },
  {
    icon: CheckCircle,
    title: 'Hire instantly',
    description: 'Review applications and hire the best worker for your needs',
    step: '03',
  },
  {
    icon: Activity,
    title: 'Track status',
    description: 'Monitor job progress and communicate with workers in real-time',
    step: '04',
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started in four simple steps and find the perfect worker for your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="relative border-2 hover:border-trust-blue/50 transition-all hover:shadow-lg">
                <CardContent className="pt-6">
                  <div className="absolute -top-4 left-6 bg-gradient-to-br from-trust-blue to-trust-green text-white w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg shadow-lg">
                    {step.step}
                  </div>
                  <div className="mt-4 space-y-3">
                    <div className="w-12 h-12 rounded-lg bg-trust-blue/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-trust-blue" />
                    </div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
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
