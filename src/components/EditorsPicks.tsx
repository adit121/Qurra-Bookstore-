import React from 'react';
import { Section } from './ui/Section';
import { BookCard } from './BookCard';
import { books } from '../data/mockData';
export function EditorsPicks() {
  const picks = books.filter(b => b.editorialNote).slice(0, 4);
  return <Section className="bg-[#F5F5F2]">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-serif text-qurra-text mb-2">
          Curated by QURRA
        </h2>
        <p className="text-qurra-muted">
          Hand-picked selections from our editorial team.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {picks.map(book => <BookCard key={book.id} book={book} variant="detailed" />)}
      </div>
    </Section>;
}