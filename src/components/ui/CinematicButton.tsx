import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

interface CinematicButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
}

const CinematicButton: React.FC<CinematicButtonProps> = ({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--deep-blue)] disabled:opacity-50 disabled:cursor-not-allowed';

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-[var(--golden-accent)] to-[var(--golden-subtle)] text-[var(--deep-blue)] shadow-[0_4px_20px_rgba(255,215,0,0.2)] hover:shadow-[0_6px_25px_rgba(255,215,0,0.3)] hover:-translate-y-0.5',
    secondary:
      'bg-[var(--dark-tone)] text-[var(--golden-accent)] border border-[var(--border-golden)] hover:bg-[var(--mid-tone)] hover:border-[var(--golden-subtle)]',
    outline:
      'bg-transparent text-[var(--golden-accent)] border border-[var(--border-golden)] hover:bg-[var(--golden-glow)] hover:border-[var(--golden-subtle)]',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm rounded-md',
    md: 'px-6 py-3 text-base rounded-lg',
    lg: 'px-8 py-4 text-lg rounded-xl',
  };

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const buttonContent = (
    <motion.div
      className={buttonClasses}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block">
        {buttonContent}
      </Link>
    );
  }

  return buttonContent;
};

export default CinematicButton;
