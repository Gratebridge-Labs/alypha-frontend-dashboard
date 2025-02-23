import { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Card({ children, className = '', ...props }: CardProps) {
  return (
    <div
      className={`bg-white dark:bg-black border border-black/[.08] dark:border-white/[.08] rounded-lg ${className}`}
      {...props}
    >
      {children}
    </div>
  );
} 