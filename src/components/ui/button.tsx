import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline';
  children: React.ReactNode;
}

export function Button({ children, variant = 'default', className = '', ...props }: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black dark:focus-visible:ring-white disabled:pointer-events-none disabled:opacity-50';
  
  const variants = {
    default: 'bg-black text-white hover:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-200',
    outline: 'border border-black/[.08] dark:border-white/[.08] hover:bg-gray-50 dark:hover:bg-gray-900'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className} px-4 py-2`}
      {...props}
    >
      {children}
    </button>
  );
} 