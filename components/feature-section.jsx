'use client'
import { motion } from "framer-motion";
import { Calendar, Map, Clock, Sparkles } from "lucide-react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: <Calendar className="h-6 w-6 text-primary" />,
    title: "Smart Scheduling",
    description: "Optimized daily planning that adapts to your preferences and travel style."
  },
  {
    icon: <Map className="h-6 w-6 text-primary" />,
    title: "Local Insights",
    description: "Discover hidden gems and must-visit spots with AI-powered recommendations."
  },
  {
    icon: <Clock className="h-6 w-6 text-primary" />,
    title: "Real-time Updates",
    description: "Stay informed with live updates and smart adjustments to your itinerary."
  },
  {
    icon: <Sparkles className="h-6 w-6 text-primary" />,
    title: "Personalization",
    description: "Tailored experiences based on your interests, budget, and travel pace."
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-24 relative bg-gradient-to-b from-muted/50 to-background">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powered by Intelligence</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the future of travel planning with our cutting-edge features
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};