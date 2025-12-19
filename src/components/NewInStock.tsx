import React from 'react';
import { Section } from './ui/Section';
import { BookCard } from './BookCard';
import { books } from '../data/mockData';
export function NewInStock() {
  const newBooks = books.filter(b => b.tags?.includes('new') || b.tags?.includes('rare')).slice(0, 3);
  return <Section>
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold tracking-widest uppercase rounded-full mb-3">
            Just Arrived
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-qurra-text">
            Fresh on QURRA
          </h2>
        </div>
        <a href="#" className="text-sm font-medium text-qurra-muted hover:text-qurra-accent transition-colors border-b border-transparent hover:border-qurra-accent pb-0.5">
          View all new arrivals
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {newBooks.map(book => <BookCard key={book.id} book={book} variant="standard" />)}
      </div>
    </Section>;
}