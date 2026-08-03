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

const academicProjects = [
  {
    nameKey: "home.projects.list.wedding.name",
    descKey: "home.projects.list.wedding.desc",
    tech: ["TypeScript", "React", "Tailwind CSS", "NestJS"],
    github: "https://github.com/HoangHoan04/wedding-invitation-customer",
    demo: null,
    gradient: "from-pink-500/20 to-rose-500/20",
  },
  {
    nameKey: "home.projects.list.himlam.name",
    descKey: "home.projects.list.himlam.desc",
    tech: ["React", "TypeScript", "NestJS", "PostgreSQL", "Supabase"],
    github: "https://github.com/HoangHoan04/bookingtour-customer",
    demo: null,
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    nameKey: "home.projects.list.apple.name",
    descKey: "home.projects.list.apple.desc",
    tech: ["PHP", "MySQL"],
    github: "https://github.com/HoangHoan04/AppleStore",
    demo: null,
    gradient: "from-zinc-500/20 to-neutral-500/20",
  },
];

const coursework = [
  "Object-Oriented Programming",
  "Web & Application Development",
  "Data Structures & Algorithms",
  "Database Management",
  "Discrete Math",
  "Linear Algebra",
  "Probability & Statistics",
];

// ---------- THẺ SPOTLIGHT TƯƠNG TÁC ĐỒNG BỘ ----------
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
        "relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 backdrop-blur-md transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/50 hover:shadow-xl",
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
      title: t("education.timeline.internship"),
      description: t("education.timeline.internshipDesc"),
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
      {/* ---------- ĐỒNG BỘ HEADER MỚI ---------- */}
      <HeaderPageChild text={t("education.title")} />

      <p className="mb-12 -mt-4 text-sm text-zinc-500 max-w-2xl leading-relaxed">
        {t("education.subtitle")}
      </p>

      {/* ---------- HỌC VẤN CHÍNH QUY ---------- */}
      <section className="mb-16">
        <div className="mb-8 flex items-center gap-3">
          <h2 className="text-xl font-bold tracking-tight text-white md:text-2xl">
            {t("education.formal")}
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-zinc-800 to-transparent" />
        </div>

        <InteractiveEducationCard>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <h3 className="text-2xl font-black tracking-tight text-white">
                  {t("education.degree")}
                </h3>
                <Badge className="border border-blue-500/30 bg-blue-500/10 px-2.5 py-0.5 text-xs font-semibold text-blue-400">
                  GPA: Good
                </Badge>
              </div>
              <p className="text-base font-semibold text-zinc-300">
                {t("education.school")}
              </p>

              <div className="mt-3 flex flex-wrap gap-4 text-xs font-medium text-zinc-500">
                <span className="flex items-center gap-1.5">
                  <MapPin className="size-4" />
                  {t("education.location")}
                </span>
                <span className="flex items-center gap-1.5 tabular-nums">
                  <CalendarBlank className="size-4" />
                  2022 - 2026
                </span>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-zinc-400 border-l-2 border-zinc-800 pl-4">
                {t("education.desc")}
              </p>

              <div className="mt-6">
                <h4 className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400">
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
                      className="flex items-start gap-2.5 text-xs text-zinc-400 leading-relaxed"
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

            {/* Môn học chuyên ngành */}
            <div className="border-t border-zinc-800 pt-6 lg:border-t-0 lg:border-l lg:border-zinc-800 lg:pt-0 lg:pl-8">
              <h4 className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400">
                <BookOpen className="size-4 text-blue-400" />
                {t("education.courses")}
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {coursework.map((course) => (
                  <span
                    key={course}
                    className="rounded-lg bg-zinc-950/40 border border-zinc-800/80 px-3 py-2 text-xs font-medium text-zinc-400 hover:border-zinc-700 hover:text-white transition-colors"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </InteractiveEducationCard>
      </section>

      {/* ---------- DỰ ÁN HỌC TẬP / NGHIÊN CỨU ---------- */}
      <section className="mb-16">
        <div className="mb-8 flex items-center gap-3">
          <h2 className="text-xl font-bold tracking-tight text-white md:text-2xl">
            {t("education.projects")}
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-zinc-800 to-transparent" />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {academicProjects.map((project, index) => (
            <InteractiveEducationCard
              key={project.github}
              delay={index * 0.04}
              className="flex flex-col justify-between group"
            >
              <div>
                <div
                  className={cn(
                    "mb-4 flex size-11 items-center justify-center rounded-xl bg-gradient-to-br border border-zinc-800/60 text-blue-400",
                    project.gradient,
                  )}
                >
                  <Code className="size-5" weight="bold" />
                </div>
                <h3 className="mb-2 font-bold tracking-tight text-zinc-100 group-hover:text-blue-400 transition-colors">
                  {t(project.nameKey)}
                </h3>
                <p className="mb-5 line-clamp-3 text-xs leading-relaxed text-zinc-400">
                  {t(project.descKey)}
                </p>
              </div>

              <div>
                <div className="mb-4 flex flex-wrap gap-1">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded bg-zinc-800 border border-zinc-700/60 px-2 py-0.5 text-[11px] text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 border-t border-zinc-800/60 pt-3.5 text-xs font-semibold">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-zinc-500 transition-colors hover:text-white"
                  >
                    <GithubLogo className="size-4" />
                    {t("common.code")}
                  </a>
                  {project?.demo && (
                    <a
                      href={project?.demo}
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

      {/* ---------- TRỤC THỜI GIAN LỘ TRÌNH HỌC TẬP (VERTICAL TIMELINE) ---------- */}
      <section className="mb-16">
        <SectionCard className="border border-zinc-800 bg-zinc-950/20 backdrop-blur-sm p-6">
          <h2 className="mb-10 text-center text-xl font-bold tracking-tight text-white md:text-2xl">
            {t("education.timeline.title")}
          </h2>

          <div className="relative mx-auto max-w-4xl border-l border-zinc-800 pl-6 space-y-8">
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
                  {/* Timeline Node Point */}
                  <div
                    className={cn(
                      "absolute -left-[31px] top-1.5 size-4 rounded-full border bg-zinc-950 transition-all shadow-md flex items-center justify-center",
                      isCurrent
                        ? "border-blue-500 bg-blue-600 ring-4 ring-blue-500/20 animate-pulse"
                        : "border-zinc-700 group-hover:border-blue-500 group-hover:bg-blue-600",
                    )}
                  />

                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                    <span
                      className={cn(
                        "inline-block shrink-0 rounded-full border px-3 py-0.5 text-xs font-black text-center w-fit tabular-nums",
                        isCurrent
                          ? "bg-blue-500/20 border-blue-500/40 text-blue-400"
                          : "bg-blue-950/40 border-blue-900/30 text-blue-400/80",
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
                            : "text-zinc-200 group-hover:text-blue-400",
                        )}
                      >
                        <Icon className="size-4 shrink-0" weight="duotone" />
                        {phase.title}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-zinc-400 max-w-2xl">
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

      {/* ---------- TRIẾT LÝ HỌC TẬP ---------- */}
      <section className="text-center">
        <h2 className="mb-3 text-2xl font-black tracking-tight text-white md:text-3xl">
          {t("education.philosophy.title")}
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-sm leading-relaxed text-zinc-400 italic">
          "{t("education.philosophy.quote")}"
        </p>

        <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {philosophyItems.map((item, index) => (
            <InteractiveEducationCard
              key={index}
              delay={index * 0.03}
              className="text-center flex flex-col items-center"
            >
              <div className="mb-4 flex size-12 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-950/60 text-blue-400">
                <item.icon className="size-6" weight="duotone" />
              </div>
              <h3 className="mb-2 font-bold text-zinc-200">{item.title}</h3>
              <p className="text-xs leading-relaxed text-zinc-400 max-w-xs">
                {item.description}
              </p>
            </InteractiveEducationCard>
          ))}
        </div>

        <Button
          asChild
          className="bg-blue-600 font-bold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-500 transition-all hover:scale-105"
        >
          <Link href="/contact">{t("common.contact")}</Link>
        </Button>
      </section>
    </div>
  );
}
