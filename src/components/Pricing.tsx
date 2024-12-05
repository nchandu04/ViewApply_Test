import { Check } from "lucide-react";
import { GradientButton } from "@/components/ui/gradient-button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

const plans = [
  {
    name: "Monthly",
    price: "₹699",
    duration: "per month",
    features: [
      "Daily job updates on WhatsApp",
      "Personalized job recommendations",
      "Priority notifications",
      "24/7 support"
    ]
  },
  {
    name: "Quarterly",
    price: "₹999",
    duration: "for two months",
    features: [
      "All Monthly plan features",
      "Resume review",
      "Interview preparation tips",
      "Extended support hours",
      "Save ₹399!"
    ],
    popular: true
  }
];

interface PricingProps {
  onClick?: () => void;
}

export function Pricing({ onClick }: PricingProps) {
  return (
    <div id="pricing" className="bg-gradient-to-b from-white to-gray-50/50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          subtitle="Get started with our flexible pricing plans"
        >
          Choose Your Plan
        </SectionHeading>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className={`relative overflow-hidden p-8 ${
                plan.popular ? 'border-2 border-[hsl(var(--primary))]' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute -right-[40%] top-5 w-full">
                    <div className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-white text-sm font-medium py-1 text-center w-full transform rotate-45 shadow-lg">
                      Popular
                    </div>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold multi-gradient-text">{plan.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                  <span className="ml-2 text-gray-500">{plan.duration}</span>
                </div>
                
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <div className="rounded-full p-1 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <span className="ml-3 text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <GradientButton 
                  className="w-full mt-8"
                  variant={plan.popular ? "primary" : "secondary"}
                  onClick={onClick}
                >
                  Get Started
                </GradientButton>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}