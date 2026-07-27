"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { Menu, X, Globe } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import { Logo } from "@/components/visuals/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navKeys = [
  ["home", "#home"],
  ["about", "#about"],
  ["services", "#services"],
  ["products", "#products"],
  ["whyUs", "#why-us"],
  ["quality", "#quality"],
  ["markets", "#markets"],
] as const;

export function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const otherLocale = locale === "ar" ? "en" : "ar";

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-navy-900/8 bg-white/85 py-3 shadow-[0_4px_30px_-10px_rgba(8,21,43,0.12)] backdrop-blur-xl"
          : "py-6",
      )}
    >
      <div className="container-shodolux flex items-center justify-between">
        <a href="#home" className="shrink-0">
          <Logo tone={scrolled ? "dark" : "light"} />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navKeys.map(([key, href]) => (
            <a
              key={key}
              href={href}
              className={cn(
                "text-[13.5px] font-semibold tracking-wide transition-colors duration-300",
                scrolled ? "text-navy-900/75 hover:text-sky-600" : "text-white/80 hover:text-white",
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
            className={cn(
              "focus-ring inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-[13px] font-semibold transition-colors",
              scrolled ? "text-navy-900/70 hover:bg-navy-900/5" : "text-white/80 hover:bg-white/10",
            )}
          >
            <Globe className="h-4 w-4" />
            {otherLocale === "ar" ? "العربية" : "English"}
          </Link>
          <a href="#contact">
            <Button variant={scrolled ? "primary" : "accent"} size="sm">
              {t("cta")}
            </Button>
          </a>
        </div>

        <button
          aria-label="menu"
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-navy-950/98 backdrop-blur-xl lg:hidden"
          >
            <div className="container-shodolux flex items-center justify-between py-6">
              <Logo tone="light" />
              <button aria-label="close" onClick={() => setOpen(false)} className="focus-ring rounded-full p-2 text-white">
                <X className="h-6 w-6" />
              </button>
            </div>
            <motion.nav
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.06 } } }}
              className="container-shodolux mt-6 flex flex-col gap-1"
            >
              {navKeys.map(([key, href]) => (
                <motion.a
                  key={key}
                  href={href}
                  onClick={() => setOpen(false)}
                  variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
                  className="border-b border-white/10 py-4 text-xl font-bold text-white"
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
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 text-white/70"
                >
                  <Globe className="h-4 w-4" />
                  {otherLocale === "ar" ? "العربية" : "English"}
                </Link>
                <a href="#contact" onClick={() => setOpen(false)}>
                  <Button variant="accent" className="w-full">
                    {t("cta")}
                  </Button>
                </a>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
