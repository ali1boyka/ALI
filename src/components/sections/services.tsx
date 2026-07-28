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
    <Section id="services" className="glass-section">
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
          <Reveal delay={0.2}>
            <p className="mt-4 text-[17px] leading-relaxed text-white/70">{t("subtitle")}</p>
          </Reveal>
        </div>

        <StaggerGroup className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <StaggerItem key={item.title}>
                <Card className="group h-full liquid-glass">
                  <CardIcon className="bg-white/10 text-sky-300 transition-colors duration-300 group-hover:bg-sky-500 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </CardIcon>
                  <h3 className="font-display text-base font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{item.desc}</p>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </Container>
    </Section>
  );
}
