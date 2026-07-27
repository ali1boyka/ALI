"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Section, Container, Eyebrow } from "@/components/ui/section";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";

const productImages = [
  "/images/products/food-products.png",
  "/images/products/legumes.png",
  "/images/products/rice.png",
  "/images/products/spices.png",
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

        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, i) => (
            <StaggerItem key={cat.title}>
              <div className="group relative h-80 overflow-hidden rounded-3xl border border-white/10 bg-navy-900">
                <Image
                  src={productImages[i % productImages.length]}
                  alt={cat.title}
                  fill
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(5,14,30,0.05) 0%, rgba(5,14,30,0.15) 45%, rgba(5,14,30,0.92) 100%)",
                  }}
                />
                <div className="noise-overlay opacity-[0.03]" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="font-display text-xl font-bold text-white">{cat.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{cat.desc}</p>
                </div>
                <div className="absolute inset-0 rounded-3xl border border-white/0 transition-colors duration-500 group-hover:border-sky-400/30" />
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.3}>
          <p className="mt-10 text-center text-sm text-white/40">{t("more")}</p>
        </Reveal>
      </Container>
    </Section>
  );
}
