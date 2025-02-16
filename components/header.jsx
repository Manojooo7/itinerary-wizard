'use client'
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import AuthButton from "./authButton";

export const Header = () => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass-morphism backdrop-blur-lg"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="text-xl font-bold">
            TravelAI
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm hover:text-white/80 transition-colors">Features</a>
            <a href="#examples" className="text-sm hover:text-white/80 transition-colors">Examples</a>
            <a href="#about" className="text-sm hover:text-white/80 transition-colors">About</a>
            <AuthButton/>
          </nav>
        </div>
      </div>
    </motion.header>
  );
};
