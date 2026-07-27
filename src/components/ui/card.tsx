import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-navy-900/8 bg-white p-8 shadow-[0_2px_20px_-8px_rgba(8,21,43,0.08)] transition-all duration-500",
        className,
      )}
      {...props}
    />
  );
}

export function CardIcon({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400/15 to-sky-600/15 text-sky-600",
        className,
      )}
      {...props}
    />
  );
}
