import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GradientButton } from "@/components/ui/gradient-button";
import { Textarea } from "@/components/ui/textarea";
import { FileText, Upload } from "lucide-react";
import { motion } from "framer-motion";

interface ATSResumeFormProps {
  showForm?: boolean;
}

export function ATSResumeForm({ showForm = false }: ATSResumeFormProps) {
  if (!showForm) {
    return (
      <div className="flex items-center gap-3 w-full">
        <div className="p-2 rounded-xl bg-gradient-to-r from-[hsl(var(--secondary))] to-[hsl(var(--accent))]">
          <FileText className="h-5 w-5 text-white" />
        </div>
        <h3 className="text-xl font-semibold gradient-text">Get ATS-Friendly Resume</h3>
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
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input 
                id="fullName" 
                placeholder="John Doe"
                className="h-11 px-4 border-gray-200 hover:border-[hsl(var(--primary))/50] focus:border-[hsl(var(--primary))] focus:ring-[hsl(var(--primary))] transition-all duration-200 rounded-xl w-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="john@example.com"
                className="h-11 px-4 border-gray-200 hover:border-[hsl(var(--primary))/50] focus:border-[hsl(var(--primary))] focus:ring-[hsl(var(--primary))] transition-all duration-200 rounded-xl w-full"
              />
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2 w-full">
            <Label htmlFor="summary">Professional Summary</Label>
            <Textarea 
              id="summary" 
              placeholder="Brief overview of your professional background and career goals..."
              className="min-h-[100px] px-4 py-3 border-gray-200 hover:border-[hsl(var(--primary))/50] focus:border-[hsl(var(--primary))] focus:ring-[hsl(var(--primary))] transition-all duration-200 rounded-xl w-full"
            />
          </div>

          {/* Skills */}
          <div className="space-y-2 w-full">
            <Label htmlFor="skills">Key Skills (comma separated)</Label>
            <Input 
              id="skills" 
              placeholder="React, TypeScript, Node.js, etc."
              className="h-11 px-4 border-gray-200 hover:border-[hsl(var(--primary))/50] focus:border-[hsl(var(--primary))] focus:ring-[hsl(var(--primary))] transition-all duration-200 rounded-xl w-full"
            />
          </div>

          {/* Current Resume Upload */}
          <div className="space-y-2 w-full">
            <Label>Current Resume</Label>
            <div className="mt-2">
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-200 rounded-xl cursor-pointer hover:border-[hsl(var(--primary))] transition-all duration-200 bg-gray-50/80">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload className="h-6 w-6 text-gray-400 mb-2" />
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-gray-500 mt-1">PDF or DOCX (MAX. 2MB)</p>
                </div>
                <input id="resume" type="file" className="hidden" accept=".pdf,.docx" />
              </label>
            </div>
          </div>

          <GradientButton className="w-full h-11 text-base font-semibold rounded-xl">
            Get ATS-Optimized Resume
          </GradientButton>
        </form>
      </Card>
    </motion.div>
  );
}