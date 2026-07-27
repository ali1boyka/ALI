import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-9 w-9", className)}
      aria-hidden
    >
      <defs>
        <linearGradient id="shodoluxGrad" x1="4" y1="6" x2="60" y2="58" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#52c8e6" />
          <stop offset="1" stopColor="#0f7495" />
        </linearGradient>
        <linearGradient id="shodoluxGradSoft" x1="4" y1="6" x2="60" y2="58" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#8fe0f2" />
          <stop offset="1" stopColor="#21acd6" />
        </linearGradient>
      </defs>
      <path
        d="M12 6C8.68629 6 6 8.68629 6 12V28.6C6 30.5 7.3 32 9.5 33.2L28 43.5V52C28 55.3137 30.6863 58 34 58H38C41.3137 58 44 55.3137 44 52V45.2L15.5 29.3C13.9 28.4 12 27.3 12 25V6Z"
        fill="url(#shodoluxGrad)"
      />
      <path
        d="M52 58C55.3137 58 58 55.3137 58 52V35.4C58 33.5 56.7 32 54.5 30.8L36 20.5V12C36 8.68629 33.3137 6 30 6H26C22.6863 6 20 8.68629 20 12V18.8L48.5 34.7C50.1 35.6 52 36.7 52 39V58Z"
        fill="url(#shodoluxGradSoft)"
      />
    </svg>
  );
}

export function Logo({
  className,
  textClassName,
  tone = "dark",
}: {
  className?: string;
  textClassName?: string;
  tone?: "dark" | "light";
}) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <LogoMark />
      <span
        className={cn(
          "font-display text-[1.15rem] font-extrabold tracking-tight",
          tone === "dark" ? "text-navy-900" : "text-white",
          textClassName,
        )}
      >
        SHODOLUX
      </span>
    </div>
  );
}
