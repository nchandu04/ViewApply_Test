import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GradientButton } from "@/components/ui/gradient-button";
import { Textarea } from "@/components/ui/textarea";
import { HelpCircle } from "lucide-react";
import { motion } from "framer-motion";

interface InterviewQuestionsFormProps {
  showForm?: boolean;
}

export function InterviewQuestionsForm({ showForm = false }: InterviewQuestionsFormProps) {
  if (!showForm) {
    return (
      <div className="flex items-center gap-3 w-full">
        <div className="p-2 rounded-xl bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(var(--primary))]">
          <HelpCircle className="h-5 w-5 text-white" />
        </div>
        <h3 className="text-xl font-semibold gradient-text">Get Interview Questions</h3>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      <Card className="p-6 bg-white/90 backdrop-blur-sm w-full">
        <form onSubmit={(e) => e.preventDefault()} className="space-y-6 w-full">
          {/* Job Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <div className="space-y-2">
              <Label htmlFor="jobTitle">Job Title</Label>
              <Input 
                id="jobTitle" 
                placeholder="e.g., Frontend Developer"
                className="h-11 px-4 border-gray-200 hover:border-[hsl(var(--primary))/50] focus:border-[hsl(var(--primary))] focus:ring-[hsl(var(--primary))] transition-all duration-200 rounded-xl w-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="experience">Years of Experience</Label>
              <Input 
                id="experience" 
                type="number" 
                placeholder="e.g., 3"
                className="h-11 px-4 border-gray-200 hover:border-[hsl(var(--primary))/50] focus:border-[hsl(var(--primary))] focus:ring-[hsl(var(--primary))] transition-all duration-200 rounded-xl w-full"
              />
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-2 w-full">
            <Label htmlFor="skills">Key Skills</Label>
            <Textarea 
              id="skills" 
              placeholder="List your primary technical skills and technologies..."
              className="min-h-[100px] px-4 py-3 border-gray-200 hover:border-[hsl(var(--primary))/50] focus:border-[hsl(var(--primary))] focus:ring-[hsl(var(--primary))] transition-all duration-200 rounded-xl w-full"
            />
          </div>

          {/* Specific Areas */}
          <div className="space-y-2 w-full">
            <Label htmlFor="areas">Specific Areas of Interest</Label>
            <Input 
              id="areas" 
              placeholder="e.g., System Design, Algorithms, React Performance"
              className="h-11 px-4 border-gray-200 hover:border-[hsl(var(--primary))/50] focus:border-[hsl(var(--primary))] focus:ring-[hsl(var(--primary))] transition-all duration-200 rounded-xl w-full"
            />
          </div>

          <GradientButton className="w-full h-11 text-base font-semibold rounded-xl">
            Get Interview Questions
          </GradientButton>
        </form>
      </Card>
    </motion.div>
  );
}