"use client";

import { useTranslations } from "next-intl";
import { Section, Container, Eyebrow } from "@/components/ui/section";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";

export function WhyUs() {
  const t = useTranslations("whyUs");
  const items = t.raw("items") as { title: string; desc: string }[];

  return (
    <Section id="why-us" className="glass-section">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <div className="flex justify-center">
              <Eyebrow light>{t("eyebrow")}</Eyebrow>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
              {t("title")}
            </h2>
          </Reveal>
        </div>

        <StaggerGroup className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-navy-900/8 bg-navy-900/8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <StaggerItem key={item.title}>
              <div className="group h-full bg-white p-7 transition-colors duration-300 hover:bg-navy-900">
                <span className="font-display text-sky-700 text-sm font-bold transition-colors duration-300 group-hover:text-sky-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display mt-3 text-base font-bold text-navy-900 transition-colors duration-300 group-hover:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-900/65 transition-colors duration-300 group-hover:text-white/70">
                  {item.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </Section>
  );
}
