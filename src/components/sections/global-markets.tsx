"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Section, Container, Eyebrow } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

export function GlobalMarkets() {
  const t = useTranslations("markets");

  return (
    <Section id="markets" className="overflow-hidden bg-navy-900">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 60% at 50% 50%, rgba(33,172,214,0.12) 0%, rgba(33,172,214,0) 70%)",
        }}
      />
      <Container className="relative grid items-center gap-10 lg:grid-cols-2">
        <Reveal delay={0.05}>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-glow">
            <Image
              src="/images/global/global-markets.png"
              alt={t("imageAlt")}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
          </div>
        </Reveal>
        <div>
          <Reveal>
            <Eyebrow light>{t("eyebrow")}</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display max-w-md text-3xl font-extrabold text-white sm:text-4xl">
              {t("title")}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 max-w-md text-[17px] leading-relaxed text-white/60">{t("text")}</p>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
