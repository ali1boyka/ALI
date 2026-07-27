import * as React from "react";
import { cn } from "@/lib/utils";

export function Section({
  className,
  id,
  children,
}: {
  className?: string;
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("relative py-24 md:py-32", className)}>
      {children}
    </section>
  );
}

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={cn("container-shodolux", className)}>{children}</div>;
}

export function Eyebrow({
  children,
  light,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <span
      className={cn(
        "mb-4 inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] uppercase",
        light ? "text-sky-300" : "text-sky-700",
      )}
    >
      <span className="h-px w-8 bg-current opacity-60" />
      {children}
    </span>
  );
}
