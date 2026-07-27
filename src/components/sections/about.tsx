"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  ShieldCheck,
  Handshake,
  Eye,
  Award,
  Clock,
  Lightbulb,
  TrendingUp,
  Users,
  Compass,
  Target,
} from "lucide-react";
import { Section, Container, Eyebrow } from "@/components/ui/section";
import { Card, CardIcon } from "@/components/ui/card";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";

const valueIcons = [ShieldCheck, Handshake, Eye, Award, Clock, Lightbulb, TrendingUp, Users];

export function About() {
  const t = useTranslations("about");
  const values = t.raw("values") as { title: string; desc: string }[];

  return (
    <Section id="about" className="glass-section">
      <Container>
        <Reveal>
          <Eyebrow light>{t("eyebrow")}</Eyebrow>
        </Reveal>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <Reveal>
              <h2 className="font-display max-w-xl text-3xl leading-tight font-extrabold text-white sm:text-4xl">
                {t("title")}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-white/70">
                {t("intro")}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="relative mt-8 aspect-[16/10] w-full overflow-hidden rounded-3xl shadow-soft">
                <Image
                  src="/images/about/about-port.png"
                  alt={t("imageAlt")}
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(8,21,43,0) 55%, rgba(8,21,43,0.45) 100%)",
                  }}
                />
              </div>
            </Reveal>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            <Reveal delay={0.15}>
              <Card className="border-navy-900/6 bg-navy-900 text-white">
                <CardIcon className="bg-white/10 text-sky-300">
                  <Compass className="h-5 w-5" />
                </CardIcon>
                <h3 className="font-display text-lg font-bold">{t("visionTitle")}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{t("visionText")}</p>
              </Card>
            </Reveal>
            <Reveal delay={0.25}>
              <Card className="liquid-glass liquid-glass-v2">
                <CardIcon className="bg-white/10 text-sky-300">
                  <Target className="h-5 w-5" />
                </CardIcon>
                <h3 className="font-display text-lg font-bold text-white">{t("missionTitle")}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{t("missionText")}</p>
              </Card>
            </Reveal>
          </div>
        </div>

        <div className="mt-20">
          <Reveal>
            <h3 className="font-display mb-8 text-xl font-bold text-white">{t("valuesTitle")}</h3>
          </Reveal>
          <StaggerGroup className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {values.map((value, i) => {
              const Icon = valueIcons[i % valueIcons.length];
              return (
                <StaggerItem key={value.title}>
                  <div className={`group h-full rounded-2xl liquid-glass liquid-glass-v${(i % 4) + 1} p-5`}>
                    <Icon className="h-5 w-5 text-sky-400 transition-transform duration-300 group-hover:scale-110" />
                    <p className="mt-3 text-sm font-bold text-white">{value.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-white/70">{value.desc}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </Container>
    </Section>
  );
}
