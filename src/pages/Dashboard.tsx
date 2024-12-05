import { useState } from 'react';
import { LogOut, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { GradientButton } from "@/components/ui/gradient-button";
import { JobForm } from "@/components/dashboard/JobForm";
import { ATSResumeForm } from "@/components/dashboard/ATSResumeForm";
import { InterviewQuestionsForm } from "@/components/dashboard/InterviewQuestionsForm";
import { SubscriptionStatus } from "@/components/dashboard/SubscriptionStatus";
import { Footer } from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

interface DashboardProps {
  onLogout: () => void;
}

export function Dashboard({ onLogout }: DashboardProps) {
  return (
    <div className="min-h-screen bg-gray-50">
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
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Welcome Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Welcome back, <span className="multi-gradient-text">John Doe</span>
            </h2>
            <p className="text-gray-600">
              Get started by filling out the forms below.
            </p>
          </motion.div>

          {/* Subscription Status */}
          <SubscriptionStatus />

          {/* Forms Grid */}
          <div className="grid gap-8 mb-16">
            {/* Job Form */}
            <JobForm />
            
            {/* Accordion for Additional Services */}
            <Accordion type="single" collapsible className="space-y-6">
              <AccordionItem value="ats-resume" className="border-none rounded-2xl overflow-hidden bg-gradient-to-r from-[hsl(var(--secondary))/5] to-[hsl(var(--accent))/5]">
                <AccordionTrigger className="px-6 py-4 hover:no-underline data-[state=open]:bg-gradient-to-r data-[state=open]:from-[hsl(var(--secondary))/10] data-[state=open]:to-[hsl(var(--accent))/10] transition-all duration-300">
                  <ATSResumeForm />
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="pt-6">
                    <ATSResumeForm showForm={true} />
                  </div>
                </AccordionContent>
              </AccordionItem>

              <div className="relative">
                <Separator className="absolute left-0 right-0 top-[-12px] bg-gradient-to-r from-transparent via-[hsl(var(--primary))] to-transparent opacity-20" />
              </div>

              <AccordionItem value="interview-questions" className="border-none rounded-2xl overflow-hidden bg-gradient-to-r from-[hsl(var(--accent))/5] to-[hsl(var(--primary))/5]">
                <AccordionTrigger className="px-6 py-4 hover:no-underline data-[state=open]:bg-gradient-to-r data-[state=open]:from-[hsl(var(--accent))/10] data-[state=open]:to-[hsl(var(--primary))/10] transition-all duration-300">
                  <InterviewQuestionsForm />
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="pt-6">
                    <InterviewQuestionsForm showForm={true} />
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}