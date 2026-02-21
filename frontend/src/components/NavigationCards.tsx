import { Card, CardContent } from '@/components/ui/card';
import { Link } from '@tanstack/react-router';
import { Info, BookOpen, MessageSquare, AlertCircle, Download } from 'lucide-react';

const navigationItems = [
  {
    icon: Info,
    title: 'About Application',
    description: 'Learn about our mission and how we help connect workers with opportunities',
    path: '/about',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: BookOpen,
    title: 'User Manual',
    description: 'Step-by-step guides on how to use GigMarket effectively',
    path: '/manual',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: MessageSquare,
    title: 'Review Centre',
    description: 'Read reviews and share your experience with the community',
    path: '/reviews',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: AlertCircle,
    title: 'Complaint Box',
    description: 'Report issues and track your complaint status',
    path: '/complaints',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: Download,
    title: 'Download APK',
    description: 'Get the latest version of GigMarket app for Android',
    path: '/download',
    color: 'from-trust-blue to-trust-green',
  },
];

export default function NavigationCards() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore GigMarket</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Access all the resources and tools you need to make the most of our platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {navigationItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link key={index} to={item.path}>
                <Card className="h-full border-2 hover:border-trust-blue/50 transition-all hover:shadow-xl cursor-pointer group">
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-trust-blue transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
