import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 rounded-md",
        hero: "rounded-full bg-gradient-to-r from-[hsl(73,57%,54%)] via-[hsl(77,54%,64%)] to-[hsl(77,50%,40%)] text-black font-semibold hover:shadow-[0_0_30px_hsl(180,100%,50%)] transition-all duration-300",
        neon: "rounded-full bg-secondary/10 text-secondary border-2 border-secondary hover:bg-secondary hover:text-secondary-foreground hover:shadow-[0_0_20px_hsl(180,100%,50%)] transition-all duration-300",
        glass: "rounded-lg glass text-foreground border border-primary/30 hover:border-primary hover:shadow-[0_0_15px_hsl(73,57%,54%/0.4)] transition-all duration-300",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-md",
        outline: "border border-primary/50 bg-transparent text-foreground hover:bg-primary/10 hover:border-primary rounded-md",
        secondary: "bg-muted text-muted-foreground hover:bg-muted/80 rounded-md",
        ghost: "hover:bg-accent/10 hover:text-accent rounded-md",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4",
        lg: "h-14 px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
