import { Card as FlowbiteCard } from 'flowbite-react';
import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  padding?: 'sm' | 'md' | 'lg';
}

export function Card({ children, padding = 'md' }: CardProps) {
  const paddingClasses = {
    sm: 'p-3 sm:p-4',
    md: 'p-4 sm:p-6',
    lg: 'p-6 sm:p-8',
  };

  return (
    <FlowbiteCard className={`${paddingClasses[padding]} max-w-full bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700`}>
      {children}
    </FlowbiteCard>
  );
}
