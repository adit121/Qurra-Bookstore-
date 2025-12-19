import React, { useState, lazy } from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag } from 'lucide-react';
import { Book } from '../data/mockData';
interface BookCardProps {
  book: Book;
  variant?: 'compact' | 'standard' | 'detailed';
  showAddButton?: boolean;
}
export function BookCard({
  book,
  variant = 'standard',
  showAddButton = false
}: BookCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  return <motion.div className="group relative flex flex-col h-full" initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true,
    margin: '-50px'
  }} transition={{
    duration: 0.5
  }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      {/* Cover Image */}
      <div className={`relative overflow-hidden rounded-sm shadow-sm transition-all duration-500 ease-out ${isHovered ? 'shadow-card -translate-y-1' : ''} ${variant === 'compact' ? 'aspect-[2/3] w-32 md:w-40' : 'aspect-[2/3] w-full'}`}>
        <img src={book.coverImage} alt={`Cover of ${book.title} by ${book.author}`} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`} onLoad={() => setImageLoaded(true)} loading="lazy" />

        {/* Loading placeholder */}
        {!imageLoaded && <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
            <div className="text-xs text-gray-400 font-serif">Loading...</div>
          </div>}

        {/* Wishlist Button */}
        <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white hover:text-red-500" aria-label="Add to wishlist">
          <Heart size={16} />
        </button>

        {/* Add to Cart Overlay (for compact/standard) */}
        {(variant === 'compact' || variant === 'standard') && <div className={`absolute bottom-0 left-0 right-0 p-4 translate-y-full transition-transform duration-300 ${isHovered ? 'translate-y-0' : ''}`}>
            <button className="w-full py-3 bg-qurra-text text-white text-sm font-medium rounded-sm shadow-lg flex items-center justify-center gap-2 hover:bg-black transition-colors">
              <ShoppingBag size={14} />
              Add to Cart
            </button>
          </div>}
      </div>

      {/* Content */}
      <div className={`mt-4 flex flex-col ${variant === 'compact' ? 'w-32 md:w-40' : 'w-full'}`}>
        {book.tags && book.tags.includes('bestseller') && <span className="text-[10px] uppercase tracking-widest text-qurra-accent font-semibold mb-1">
            Bestseller
          </span>}
        {book.tags && book.tags.includes('new') && <span className="text-[10px] uppercase tracking-widest text-blue-400 font-semibold mb-1">
            New Arrival
          </span>}

        <h3 className={`font-serif text-qurra-text leading-tight mb-1 ${variant === 'compact' ? 'text-sm' : 'text-lg'}`}>
          {book.title}
        </h3>
        <p className="text-qurra-muted text-sm mb-2">{book.author}</p>

        <div className="mt-auto flex items-center justify-between">
          <span className="font-medium text-qurra-text">
            ${book.price.toFixed(2)}
          </span>

          {/* Always visible add button for detailed view or if forced */}
          {(showAddButton || variant === 'detailed') && <button className="text-xs font-medium uppercase tracking-wide border-b border-qurra-text pb-0.5 hover:text-qurra-accent hover:border-qurra-accent transition-colors">
              Add to Cart
            </button>}
        </div>

        {/* Editorial Note */}
        {variant === 'detailed' && book.editorialNote && <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-xs text-qurra-muted italic font-serif">
              "{book.editorialNote}"
            </p>
          </div>}
      </div>
    </motion.div>;
}