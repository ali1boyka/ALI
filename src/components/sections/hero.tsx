"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations, useLocale } from "next-intl";
import { ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/ui/animated-counter";

export function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const isRtl = locale === "ar";
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const sectionRef = useRef<HTMLElement>(null);
  const videoWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;
      gsap.to(videoWrapRef.current, {
        scale: 1.18,
        yPercent: 10,
        opacity: 0.5,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-navy-950"
    >
      <div ref={videoWrapRef} className="absolute inset-0">
        <video
          className="animate-slow-zoom h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-poster.jpg"
          aria-hidden
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
          <source src="/videos/hero-video.webm" type="video/webm" />
        </video>
      </div>

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(5,14,30,0.75) 0%, rgba(5,14,30,0.5) 38%, rgba(5,14,30,0.62) 68%, rgba(5,14,30,0.92) 100%)",
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-2/3"
        style={{
          background:
            "linear-gradient(0deg, rgba(5,14,30,0.9) 0%, rgba(5,14,30,0) 100%)",
        }}
      />
      <div
        className="absolute inset-x-0 top-0 h-40"
        style={{
          background: "linear-gradient(180deg, rgba(5,14,30,0.55) 0%, rgba(5,14,30,0) 100%)",
        }}
      />
      <div
        className="absolute inset-x-0 top-1/3 h-1/2 opacity-70"
        style={{
          background:
            "radial-gradient(60% 100% at 50% 20%, rgba(33,172,214,0.22) 0%, rgba(33,172,214,0) 70%)",
        }}
      />
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
              className="block drop-shadow-[0_2px_20px_rgba(0,0,0,0.35)]"
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
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/75"
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
