import { cn } from "@/lib/utils";

function Crane({ x }: { x: number }) {
  return (
    <g transform={`translate(${x} 0)`} opacity="0.9">
      <rect x="-3" y="40" width="6" height="140" fill="currentColor" />
      <path d="M0,40 L-70,58 L-70,66 L0,52 Z" fill="currentColor" />
      <path d="M0,40 L30,54 L30,62 L0,50 Z" fill="currentColor" />
      <rect x="-6" y="52" width="10" height="10" fill="currentColor" />
      <line x1="-55" y1="60" x2="0" y2="42" stroke="currentColor" strokeWidth="2" />
      <rect x="-58" y="58" width="6" height="16" fill="currentColor" />
    </g>
  );
}

export function CraneSkyline({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 900 220"
      preserveAspectRatio="xMidYMax slice"
      className={cn("h-full w-full text-navy-900", className)}
      aria-hidden
    >
      <Crane x={90} />
      <Crane x={260} />
      <Crane x={430} />
      <Crane x={620} />
      <Crane x={790} />
    </svg>
  );
}
