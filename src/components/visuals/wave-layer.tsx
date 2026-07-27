import { cn } from "@/lib/utils";

export function WaveLayer({
  className,
  fill,
  opacity = 1,
}: {
  className?: string;
  fill: string;
  opacity?: number;
}) {
  return (
    <svg
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className={cn("h-full w-[200%]", className)}
      style={{ opacity }}
      aria-hidden
    >
      <path
        d="M0,40 C150,10 350,70 600,40 C850,10 1050,70 1200,40 L1200,120 L0,120 Z M1200,40 C1350,10 1550,70 1800,40 C2050,10 2250,70 2400,40 L2400,120 L1200,120 Z"
        fill={fill}
      />
    </svg>
  );
}
