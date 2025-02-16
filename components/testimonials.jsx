'use client'
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { MessageSquare, UserRound, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Travel Blogger",
    quote: "The AI-generated itinerary was spot on! It saved me hours of planning and introduced me to hidden gems I wouldn't have found otherwise.",
    image: "photo-1649972904349-6e44c42644a7"
  },
  {
    name: "David Chen",
    role: "Digital Nomad",
    quote: "I use this for all my trips now. The personalization is incredible, and it adapts perfectly to my travel style.",
    image: "photo-1581091226825-a6a2a5aee158"
  },
  {
    name: "Maria Garcia",
    role: "Family Traveler",
    quote: "Planning family trips used to be stressful. This AI tool made it fun and easy, with perfect suggestions for everyone.",
    image: "photo-1581092795360-fd1ca04f0952"
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 relative bg-gradient-to-b from-muted/50 to-background">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Travelers Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real experiences from our community of travelers
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass-morphism h-full">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-white/20 mb-4" />
                  <p className="text-muted-foreground mb-6">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <UserRound className="h-6 w-6" />
                    </div>
                    <div className="ml-3">
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
