"use client";

import { useTranslations, useLocale } from "next-intl";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function CtaBanner() {
  const t = useTranslations("cta");
  const locale = useLocale();
  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight;

  return (
    <section className="glass-section relative overflow-hidden py-20">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-navy-900 to-navy-950 px-8 py-16 text-center sm:px-16">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(60% 100% at 50% 0%, rgba(33,172,214,0.25) 0%, rgba(33,172,214,0) 70%)",
              }}
            />
            <div className="noise-overlay" />
            <div className="relative">
              <h2 className="font-display mx-auto max-w-xl text-3xl font-extrabold text-white sm:text-4xl">
                {t("title")}
              </h2>
              <p className="mx-auto mt-4 max-w-md text-white/60">{t("text")}</p>
              <Button href="#contact" variant="accent" size="lg" className="group mt-8">
                {t("button")}
                <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
