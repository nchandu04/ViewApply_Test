import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const testimonials = [
  {
    content: "ViewApply has revolutionized my job search. The WhatsApp updates are timely and relevant.",
    name: "Arun Kumar",
    role: "Frontend Developer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100"
  },
  {
    content: "The convenience of getting job updates on WhatsApp is unmatched. Highly recommend!",
    name: "Sneha Patel",
    role: "Product Manager",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100"
  },
  {
    content: "Thanks to ViewApply, I never miss out on relevant job opportunities. Great service!",
    name: "Vikram Singh",
    role: "UX Designer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100"
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export function VerticalTestimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-2xl sm:text-3xl font-bold text-center mb-4 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Success Stories
        </motion.h2>
        <motion.p
          className="text-gray-600 text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Discover how ViewApply has helped professionals find their dream jobs through our personalized WhatsApp updates.
        </motion.p>
        
        <motion.div 
          ref={ref}
          className="grid gap-8 md:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="p-8 relative group hover:shadow-lg transition-shadow duration-300 bg-white/80 backdrop-blur-sm border border-gray-100">
                <div className="absolute top-4 right-4">
                  <Quote className="h-8 w-8 text-[hsl(var(--primary))] opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
                </div>
                
                <div className="relative">
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">"{testimonial.content}"</p>
                  
                  <div className="flex items-center">
                    <div className="relative">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover ring-2 ring-[hsl(var(--primary))/10] group-hover:ring-[hsl(var(--primary))/20] transition-all duration-300"
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                    </div>
                    
                    <div className="ml-4">
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-[hsl(var(--primary))]">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}