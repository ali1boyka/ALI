"use client";

/* eslint-disable @next/next/no-img-element -- remote, unoptimized art direction */
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";
import { FadeIn } from "./fade-in";
import { LiveProjectButton } from "./live-project-button";

const CDN = "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2F";
const CDN_SUFFIX = "&w=1280&q=85";

const image = (name: string) => `${CDN}${name}${CDN_SUFFIX}`;

type Project = {
  number: string;
  name: string;
  category: string;
  colOne: [string, string];
  colTwo: string;
};

const PROJECTS: Project[] = [
  {
    number: "01",
    name: "Nextlevel Studio",
    category: "Client",
    colOne: [
      image("hf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png"),
      image("hf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png"),
    ],
    colTwo: image("hf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png"),
  },
  {
    number: "02",
    name: "Aura Brand Identity",
    category: "Personal",
    colOne: [
      image("hf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png"),
      image("hf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png"),
    ],
    colTwo: image("hf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png"),
  },
  {
    number: "03",
    name: "Solaris Digital",
    category: "Client",
    colOne: [
      image("hf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png"),
      image("hf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png"),
    ],
    colTwo: image("hf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png"),
  },
];

const CARD_RADIUS = "rounded-[40px] sm:rounded-[50px] md:rounded-[60px]";

export function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 pb-20 pt-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:pt-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pt-32"
    >
      <FadeIn
        as="h2"
        delay={0}
        y={40}
        className="hero-heading text-center font-black uppercase leading-none tracking-tight"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Project
      </FadeIn>

      <div ref={containerRef} className="mt-12 sm:mt-16 md:mt-20">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={index}
            total={PROJECTS.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  total,
  progress,
}: {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  // Cards further down the stack settle at a progressively smaller scale, so
  // the ones already passed read as layers tucked behind the current card.
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);

  return (
    <div className="sticky top-24 flex h-[85vh] items-center justify-center md:top-32">
      <motion.article
        style={{ scale, top: `${index * 28}px` }}
        className={`relative w-full max-w-6xl border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 ${CARD_RADIUS}`}
      >
        <div className="flex flex-wrap items-center justify-between gap-4 md:gap-6">
          <div className="flex items-center gap-4 md:gap-8">
            <span
              className="font-black leading-none text-[#D7E2EA]"
              style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
            >
              {project.number}
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-light uppercase tracking-widest text-[#D7E2EA] opacity-60 sm:text-sm">
                {project.category}
              </span>
              <h3
                className="font-medium uppercase leading-tight text-[#D7E2EA]"
                style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
              >
                {project.name}
              </h3>
            </div>
          </div>

          <LiveProjectButton projectName={project.name} />
        </div>

        <div className="mt-4 flex gap-3 sm:mt-6 sm:gap-4 md:mt-8">
          <div className="flex w-[40%] flex-col gap-3 sm:gap-4">
            <img
              src={project.colOne[0]}
              alt={`${project.name} — detail one`}
              loading="lazy"
              decoding="async"
              className={`w-full object-cover ${CARD_RADIUS}`}
              style={{ height: "clamp(130px, 16vw, 230px)" }}
            />
            <img
              src={project.colOne[1]}
              alt={`${project.name} — detail two`}
              loading="lazy"
              decoding="async"
              className={`w-full object-cover ${CARD_RADIUS}`}
              style={{ height: "clamp(160px, 22vw, 340px)" }}
            />
          </div>
          <div className="w-[60%]">
            <img
              src={project.colTwo}
              alt={`${project.name} — key visual`}
              loading="lazy"
              decoding="async"
              className={`h-full w-full object-cover ${CARD_RADIUS}`}
            />
          </div>
        </div>
      </motion.article>
    </div>
  );
}
