"use client";

import { useRef, useSyncExternalStore, type CSSProperties } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

function subscribeReducedMotion(callback: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

function subscribeIsMobile(callback: () => void) {
  const query = window.matchMedia("(max-width: 767px)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

function getIsMobileSnapshot() {
  return window.matchMedia("(max-width: 767px)").matches;
}

function getIsMobileServerSnapshot() {
  return false;
}

export function ParallaxShape({
  className,
  style,
  range = 16,
}: {
  className?: string;
  style?: CSSProperties;
  range?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );
  const isMobile = useSyncExternalStore(subscribeIsMobile, getIsMobileSnapshot, getIsMobileServerSnapshot);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const effectiveRange = isMobile ? range / 2 : range;
  const y = useTransform(scrollYProgress, [0, 1], [-effectiveRange, effectiveRange]);

  return (
    <motion.div
      ref={ref}
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0", className)}
      style={prefersReducedMotion ? style : { ...style, y }}
    />
  );
}
