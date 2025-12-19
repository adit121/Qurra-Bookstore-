import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';
export function MiniCart() {
  return <motion.div className="fixed top-6 right-6 z-50" initial={{
    opacity: 0,
    scale: 0.8
  }} animate={{
    opacity: 1,
    scale: 1
  }} transition={{
    delay: 1
  }}>
      <button className="relative group bg-white p-3 rounded-full shadow-soft hover:shadow-card transition-all duration-300 border border-gray-100">
        <ShoppingBag className="w-5 h-5 text-qurra-text group-hover:text-qurra-accent transition-colors" />
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-qurra-accent text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white">
          2
        </span>
      </button>
    </motion.div>;
}