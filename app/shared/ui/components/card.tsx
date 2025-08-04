import { Card as FlowbiteCard } from 'flowbite-react';
import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  padding?: 'sm' | 'md' | 'lg';
}

export function Card({ children, padding = 'md' }: CardProps) {
  const paddingClasses = {
    sm: 'p-3',
    md: 'p-6',
    lg: 'p-8',
  };

  return <FlowbiteCard className={paddingClasses[padding]}>{children}</FlowbiteCard>;
}
