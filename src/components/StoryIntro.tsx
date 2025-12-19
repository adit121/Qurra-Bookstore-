import React from 'react';
import { Section } from './ui/Section';
import { motion } from 'framer-motion';
export function StoryIntro() {
  return <Section className="bg-qurra-bg">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div initial={{
        opacity: 0,
        scale: 0.95
      }} whileInView={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }} className="relative py-12">
          {/* Decorative quotes */}
          <span className="absolute top-0 left-0 text-6xl font-serif text-qurra-accent/20">
            "
          </span>

          <h2 className="font-serif text-2xl md:text-4xl text-qurra-text leading-relaxed font-medium">
            QURRA was created for readers who don't want{' '}
            <span className="italic text-qurra-muted">more</span> books — but{' '}
            <span className="italic text-qurra-accent">better</span> ones.
          </h2>

          <span className="absolute bottom-0 right-0 text-6xl font-serif text-qurra-accent/20 leading-[0]">
            "
          </span>
        </motion.div>
      </div>
    </Section>;
}