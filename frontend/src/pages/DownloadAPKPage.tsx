import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Download, Smartphone, CheckCircle, Clock } from 'lucide-react';

const screenshots = [
  '/assets/generated/app-screenshot-1.dim_400x800.svg',
  '/assets/generated/app-screenshot-2.dim_400x800.svg',
  '/assets/generated/app-screenshot-3.dim_400x800.svg',
];

const installationSteps = [
  'Download the APK file by clicking the button above',
  'Open your device Settings and go to Security',
  'Enable "Install from Unknown Sources"',
  'Locate the downloaded APK file in your Downloads folder',
  'Tap the file to begin installation',
  'Follow the on-screen prompts to complete installation',
  'Open GigMarket and create your account',
];

export default function DownloadAPKPage() {
  const handleDownload = () => {
    // In a real app, this would trigger APK download
    alert('APK download will start shortly!');
  };

  return (
    <div className="py-12">
      <div className="container max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Download GigMarket</h1>
          <p className="text-xl text-muted-foreground">
            Get the latest version of GigMarket for Android
          </p>
        </div>

        {/* Download CTA */}
        <Card className="mb-12 border-2 bg-gradient-to-br from-trust-blue to-trust-green text-white">
          <CardContent className="pt-8 pb-8">
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">
                  <Smartphone className="h-10 w-10" />
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-2">GigMarket v2.1.0</h2>
                <p className="text-white/90">Latest stable release • Updated Feb 2026</p>
              </div>
              <Button
                size="lg"
                className="bg-white text-trust-blue hover:bg-white/90 shadow-lg"
                onClick={handleDownload}
              >
                <Download className="mr-2 h-5 w-5" />
                Download APK (12.5 MB)
              </Button>
              <div className="flex items-center justify-center gap-6 text-sm text-white/80">
                <span className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4" />
                  Virus-free
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4" />
                  Safe & Secure
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4" />
                  No Ads
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Version Info */}
        <Card className="mb-12 border-2">
          <CardHeader>
            <CardTitle>What's New in v2.1.0</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex gap-2">
                <CheckCircle className="h-5 w-5 text-trust-green flex-shrink-0 mt-0.5" />
                <span>Improved worker verification process</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="h-5 w-5 text-trust-green flex-shrink-0 mt-0.5" />
                <span>Enhanced location-based search with better accuracy</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="h-5 w-5 text-trust-green flex-shrink-0 mt-0.5" />
                <span>New in-app messaging system for better communication</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="h-5 w-5 text-trust-green flex-shrink-0 mt-0.5" />
                <span>Bug fixes and performance improvements</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="h-5 w-5 text-trust-green flex-shrink-0 mt-0.5" />
                <span>Support for multiple regional languages</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Screenshots Carousel */}
        <Card className="mb-12 border-2">
          <CardHeader>
            <CardTitle>App Screenshots</CardTitle>
          </CardHeader>
          <CardContent>
            <Carousel className="w-full max-w-2xl mx-auto">
              <CarouselContent>
                {screenshots.map((screenshot, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-4">
                      <img
                        src={screenshot}
                        alt={`App screenshot ${index + 1}`}
                        className="w-full h-auto rounded-xl shadow-lg border-2"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </CardContent>
        </Card>

        {/* Installation Steps */}
        <Card className="mb-12 border-2">
          <CardHeader>
            <CardTitle>Installation Instructions</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-3">
              {installationSteps.map((step, index) => (
                <li key={index} className="flex gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-trust-blue text-white flex items-center justify-center text-sm font-semibold">
                    {index + 1}
                  </span>
                  <span className="text-muted-foreground pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>

        {/* Coming Soon */}
        <Card className="border-2 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                <Clock className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Coming Soon on Play Store</h3>
                <p className="text-muted-foreground mb-3">
                  We're working hard to bring GigMarket to the Google Play Store. Once available, you'll be able to download and update the app directly from the Play Store with automatic updates.
                </p>
                <p className="text-sm text-muted-foreground">
                  Expected launch: Q2 2026
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* System Requirements */}
        <Card className="mt-8 border-2">
          <CardHeader>
            <CardTitle>System Requirements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold mb-1">Minimum Requirements:</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Android 6.0 or higher</li>
                  <li>• 2 GB RAM</li>
                  <li>• 50 MB free storage</li>
                  <li>• Internet connection</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-1">Recommended:</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Android 10.0 or higher</li>
                  <li>• 4 GB RAM</li>
                  <li>• 100 MB free storage</li>
                  <li>• 4G/WiFi connection</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
