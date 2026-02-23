import { Card, CardContent } from '@/components/ui/card';
import { Link } from '@tanstack/react-router';
import { Info, BookOpen, MessageSquare, AlertCircle, Download, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const navigationItems = [
  {
    icon: Info,
    title: 'About Application',
    description: 'Learn about our mission and how we help connect workers with opportunities',
    path: '/about',
    color: 'from-blue-500 to-blue-600',
    hoverColor: 'hover:border-blue-500/50',
  },
  {
    icon: BookOpen,
    title: 'User Manual',
    description: 'Step-by-step guides on how to use GigMarket effectively',
    path: '/manual',
    color: 'from-green-500 to-green-600',
    hoverColor: 'hover:border-green-500/50',
  },
  {
    icon: MessageSquare,
    title: 'Review Centre',
    description: 'Read reviews and share your experience with the community',
    path: '/reviews',
    color: 'from-purple-500 to-purple-600',
    hoverColor: 'hover:border-purple-500/50',
  },
  {
    icon: AlertCircle,
    title: 'Complaint Box',
    description: 'Report issues and track your complaint status',
    path: '/complaints',
    color: 'from-orange-500 to-orange-600',
    hoverColor: 'hover:border-orange-500/50',
  },
  {
    icon: Download,
    title: 'Download APK',
    description: 'Get the latest version of GigMarket app for Android',
    path: '/download',
    color: 'from-trust-blue to-trust-green',
    hoverColor: 'hover:border-trust-blue/50',
  },
];

export default function NavigationCards() {
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

    const section = document.getElementById('navigation');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="navigation" className="py-20 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(59, 130, 246) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-sm font-medium text-blue-600 mb-4">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            Explore More
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-800 via-blue-700 to-slate-800 bg-clip-text text-transparent">
            Everything You Need
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Access all the resources and tools you need to make the most of our platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {navigationItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Link to={item.path}>
                  <Card className={`h-full border-2 border-transparent ${item.hoverColor} transition-all hover:shadow-2xl cursor-pointer group bg-white/80 backdrop-blur-sm overflow-hidden`}>
                    {/* Gradient top border on hover */}
                    <div className={`h-1 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                    
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        {/* Icon */}
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                          <Icon className="h-8 w-8 text-white" />
                        </div>

                        <div>
                          <h3 className="text-xl font-bold mb-2 group-hover:text-trust-blue transition-colors flex items-center gap-2">
                            {item.title}
                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0" />
                          </h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
