import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center w-full justify-center whitespace-nowrap rounded-[20px] text-[24px] h-[72px] px-[20px] font-bold uppercase ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-white border-[3px] shadow-[0_10px_0px_0px_rgba(0,0,0,1)] border-black text-black hover:shadow-[0_10px_0px_0px_rgba(92,45,213,1)] hover:border-[#5c2dd5]',
        yellow:
          'bg-colorYellow border-[3px] shadow-[0_10px_0px_0px_rgba(0,0,0,1)] border-black text-black hover:shadow-[0_10px_0px_0px_rgba(92,45,213,1)] hover:border-[#5c2dd5]',
        red: 'bg-colorRed border-[3px] shadow-[0_10px_0px_0px_rgba(0,0,0,1)] border-black text-white hover:shadow-[0_10px_0px_0px_rgba(92,45,213,1)] hover:border-[#5c2dd5]',
        accent:
          'bg-secondary border-none shadow-none text-primary-foreground text-base w-[130px] h-[39px]',
        secondary:
          'bg-primary border-none shadow-none text-primary-foreground text-base w-[108px] h-[39px]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
