export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;
}

export interface JobPreference {
  id?: string;
  userId: string;
  jobTitle: string;
  locations: string[];
  experienceLevel: string;
  jobTypes: string[];
  whatsappNumber: string;
  needsReferral: boolean;
  resumeUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Subscription {
  id: string;
  userId: string;
  status: 'active' | 'canceled' | 'expired';
  plan: 'monthly' | 'quarterly';
  startDate: Date;
  endDate: Date;
  autoRenew: boolean;
}

export type PaymentProvider = 'razorpay' | 'paytm' | 'phonepe';

export interface PaymentSession {
  id: string;
  amount: number;
  currency: string;
  status: 'pending' | 'completed' | 'failed';
  provider: PaymentProvider;
  metadata: Record<string, any>;
  createdAt: Date;
}