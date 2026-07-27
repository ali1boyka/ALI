import { cn } from "@/lib/utils";

const containerRows = [
  { y: 58, colors: ["#0d2140", "#21acd6", "#0d2140", "#f4f8fb", "#123058"] },
  { y: 78, colors: ["#123058", "#0d2140", "#52c8e6", "#0d2140", "#f4f8fb", "#123058"] },
  { y: 98, colors: ["#21acd6", "#123058", "#0d2140", "#123058", "#0d2140"] },
];

export function CargoShip({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 720 220"
      className={cn("h-full w-full", className)}
      aria-hidden
    >
      <g>
        {containerRows.map((row) =>
          row.colors.map((color, i) => (
            <rect
              key={`${row.y}-${i}`}
              x={70 + i * 34}
              y={row.y}
              width="30"
              height="18"
              rx="1.5"
              fill={color}
              opacity="0.96"
            />
          )),
        )}
        <rect x="52" y="150" width="580" height="10" rx="2" fill="#123058" />
        <path
          d="M40,160 L60,190 L640,190 L672,160 Z"
          fill="#08152b"
        />
        <rect x="600" y="96" width="34" height="64" rx="3" fill="#0d2140" />
        <rect x="606" y="104" width="8" height="8" fill="#8fe0f2" opacity="0.7" />
        <rect x="620" y="104" width="8" height="8" fill="#8fe0f2" opacity="0.5" />
        <rect x="612" y="86" width="4" height="14" fill="#0d2140" />
        <line x1="614" y1="76" x2="614" y2="86" stroke="#0d2140" strokeWidth="2" />
      </g>
    </svg>
  );
}
