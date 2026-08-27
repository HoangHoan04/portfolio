"use client";

import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { useRef, useState } from "react";

import HeaderPageChild from "@/components/pages/page-header-child";
import { SectionCard } from "@/components/pages/section-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/contexts/locale-context";
import { cn, getAssetPath } from "@/lib/utils";
import {
  Briefcase,
  ChartBar,
  CheckCircle,
  Download,
  Lightbulb,
  MapPin,
  Send,
  Star,
  Trophy,
  UserPlus,
  Users,
} from "lucide-react";

function InteractiveExperienceCard({
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
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-elevated-border bg-elevated/30 p-6 backdrop-blur-md transition-all duration-300 hover:border-primary-accent/30 hover:bg-elevated/50 hover:shadow-xl",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(300px circle at ${coords.x}px ${coords.y}px, rgba(0, 149, 246, 0.08), transparent 80%)`,
        }}
      />
      {children}
    </motion.div>
  );
}

export default function ExperiencePage() {
  const { t, tList } = useTranslation();
  const reduceMotion = useReducedMotion();

  const experience = {
    title: t("experience.roles.webDev"),
    company: "APETECH Solutions",
    location: "Ho Chi Minh City, Vietnam",
    period: "Mar. 2025 - Present",
    type: t("experience.roles.fulltime"),
    description: t("experience.apetech.desc"),
    responsibilities: tList("experience.apetech.resp"),
    technologies: [
      "React",
      "Angular",
      "React Native",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "MySQL",
      "Tailwind CSS",
    ],
    achievements: tList("experience.apetech.achieve"),
  };

  const activities = [
    {
      title: t("experience.activities.studentBoard.title"),
      role: t("experience.activities.studentBoard.role"),
      period: "Sept. 2023 - Present",
      description: t("experience.activities.studentBoard.desc"),
    },
    {
      title: t("experience.activities.codeClub.title"),
      role: t("experience.activities.codeClub.role"),
      period: "Sept. 2023 - Present",
      description: t("experience.activities.codeClub.desc"),
    },
  ];

  const skillGrowth = [
    { year: "2022", skills: "HTML, CSS, JavaScript", level: "Beginner" },
    {
      year: "2023",
      skills: "OOP, Data Structures & Algorithms, Web Development",
      level: "Learning",
    },
    { year: "2024", skills: "React, PHP, MySQL, Git", level: "Intermediate" },
    {
      year: "2025 - Now",
      skills: "Angular, React Native, NestJS, ASP.NET Core, TypeScript, PostgreSQL",
      level: "Full-Stack Developer (2+ Năm Chính Thức)",
    },
  ];

  const workStyles = [
    {
      title: t("experience.workStyle.agile.title"),
      description: t("experience.workStyle.agile.desc"),
      icon: Users,
    },
    {
      title: t("experience.workStyle.problemSolver.title"),
      description: t("experience.workStyle.problemSolver.desc"),
      icon: Lightbulb,
    },
    {
      title: t("experience.workStyle.learner.title"),
      description: t("experience.workStyle.learner.desc"),
      icon: ChartBar,
    },
    {
      title: t("experience.workStyle.quality.title"),
      description: t("experience.workStyle.quality.desc"),
      icon: Star,
    },
    {
      title: t("experience.workStyle.teamPlayer.title"),
      description: t("experience.workStyle.teamPlayer.desc"),
      icon: UserPlus,
    },
    {
      title: t("experience.workStyle.results.title"),
      description: t("experience.workStyle.results.desc"),
      icon: Trophy,
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 md:px-6">
      <HeaderPageChild text={t("experience.title")} />
      <p className="mb-12 -mt-4 text-sm text-secondary-text max-w-2xl leading-relaxed">
        {t("experience.subtitle")}
      </p>

      <section className="mb-16">
        <div className="mb-8 flex items-center gap-3">
          <h2 className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
            {t("experience.title")}
          </h2>
          <div className="h-px flex-1 bg-linear-to-r from-elevated-border to-transparent" />
        </div>

        <InteractiveExperienceCard className="relative overflow-hidden">
          <div className="absolute -right-20 -top-20 -z-10 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl" />

          <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-elevated-border bg-elevated/60 text-blue-400">
                <Briefcase className="size-6" />
              </div>
              <div>
                <h3 className="text-2xl font-black tracking-tight text-foreground group-hover:text-blue-400 transition-colors">
                  {experience.title}
                </h3>
                <p className="text-base font-semibold text-foreground">
                  {experience.company}
                </p>
                <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-secondary-text">
                  <MapPin className="size-3.5 text-secondary-text" />
                  {experience.location}
                </p>
              </div>
            </div>

            <div className="flex flex-col items-end gap-2 self-start sm:self-auto">
              <span className="text-sm font-bold text-blue-400 tabular-nums">
                {experience.period}
              </span>
              <Badge className="border border-elevated-border bg-elevated/80 px-2.5 py-0.5 text-xs font-semibold text-secondary-text hover:bg-elevated-hover">
                {experience.type}
              </Badge>
            </div>
          </div>

          <p className="mb-6 text-sm leading-relaxed text-secondary-text border-l-2 border-elevated-border pl-4">
            {experience.description}
          </p>

          <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-secondary-text">
                {t("experience.responsibilities")}
              </h4>
              <ul className="space-y-3">
                {experience.responsibilities.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-xs leading-relaxed text-secondary-text"
                  >
                    <CheckCircle className="mt-0.5 size-4 shrink-0 text-emerald-500/80" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-secondary-text">
                {t("experience.achievements")}
              </h4>
              <ul className="space-y-3">
                {experience.achievements.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-xs leading-relaxed text-secondary-text"
                  >
                    <Trophy className="mt-0.5 size-4 shrink-0 text-amber-500/80" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-elevated-border pt-5">
            <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-secondary-text">
              {t("experience.technologies")}
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {experience.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg bg-elevated/40 border border-elevated-border px-3 py-1 text-xs font-medium text-secondary-text hover:border-primary-accent/30 hover:text-foreground transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </InteractiveExperienceCard>
      </section>

      <section className="mb-16">
        <div className="mb-8 flex items-center gap-3">
          <h2 className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
            {t("experience.activities.title")}
          </h2>
          <div className="h-px flex-1 bg-linear-to-r from-elevated-border to-transparent" />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {activities.map((activity, index) => (
            <InteractiveExperienceCard
              key={activity.title as string}
              delay={index * 0.05}
            >
              <div className="mb-4 flex size-11 items-center justify-center rounded-xl border border-elevated-border bg-elevated/60 text-blue-400">
                <Users className="size-5" />
              </div>
              <span className="text-xs font-bold text-blue-400 tabular-nums">
                {activity.period}
              </span>
              <h3 className="mt-1 mb-0.5 text-lg font-bold text-foreground">
                {activity.title}
              </h3>
              <p className="mb-3 text-xs font-medium text-secondary-text uppercase tracking-wide">
                {activity.role}
              </p>
              <p className="text-xs leading-relaxed text-secondary-text">
                {activity.description}
              </p>
            </InteractiveExperienceCard>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <SectionCard className="border border-elevated-border bg-elevated/20 backdrop-blur-sm p-6">
          <h2 className="mb-10 text-center text-xl font-bold tracking-tight text-foreground md:text-2xl">
            {t("skills.stats.experience")}
          </h2>

          <div className="relative mx-auto max-w-4xl border-l border-elevated-border pl-6 space-y-8">
            {skillGrowth.map((growth, idx) => {
              const isCurrent = growth.year.includes("Now");

              return (
                <motion.div
                  key={growth.year}
                  initial={reduceMotion ? false : { opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="relative group"
                >
                  <div
                    className={cn(
                      "absolute -left-7.75 top-1.5 size-4 rounded-full border bg-background transition-all shadow-md",
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
                      {growth.year}
                    </span>
                    <div>
                      <h3
                        className={cn(
                          "text-sm font-bold transition-colors",
                          isCurrent
                            ? "text-blue-400"
                            : "text-foreground group-hover:text-blue-400",
                        )}
                      >
                        {growth.level}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-secondary-text">
                        {growth.skills}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </SectionCard>
      </section>

      <section className="mb-16">
        <div className="mb-8 flex items-center gap-3">
          <h2 className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
            {t("experience.workStyle.title")}
          </h2>
          <div className="h-px flex-1 bg-linear-to-r from-elevated-border to-transparent" />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {workStyles.map((style, index) => {
            const Icon = style.icon;
            return (
              <InteractiveExperienceCard
                key={style.title as string}
                delay={index * 0.03}
              >
                <div className="mb-4 flex size-12 items-center justify-center rounded-xl border border-elevated-border bg-elevated/60 text-blue-400">
                  <Icon className="size-6" />
                </div>
                <h3 className="mb-2 font-bold text-foreground">
                  {style.title}
                </h3>
                <p className="text-xs leading-relaxed text-secondary-text">
                  {style.description}
                </p>
              </InteractiveExperienceCard>
            );
          })}
        </div>
      </section>

      <SectionCard className="relative overflow-hidden border border-elevated-border bg-elevated/40 py-10 text-center shadow-xl">
        <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute -right-20 -bottom-20 h-48 w-48 rounded-full bg-purple-500/5 blur-3xl" />

        <h2 className="relative z-10 mb-3 text-2xl font-black tracking-tight text-foreground md:text-3xl">
          {t("experience.cta")}
        </h2>
        <p className="relative z-10 mx-auto mb-8 max-w-xl text-sm leading-relaxed text-secondary-text">
          {t("experience.ctaDesc")}
        </p>
        <div className="relative z-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Button
            asChild
            className="bg-linear-to-r from-yellow-400 via-red-500 to-purple-600 font-bold text-white shadow-lg transition-all hover:scale-105 hover:opacity-90 border-none cursor-pointer"
          >
            <Link href="/contact" className="gap-2">
              <Send className="size-4" />
              {t("common.contact")}
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-elevated-border bg-elevated/40 font-medium text-foreground transition-all hover:bg-elevated-hover hover:scale-105"
          >
            <a
              href={getAssetPath("/files/CV___Hoang_Hoan.pdf")}
              download="Hoang-Hoan-CV.pdf"
              className="gap-2"
            >
              <Download className="size-4" />
              {t("common.downloadCv")}
            </a>
          </Button>
        </div>
      </SectionCard>
    </div>
  );
}
