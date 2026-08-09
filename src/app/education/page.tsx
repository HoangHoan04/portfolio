"use client";

import {
  ArrowSquareOut,
  BookOpen,
  CalendarBlank,
  CheckCircle,
  Code,
  GithubLogo,
  GraduationCap,
  MapPin,
  Users,
} from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { useRef, useState } from "react";

import HeaderPageChild from "@/components/pages/page-header-child";
import { SectionCard } from "@/components/pages/section-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/contexts/locale-context";
import { cn } from "@/lib/utils";

import { portfolioProjects } from "@/constants/projects-data";

const coursework = [
  "Object-Oriented Programming",
  "Web & Application Development",
  "Data Structures & Algorithms",
  "Database Management",
  "Discrete Math",
  "Linear Algebra",
  "Probability & Statistics",
];

function InteractiveEducationCard({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, ease: "easeOut", delay }}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-elevated-border bg-elevated/30 p-6 backdrop-blur-md transition-all duration-300 hover:border-primary-accent/30 hover:bg-elevated/50 hover:shadow-xl",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(240px circle at ${coords.x}px ${coords.y}px, rgba(0, 149, 246, 0.08), transparent 80%)`,
        }}
      />
      {children}
    </motion.div>
  );
}

export default function EducationPage() {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();

  const learningTimeline = [
    {
      year: "2022",
      title: t("education.timeline.uniStart"),
      description: t("education.timeline.uniStartDesc"),
      icon: GraduationCap,
    },
    {
      year: "2023",
      title: t("education.timeline.coreCS"),
      description: t("education.timeline.coreCSDesc"),
      icon: Code,
    },
    {
      year: "2024",
      title: t("education.timeline.personal"),
      description: t("education.timeline.personalDesc"),
      icon: BookOpen,
    },
    {
      year: "2025 - Now",
      title: t("education.timeline.professional"),
      description: t("education.timeline.professionalDesc"),
      icon: Users,
    },
  ];

  const philosophyItems = [
    {
      icon: Code,
      title: t("education.philosophy.build"),
      description: t("education.philosophy.buildDesc"),
    },
    {
      icon: Users,
      title: t("education.philosophy.others"),
      description: t("education.philosophy.othersDesc"),
    },
    {
      icon: BookOpen,
      title: t("education.philosophy.improve"),
      description: t("education.philosophy.improveDesc"),
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 md:px-6">
      <HeaderPageChild text={t("education.title")} />

      <p className="mb-12 -mt-4 text-sm text-secondary-text max-w-2xl leading-relaxed">
        {t("education.subtitle")}
      </p>

      <section className="mb-16">
        <div className="mb-8 flex items-center gap-3">
          <h2 className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
            {t("education.formal")}
          </h2>
          <div className="h-px flex-1 bg-linear-to-r from-elevated-border to-transparent" />
        </div>

        <InteractiveEducationCard>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <h3 className="text-2xl font-black tracking-tight text-foreground">
                  {t("education.degree")}
                </h3>
                <Badge className="border border-blue-500/30 bg-blue-500/10 px-2.5 py-0.5 text-xs font-semibold text-blue-400">
                  GPA: Good
                </Badge>
              </div>
              <p className="text-base font-semibold text-foreground">
                {t("education.school")}
              </p>

              <div className="mt-3 flex flex-wrap gap-4 text-xs font-medium text-secondary-text">
                <span className="flex items-center gap-1.5">
                  <MapPin className="size-4" />
                  {t("education.location")}
                </span>
                <span className="flex items-center gap-1.5 tabular-nums">
                  <CalendarBlank className="size-4" />
                  2022 - 2026
                </span>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-secondary-text border-l-2 border-elevated-border pl-4">
                {t("education.desc")}
              </p>

              <div className="mt-6">
                <h4 className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-secondary-text">
                  <Users className="size-4 text-blue-400" />
                  {t("education.activities")}
                </h4>
                <ul className="space-y-2.5">
                  {[
                    "Competitive Programming Club Member",
                    "Member of Faculty Student Executive Board",
                  ].map((activity) => (
                    <li
                      key={activity}
                      className="flex items-start gap-2.5 text-xs text-secondary-text leading-relaxed"
                    >
                      <CheckCircle
                        className="mt-0.5 size-4 shrink-0 text-emerald-500/80"
                        weight="fill"
                      />
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-elevated-border pt-6 lg:border-t-0 lg:border-l lg:border-elevated-border lg:pt-0 lg:pl-8">
              <h4 className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-secondary-text">
                <BookOpen className="size-4 text-blue-400" />
                {t("education.courses")}
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {coursework.map((course) => (
                  <span
                    key={course}
                    className="rounded-lg bg-elevated/40 border border-elevated-border px-3 py-2 text-xs font-medium text-secondary-text hover:border-primary-accent/30 hover:text-foreground transition-colors"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </InteractiveEducationCard>
      </section>

      <section className="mb-16">
        <div className="mb-8 flex items-center gap-3">
          <h2 className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
            {t("education.projects")}
          </h2>
          <div className="h-px flex-1 bg-linear-to-r from-elevated-border to-transparent" />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioProjects.map((project, index) => (
            <InteractiveEducationCard
              key={project.id}
              delay={index * 0.04}
              className="flex flex-col justify-between group"
            >
              <div>
                <div
                  className={cn(
                    "mb-4 flex size-11 items-center justify-center rounded-xl bg-linear-to-br border border-elevated-border text-blue-400",
                    project.gradient,
                  )}
                >
                  <Code className="size-5" weight="bold" />
                </div>
                <h3 className="mb-2 font-bold tracking-tight text-foreground group-hover:text-blue-400 transition-colors">
                  {t(project.titleKey)}
                </h3>
                <p className="mb-5 line-clamp-3 text-xs leading-relaxed text-secondary-text">
                  {t(project.descKey)}
                </p>
              </div>

              <div>
                <div className="mb-4 flex flex-wrap gap-1">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded bg-elevated border border-elevated-border px-2 py-0.5 text-[11px] text-secondary-text"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 border-t border-elevated-border pt-3.5 text-xs font-semibold">
                  {project.github.map((repo, idx) => (
                    <a
                      key={idx}
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-secondary-text transition-colors hover:text-foreground"
                    >
                      <GithubLogo className="size-4" />
                      {t(repo.labelKey)}
                    </a>
                  ))}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-blue-400 transition-colors hover:text-blue-300"
                    >
                      <ArrowSquareOut className="size-4" />
                      {t("common.demo")}
                    </a>
                  )}
                </div>
              </div>
            </InteractiveEducationCard>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <SectionCard className="border border-elevated-border bg-elevated/20 backdrop-blur-sm p-6">
          <h2 className="mb-10 text-center text-xl font-bold tracking-tight text-foreground md:text-2xl">
            {t("education.timeline.title")}
          </h2>

          <div className="relative mx-auto max-w-4xl border-l border-elevated-border pl-6 space-y-8">
            {learningTimeline.map((phase, idx) => {
              const isCurrent = phase.year.includes("Now");
              const Icon = phase.icon;

              return (
                <motion.div
                  key={phase.year}
                  initial={reduceMotion ? false : { opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="relative group"
                >
                  <div
                    className={cn(
                      "absolute -left-7.75 top-1.5 size-4 rounded-full border bg-background transition-all shadow-md flex items-center justify-center",
                      isCurrent
                        ? "border-blue-500 bg-blue-600 ring-4 ring-blue-500/20 animate-pulse"
                        : "border-elevated-border bg-elevated group-hover:border-blue-500 group-hover:bg-blue-600",
                    )}
                  />

                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                    <span
                      className={cn(
                        "inline-block shrink-0 rounded-full border px-3 py-0.5 text-xs font-black text-center w-fit tabular-nums",
                        isCurrent
                          ? "bg-blue-500/20 border-blue-500/40 text-blue-400"
                          : "bg-elevated border-elevated-border text-secondary-text",
                      )}
                    >
                      {phase.year}
                    </span>
                    <div>
                      <h3
                        className={cn(
                          "text-sm font-bold transition-colors inline-flex items-center gap-2",
                          isCurrent
                            ? "text-blue-400"
                            : "text-foreground group-hover:text-blue-400",
                        )}
                      >
                        <Icon className="size-4 shrink-0" weight="duotone" />
                        {phase.title}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-secondary-text max-w-2xl">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </SectionCard>
      </section>

      <section className="text-center">
        <h2 className="mb-3 text-2xl font-black tracking-tight text-foreground md:text-3xl">
          {t("education.philosophy.title")}
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-sm leading-relaxed text-secondary-text italic">
          "{t("education.philosophy.quote")}"
        </p>

        <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {philosophyItems.map((item, index) => (
            <InteractiveEducationCard
              key={index}
              delay={index * 0.03}
              className="text-center flex flex-col items-center"
            >
              <div className="mb-4 flex size-12 items-center justify-center rounded-xl border border-elevated-border bg-elevated/60 text-blue-400">
                <item.icon className="size-6" weight="duotone" />
              </div>
              <h3 className="mb-2 font-bold text-foreground">{item.title}</h3>
              <p className="text-xs leading-relaxed text-secondary-text max-w-xs">
                {item.description}
              </p>
            </InteractiveEducationCard>
          ))}
        </div>

        <Button
          asChild
          className="bg-linear-to-r from-yellow-400 via-red-500 to-purple-600 font-bold text-white shadow-lg transition-all hover:scale-105 hover:opacity-90 border-none cursor-pointer"
        >
          <Link href="/contact">{t("common.contact")}</Link>
        </Button>
      </section>
    </div>
  );
}
