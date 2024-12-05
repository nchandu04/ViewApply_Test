import { loadStripe } from '@stripe/stripe-js';

export const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

export const createCheckoutSession = async (priceId: string, userId: string) => {
  // This would typically call your backend API to create a Stripe checkout session
  // For now, we'll just log the attempt
  console.log('Creating checkout session for:', { priceId, userId });
};