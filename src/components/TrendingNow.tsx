import React, { useRef } from 'react';
import { Section } from './ui/Section';
import { BookCard } from './BookCard';
import { books } from '../data/mockData';
import { ArrowRight, ArrowLeft } from 'lucide-react';
export function TrendingNow() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const {
        current
      } = scrollRef;
      const scrollAmount = direction === 'left' ? -300 : 300;
      current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };
  const trendingBooks = books.filter(b => b.tags?.includes('trending') || b.tags?.includes('new'));
  return <Section className="border-t border-gray-100">
      <div className="flex items-end justify-between mb-10 px-2">
        <div>
          <span className="text-xs font-bold tracking-widest text-qurra-accent uppercase mb-2 block">
            Trending this week
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-qurra-text">
            What Readers Are Loving
          </h2>
        </div>

        <div className="hidden md:flex gap-2">
          <button onClick={() => scroll('left')} className="p-3 rounded-full border border-gray-200 hover:border-qurra-accent hover:text-qurra-accent transition-colors" aria-label="Scroll left">
            <ArrowLeft size={18} />
          </button>
          <button onClick={() => scroll('right')} className="p-3 rounded-full border border-gray-200 hover:border-qurra-accent hover:text-qurra-accent transition-colors" aria-label="Scroll right">
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <div ref={scrollRef} className="flex gap-6 overflow-x-auto pb-10 px-2 no-scrollbar snap-x snap-mandatory">
        {trendingBooks.map(book => <div key={book.id} className="snap-start shrink-0">
            <BookCard book={book} variant="compact" />
          </div>)}
        {/* Spacer for end of scroll */}
        <div className="w-4 shrink-0" />
      </div>
    </Section>;
}