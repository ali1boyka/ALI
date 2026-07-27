"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const hubs = [
  { x: 140, y: 150 },
  { x: 330, y: 110 },
  { x: 470, y: 190 },
  { x: 250, y: 260 },
  { x: 400, y: 300 },
  { x: 90, y: 260 },
];

const routes = [
  "M140,150 C220,60 300,60 330,110",
  "M330,110 C400,120 440,150 470,190",
  "M470,190 C420,240 350,250 250,260",
  "M250,260 C180,290 130,290 90,260",
  "M90,260 C90,190 100,170 140,150",
  "M140,150 C220,220 350,230 400,300",
];

export function GlobeGrid({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 560 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-full w-full", className)}
      aria-hidden
    >
      <defs>
        <radialGradient id="globeFade" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="#52c8e6" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#52c8e6" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="routeGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#8fe0f2" stopOpacity="0" />
          <stop offset="50%" stopColor="#8fe0f2" stopOpacity="1" />
          <stop offset="100%" stopColor="#8fe0f2" stopOpacity="0" />
        </linearGradient>
      </defs>

      <circle cx="280" cy="200" r="180" fill="url(#globeFade)" />
      <circle cx="280" cy="200" r="170" stroke="#8fe0f2" strokeOpacity="0.18" />
      <ellipse cx="280" cy="200" rx="170" ry="60" stroke="#8fe0f2" strokeOpacity="0.14" />
      <ellipse cx="280" cy="200" rx="170" ry="115" stroke="#8fe0f2" strokeOpacity="0.14" />
      <ellipse cx="280" cy="200" rx="90" ry="170" stroke="#8fe0f2" strokeOpacity="0.14" />
      <ellipse cx="280" cy="200" rx="150" ry="170" stroke="#8fe0f2" strokeOpacity="0.1" />
      <line x1="110" y1="200" x2="450" y2="200" stroke="#8fe0f2" strokeOpacity="0.14" />

      {routes.map((d, i) => (
        <g key={d}>
          <path d={d} stroke="#8fe0f2" strokeOpacity="0.12" strokeWidth="1.4" />
          <motion.path
            d={d}
            stroke="url(#routeGrad)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="60 400"
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: -460 }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.7,
            }}
          />
        </g>
      ))}

      {hubs.map((hub, i) => (
        <g key={`${hub.x}-${hub.y}`}>
          <circle cx={hub.x} cy={hub.y} r="3" fill="#f4f8fb" />
          <motion.circle
            cx={hub.x}
            cy={hub.y}
            r="3"
            fill="none"
            stroke="#8fe0f2"
            strokeWidth="1"
            initial={{ r: 3, opacity: 0.9 }}
            animate={{ r: 16, opacity: 0 }}
            transition={{
              duration: 2.6,
              repeat: Infinity,
              ease: "easeOut",
              delay: i * 0.4,
            }}
          />
        </g>
      ))}
    </svg>
  );
}
