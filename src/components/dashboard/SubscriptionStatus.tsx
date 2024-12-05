import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function SubscriptionStatus() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mb-12"
    >
      <Card className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] p-6 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <CheckCircle2 className="h-6 w-6" />
            <div>
              <h3 className="font-semibold">Active Subscription</h3>
              <p className="text-sm opacity-90">Your subscription is valid until April 30, 2024</p>
            </div>
          </div>
          <span className="text-sm bg-white/20 px-3 py-1 rounded-full">Monthly Plan</span>
        </div>
      </Card>
    </motion.div>
  );
}