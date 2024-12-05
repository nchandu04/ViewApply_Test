import { motion } from "framer-motion";
import { GradientButton } from "@/components/ui/gradient-button";
import { fadeInUp, staggerChildren } from "@/lib/animations";
import { MessageCircle, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <div className="relative min-h-[60vh] sm:min-h-screen flex flex-col hero-section overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=2574')] opacity-[0.02] -z-10" />
      
      {/* Animated Background Shapes */}
      <motion.div 
        className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-[hsl(var(--primary))/10] to-[hsl(var(--secondary))/10] rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-[hsl(var(--accent))/10] to-[hsl(var(--primary))/10] rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="flex-1 flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-32 relative"
        variants={staggerChildren}
        initial="initial"
        animate="animate"
      >
        <div className="text-center w-full">
          {/* Feature Badge */}
          <motion.div 
            className="inline-block mb-4 sm:mb-6 px-4 py-1.5 rounded-full glass-card text-[hsl(var(--primary))] text-sm font-medium"
            variants={fadeInUp}
          >
            <span className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              <span>Simplifying Your Job Search Journey</span>
              <ArrowRight className="w-4 h-4" />
            </span>
          </motion.div>
          
          {/* Main Heading */}
          <motion.h1 
            className="text-2xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-8 leading-tight"
            variants={fadeInUp}
          >
            Get Daily{" "}
            <span className="multi-gradient-text">Job Updates</span>
            <br />
            Directly on{" "}
            <span className="multi-gradient-text">WhatsApp</span>
          </motion.h1>
          
          {/* Description */}
          <motion.p 
            className="text-sm sm:text-lg text-gray-600 mb-6 sm:mb-10 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Wake up to fresh job opportunities every morning. We deliver the latest job listings directly to your WhatsApp, tailored just for you.
          </motion.p>
          
          {/* CTA Button */}
          <motion.div 
            variants={fadeInUp}
            className="mb-8 sm:mb-20"
          >
            <GradientButton className="group text-base sm:text-lg px-8 py-3 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <img 
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" 
                alt="Google" 
                className="w-5 h-5 sm:w-6 sm:h-6 mr-3 inline-block group-hover:scale-110 transition-transform" 
              />
              Sign in with Google
            </GradientButton>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}