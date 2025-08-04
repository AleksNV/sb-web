import { Button as FlowbiteButton, type ButtonProps as FlowbiteButtonProps } from 'flowbite-react';
import type { ReactNode } from 'react';

interface ButtonProps extends Omit<FlowbiteButtonProps, 'children'> {
  children: ReactNode;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
}

export function Button({ children, size = 'md', color = 'primary', ...props }: ButtonProps) {
  return (
    <FlowbiteButton size={size} color={color} {...props}>
      {children}
    </FlowbiteButton>
  );
}
