import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GradientButton } from "@/components/ui/gradient-button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Plus, Minus, Upload, BriefcaseIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function JobForm() {
  const [locations, setLocations] = useState(['']);
  const [needsReferral, setNeedsReferral] = useState(false);

  const addLocation = () => {
    if (locations.length < 3) {
      setLocations([...locations, '']);
    }
  };

  const removeLocation = (index: number) => {
    setLocations(locations.filter((_, i) => i !== index));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <Card className="p-6 sm:p-8 shadow-lg bg-white/90 backdrop-blur-sm border border-gray-100/50 rounded-2xl">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 rounded-xl bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]">
            <BriefcaseIcon className="h-5 w-5 text-white" />
          </div>
          <h3 className="text-xl font-semibold gradient-text">Customize Your Job Alerts</h3>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          {/* Job Title and WhatsApp Number */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="jobTitle" className="text-sm font-medium">Job Title</Label>
              <Input 
                id="jobTitle" 
                placeholder="e.g., Frontend Developer"
                className="h-11 px-4 border-gray-200 hover:border-[hsl(var(--primary))/50] focus:border-[hsl(var(--primary))] focus:ring-[hsl(var(--primary))] transition-all duration-200 rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="whatsapp" className="text-sm font-medium">WhatsApp Number</Label>
              <Input 
                id="whatsapp" 
                placeholder="+91 98765 43210"
                className="h-11 px-4 border-gray-200 hover:border-[hsl(var(--primary))/50] focus:border-[hsl(var(--primary))] focus:ring-[hsl(var(--primary))] transition-all duration-200 rounded-xl"
              />
            </div>
          </div>

          {/* Locations */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">Preferred Locations (Max 3)</Label>
            <div className="space-y-3">
              <AnimatePresence>
                {locations.map((_, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="flex gap-2"
                  >
                    <Input 
                      placeholder={`Enter city name`}
                      className="h-11 px-4 border-gray-200 hover:border-[hsl(var(--primary))/50] focus:border-[hsl(var(--primary))] focus:ring-[hsl(var(--primary))] transition-all duration-200 rounded-xl"
                    />
                    {index > 0 && (
                      <button
                        type="button"
                        onClick={() => removeLocation(index)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
              {locations.length < 3 && (
                <GradientButton
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={addLocation}
                  className="flex items-center gap-1.5 h-8 text-sm rounded-xl w-auto px-3 hover:scale-105 transition-transform duration-200"
                >
                  <Plus className="h-3 w-3" />
                  Add Location
                </GradientButton>
              )}
            </div>
          </div>

          {/* Experience and Job Type */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <Label className="text-sm font-medium">Experience Level</Label>
              <RadioGroup defaultValue="1-3" className="flex flex-wrap gap-3">
                {[
                  { value: '1-3', label: '1-3 years' },
                  { value: '3-5', label: '3-5 years' },
                  { value: '5+', label: '5+ years' }
                ].map(({ value, label }) => (
                  <div key={value} className="flex items-center space-x-2 bg-gray-50/80 px-3 py-2 rounded-xl border border-gray-100 hover:border-[hsl(var(--primary))/30] transition-all duration-200">
                    <RadioGroupItem value={value} id={value} className="text-[hsl(var(--primary))]" />
                    <Label htmlFor={value} className="font-medium text-sm">{label}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="space-y-3">
              <Label className="text-sm font-medium">Job Type</Label>
              <div className="flex gap-4">
                {[
                  { id: 'fulltime', label: 'Full-time' },
                  { id: 'parttime', label: 'Part-time' }
                ].map(({ id, label }) => (
                  <div key={id} className="flex items-center space-x-2 bg-gray-50/80 px-3 py-2 rounded-xl border border-gray-100 hover:border-[hsl(var(--primary))/30] transition-all duration-200">
                    <Checkbox id={id} className="text-[hsl(var(--primary))]" />
                    <Label htmlFor={id} className="font-medium text-sm">{label}</Label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Referral */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 bg-gray-50/80 px-4 py-2.5 rounded-xl w-fit border border-gray-100 hover:border-[hsl(var(--primary))/30] transition-all duration-200">
              <Checkbox 
                id="referral" 
                checked={needsReferral}
                onCheckedChange={(checked) => setNeedsReferral(checked as boolean)}
                className="text-[hsl(var(--primary))]"
              />
              <Label htmlFor="referral" className="font-medium text-sm">I want referral from a company</Label>
            </div>

            <AnimatePresence>
              {needsReferral && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-2"
                >
                  <Label htmlFor="resume" className="text-sm font-medium">Upload Resume</Label>
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
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Submit Button */}
          <div className="pt-6">
            <GradientButton className="h-11 text-base font-semibold rounded-xl w-full hover:scale-105 transition-transform duration-200">
              Get Job Updates on WhatsApp
            </GradientButton>
          </div>
        </form>
      </Card>
    </motion.div>
  );
}