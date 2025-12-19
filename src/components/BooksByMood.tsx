import React from 'react';
import { Section } from './ui/Section';
import { moods } from '../data/mockData';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
export function BooksByMood() {
  return <Section>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-serif text-qurra-text mb-4">
          Choose by How You Feel
        </h2>
        <p className="text-qurra-muted">
          Because sometimes you need a book that matches your soul.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {moods.map((mood, index) => <motion.div key={mood.id} initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: index * 0.1,
        duration: 0.5
      }} viewport={{
        once: true
      }} className={`group relative overflow-hidden rounded-lg p-8 md:p-12 ${mood.color} cursor-pointer`}>
            <div className="relative z-10 flex items-center justify-between">
              <h3 className="text-2xl font-serif text-qurra-text group-hover:translate-x-2 transition-transform duration-300">
                {mood.label}
              </h3>
              <div className="w-10 h-10 rounded-full bg-white/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                <ArrowRight size={18} className="text-qurra-text" />
              </div>
            </div>

            {/* Decorative circle */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 ease-out" />
          </motion.div>)}
      </div>
    </Section>;
}