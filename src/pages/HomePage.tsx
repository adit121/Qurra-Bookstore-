import React from 'react';
import { Hero } from '../components/Hero';
import { StoryIntro } from '../components/StoryIntro';
import { TrendingNow } from '../components/TrendingNow';
import { BestSellers } from '../components/BestSellers';
import { StoryStrip } from '../components/StoryStrip';
import { NewInStock } from '../components/NewInStock';
import { EditorsPicks } from '../components/EditorsPicks';
import { BooksByMood } from '../components/BooksByMood';
import { HiddenGems } from '../components/HiddenGems';
import { StaffFavorites } from '../components/StaffFavorites';
import { CommunitySignup } from '../components/CommunitySignup';
import { Footer } from '../components/Footer';
import { MiniCart } from '../components/MiniCart';
import { motion, useScroll, useSpring } from 'framer-motion';
export function HomePage() {
  const {
    scrollYProgress
  } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return <div className="bg-qurra-bg min-h-screen w-full relative">
      {/* Scroll Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-qurra-accent origin-left z-50" style={{
      scaleX
    }} />

      {/* Navigation Placeholder (Absolute) */}
      <nav className="absolute top-0 left-0 right-0 z-40 p-6 flex justify-between items-center">
        <div className="font-serif text-2xl font-bold tracking-tight text-qurra-text">
          QURRA
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-qurra-text">
          <a href="#" className="hover:text-qurra-accent transition-colors">
            Shop
          </a>
          <a href="#" className="hover:text-qurra-accent transition-colors">
            Journal
          </a>
          <a href="#" className="hover:text-qurra-accent transition-colors">
            About
          </a>
        </div>
        {/* Cart is handled by MiniCart component */}
      </nav>

      <MiniCart />

      <main>
        <Hero />
        <StoryIntro />
        <TrendingNow />
        <BestSellers />
        <StoryStrip />
        <NewInStock />
        <EditorsPicks />
        <BooksByMood />
        <HiddenGems />
        <StaffFavorites />
        <CommunitySignup />
      </main>

      <Footer />
    </div>;
}