import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "focus-ring inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-navy-900 text-white shadow-soft hover:bg-navy-800 hover:shadow-glow",
        accent:
          "bg-gradient-to-r from-sky-500 to-sky-600 text-white shadow-glow hover:from-sky-400 hover:to-sky-500",
        outline:
          "border border-navy-900/15 text-navy-900 hover:border-navy-900/40 hover:bg-navy-900/[0.03]",
        ghost: "text-navy-900 hover:bg-navy-900/5",
        "outline-light":
          "border border-white/30 text-white hover:border-white/70 hover:bg-white/10",
      },
      size: {
        default: "h-12 px-7",
        sm: "h-10 px-5 text-[13px]",
        lg: "h-14 px-9 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
