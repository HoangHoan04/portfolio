"use client";

import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { useRef, useState } from "react";

import HeaderPageChild from "@/components/pages/page-header-child";
import { SectionCard } from "@/components/pages/section-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/contexts/locale-context";
import { cn } from "@/lib/utils";
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
        "relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 backdrop-blur-md transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/50 hover:shadow-xl",
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
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "MySQL",
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
      skills: "Angular, NestJS, TypeScript, PostgreSQL, Tailwind CSS",
      level: "Fresher Developer (Work & Learn)",
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
      {/* ---------- ĐỒNG BỘ HEADER MỚI ---------- */}
      <HeaderPageChild text={t("experience.title")} />

      {/* Phụ đề nhỏ dưới tiêu đề trang để tạo độ thoáng */}
      <p className="mb-12 -mt-4 text-sm text-zinc-500 max-w-2xl leading-relaxed">
        {t("experience.subtitle")}
      </p>

      {/* ---------- KINH NGHIỆM LÀM VIỆC CHÍNH ---------- */}
      <section className="mb-16">
        <div className="mb-8 flex items-center gap-3">
          <h2 className="text-xl font-bold tracking-tight text-white md:text-2xl">
            {t("experience.roles.workDev") || "Kinh nghiệm làm việc"}
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-zinc-800 to-transparent" />
        </div>

        <InteractiveExperienceCard className="relative overflow-hidden">
          {/* Họa tiết trang trí nền */}
          <div className="absolute -right-20 -top-20 -z-10 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl" />

          <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-950/60 text-blue-400">
                <Briefcase className="size-6" />
              </div>
              <div>
                <h3 className="text-2xl font-black tracking-tight text-white group-hover:text-blue-400 transition-colors">
                  {experience.title}
                </h3>
                <p className="text-base font-semibold text-zinc-300">
                  {experience.company}
                </p>
                <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-zinc-500">
                  <MapPin className="size-3.5 text-zinc-500" />
                  {experience.location}
                </p>
              </div>
            </div>

            <div className="flex flex-col items-end gap-2 self-start sm:self-auto">
              <span className="text-sm font-bold text-blue-400 tabular-nums">
                {experience.period}
              </span>
              <Badge className="border border-zinc-800 bg-zinc-900/80 px-2.5 py-0.5 text-xs font-semibold text-zinc-400 hover:bg-zinc-950">
                {experience.type}
              </Badge>
            </div>
          </div>

          <p className="mb-6 text-sm leading-relaxed text-zinc-400 border-l-2 border-zinc-800 pl-4">
            {experience.description}
          </p>

          <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Nhiệm vụ chính */}
            <div>
              <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-zinc-400">
                {t("experience.responsibilities")}
              </h4>
              <ul className="space-y-3">
                {experience.responsibilities.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-xs leading-relaxed text-zinc-400"
                  >
                    <CheckCircle className="mt-0.5 size-4 shrink-0 text-emerald-500/80" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Thành tựu đạt được */}
            <div>
              <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-zinc-400">
                {t("experience.achievements")}
              </h4>
              <ul className="space-y-3">
                {experience.achievements.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-xs leading-relaxed text-zinc-400"
                  >
                    <Trophy className="mt-0.5 size-4 shrink-0 text-amber-500/80" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Công nghệ sử dụng */}
          <div className="border-t border-zinc-800/60 pt-5">
            <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-zinc-500">
              {t("experience.technologies")}
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {experience.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg bg-zinc-950/40 border border-zinc-800/80 px-3 py-1 text-xs font-medium text-zinc-400 hover:border-zinc-700 hover:text-white transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </InteractiveExperienceCard>
      </section>

      {/* ---------- HOẠT ĐỘNG NGOẠI KHÓA ---------- */}
      <section className="mb-16">
        <div className="mb-8 flex items-center gap-3">
          <h2 className="text-xl font-bold tracking-tight text-white md:text-2xl">
            {t("experience.activities.title")}
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-zinc-800 to-transparent" />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {activities.map((activity, index) => (
            <InteractiveExperienceCard
              key={activity.title as string}
              delay={index * 0.05}
            >
              <div className="mb-4 flex size-11 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-950/60 text-blue-400">
                <Users className="size-5" />
              </div>
              <span className="text-xs font-bold text-blue-400 tabular-nums">
                {activity.period}
              </span>
              <h3 className="mt-1 mb-0.5 text-lg font-bold text-zinc-100">
                {activity.title}
              </h3>
              <p className="mb-3 text-xs font-medium text-zinc-500 uppercase tracking-wide">
                {activity.role}
              </p>
              <p className="text-xs leading-relaxed text-zinc-400">
                {activity.description}
              </p>
            </InteractiveExperienceCard>
          ))}
        </div>
      </section>

      {/* ---------- TRỤC THỜI GIAN LỘ TRÌNH PHÁT TRIỂN (TIMELINE) ---------- */}
      <section className="mb-16">
        <SectionCard className="border border-zinc-800 bg-zinc-950/20 backdrop-blur-sm p-6">
          <h2 className="mb-10 text-center text-xl font-bold tracking-tight text-white md:text-2xl">
            {t("skills.stats.experience")}
          </h2>

          <div className="relative mx-auto max-w-4xl border-l border-zinc-800 pl-6 space-y-8">
            {skillGrowth.map((growth, idx) => {
              const isCurrent = growth.year.includes("Now"); // Kiểm tra mốc hiện tại

              return (
                <motion.div
                  key={growth.year}
                  initial={reduceMotion ? false : { opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="relative group"
                >
                  {/* Điểm nút trên dòng timeline - Làm nổi bật mốc hiện tại */}
                  <div
                    className={cn(
                      "absolute -left-[31px] top-1.5 size-4 rounded-full border bg-zinc-950 transition-all shadow-md",
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
                      {growth.year}
                    </span>
                    <div>
                      <h3
                        className={cn(
                          "text-sm font-bold transition-colors",
                          isCurrent
                            ? "text-blue-400"
                            : "text-zinc-200 group-hover:text-blue-400",
                        )}
                      >
                        {growth.level}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-zinc-400">
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

      {/* ---------- PHONG CÁCH LÀM VIỆC (WORK STYLES) ---------- */}
      <section className="mb-16">
        <div className="mb-8 flex items-center gap-3">
          <h2 className="text-xl font-bold tracking-tight text-white md:text-2xl">
            {t("experience.workStyle.title")}
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-zinc-800 to-transparent" />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {workStyles.map((style, index) => (
            <InteractiveExperienceCard
              key={style.title as string}
              delay={index * 0.03}
              className="text-center flex flex-col items-center"
            >
              <div className="mb-4 flex size-12 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-950/60 text-blue-400">
                <style.icon className="size-6" />
              </div>
              <h3 className="mb-2 font-bold text-zinc-200">{style.title}</h3>
              <p className="text-xs leading-relaxed text-zinc-400">
                {style.description}
              </p>
            </InteractiveExperienceCard>
          ))}
        </div>
      </section>

      {/* ---------- KHỐI KÊU GỌI HÀNH ĐỘNG (CTA SECTION) ---------- */}
      <SectionCard className="relative overflow-hidden border border-zinc-800 bg-gradient-to-r from-zinc-900 via-zinc-950 to-zinc-900 py-10 text-center shadow-xl">
        <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute -right-20 -bottom-20 h-48 w-48 rounded-full bg-purple-500/5 blur-3xl" />

        <h2 className="relative z-10 mb-3 text-2xl font-black tracking-tight text-white md:text-3xl">
          {t("experience.cta")}
        </h2>
        <p className="relative z-10 mx-auto mb-8 max-w-xl text-sm leading-relaxed text-zinc-400">
          {t("experience.ctaDesc")}
        </p>
        <div className="relative z-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Button
            asChild
            className="bg-blue-600 font-bold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-500 transition-all hover:scale-105"
          >
            <Link href="/contact" className="gap-2">
              <Send className="size-4" />
              {t("common.contact")}
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-zinc-800 bg-zinc-900/50 font-medium text-zinc-300 transition-all hover:bg-zinc-800 hover:text-white hover:scale-105"
          >
            <a
              href="/files/HoangDinhHoanCv.pdf"
              download="Hoang-Dinh-Hoan-CV.pdf"
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
