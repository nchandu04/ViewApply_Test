// App Constants
export const APP_NAME = 'ViewApply';
export const APP_DESCRIPTION = 'Get Daily Job Updates on WhatsApp';

// Pricing Constants
export const PLANS = {
  MONTHLY: {
    name: 'Monthly',
    price: '₹699',
    duration: 'per month',
    features: [
      'Daily job updates on WhatsApp',
      'Personalized job recommendations',
      'Priority notifications',
      '24/7 support'
    ]
  },
  QUARTERLY: {
    name: 'Quarterly',
    price: '₹999',
    duration: 'for two months',
    features: [
      'All Monthly plan features',
      'Resume review',
      'Interview preparation tips',
      'Extended support hours',
      'Save ₹399!'
    ],
    popular: true
  }
};

// Form Constants
export const EXPERIENCE_LEVELS = [
  { value: '1-3', label: '1-3 years' },
  { value: '3-5', label: '3-5 years' },
  { value: '5+', label: '5+ years' }
];

export const JOB_TYPES = [
  { id: 'fulltime', label: 'Full-time' },
  { id: 'parttime', label: 'Part-time' }
];

// File Upload Constants
export const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB
export const ALLOWED_FILE_TYPES = ['.pdf', '.docx'];

// API Endpoints
export const API_ENDPOINTS = {
  WHATSAPP: '/api/whatsapp',
  RESUME: '/api/resume',
  INTERVIEW: '/api/interview'
};

// Animation Constants
export const ANIMATION_DURATION = {
  FAST: 0.2,
  MEDIUM: 0.3,
  SLOW: 0.5
};

// Theme Constants
export const THEME = {
  colors: {
    primary: 'hsl(var(--primary))',
    secondary: 'hsl(var(--secondary))',
    accent: 'hsl(var(--accent))',
    background: 'hsl(var(--background))',
    foreground: 'hsl(var(--foreground))',
    muted: 'hsl(var(--muted))',
    border: 'hsl(var(--border))'
  },
  borderRadius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    '2xl': '1.5rem'
  }
};