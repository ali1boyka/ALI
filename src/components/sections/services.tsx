"use client";

import { useTranslations } from "next-intl";
import {
  PackageCheck,
  Ship,
  Wheat,
  Flame,
  Truck,
  Network,
  Globe2,
  Handshake,
} from "lucide-react";
import { Section, Container, Eyebrow } from "@/components/ui/section";
import { Card, CardIcon } from "@/components/ui/card";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";

const icons = [PackageCheck, Ship, Wheat, Flame, Truck, Network, Globe2, Handshake];

export function Services() {
  const t = useTranslations("services");
  const items = t.raw("items") as { title: string; desc: string }[];

  return (
    <Section id="services" className="bg-paper/90 backdrop-blur-xl">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <div className="flex justify-center">
              <Eyebrow>{t("eyebrow")}</Eyebrow>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl font-extrabold text-navy-900 sm:text-4xl">
              {t("title")}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-[17px] leading-relaxed text-navy-900/60">{t("subtitle")}</p>
          </Reveal>
        </div>

        <StaggerGroup className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <StaggerItem key={item.title}>
                <Card className="group h-full hover:-translate-y-1.5 hover:border-sky-500/25 hover:shadow-[0_20px_50px_-20px_rgba(33,172,214,0.35)]">
                  <CardIcon className="transition-colors duration-300 group-hover:bg-sky-500 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </CardIcon>
                  <h3 className="font-display text-base font-bold text-navy-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-900/65">{item.desc}</p>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </Container>
    </Section>
  );
}
