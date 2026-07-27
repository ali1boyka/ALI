"use client";

import { useTranslations } from "next-intl";
import { Wheat, Soup, Apple } from "lucide-react";
import { Section, Container, Eyebrow } from "@/components/ui/section";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";

const icons = [Apple, Wheat, Soup];
const patterns = [
  "radial-gradient(circle at 30% 20%, rgba(82,200,230,0.35), transparent 55%)",
  "radial-gradient(circle at 70% 30%, rgba(33,172,214,0.32), transparent 55%)",
  "radial-gradient(circle at 50% 70%, rgba(143,224,242,0.35), transparent 55%)",
];

export function Products() {
  const t = useTranslations("products");
  const categories = t.raw("categories") as { title: string; desc: string }[];

  return (
    <Section id="products" className="bg-navy-950">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <Reveal>
              <Eyebrow light>{t("eyebrow")}</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display max-w-lg text-3xl font-extrabold text-white sm:text-4xl">
                {t("title")}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-xs text-sm leading-relaxed text-white/55">{t("subtitle")}</p>
          </Reveal>
        </div>

        <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-3">
          {categories.map((cat, i) => {
            const Icon = icons[i % icons.length];
            return (
              <StaggerItem key={cat.title}>
                <div className="group relative h-80 overflow-hidden rounded-3xl border border-white/10 bg-navy-900">
                  <div
                    className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                    style={{ background: patterns[i % patterns.length] }}
                  />
                  <div className="noise-overlay" />
                  <div className="absolute inset-0 flex flex-col justify-between p-7">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/5 backdrop-blur">
                      <Icon className="h-6 w-6 text-sky-300" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-white">{cat.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/55">{cat.desc}</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 border border-white/0 transition-colors duration-500 group-hover:border-sky-400/30" />
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>

        <Reveal delay={0.3}>
          <p className="mt-10 text-center text-sm text-white/40">{t("more")}</p>
        </Reveal>
      </Container>
    </Section>
  );
}
