import React from 'react';
import { Section } from './ui/Section';
import { Instagram, Twitter, Facebook } from 'lucide-react';
export function Footer() {
  return <footer className="bg-qurra-bg border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <h3 className="font-serif text-2xl font-bold text-qurra-text mb-6">
              QURRA
            </h3>
            <p className="text-sm text-qurra-muted leading-relaxed">
              A bookstore built on intention. We believe in the power of the
              right book at the right time.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-qurra-text mb-6">
              Explore
            </h4>
            <ul className="space-y-4 text-sm text-qurra-muted">
              <li>
                <a href="#" className="hover:text-qurra-accent transition-colors">
                  Bestsellers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-qurra-accent transition-colors">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-qurra-accent transition-colors">
                  Staff Picks
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-qurra-accent transition-colors">
                  Collections
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-qurra-text mb-6">
              Company
            </h4>
            <ul className="space-y-4 text-sm text-qurra-muted">
              <li>
                <a href="#" className="hover:text-qurra-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-qurra-accent transition-colors">
                  Journal
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-qurra-accent transition-colors">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-qurra-accent transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-qurra-text mb-6">
              Support
            </h4>
            <ul className="space-y-4 text-sm text-qurra-muted">
              <li>
                <a href="#" className="hover:text-qurra-accent transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-qurra-accent transition-colors">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-qurra-accent transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-200">
          <p className="text-xs text-qurra-muted mb-4 md:mb-0">
            © {new Date().getFullYear()} QURRA Books. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="text-qurra-muted hover:text-qurra-accent transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-qurra-muted hover:text-qurra-accent transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-qurra-muted hover:text-qurra-accent transition-colors">
              <Facebook size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>;
}