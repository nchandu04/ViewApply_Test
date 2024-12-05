import { motion } from "framer-motion";

interface SectionHeadingProps {
  children: React.ReactNode;
  subtitle?: string;
}

export function SectionHeading({ children, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12"
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 gradient-text">
        {children}
      </h2>
      {subtitle && (
        <p className="text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}