import React, { lazy } from 'react';
import { Section } from './ui/Section';
import { staffPicks, books } from '../data/mockData';
import { Quote } from 'lucide-react';
export function StaffFavorites() {
  return <Section>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif text-qurra-text">
          From Our Shelves to Yours
        </h2>
        <p className="text-qurra-muted mt-2">
          Personal recommendations from the people who know our books best.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {staffPicks.map(pick => {
        const book = books.find(b => b.id === pick.bookId);
        if (!book) return null;
        return <div key={pick.id} className="flex flex-col sm:flex-row gap-8 items-start">
              <div className="w-32 shrink-0 mx-auto sm:mx-0">
                <img src={book.coverImage} alt={`Cover of ${book.title}`} className="aspect-[2/3] w-full object-cover rounded shadow-md rotate-3 hover:rotate-0 transition-transform duration-300" loading="lazy" />
              </div>

              <div className="flex-1 text-center sm:text-left">
                <Quote className="w-8 h-8 text-qurra-accent/30 mb-4 mx-auto sm:mx-0" />
                <p className="text-lg text-qurra-text italic font-serif mb-6 leading-relaxed">
                  "{pick.quote}"
                </p>

                <div className="flex items-center justify-center sm:justify-start gap-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
                    {/* Placeholder avatar */}
                    <div className="w-full h-full bg-qurra-muted/20 flex items-center justify-center text-xs font-bold text-qurra-muted">
                      {pick.name[0]}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-qurra-text">
                      {pick.name}
                    </p>
                    <p className="text-xs text-qurra-muted uppercase tracking-wider">
                      {pick.role}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between sm:justify-start sm:gap-4">
                  <span className="text-sm font-medium">{book.title}</span>
                  <button className="text-xs text-qurra-accent font-bold uppercase hover:underline">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>;
      })}
      </div>
    </Section>;
}