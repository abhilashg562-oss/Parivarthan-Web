export const faqData = [
  {
    question: 'How do I create an account on GigMarket?',
    answer: 'Download the app, tap "Sign Up", enter your mobile number, verify with OTP, and complete your profile. For workers, you\'ll need to upload verification documents.',
  },
  {
    question: 'Is GigMarket free to use?',
    answer: 'Yes, creating an account and browsing jobs is completely free. We charge a small service fee only when a job is successfully completed.',
  },
  {
    question: 'How are workers verified?',
    answer: 'All workers undergo a thorough verification process including ID verification, background checks, and skill assessment. We also verify their work history and references.',
  },
  {
    question: 'What payment methods are supported?',
    answer: 'We support UPI, bank transfers, credit/debit cards, and digital wallets. All payments are processed securely through our platform.',
  },
  {
    question: 'How quickly can I find a worker?',
    answer: 'Most job postings receive applications within 24 hours. For urgent requirements, you can use our "Quick Hire" feature to connect with available workers immediately.',
  },
  {
    question: 'What if I\'m not satisfied with a worker?',
    answer: 'You can rate and review workers after job completion. If you face any issues, contact our support team through the Complaint Box, and we\'ll help resolve the matter.',
  },
  {
    question: 'Can I hire workers from other cities?',
    answer: 'Yes, you can search for workers in any location. However, we recommend hiring locally for better coordination and reduced costs.',
  },
  {
    question: 'How do I track my job status?',
    answer: 'Once you hire a worker, you can track the job progress in real-time through the app. You\'ll receive notifications for important updates.',
  },
];

export const reviewsData = [
  {
    id: 1,
    name: 'Amit Patel',
    role: 'Factory Manager',
    userType: 'employer',
    rating: 5,
    text: 'Found 10 reliable workers for my factory within 3 days. The verification process is thorough and gives me confidence. Highly recommend GigMarket!',
    date: 'Feb 15, 2026',
  },
  {
    id: 2,
    name: 'Ramesh Singh',
    role: 'Construction Worker',
    userType: 'worker',
    rating: 5,
    text: 'This app changed my life. I get regular work now and the payment is always on time. The employers are genuine and respectful.',
    date: 'Feb 14, 2026',
  },
  {
    id: 3,
    name: 'Kavita Sharma',
    role: 'School Principal',
    userType: 'employer',
    rating: 4,
    text: 'Hired cleaning staff and helpers for our school. The process was smooth and the workers are professional. Would like to see more filtering options.',
    date: 'Feb 12, 2026',
  },
  {
    id: 4,
    name: 'Suresh Kumar',
    role: 'Driver',
    userType: 'worker',
    rating: 5,
    text: 'Best platform for drivers like me. I can choose jobs based on my schedule and location. The app is easy to use even for someone like me who is not tech-savvy.',
    date: 'Feb 10, 2026',
  },
  {
    id: 5,
    name: 'Neha Gupta',
    role: 'Homemaker',
    userType: 'employer',
    rating: 5,
    text: 'Hired a cleaner and a helper through GigMarket. Both are excellent and trustworthy. The rating system helped me make the right choice.',
    date: 'Feb 8, 2026',
  },
  {
    id: 6,
    name: 'Vijay Yadav',
    role: 'Technician',
    userType: 'worker',
    rating: 4,
    text: 'Good platform with decent job opportunities. The support team is responsive. Would appreciate if they add more categories for specialized technicians.',
    date: 'Feb 5, 2026',
  },
];

export const complaintsData = [
  {
    id: 1,
    ticketId: '1234',
    category: 'Payment Issue',
    subject: 'Payment not received for completed job',
    description: 'I completed a construction job on Feb 10 but haven\'t received payment yet.',
    status: 'in-progress',
    date: 'Feb 12, 2026',
    response: 'We are investigating this issue with the employer. You should receive payment within 48 hours.',
  },
  {
    id: 2,
    ticketId: '1189',
    category: 'Technical Problem',
    subject: 'App crashes when uploading documents',
    description: 'The app keeps crashing whenever I try to upload my ID proof.',
    status: 'resolved',
    date: 'Feb 8, 2026',
    response: 'This issue has been fixed in the latest update (v2.1.0). Please update your app.',
  },
  {
    id: 3,
    ticketId: '1156',
    category: 'Worker Behavior',
    subject: 'Worker did not show up',
    description: 'Hired a worker who confirmed but never showed up on the scheduled date.',
    status: 'closed',
    date: 'Feb 5, 2026',
    response: 'We have taken action against the worker and issued you a full refund. We apologize for the inconvenience.',
  },
];

export const statsData = {
  workersOnboarded: 15000,
  jobsPosted: 25000,
  averageRating: 4.8,
  citiesCovered: 50,
};
