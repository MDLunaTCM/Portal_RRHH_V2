import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'success' | 'warning' | 'destructive' | 'outline';
}

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors',
        {
          'bg-primary text-primary-foreground': variant === 'default',
          'bg-secondary text-secondary-foreground': variant === 'secondary',
          'bg-success text-success-foreground': variant === 'success',
          'bg-warning text-warning-foreground': variant === 'warning',
          'bg-destructive text-destructive-foreground': variant === 'destructive',
          'border border-input bg-background': variant === 'outline',
        },
        className
      )}
      {...props}
    />
  );
}
