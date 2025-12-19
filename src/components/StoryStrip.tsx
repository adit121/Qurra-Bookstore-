import React from 'react';
import { Section } from './ui/Section';
import { motion } from 'framer-motion';
export function StoryStrip() {
  return <Section fullWidth className="bg-qurra-text text-white py-24 md:py-32 overflow-hidden relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-qurra-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.p initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }} className="font-serif text-3xl md:text-5xl lg:text-6xl leading-tight">
          "Some books entertain. <br className="hidden md:block" />
          <span className="text-qurra-accent">Some books stay with you.</span>"
        </motion.p>
      </div>
    </Section>;
}