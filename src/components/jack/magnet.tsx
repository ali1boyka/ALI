"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type MagnetProps = {
  children: ReactNode;
  /** How far outside the element's edge the cursor still attracts it. */
  padding?: number;
  disabled?: boolean;
  /** Higher values pull less — the offset is divided by this. */
  magnetStrength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  wrapperClassName?: string;
  innerClassName?: string;
};

export function Magnet({
  children,
  padding = 100,
  disabled = false,
  magnetStrength = 2,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.5s ease-in-out",
  wrapperClassName,
  innerClassName,
}: MagnetProps) {
  const reduceMotion = useReducedMotion();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const inert = disabled || Boolean(reduceMotion);

  useEffect(() => {
    if (inert) return;

    const handleMouseMove = (event: MouseEvent) => {
      const node = wrapperRef.current;
      if (!node) return;

      const { left, top, width, height } = node.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const distX = Math.abs(centerX - event.clientX);
      const distY = Math.abs(centerY - event.clientY);

      if (distX < width / 2 + padding && distY < height / 2 + padding) {
        setIsActive(true);
        setOffset({
          x: (event.clientX - centerX) / magnetStrength,
          y: (event.clientY - centerY) / magnetStrength,
        });
      } else {
        setIsActive(false);
        // Bail out of the state update once already at rest, so a cursor
        // moving elsewhere on the page does not re-render on every event.
        setOffset((prev) => (prev.x === 0 && prev.y === 0 ? prev : { x: 0, y: 0 }));
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [inert, padding, magnetStrength]);

  // Derived rather than reset via setState, so toggling `inert` (reduced-motion
  // or the `disabled` prop) snaps back to rest without an extra render pass.
  const restX = inert ? 0 : offset.x;
  const restY = inert ? 0 : offset.y;

  return (
    <div ref={wrapperRef} className={wrapperClassName} style={{ position: "relative" }}>
      <div
        className={innerClassName}
        style={{
          transform: `translate3d(${restX}px, ${restY}px, 0)`,
          transition: isActive && !inert ? activeTransition : inactiveTransition,
          willChange: "transform",
        }}
      >
        {children}
      </div>
    </div>
  );
}
