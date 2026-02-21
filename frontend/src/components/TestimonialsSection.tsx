import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Factory Owner',
    type: 'Employer',
    rating: 5,
    text: 'GigMarket helped me find reliable workers for my factory in just 2 days. The verification process gives me peace of mind.',
    avatar: 'RK',
  },
  {
    name: 'Priya Sharma',
    role: 'Construction Worker',
    type: 'Worker',
    rating: 5,
    text: 'I found consistent work through GigMarket. The app is easy to use and payments are always on time. Highly recommended!',
    avatar: 'PS',
  },
  {
    name: 'Mohammed Ali',
    role: 'School Administrator',
    type: 'Employer',
    rating: 5,
    text: 'We hired cleaning staff and helpers through GigMarket. The quality of workers and quick hiring process exceeded our expectations.',
    avatar: 'MA',
  },
  {
    name: 'Sunita Devi',
    role: 'Cleaner',
    type: 'Worker',
    rating: 5,
    text: 'As a cleaner, GigMarket gave me access to many job opportunities. The platform is trustworthy and supportive.',
    avatar: 'SD',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real experiences from workers and employers using GigMarket
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-trust-blue to-trust-green flex items-center justify-center text-white font-semibold">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                    <Quote className="h-8 w-8 text-trust-blue/20" />
                  </div>

                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>

                  <div className="inline-block px-3 py-1 rounded-full bg-trust-green/10 text-trust-green text-xs font-medium">
                    {testimonial.type}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
