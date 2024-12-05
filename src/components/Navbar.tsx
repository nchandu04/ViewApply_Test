import { Button } from "@/components/ui/button";
import { MessageCircle, LogIn, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { GradientButton } from "@/components/ui/gradient-button";

interface NavbarProps {
  onLogin: () => void;
}

export function Navbar({ onLogin }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const handleLogin = () => {
    onLogin();
    setIsOpen(false);
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
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

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4 pr-4">
            <Button 
              variant="ghost"
              onClick={scrollToPricing}
              className="text-[hsl(var(--primary))] hover:bg-gradient-to-r hover:from-[hsl(var(--primary))/0.1] hover:to-[hsl(var(--secondary))/0.1] transition-all duration-300"
            >
              Pricing
            </Button>
            <Button 
              variant="ghost"
              className="text-[hsl(var(--primary))] hover:bg-gradient-to-r hover:from-[hsl(var(--primary))/0.1] hover:to-[hsl(var(--secondary))/0.1] transition-all duration-300"
            >
              Contact
            </Button>
            <GradientButton 
              variant="secondary"
              size="sm"
              className="flex items-center gap-1.5 h-9 px-4"
              onClick={handleLogin}
            >
              <LogIn className="h-4 w-4" />
              <span>Login</span>
            </GradientButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-6 w-6 text-[hsl(var(--primary))]" />
            ) : (
              <Menu className="h-6 w-6 text-[hsl(var(--primary))]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 space-y-2 pb-6"
          >
            <Button 
              variant="ghost"
              onClick={scrollToPricing}
              className="w-full text-left text-[hsl(var(--primary))] hover:bg-gradient-to-r hover:from-[hsl(var(--primary))/0.1] hover:to-[hsl(var(--secondary))/0.1] transition-all duration-300"
            >
              Pricing
            </Button>
            <Button 
              variant="ghost"
              className="w-full text-left text-[hsl(var(--primary))] hover:bg-gradient-to-r hover:from-[hsl(var(--primary))/0.1] hover:to-[hsl(var(--secondary))/0.1] transition-all duration-300"
            >
              Contact
            </Button>
            <GradientButton 
              variant="secondary"
              size="sm"
              className="w-full flex items-center justify-center gap-1.5 h-9"
              onClick={handleLogin}
            >
              <LogIn className="h-4 w-4" />
              <span>Login</span>
            </GradientButton>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}