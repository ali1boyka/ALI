"use client";

import { useTranslations } from "next-intl";
import { Section, Container, Eyebrow } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { GlobeGrid } from "@/components/visuals/globe-grid";

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
        <div className="relative h-72 sm:h-96 lg:h-[26rem]">
          <GlobeGrid />
        </div>
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
