import React from 'react';
import { Section } from './ui/Section';
import { BookCard } from './BookCard';
import { books } from '../data/mockData';
import { Button } from './ui/Button';
export function BestSellers() {
  // Get top 4 books
  const bestSellers = books.slice(0, 4);
  return <Section className="bg-qurra-cream/30">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-serif text-qurra-text mb-4">
          Loved by Readers
        </h2>
        <p className="text-qurra-muted max-w-xl mx-auto">
          The stories that our community can't stop talking about.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
        {bestSellers.map(book => <BookCard key={book.id} book={book} variant="standard" showAddButton={true} />)}
      </div>

      <div className="mt-16 text-center">
        <Button variant="outline" size="lg">
          View All Best Sellers
        </Button>
      </div>
    </Section>;
}