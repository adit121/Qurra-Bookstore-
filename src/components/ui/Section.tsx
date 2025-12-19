import React from 'react';
interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  fullWidth?: boolean;
}
export function Section({
  children,
  className = '',
  id,
  fullWidth = false
}: SectionProps) {
  return <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className={fullWidth ? 'w-full' : 'max-w-7xl mx-auto px-6 md:px-8'}>
        {children}
      </div>
    </section>;
}