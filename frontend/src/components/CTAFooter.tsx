import { Button } from '@/components/ui/button';
import { useNavigate } from '@tanstack/react-router';
import { Download, ArrowRight } from 'lucide-react';

export default function CTAFooter() {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gradient-to-br from-trust-blue to-trust-green text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl text-white/90">
            Join thousands of employers and workers who trust GigMarket for their hiring needs
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-trust-blue hover:bg-white/90 shadow-lg"
              onClick={() => navigate({ to: '/download' })}
            >
              <Download className="mr-2 h-5 w-5" />
              Download APK Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10"
              onClick={() => navigate({ to: '/about' })}
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
