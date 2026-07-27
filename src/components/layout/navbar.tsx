"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { Menu, X, Globe } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import { Logo } from "@/components/visuals/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navKeys = [
  ["home", "home"],
  ["about", "about"],
  ["services", "services"],
  ["products", "products"],
  ["whyUs", "why-us"],
  ["quality", "quality"],
  ["markets", "markets"],
] as const;

export function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const otherLocale = locale === "ar" ? "en" : "ar";

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { scrollY } = useScroll();
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  useEffect(() => {
    const sections = navKeys
      .map(([, id]) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-navy-900/8 bg-white/85 py-3 shadow-[0_4px_30px_-10px_rgba(8,21,43,0.12)] backdrop-blur-xl"
          : "py-6",
      )}
    >
      <a
        href="#main-content"
        className="focus-ring absolute start-4 top-3 z-[100] -translate-y-24 rounded-full bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white transition-transform focus:translate-y-0"
      >
        {t("skipToContent")}
      </a>
      <div className="container-shodolux flex items-center justify-between">
        <a href="#home" className="focus-ring shrink-0 rounded-full">
          <Logo tone={scrolled ? "dark" : "light"} priority />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navKeys.map(([key, id]) => (
            <a
              key={key}
              href={`#${id}`}
              aria-current={activeSection === id ? "true" : undefined}
              className={cn(
                "focus-ring rounded-sm text-[13.5px] font-semibold tracking-wide transition-colors duration-300",
                activeSection === id
                  ? scrolled
                    ? "text-sky-700"
                    : "text-white"
                  : scrolled
                    ? "text-navy-900/75 hover:text-sky-700"
                    : "text-white/80 hover:text-white",
              )}
            >
              {t(key)}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={pathname}
            locale={otherLocale}
            hrefLang={otherLocale}
            className={cn(
              "focus-ring inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-[13px] font-semibold transition-colors",
              scrolled ? "text-navy-900/70 hover:bg-navy-900/5" : "text-white/80 hover:bg-white/10",
            )}
          >
            <Globe className="h-4 w-4" />
            {otherLocale === "ar" ? "العربية" : "English"}
          </Link>
          <Button href="#contact" variant={scrolled ? "primary" : "accent"} size="sm">
            {t("cta")}
          </Button>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          aria-label={t("openMenu")}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(true)}
          className={cn(
            "focus-ring rounded-full p-2 lg:hidden",
            scrolled ? "text-navy-900" : "text-white",
          )}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label={t("openMenu")}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-navy-950/98 backdrop-blur-xl lg:hidden"
          >
            <div className="container-shodolux flex items-center justify-between py-6">
              <Logo tone="light" />
              <button
                type="button"
                aria-label={t("closeMenu")}
                onClick={() => {
                  setOpen(false);
                  menuButtonRef.current?.focus();
                }}
                className="focus-ring rounded-full p-2 text-white"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <motion.nav
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.06 } } }}
              className="container-shodolux mt-6 flex flex-col gap-1"
            >
              {navKeys.map(([key, id]) => (
                <motion.a
                  key={key}
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
                  className="focus-ring border-b border-white/10 py-4 text-xl font-bold text-white"
                >
                  {t(key)}
                </motion.a>
              ))}
              <motion.div
                variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
                className="mt-6 flex flex-col gap-4"
              >
                <Link
                  href={pathname}
                  locale={otherLocale}
                  hrefLang={otherLocale}
                  onClick={() => setOpen(false)}
                  className="focus-ring inline-flex items-center gap-2 rounded-sm text-white/70"
                >
                  <Globe className="h-4 w-4" />
                  {otherLocale === "ar" ? "العربية" : "English"}
                </Link>
                <Button href="#contact" variant="accent" className="w-full" onClick={() => setOpen(false)}>
                  {t("cta")}
                </Button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
