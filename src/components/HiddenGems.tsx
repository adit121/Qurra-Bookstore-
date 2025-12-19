import React, { lazy } from 'react';
import { Section } from './ui/Section';
import { BookCard } from './BookCard';
import { books } from '../data/mockData';
export function HiddenGems() {
  const rareBooks = books.filter(b => b.tags?.includes('rare')).slice(0, 2);
  return <Section className="bg-qurra-text text-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-4">
          <span className="text-qurra-accent text-xs font-bold tracking-widest uppercase mb-4 block">
            Discovery
          </span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Underrated, <br />
            Unforgettable
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            These aren't on every bestseller list, and that's exactly why we
            love them. Stories that deserve to be found.
          </p>
          <button className="text-white border-b border-white pb-1 hover:text-qurra-accent hover:border-qurra-accent transition-colors">
            Explore the collection
          </button>
        </div>

        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {rareBooks.map(book => <div key={book.id} className="bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/10">
              <div className="flex gap-6">
                <div className="w-24 shrink-0">
                  <img src={book.coverImage} alt={`Cover of ${book.title}`} className="aspect-[2/3] w-full object-cover rounded-sm shadow-lg" loading="lazy" />
                </div>
                <div>
                  <div className="inline-block px-2 py-1 bg-qurra-accent/20 text-qurra-accent text-[10px] font-bold uppercase tracking-wider rounded mb-2">
                    Rare Find
                  </div>
                  <h3 className="text-xl font-serif mb-1">{book.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{book.author}</p>
                  <p className="text-gray-300 text-sm italic">
                    "
                    {book.editorialNote || 'A hidden masterpiece waiting for you.'}
                    "
                  </p>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </Section>;
}