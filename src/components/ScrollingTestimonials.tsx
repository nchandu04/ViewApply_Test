import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { motion, useScroll, useTransform } from "framer-motion";

const testimonials = [
  {
    name: "Priya S.",
    role: "Software Developer",
    content: "Found my dream job through ViewApply's WhatsApp updates. The daily notifications are so convenient!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100"
  },
  {
    name: "Rahul M.",
    role: "Marketing Manager",
    content: "The personalized job alerts helped me land a great position. The filtering is spot-on!",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100"
  },
  {
    name: "Anjali P.",
    role: "Data Analyst",
    content: "ViewApply made my job search so much easier. The WhatsApp updates are perfectly timed!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100"
  }
];

export function ScrollingTestimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [60, 0, 0, 60]);

  return (
    <motion.div 
      ref={containerRef}
      style={{ opacity, y }}
      className="w-full overflow-hidden bg-gradient-to-b from-gray-50 to-white py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-xl font-bold text-center mb-6 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What Our Users Say
        </motion.h2>
        <div className="flex gap-6 animate-scroll no-scrollbar">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <Card 
              key={index} 
              className="flex-none w-[280px] sm:w-[400px] lg:w-[600px] p-4 card-hover bg-white/80 backdrop-blur-sm"
            >
              <div className="flex items-center mb-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-8 h-8 rounded-full ring-2 ring-primary/10"
                />
                <div className="ml-3">
                  <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{testimonial.content}</p>
            </Card>
          ))}
        </div>
      </div>
    </motion.div>
  );
}