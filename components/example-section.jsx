'use client'
import { motion } from "framer-motion";
import { Monitor, Image, LayoutTemplate } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const examples = [
  {
    title: "Weekend in Paris",
    description: "A perfect blend of culture, cuisine, and iconic landmarks.",
    highlights: ["Eiffel Tower Visit", "Louvre Museum", "Seine River Cruise", "Local Bistro Dining"],
    icon: <Monitor className="h-6 w-6" />
  },
  {
    title: "Tokyo Adventure",
    description: "Modern meets traditional in this vibrant city exploration.",
    highlights: ["Shibuya Crossing", "Senso-ji Temple", "Sushi Workshop", "Robot Restaurant"],
    icon: <Image className="h-6 w-6" />
  },
  {
    title: "New York City",
    description: "The ultimate city that never sleeps experience.",
    highlights: ["Central Park", "Broadway Show", "Times Square", "Food Tour"],
    icon: <LayoutTemplate className="h-6 w-6" />
  }
];

export const ExampleSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Example Itineraries</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See what our AI can create for your next adventure
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {examples.map((example, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass-morphism h-full">
                <CardContent className="p-6">
                  <div className="bg-white/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    {example.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{example.title}</h3>
                  <p className="text-muted-foreground mb-4">{example.description}</p>
                  <ul className="space-y-2">
                    {example.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-white/50 rounded-full mr-2"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
