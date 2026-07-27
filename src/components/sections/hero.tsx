"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations, useLocale } from "next-intl";
import { ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlobeGrid } from "@/components/visuals/globe-grid";
import { Particles } from "@/components/visuals/particles";
import { CraneSkyline } from "@/components/visuals/crane-skyline";
import { CargoShip } from "@/components/visuals/cargo-ship";
import { WaveLayer } from "@/components/visuals/wave-layer";
import { AnimatedCounter } from "@/components/ui/animated-counter";

export function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const isRtl = locale === "ar";
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const sectionRef = useRef<HTMLElement>(null);
  const globeRef = useRef<HTMLDivElement>(null);
  const craneRef = useRef<HTMLDivElement>(null);
  const shipRef = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 40, damping: 18 });
  const springY = useSpring(my, { stiffness: 40, damping: 18 });
  const globeX = useTransform(springX, (v) => v * 14);
  const globeY = useTransform(springY, (v) => v * 10);
  const shipX = useTransform(springX, (v) => v * -8);

  useEffect(() => {
    function handleMove(e: MouseEvent) {
      const { innerWidth, innerHeight } = window;
      mx.set(e.clientX / innerWidth - 0.5);
      my.set(e.clientY / innerHeight - 0.5);
    }
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mx, my]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });
      tl.to(globeRef.current, { yPercent: -18, opacity: 0.35 }, 0)
        .to(craneRef.current, { yPercent: -30, opacity: 0.4 }, 0)
        .to(shipRef.current, { yPercent: -45, opacity: 0.2 }, 0);
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-navy-950"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #050e1e 0%, #08152b 42%, #0d2140 62%, #050e1e 100%)",
        }}
      />
      <div
        className="absolute inset-x-0 top-[38%] h-[45%]"
        style={{
          background:
            "radial-gradient(60% 100% at 50% 0%, rgba(33,172,214,0.28) 0%, rgba(33,172,214,0) 70%)",
        }}
      />
      <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-sky-500/10 blur-[100px]" />
      <div className="absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-sky-400/10 blur-[110px]" />

      <motion.div
        ref={globeRef}
        style={{ x: globeX, y: globeY }}
        className="absolute -right-16 top-1/2 h-[130%] w-[85%] -translate-y-1/2 opacity-60 md:right-[-4%] md:w-[60%]"
      >
        <GlobeGrid />
      </motion.div>

      <Particles />

      <div ref={craneRef} className="absolute inset-x-0 bottom-[18%] h-40 opacity-70 md:h-56">
        <CraneSkyline />
      </div>

      <motion.div
        ref={shipRef}
        style={{ x: shipX }}
        className="absolute inset-x-0 bottom-[10%] h-28 opacity-90 md:h-40"
      >
        <CargoShip className="ms-auto max-w-3xl" />
      </motion.div>

      <div className="absolute inset-x-0 bottom-0 h-28 md:h-36">
        <div className="animate-drift absolute inset-y-0 left-0 h-full">
          <WaveLayer fill="#08152b" opacity={0.9} />
        </div>
        <div className="animate-drift absolute inset-y-0 left-0 h-full" style={{ animationDuration: "55s", animationDirection: "reverse" }}>
          <WaveLayer fill="#050e1e" opacity={1} />
        </div>
      </div>

      <div className="noise-overlay" />

      <div className="container-shodolux relative z-10 pt-20">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold tracking-[0.2em] text-sky-300 uppercase backdrop-blur"
          >
            {t("eyebrow")}
          </motion.p>

          <h1 className="font-display text-4xl leading-[1.15] font-extrabold text-white sm:text-5xl lg:text-[3.4rem]">
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              {t("titleLine1")}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="text-gradient-sky block"
            >
              {t("titleLine2")}
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/70"
          >
            {t("subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a href="#contact">
              <Button variant="accent" size="lg" className="group">
                {t("ctaPrimary")}
                <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
              </Button>
            </a>
            <a href="#services">
              <Button variant="outline-light" size="lg">
                {t("ctaSecondary")}
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8"
          >
            {[
              { value: t("stat1Value"), label: t("stat1Label") },
              { value: t("stat2Value"), label: t("stat2Label") },
              { value: t("stat3Value"), label: t("stat3Label") },
            ].map((stat) => (
              <div key={stat.label}>
                <AnimatedCounter
                  value={stat.value}
                  className="font-display block text-2xl font-extrabold text-white sm:text-3xl"
                />
                <span className="mt-1 block text-xs leading-snug text-white/50">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute inset-x-0 bottom-6 z-10 flex flex-col items-center gap-2 text-white/50"
      >
        <span className="text-[11px] tracking-[0.2em] uppercase">{t("scrollHint")}</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.div>
    </section>
  );
}
