import { LogOut, MessageCircle } from "lucide-react";
import { ScrollingTestimonials } from "@/components/ScrollingTestimonials";
import { Pricing } from "@/components/Pricing";
import { GradientButton } from "@/components/ui/gradient-button";
import { motion } from "framer-motion";
import { useState } from "react";
import { Dashboard } from "./Dashboard";

interface PrescreenProps {
  onLogout: () => void;
}

export function Prescreen({ onLogout }: PrescreenProps) {
  const [showDashboard, setShowDashboard] = useState(false);

  const handlePricingClick = () => {
    setShowDashboard(true);
  };

  if (showDashboard) {
    return <Dashboard onLogout={onLogout} />;
  }

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 navbar-gradient border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <MessageCircle className="h-6 w-6 sm:h-8 sm:w-8 text-[hsl(var(--primary))]" />
              <span className="ml-2 text-lg sm:text-xl font-bold multi-gradient-text">
                ViewApply
              </span>
            </motion.div>

            <GradientButton 
              variant="secondary"
              size="sm"
              className="flex items-center gap-1.5 h-9 px-4"
              onClick={onLogout}
            >
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </GradientButton>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <main className="pt-16">
        {/* User Welcome Section */}
        <div className="bg-gradient-to-b from-gray-50 to-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Welcome back, <span className="multi-gradient-text">John Doe</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Your job updates are being sent to your WhatsApp. Check out our latest success stories and pricing plans below.
              </p>
            </motion.div>
          </div>
        </div>

        <ScrollingTestimonials />
        <div onClick={handlePricingClick}>
          <Pricing />
        </div>
      </main>
    </div>
  );
}