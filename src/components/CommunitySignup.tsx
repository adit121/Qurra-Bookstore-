import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
export function CommunitySignup() {
  return <Section className="bg-qurra-accent/10">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-qurra-text mb-4">
          Join the QURRA Reading Circle
        </h2>
        <p className="text-qurra-muted mb-8">
          Monthly book drops, thoughtful recommendations, no noise. Join 15,000+
          readers who trust our taste.
        </p>

        <form className="flex flex-col sm:flex-row gap-3" onSubmit={e => e.preventDefault()}>
          <input type="email" placeholder="Your email address" className="flex-1 px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-qurra-accent/50 bg-white" required />
          <Button type="submit">Subscribe</Button>
        </form>

        <p className="text-xs text-qurra-muted mt-4">
          We respect your inbox. Unsubscribe at any time.
        </p>
      </div>
    </Section>;
}