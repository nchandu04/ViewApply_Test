import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ScrollingTestimonials } from "@/components/ScrollingTestimonials";
import { Pricing } from "@/components/Pricing";
import { VerticalTestimonials } from "@/components/VerticalTestimonials";
import { Footer } from "@/components/Footer";

interface LandingProps {
  onLogin: () => void;
}

export function Landing({ onLogin }: LandingProps) {
  return (
    <>
      <Navbar onLogin={onLogin} />
      <Hero />
      <ScrollingTestimonials />
      <Pricing />
      <VerticalTestimonials />
      <Footer />
    </>
  );
}