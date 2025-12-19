import React from 'react';
import { motion } from 'framer-motion';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}
export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-qurra-accent disabled:opacity-50 disabled:pointer-events-none';
  const variants = {
    primary: 'bg-qurra-accent text-white hover:bg-qurra-accentHover shadow-sm',
    secondary: 'bg-qurra-cream text-qurra-text hover:bg-[#E8E8E6]',
    outline: 'border border-qurra-muted/30 text-qurra-text hover:border-qurra-accent hover:text-qurra-accent bg-transparent',
    text: 'text-qurra-text hover:text-qurra-accent underline-offset-4 hover:underline p-0 bg-transparent'
  };
  const sizes = {
    sm: 'text-sm px-4 py-2 rounded-md',
    md: 'text-base px-6 py-3 rounded-md',
    lg: 'text-lg px-8 py-4 rounded-lg'
  };
  // Text variant shouldn't have padding if it's just a link style
  const sizeStyles = variant === 'text' ? '' : sizes[size];
  return <motion.button whileHover={variant !== 'text' ? {
    y: -2
  } : {}} whileTap={variant !== 'text' ? {
    scale: 0.98
  } : {}} className={`${baseStyles} ${variants[variant]} ${sizeStyles} ${className}`} {...props}>
      {children}
    </motion.button>;
}