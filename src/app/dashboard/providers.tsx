'use client';

import { ThemeProvider } from '@/contexts/ThemeContext';

export function DashboardProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
} 