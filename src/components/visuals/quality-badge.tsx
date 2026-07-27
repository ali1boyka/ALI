import { cn } from "@/lib/utils";

export function QualityBadge({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      className={cn("h-full w-full", className)}
      aria-hidden
    >
      <defs>
        <linearGradient id="qualityGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#52c8e6" />
          <stop offset="1" stopColor="#0f7495" />
        </linearGradient>
      </defs>
      <circle cx="200" cy="200" r="170" fill="#0d2140" opacity="0.04" />
      <circle cx="200" cy="200" r="130" fill="none" stroke="#21acd6" strokeOpacity="0.18" />
      <circle cx="200" cy="200" r="95" fill="none" stroke="#21acd6" strokeOpacity="0.14" strokeDasharray="4 8" />
      <g transform="translate(140 120)">
        <path
          d="M60 0L112 22V58C112 92 90 118 60 130C30 118 8 92 8 58V22Z"
          fill="url(#qualityGrad)"
          opacity="0.95"
        />
        <path
          d="M35 62L52 79L88 40"
          stroke="white"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>
      <g opacity="0.85">
        <rect x="70" y="260" width="46" height="46" rx="10" fill="#123058" />
        <rect x="82" y="272" width="22" height="22" rx="4" fill="#8fe0f2" opacity="0.7" />
      </g>
      <g opacity="0.85">
        <circle cx="310" cy="270" r="26" fill="#123058" />
        <circle cx="304" cy="264" r="9" fill="none" stroke="#8fe0f2" strokeWidth="3" />
        <line x1="311" y1="271" x2="320" y2="280" stroke="#8fe0f2" strokeWidth="3" strokeLinecap="round" />
      </g>
      <g opacity="0.7">
        <rect x="300" y="90" width="34" height="34" rx="8" fill="#21acd6" opacity="0.18" />
      </g>
    </svg>
  );
}
