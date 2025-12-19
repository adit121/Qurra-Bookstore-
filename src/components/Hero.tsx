import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { ArrowRight } from 'lucide-react';
export function Hero() {
  return <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-qurra-bg">
      {/* Background Elements - Abstract/Soft */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F2F0E9] opacity-60 rounded-l-[100px] transform translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-qurra-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        <motion.span initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.2
      }} className="inline-block mb-6 text-xs md:text-sm font-medium tracking-[0.2em] text-qurra-muted uppercase">
          Curated for the modern reader
        </motion.span>

        <motion.h1 initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.4
      }} className="font-serif text-5xl md:text-7xl lg:text-8xl text-qurra-text leading-[1.1] mb-8">
          Books chosen <br />
          <span className="italic text-qurra-accent">with intention.</span>
        </motion.h1>

        <motion.p initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.6
      }} className="text-lg md:text-xl text-qurra-muted max-w-xl mx-auto mb-12 font-light leading-relaxed">
          Stories for slow mornings, sharp minds, and quiet nights. We read
          everything so you don't have to.
        </motion.p>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.8
      }} className="flex flex-col sm:flex-row items-center gap-6">
          <Button size="lg" className="min-w-[180px]">
            Start Exploring
          </Button>
          <Button variant="text" className="group flex items-center gap-2">
            Discover our philosophy
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1.5,
      duration: 1
    }} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-widest text-qurra-muted">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-gray-200 overflow-hidden">
          <div className="w-full h-1/2 bg-qurra-accent animate-pulse" />
        </div>
      </motion.div>
    </section>;
}