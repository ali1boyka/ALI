import { cn } from "@/lib/utils";

const particles = [
  { top: "12%", left: "8%", size: 3, delay: "0s", duration: "7s" },
  { top: "22%", left: "22%", size: 2, delay: "1.2s", duration: "9s" },
  { top: "8%", left: "38%", size: 4, delay: "0.4s", duration: "8s" },
  { top: "30%", left: "52%", size: 2, delay: "2s", duration: "6.5s" },
  { top: "16%", left: "68%", size: 3, delay: "1.6s", duration: "10s" },
  { top: "40%", left: "80%", size: 2, delay: "0.8s", duration: "7.5s" },
  { top: "55%", left: "14%", size: 3, delay: "2.4s", duration: "9.5s" },
  { top: "62%", left: "44%", size: 2, delay: "0.2s", duration: "8.5s" },
  { top: "48%", left: "90%", size: 3, delay: "1.8s", duration: "7s" },
  { top: "70%", left: "65%", size: 2, delay: "1s", duration: "6s" },
  { top: "78%", left: "30%", size: 3, delay: "0.6s", duration: "9s" },
  { top: "35%", left: "6%", size: 2, delay: "2.2s", duration: "8s" },
];

export function Particles({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden>
      {particles.map((p, i) => (
        <span
          key={i}
          className="animate-float-slow absolute rounded-full bg-sky-300/70"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
            boxShadow: "0 0 8px 2px rgba(143, 224, 242, 0.5)",
          }}
        />
      ))}
    </div>
  );
}
