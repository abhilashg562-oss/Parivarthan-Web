import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote, Building2, Users } from 'lucide-react';
import { useEffect, useState } from 'react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Factory Owner',
    type: 'Employer',
    rating: 5,
    text: 'GigMarket helped me find reliable workers for my factory in just 2 days. The verification process gives me peace of mind. Highly recommended!',
    avatar: 'RK',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    name: 'Priya Sharma',
    role: 'Construction Worker',
    type: 'Worker',
    rating: 5,
    text: 'I found consistent work through GigMarket. The app is easy to use and payments are always on time. This platform changed my life!',
    avatar: 'PS',
    color: 'from-purple-500 to-pink-600',
  },
  {
    name: 'Mohammed Ali',
    role: 'School Administrator',
    type: 'Employer',
    rating: 5,
    text: 'We hired cleaning staff and helpers through GigMarket. The quality of workers and quick hiring process exceeded our expectations.',
    avatar: 'MA',
    color: 'from-green-500 to-teal-600',
  },
  {
    name: 'Sunita Devi',
    role: 'Cleaner',
    type: 'Worker',
    rating: 5,
    text: 'As a cleaner, GigMarket gave me access to many job opportunities. The platform is trustworthy and supportive. Thank you GigMarket!',
    avatar: 'SD',
    color: 'from-orange-500 to-red-600',
  },
];

export default function TestimonialsSection() {
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

    const section = document.getElementById('testimonials');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white via-blue-50/50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-full text-sm font-medium text-yellow-600 mb-4">
            <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-800 via-blue-700 to-slate-800 bg-clip-text text-transparent">
            What Our Users Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Real experiences from workers and employers who trust GigMarket for their hiring needs
          </p>
        </div>

        {/* Stats Banner */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-trust-blue">50,000+</div>
            <div className="text-sm text-muted-foreground">Active Workers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-trust-green">10,000+</div>
            <div className="text-sm text-muted-foreground">Employers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-600">4.9/5</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Card className="border-0 hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm overflow-hidden group">
                {/* Gradient top border */}
                <div className={`h-1 bg-gradient-to-r ${testimonial.color}`} />
                
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    {/* Quote Icon */}
                    <div className="flex justify-end">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${testimonial.color} opacity-20 group-hover:opacity-40 transition-opacity`}>
                        <Quote className="h-5 w-5 text-white" />
                      </div>
                    </div>

                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform`}>
                          {testimonial.avatar}
                        </div>
                        <div>
                          <div className="font-bold text-lg">{testimonial.name}</div>
                          <div className="text-sm text-muted-foreground flex items-center gap-1">
                            {testimonial.type === 'Employer' ? (
                              <Building2 className="w-3 h-3" />
                            ) : (
                              <Users className="w-3 h-3" />
                            )}
                            {testimonial.role}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    <p className="text-muted-foreground leading-relaxed italic">
                      "{testimonial.text}"
                    </p>

                    {/* Type Badge */}
                    <div className="pt-2">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${testimonial.color} text-white`}>
                        {testimonial.type}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
