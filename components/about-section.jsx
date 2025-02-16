'use client'
import { motion } from "framer-motion";
import { Heart, Star, Check } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export const AboutSection = () => {
    const MotionAnimation = motion('div')
  return (
    <section className="py-24 relative">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Our Technology</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Powered by advanced AI to create the perfect travel experience
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="glass-morphism h-full">
              <CardContent className="p-6">
                <Heart className="h-8 w-8 mb-4 text-white/80" />
                <h3 className="text-xl font-semibold mb-2">Personalized Planning</h3>
                <p className="text-muted-foreground">
                  Our AI learns your preferences and creates tailored itineraries that match your unique travel style.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="glass-morphism h-full">
              <CardContent className="p-6">
                <Star className="h-8 w-8 mb-4 text-white/80" />
                <h3 className="text-xl font-semibold mb-2">Smart Recommendations</h3>
                <p className="text-muted-foreground">
                  Get intelligent suggestions for activities, restaurants, and attractions based on real traveler data.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="glass-morphism h-full">
              <CardContent className="p-6">
                <Check className="h-8 w-8 mb-4 text-white/80" />
                <h3 className="text-xl font-semibold mb-2">Real-Time Updates</h3>
                <p className="text-muted-foreground">
                  Stay informed with live updates and smart adjustments to ensure your trip goes smoothly.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
