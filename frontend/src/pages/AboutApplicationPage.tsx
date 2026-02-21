import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Users, TrendingUp, Award } from 'lucide-react';

export default function AboutApplicationPage() {
  return (
    <div className="py-12">
      <div className="container max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About GigMarket</h1>
          <p className="text-xl text-muted-foreground">
            Connecting workers with opportunities, building communities
          </p>
        </div>

        {/* Mission */}
        <Card className="mb-8 border-2">
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

        {/* Problem Statement */}
        <Card className="mb-8 border-2">
          <CardHeader>
            <CardTitle className="text-2xl">The Problem We Solve</CardTitle>
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

        {/* Target Users */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-6 w-6 text-trust-green" />
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

          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-6 w-6 text-trust-blue" />
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
        <Card className="mb-8 border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <TrendingUp className="h-6 w-6 text-trust-green" />
              Key Benefits
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-3 text-trust-blue">For Employers</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ Access to verified workers</li>
                  <li>✓ Quick hiring process</li>
                  <li>✓ Location-based search</li>
                  <li>✓ Transparent ratings & reviews</li>
                  <li>✓ Secure payment system</li>
                  <li>✓ Job tracking & management</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3 text-trust-green">For Workers</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ Consistent job opportunities</li>
                  <li>✓ Profile visibility</li>
                  <li>✓ Build reputation through ratings</li>
                  <li>✓ Timely payments</li>
                  <li>✓ Easy application process</li>
                  <li>✓ Support & assistance</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Screenshots */}
        <Card className="mb-8 border-2">
          <CardHeader>
            <CardTitle className="text-2xl">App Screenshots</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center gap-6 flex-wrap">
              <img
                src="/assets/generated/app-screenshot-1.dim_400x800.svg"
                alt="App screenshot 1"
                className="h-96 w-auto rounded-xl shadow-lg border-2"
              />
            </div>
          </CardContent>
        </Card>

        {/* Founder Info */}
        <Card className="border-2 bg-gradient-to-br from-trust-blue/5 to-trust-green/5">
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
            <div className="pt-4 border-t">
              <p className="font-semibold">Contact Us</p>
              <p className="text-sm">Email: info@gigmarket.com</p>
              <p className="text-sm">Phone: +91 98765 43210</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
