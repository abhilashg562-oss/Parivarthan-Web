import { Card, CardContent } from '@/components/ui/card';
import { FileText, Users, CheckCircle, Activity, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const steps = [
  {
    icon: FileText,
    title: 'Post a Job',
    description: 'Create a job posting with your requirements and budget in minutes. It\'s quick and easy!',
    step: '01',
    color: 'from-blue-500 to-indigo-600',
    bgColor: 'bg-blue-100',
  },
  {
    icon: Users,
    title: 'Workers Apply',
    description: 'Verified workers in your area apply with their profiles and experience. Choose the best!',
    step: '02',
    color: 'from-purple-500 to-pink-600',
    bgColor: 'bg-purple-100',
  },
  {
    icon: CheckCircle,
    title: 'Hire Instantly',
    description: 'Review applications and hire the best worker for your needs. Start working right away!',
    step: '03',
    color: 'from-green-500 to-teal-600',
    bgColor: 'bg-green-100',
  },
  {
    icon: Activity,
    title: 'Track Status',
    description: 'Monitor job progress and communicate with workers in real-time. Stay updated!',
    step: '04',
    color: 'from-orange-500 to-red-600',
    bgColor: 'bg-orange-100',
  },
];

export default function HowItWorksSection() {
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

    const section = document.getElementById('how-it-works');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-muted/30 via-white to-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-100/30 to-green-100/30 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-sm font-medium text-blue-600 mb-4">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            How It Works
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-800 via-blue-700 to-slate-800 bg-clip-text text-transparent">
            Get Started in 4 Easy Steps
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Post a job, receive applications, hire instantly, and track progress - all in one simple process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 via-green-500 to-orange-500 opacity-20" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <Card className="border-0 hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm h-full group overflow-visible">
                  <CardContent className="pt-6 pb-8">
                    <div className="relative space-y-4">
                      {/* Step Number */}
                      <div className={`absolute -top-3 -left-2 w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center font-bold text-lg text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {step.step}
                      </div>

                      {/* Arrow for desktop */}
                      {index < steps.length - 1 && (
                        <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                          <div className="w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center group-hover:translate-x-2 transition-transform duration-300">
                            <ArrowRight className="w-4 h-4 text-trust-blue" />
                          </div>
                        </div>
                      )}

                      <div className="pt-8 space-y-3">
                        {/* Icon */}
                        <div className={`w-16 h-16 rounded-2xl ${step.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className={`h-8 w-8 bg-gradient-to-br ${step.color} bg-clip-text text-transparent`} />
                        </div>

                        <h3 className="text-xl font-bold group-hover:text-trust-blue transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-trust-blue to-trust-green text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto">
            Start Hiring Now
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
