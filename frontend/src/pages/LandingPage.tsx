import HeroSection from '../components/HeroSection';
import HowItWorksSection from '../components/HowItWorksSection';
import FeaturesSection from '../components/FeaturesSection';
import NavigationCards from '../components/NavigationCards';
import StatsSection from '../components/StatsSection';
import TrustBadgesSection from '../components/TrustBadgesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import WorkerCategoriesGrid from '../components/WorkerCategoriesGrid';
import CTAFooter from '../components/CTAFooter';

export default function LandingPage() {
  return (
    <div>
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
      <StatsSection />
      <WorkerCategoriesGrid />
      <NavigationCards />
      <TrustBadgesSection />
      <TestimonialsSection />
      <CTAFooter />
    </div>
  );
}
