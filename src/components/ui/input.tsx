import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(
      "focus-ring h-[3.25rem] w-full rounded-2xl border border-navy-900/12 bg-white px-5 py-3.5 text-[15px] text-navy-900 placeholder:text-navy-900/35 transition-colors duration-300 focus:border-sky-500",
      className,
    )}
    {...props}
  />
));
Input.displayName = "Input";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "focus-ring w-full rounded-2xl border border-navy-900/12 bg-white px-5 py-3.5 text-[15px] text-navy-900 placeholder:text-navy-900/35 transition-colors duration-300 focus:border-sky-500",
      className,
    )}
    {...props}
  />
));
Textarea.displayName = "Textarea";
