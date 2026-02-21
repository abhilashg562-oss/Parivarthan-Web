import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { UserPlus, FileText, Users, CheckCircle, Shield, HelpCircle } from 'lucide-react';
import { faqData } from '../data/dummyData';

const steps = [
  {
    icon: UserPlus,
    title: 'How to Create an Account',
    steps: [
      'Download the GigMarket APK from our website',
      'Install the app on your Android device',
      'Open the app and tap "Sign Up"',
      'Enter your mobile number and verify with OTP',
      'Complete your profile with basic information',
      'Upload required documents for verification',
      'Wait for approval (usually within 24 hours)',
    ],
  },
  {
    icon: FileText,
    title: 'How to Post a Job (For Employers)',
    steps: [
      'Log in to your employer account',
      'Tap the "Post Job" button on the home screen',
      'Select the job category (e.g., Factory Work, Driver)',
      'Enter job details: title, description, requirements',
      'Set the budget and payment terms',
      'Add location and preferred start date',
      'Review and publish your job posting',
      'Wait for workers to apply',
    ],
  },
  {
    icon: Users,
    title: 'How to Apply as a Worker',
    steps: [
      'Log in to your worker account',
      'Browse available jobs in your area',
      'Use filters to find jobs matching your skills',
      'Tap on a job to view full details',
      'Read requirements carefully',
      'Tap "Apply Now" if you meet the criteria',
      'Add a brief message to the employer',
      'Wait for the employer to review your application',
    ],
  },
  {
    icon: CheckCircle,
    title: 'How to Hire a Worker',
    steps: [
      'Review applications received on your job posting',
      'Check worker profiles, ratings, and reviews',
      'Shortlist candidates based on experience',
      'Contact workers through in-app messaging',
      'Schedule interviews if needed',
      'Select the best candidate and tap "Hire"',
      'Confirm job details and start date',
      'Track job progress through the app',
    ],
  },
];

const safetyTips = [
  'Always verify worker credentials before hiring',
  'Meet in public places for initial discussions',
  'Use in-app messaging for communication',
  'Make payments through the app for security',
  'Report suspicious behavior immediately',
  'Keep your personal information private',
  'Read reviews and ratings carefully',
  'Trust your instincts - if something feels wrong, it probably is',
];

export default function UserManualPage() {
  return (
    <div className="py-12">
      <div className="container max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">User Manual</h1>
          <p className="text-xl text-muted-foreground">
            Everything you need to know to use GigMarket effectively
          </p>
        </div>

        {/* Step-by-Step Guides */}
        <div className="space-y-6 mb-12">
          {steps.map((section, index) => {
            const Icon = section.icon;
            return (
              <Card key={index} className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-trust-blue to-trust-green flex items-center justify-center">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-3">
                    {section.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-trust-blue/10 text-trust-blue flex items-center justify-center text-sm font-semibold">
                          {stepIndex + 1}
                        </span>
                        <span className="text-muted-foreground">{step}</span>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Safety Tips */}
        <Card className="mb-12 border-2 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <Shield className="h-6 w-6 text-orange-600" />
              Safety Tips
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid md:grid-cols-2 gap-3">
              {safetyTips.map((tip, index) => (
                <li key={index} className="flex gap-2">
                  <span className="text-orange-600 flex-shrink-0">⚠️</span>
                  <span className="text-muted-foreground">{tip}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <HelpCircle className="h-6 w-6 text-trust-blue" />
              Frequently Asked Questions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
