import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  textClassName,
  tone = "dark",
  iconSize = 38,
}: {
  className?: string;
  textClassName?: string;
  tone?: "dark" | "light";
  iconSize?: number;
}) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <Image
        src="/logo/shodolux-logo.png"
        alt="SHODOLUX"
        width={512}
        height={512}
        priority
        style={{ width: iconSize, height: iconSize }}
        className="shrink-0 object-contain"
      />
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
