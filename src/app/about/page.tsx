"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

import HeaderPageChild from "@/components/pages/page-header-child";
import { SectionCard } from "@/components/pages/section-card";
import { Button } from "@/components/ui/button";
import { profile } from "@/constants/profile";
import { useTranslation } from "@/contexts/locale-context";
import { calculateAge } from "@/lib/calculate-age";
import { getAssetPath } from "@/lib/utils";
import {
  Camera,
  CircleDot,
  Code,
  Download,
  GitCommit,
  Globe2,
  Heart,
  Info,
  Mail,
  MapPin,
  Music,
  Phone,
  PlaneTakeoff,
  Terminal,
  Volleyball,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const hobbyIcons = [Code, Music, PlaneTakeoff, Camera, Volleyball, Heart];

function useTypewriter(lines: string[], speed = 14, lineDelay = 260) {
  const [renderedLines, setRenderedLines] = useState<string[]>([]);
  const [currentText, setCurrentText] = useState("");
  const [done, setDone] = useState(false);
  const linesKey = lines.join("|");

  useEffect(() => {
    let cancelled = false;
    setRenderedLines([]);
    setCurrentText("");
    setDone(false);

    async function run() {
      const items = linesKey.split("|");
      for (let li = 0; li < items.length; li++) {
        const line = items[li];
        for (let ci = 1; ci <= line.length; ci++) {
          if (cancelled) return;
          setCurrentText(line.slice(0, ci));
          await new Promise((r) => setTimeout(r, speed));
        }
        if (cancelled) return;
        setRenderedLines((prev) => [...prev, line]);
        setCurrentText("");
        await new Promise((r) => setTimeout(r, lineDelay));
      }
      if (!cancelled) setDone(true);
    }

    run();
    return () => {
      cancelled = true;
    };
  }, [linesKey, speed, lineDelay]);

  return { renderedLines, currentText, done };
}

function useTilt(maxDeg = 8) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState(
    "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)",
  );
  const [glare, setGlare] = useState({ x: 50, y: 50, o: 0 });

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rx = (0.5 - py) * maxDeg * 2;
    const ry = (px - 0.5) * maxDeg * 2;
    setTransform(
      `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.02,1.02,1.02)`,
    );
    setGlare({ x: px * 100, y: py * 100, o: 0.16 });
  }

  function onMouseLeave() {
    setTransform(
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)",
    );
    setGlare((g) => ({ ...g, o: 0 }));
  }

  const style: CSSProperties = {
    transform,
    transition: "transform 150ms ease-out",
  };
  return { ref, style, glare, onMouseMove, onMouseLeave };
}

export default function AboutPage() {
  const { t, tList } = useTranslation();
  const age = calculateAge(2004, 4, 1);

  const intro = tList("about.intro") as string[];
  const { renderedLines, currentText, done } = useTypewriter(intro);
  const tilt = useTilt(8);

  const hobbies = [
    t("about.hobbies.list.coding"),
    t("about.hobbies.list.music"),
    t("about.hobbies.list.travel"),
    t("about.hobbies.list.photography"),
    t("about.hobbies.list.football"),
    t("about.hobbies.list.badminton"),
  ] as string[];

  const journey = [
    {
      year: "2025 - Nay",
      title: t("about.journey.official.title"),
      company: t("about.journey.official.company"),
      description: t("about.journey.official.desc"),
    },
    {
      year: "2022 - 2026",
      title: t("about.journey.university.title"),
      company: t("about.journey.university.company"),
      description: t("about.journey.university.desc"),
    },
  ];

  const personalRows = [
    {
      id: "name",
      icon: Info,
      label: t("about.personalInfo.fullName"),
      value: t("about.personalInfo.fullNameValue"),
    },
    {
      id: "age",
      icon: CircleDot,
      label: t("about.personalInfo.age"),
      value: String(age),
    },
    {
      id: "address",
      icon: MapPin,
      label: t("about.personalInfo.address"),
      value: t("about.personalInfo.addressValue"),
    },
    {
      id: "addressNew",
      icon: MapPin,
      label: t("about.personalInfo.addressNew"),
      value: t("about.personalInfo.addressNewValue"),
    },
    {
      id: "email",
      icon: Mail,
      label: t("about.personalInfo.email"),
      value: profile.email,
    },
    {
      id: "phone",
      icon: Phone,
      label: t("about.personalInfo.phone"),
      value: "+84 377 984 957",
    },
    {
      id: "languages",
      icon: Globe2,
      label: t("about.personalInfo.languages"),
      value: t("about.personalInfo.languagesValue"),
    },
  ];

  return (
    <div className="px-4 md:px-6">
      <HeaderPageChild text={t("about.title")} />

      <div className="mb-12 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2">
        <div
          ref={tilt.ref}
          onMouseMove={tilt.onMouseMove}
          onMouseLeave={tilt.onMouseLeave}
          style={tilt.style}
          className="will-change-transform h-full"
        >
          <SectionCard className="relative overflow-hidden p-0 h-full rounded-2xl border border-elevated-border shadow-2xl">
            <div className="relative size-full min-h-[380px] lg:min-h-full bg-[#1a1a1a]">
              <Image
                src={profile.avatar}
                alt={profile.fullName}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div
                className="pointer-events-none absolute inset-0 transition-opacity duration-150"
                style={{
                  opacity: tilt.glare.o,
                  background: `radial-gradient(circle at ${tilt.glare.x}% ${tilt.glare.y}%, rgba(255,255,255,0.85), transparent 45%)`,
                }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-transparent" />

              <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full border border-emerald-500/30 bg-black/70 px-3 py-1.5 backdrop-blur-md shadow-sm">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                </span>
                <span className="text-xs font-semibold text-emerald-400">
                  Open to work
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-sm font-semibold text-primary-accent">
                  {profile.jobTitle}
                </p>
                <h2 className="text-2xl font-black text-white">
                  {profile.fullName}
                </h2>
              </div>
            </div>
          </SectionCard>
        </div>

        <div className="flex flex-col justify-between gap-5 h-full">
          <div className="flex-1 flex flex-col overflow-hidden rounded-2xl border border-elevated-border bg-elevated/70 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center gap-2 border-b border-elevated-border bg-elevated-hover/80 px-4 py-3">
              <span className="size-3 rounded-full bg-[#ff5f56]" />
              <span className="size-3 rounded-full bg-[#ffbd2e]" />
              <span className="size-3 rounded-full bg-[#27c93f]" />
              <span className="ml-2 flex items-center gap-1.5 text-xs font-mono text-secondary-text">
                <Terminal className="size-3.5" />
                whoami.sh
              </span>
            </div>
            <div className="relative flex-1 p-6 font-mono text-sm leading-relaxed text-secondary-text">
              <div
                className="invisible select-none pointer-events-none"
                aria-hidden="true"
              >
                {intro.map((line, i) => (
                  <p key={i} className="mb-4">
                    <span className="mr-2 text-primary-accent">$</span>
                    {line}
                  </p>
                ))}
              </div>

              <div className="absolute inset-0 p-6 overflow-y-auto">
                {renderedLines.map((line, i) => (
                  <p key={i} className="mb-4">
                    <span className="mr-2 text-primary-accent">$</span>
                    {line}
                  </p>
                ))}
                {!done && (
                  <p className="mb-4">
                    <span className="mr-2 text-primary-accent">$</span>
                    {currentText}
                    <span className="ml-0.5 inline-block h-4 w-2 animate-pulse bg-primary-accent align-middle" />
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full">
            <Button
              asChild
              className="h-12 rounded-xl border-0 bg-linear-to-r from-yellow-400 via-red-500 to-purple-600 text-white font-bold hover:opacity-95 hover:scale-[1.02] transition-all shadow-md cursor-pointer"
            >
              <a
                href={getAssetPath("/files/CV___Hoang_Hoan.pdf")}
                download="Hoang-Dinh-Hoan-CV.pdf"
                className="flex items-center justify-center gap-2"
              >
                <Download className="size-4" />
                {t("common.downloadCv")}
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 rounded-xl border-elevated-border bg-elevated/80 text-foreground font-bold hover:bg-elevated hover:border-primary-accent/50 hover:scale-[1.02] transition-all shadow-xs cursor-pointer"
            >
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2"
              >
                <Mail className="size-4 text-primary-accent" />
                {t("common.contact")}
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="mb-12 flex flex-col gap-6">
        <SectionCard delay={0.05}>
          <h3 className="mb-5 flex items-center gap-2 text-xl font-bold">
            <Info className="size-5 text-primary-accent" />
            {t("about.personalInfo.title")}
          </h3>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {personalRows.map((row) => {
              const Icon = row.icon;
              return (
                <div
                  key={row.id}
                  className="flex items-start gap-3 rounded-lg border border-elevated-border bg-elevated px-3.5 py-3 transition-colors hover:border-primary-accent/40"
                >
                  <Icon className="mt-0.5 size-4 shrink-0 text-primary-accent" />
                  <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                    <dt className="shrink-0 text-xs text-secondary-text">
                      {row.label}
                    </dt>
                    <dd className="truncate text-sm font-medium">
                      {row.value}
                    </dd>
                  </div>
                </div>
              );
            })}
          </div>
        </SectionCard>

        <SectionCard delay={0.1}>
          <h3 className="mb-6 flex items-center gap-2 text-xl font-bold">
            <Heart className="size-5 text-primary-accent" />
            {t("about.hobbies.title")}
          </h3>
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-6">
            {hobbies.map((hobby, index) => {
              const Icon = hobbyIcons[index] ?? Code;
              const reverse = index % 2 === 1;
              return (
                <div
                  key={hobby}
                  className="group flex flex-col items-center gap-3 text-center"
                >
                  <div className="relative size-16 shrink-0">
                    <div
                      className="absolute inset-0 rounded-full motion-safe:animate-spin motion-reduce:animate-none"
                      style={{
                        background:
                          "conic-gradient(from 0deg, #f9ce3f, #d62976 35%, transparent 70%)",
                        animationDuration: `${5 + index}s`,
                        animationDirection: reverse ? "reverse" : "normal",
                      }}
                    />
                    <div className="absolute inset-0.75 flex items-center justify-center rounded-full bg-elevated transition-colors group-hover:bg-primary-accent/10">
                      <Icon className="size-6 shrink-0 text-primary-accent transition-transform group-hover:scale-110" />
                    </div>
                  </div>
                  <span className="text-sm leading-tight">{hobby}</span>
                </div>
              );
            })}
          </div>
        </SectionCard>
      </div>

      <section>
        <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">
          {t("about.journey.title")}
        </h2>
        <div className="relative mx-auto max-w-2xl">
          <div className="absolute left-2.25 top-2 h-[calc(100%-1rem)] w-px bg-linear-to-b from-yellow-400 via-red-500 to-purple-600 md:left-1/2 md:-translate-x-1/2" />
          <div className="space-y-8">
            {journey.map((item, index) => (
              <div key={item.year} className="relative pl-8 md:pl-0">
                <div className="absolute left-0 top-1.5 flex size-5 items-center justify-center rounded-full border-4 border-background bg-primary-accent md:left-1/2 md:-translate-x-1/2">
                  <GitCommit className="size-2.5 text-black" />
                </div>
                <div
                  className={`md:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? "md:mr-auto md:text-right" : "md:ml-auto"
                  }`}
                >
                  <SectionCard delay={index * 0.08}>
                    <div
                      className={`mb-2 flex items-center gap-2 font-mono text-xs text-secondary-text ${
                        index % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      <span>{item.year}</span>
                    </div>
                    <h3 className="mb-1 text-lg font-bold">{item.title}</h3>
                    <p className="mb-2 text-sm text-secondary-text">
                      {item.company}
                    </p>
                    <p className="text-sm text-secondary-text">
                      {item.description}
                    </p>
                  </SectionCard>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
