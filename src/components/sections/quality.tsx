"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { CheckCircle2 } from "lucide-react";
import { Section, Container, Eyebrow } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

export function Quality() {
  const t = useTranslations("quality");
  const points = t.raw("points") as string[];

  return (
    <Section id="quality" className="glass-section">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <Reveal>
              <Eyebrow light>{t("eyebrow")}</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display max-w-lg text-3xl font-extrabold text-white sm:text-4xl">
                {t("title")}
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 max-w-lg text-[17px] leading-relaxed text-white/70">{t("text")}</p>
            </Reveal>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {points.map((point, i) => (
                <Reveal key={point} delay={0.25 + i * 0.08}>
                  <div className="flex items-center gap-3 rounded-2xl liquid-glass px-4 py-3.5">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-sky-400" />
                    <span className="text-sm font-semibold text-white/85">{point}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={0.15} className="order-1 lg:order-2">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-soft">
              <Image
                src="/images/quality/quality-control.png"
                alt={t("imageAlt")}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(160deg, rgba(33,172,214,0.16) 0%, rgba(8,21,43,0) 45%)",
                }}
              />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
