import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Users, TrendingUp, Award, Star, Heart, Handshake, Briefcase } from 'lucide-react';
import { useEffect, useState } from 'react';

// Floating icon component
function FloatingIcon({ icon: Icon, delay, color, position }: { icon: any; delay: number; color: string; position: string }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`absolute ${isVisible ? 'opacity-100 animate-float' : 'opacity-0'}`}
      style={{ 
        [position.includes('left') ? 'left' : 'right']: position.match(/\d+/)?.[0] + '%',
        animationDelay: `${delay}ms`,
        animationDuration: '3s'
      }}
    >
      <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full ${color} flex items-center justify-center shadow-lg`}>
        <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
      </div>
    </div>
  );
}

export default function AboutApplicationPage() {
  return (
    <div className="py-12 relative overflow-hidden">
      {/* Background floating elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <FloatingIcon 
          icon={Users} 
          delay={200} 
          color="bg-trust-blue" 
          position="left-5" 
        />
        <FloatingIcon 
          icon={Star} 
          delay={500} 
          color="bg-yellow-500" 
          position="right-10" 
        />
        <FloatingIcon 
          icon={Heart} 
          delay={800} 
          color="bg-pink-500" 
          position="left-20" 
        />
        <FloatingIcon 
          icon={Handshake} 
          delay={1100} 
          color="bg-trust-green" 
          position="right-20" 
        />
        <FloatingIcon 
          icon={Award} 
          delay={1400} 
          color="bg-purple-500" 
          position="left-40" 
        />
      </div>

      <div className="container max-w-5xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-trust-blue to-trust-green rounded-full blur-xl opacity-30 animate-pulse"></div>
            <div className="relative w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-trust-blue via-trust-green to-purple-500 p-1">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <Users className="w-16 h-16 text-trust-blue" />
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-trust-blue via-trust-green to-purple-600 bg-clip-text text-transparent">
            About GigMarket
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connecting workers with opportunities, building communities
          </p>
        </div>

        {/* Mission with floating icons */}
        <div className="relative mb-16">
          {/* Floating decorative icons around mission */}
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
            <div className="absolute left-0 top-10 animate-float" style={{ animationDelay: '0s' }}>
              <div className="w-16 h-16 rounded-full border-4 border-white shadow-lg bg-gradient-to-br from-trust-blue to-trust-green flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="absolute right-0 top-20 animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="w-14 h-14 rounded-full border-4 border-white shadow-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Briefcase className="w-7 h-7 text-white" />
              </div>
            </div>
            <div className="absolute left-10 top-40 animate-float" style={{ animationDelay: '1s' }}>
              <div className="w-12 h-12 rounded-full border-4 border-white shadow-lg bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="absolute right-10 top-32 animate-float" style={{ animationDelay: '1.5s' }}>
              <div className="w-14 h-14 rounded-full border-4 border-white shadow-lg bg-gradient-to-br from-trust-green to-teal-500 flex items-center justify-center">
                <Handshake className="w-7 h-7 text-white" />
              </div>
            </div>
          </div>

          <Card className="border-2 border-trust-blue/20 shadow-xl overflow-visible">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Target className="h-6 w-6 text-trust-blue" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-4">
              <p>
                GigMarket was created to bridge the gap between employers and local workers across India. We believe that everyone deserves access to dignified work opportunities and that businesses should be able to find reliable workers quickly and easily.
              </p>
              <p>
                Our platform empowers workers by giving them visibility and access to job opportunities while providing employers with a trusted network of verified professionals.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Problem Statement */}
        <Card className="mb-12 border-2 border-red-100 shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <span className="text-red-500">⚠️</span>
              The Problem We Solve
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-4">
            <p>
              Traditional hiring methods for local workers are inefficient, unreliable, and often unsafe. Employers struggle to find verified workers, while workers lack access to consistent job opportunities.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>No centralized platform for local worker hiring</li>
              <li>Lack of worker verification and background checks</li>
              <li>Time-consuming hiring processes</li>
              <li>Limited visibility for workers seeking opportunities</li>
              <li>No transparent rating or review system</li>
            </ul>
          </CardContent>
        </Card>

        {/* Target Users with floating cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="border-2 border-trust-green/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-trust-green/10 flex items-center justify-center">
                  <Users className="h-5 w-5 text-trust-green" />
                </div>
                For Workers
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              <ul className="list-disc list-inside space-y-2">
                <li>Factory workers</li>
                <li>Construction laborers</li>
                <li>School staff & helpers</li>
                <li>Drivers (all types)</li>
                <li>Cleaners & housekeeping</li>
                <li>Technicians & skilled workers</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-trust-blue/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-trust-blue/10 flex items-center justify-center">
                  <Users className="h-5 w-5 text-trust-blue" />
                </div>
                For Employers
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              <ul className="list-disc list-inside space-y-2">
                <li>Factory owners & managers</li>
                <li>Construction companies</li>
                <li>Schools & educational institutions</li>
                <li>Households & families</li>
                <li>Small & medium businesses</li>
                <li>Service providers</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Benefits */}
        <Card className="mb-12 border-2 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <TrendingUp className="h-6 w-6 text-trust-green" />
              Key Benefits
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-trust-blue flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-trust-blue/10 flex items-center justify-center">👔</span>
                  For Employers
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="text-trust-green">✓</span> Access to verified workers
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-trust-green">✓</span> Quick hiring process
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-trust-green">✓</span> Location-based search
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-trust-green">✓</span> Transparent ratings & reviews
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-trust-green">✓</span> Secure payment system
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-trust-green">✓</span> Job tracking & management
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-trust-green flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-trust-green/10 flex items-center justify-center">💼</span>
                  For Workers
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="text-trust-blue">✓</span> Consistent job opportunities
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-trust-blue">✓</span> Profile visibility
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-trust-blue">✓</span> Build reputation through ratings
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-trust-blue">✓</span> Timely payments
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-trust-blue">✓</span> Easy application process
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-trust-blue">✓</span> Support & assistance
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Screenshots */}
        <Card className="mb-12 border-2 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-center">App Screenshots</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center gap-6 flex-wrap">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-trust-blue to-trust-green rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <img
                  src="/assets/generated/app-screenshot-1.dim_400x800.svg"
                  alt="App screenshot 1"
                  className="relative h-96 w-auto rounded-xl shadow-lg border-2 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Founder Info */}
        <Card className="border-2 bg-gradient-to-br from-trust-blue/5 via-trust-green/5 to-purple-50 shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Award className="h-6 w-6 text-trust-blue" />
              About the Project
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-4">
            <p>
              GigMarket was founded in 2024 with a vision to revolutionize the local worker hiring ecosystem in India. Our team combines expertise in technology, human resources, and social impact to create a platform that truly serves both workers and employers.
            </p>
            <p>
              We are committed to creating dignified work opportunities, ensuring worker safety, and building trust in the gig economy. Our platform is designed to be accessible to users with varying levels of technical literacy, ensuring that everyone can benefit from the digital economy.
            </p>
            <div className="pt-6 border-t flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <p className="font-semibold text-lg mb-2">Contact Us</p>
                <p className="text-sm">📧 Email: info@gigmarket.com</p>
                <p className="text-sm">📞 Phone: +91 98765 43210</p>
              </div>
              <div className="flex items-center gap-4">
                {/* Floating social icons */}
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-trust-blue/10 flex items-center justify-center animate-float" style={{ animationDelay: '0s' }}>
                    <span className="text-lg">📘</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-trust-green/10 flex items-center justify-center animate-float" style={{ animationDelay: '0.3s' }}>
                    <span className="text-lg">📸</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center animate-float" style={{ animationDelay: '0.6s' }}>
                    <span className="text-lg">🐦</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
