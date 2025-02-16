'use client'
import { AboutSection } from "@/components/about-section";
import { ExampleSection } from "@/components/example-section";
import { FaqSection } from "@/components/faq-section";
import { FeaturesSection } from "@/components/feature-section";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { TestimonialsSection } from "@/components/testimonials";
import { motion, AnimatePresence } from "framer-motion";

const Index = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-background"
      >
        <main>
          <HeroSection />
          <div className="alt-section-1">
            <FeaturesSection />
          </div>
          <div className="alt-section-2">
            <ExampleSection />
          </div>
          <div className="alt-section-1">
            <TestimonialsSection />
          </div>
          <div className="alt-section-2">
            <AboutSection />
          </div>
          <div className="alt-section-1">
            <FaqSection />
          </div>
        </main>
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
