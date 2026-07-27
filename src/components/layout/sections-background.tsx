"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";

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

export function SectionsBackground({ children }: { children: React.ReactNode }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (reducedMotion) {
      video.pause();
    } else {
      video.play().catch(() => {});
    }
  }, [reducedMotion]);

  return (
    <div className="relative">
      <div
        className="sticky top-0 -mb-[100svh] h-[100svh] w-full overflow-hidden bg-navy-950"
        style={{ backgroundImage: "url(/images/global-background-poster.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}
        aria-hidden="true"
      >
        {!reducedMotion && (
          <video
            ref={videoRef}
            className="pointer-events-none h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/images/global-background-poster.jpg"
            aria-hidden="true"
          >
            <source src="/videos/global-background.mp4" type='video/mp4; codecs="avc1.640029"' />
            <source src="/videos/global-background.webm" type='video/webm; codecs="vp9"' />
          </video>
        )}

        {/* Seamless fade from Hero's opaque navy bottom edge into the video */}
        <div
          className="absolute inset-x-0 top-0 h-40 md:h-56"
          style={{
            background: "linear-gradient(180deg, #050e1e 0%, rgba(5,14,30,0.55) 70%, rgba(5,14,30,0) 100%)",
          }}
        />

        {/* Brand-navy overlay for text legibility across the whole span */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(8,21,43,0.55) 0%, rgba(8,21,43,0.62) 60%, rgba(5,14,30,0.8) 100%)",
          }}
        />

        {/* Seamless fade into the Footer's solid navy-950 background */}
        <div
          className="absolute inset-x-0 bottom-0 h-40 md:h-56"
          style={{
            background: "linear-gradient(0deg, #050e1e 0%, rgba(5,14,30,0) 100%)",
          }}
        />
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  );
}
