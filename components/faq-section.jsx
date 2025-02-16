'use client'
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const faqs = [
  {
    question: "How does the AI create personalized itineraries?",
    answer: "Our AI analyzes your preferences, travel style, budget, and interests to create custom itineraries. It learns from millions of travel data points to suggest the best experiences for you."
  },
  {
    question: "Can I modify the generated itinerary?",
    answer: "Absolutely! While our AI creates a great starting point, you have full control to customize any aspect of your itinerary to make it perfect for you."
  },
  {
    question: "What types of trips can I plan?",
    answer: "From weekend getaways to month-long adventures, city breaks to beach holidays, our AI can plan any type of trip across the globe."
  },
  {
    question: "How far in advance should I plan?",
    answer: "While you can create itineraries at any time, we recommend planning at least a few weeks ahead for better availability and pricing of activities and accommodations."
  }
];

export const FaqSection = () => {
  return (
    <section className="py-24 relative bg-gradient-to-b from-muted/50 to-background">
      <div className="container px-4 mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">
            Everything you need to know about our AI travel planner
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="glass-morphism rounded-lg px-6">
                <AccordionTrigger className="text-lg font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
