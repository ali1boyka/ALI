"use client";

/* eslint-disable @next/next/no-img-element -- animated GIFs must stay unoptimized */
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

const MARQUEE_IMAGES = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
  "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
  "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
  "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
  "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
  "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
  "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
  "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
  "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
  "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif",
];

const ROW_ONE = MARQUEE_IMAGES.slice(0, 11);
const ROW_TWO = MARQUEE_IMAGES.slice(11);

const TILE_WIDTH = 420;
const TILE_HEIGHT = 270;
const TILE_GAP = 12; // matches gap-3

export function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const node = sectionRef.current;
    if (!node) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const sectionTop = node.getBoundingClientRect().top + window.scrollY;
      setOffset((window.scrollY - sectionTop + window.innerHeight) * 0.3);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [reduceMotion]);

  const shift = offset - 200;

  return (
    <section
      ref={sectionRef}
      aria-label="Selected motion work"
      className="overflow-hidden bg-[#0C0C0C] pb-10 pt-24 sm:pt-32 md:pt-40"
    >
      <div className="flex flex-col gap-3">
        <MarqueeRow images={ROW_ONE} shift={shift} />
        <MarqueeRow images={ROW_TWO} shift={-shift} />
      </div>
    </section>
  );
}

function MarqueeRow({ images, shift }: { images: string[]; shift: number }) {
  // The row is tripled so the visible window always sits on the middle copy,
  // leaving a full set of tiles as bleed on either side.
  const tiles = [...images, ...images, ...images];
  const base = -images.length * (TILE_WIDTH + TILE_GAP);

  return (
    <div
      className="flex gap-3"
      style={{ transform: `translateX(${base + shift}px)`, willChange: "transform" }}
    >
      {tiles.map((src, index) => (
        <img
          key={`${src}-${index}`}
          src={src}
          alt=""
          width={TILE_WIDTH}
          height={TILE_HEIGHT}
          loading="lazy"
          decoding="async"
          className="h-[270px] w-[420px] shrink-0 rounded-2xl object-cover"
        />
      ))}
    </div>
  );
}
