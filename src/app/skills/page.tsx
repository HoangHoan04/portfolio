"use client";

import HeaderPageChild from "@/components/pages/page-header-child";
import { SectionCard } from "@/components/pages/section-card";
import { GitHubContributionsSection } from "@/components/skills/github-contributions-section";
import { Button } from "@/components/ui/button";
import {
  SKILL_ICON_MAP,
  skillStats,
  softSkills,
  technicalGroups,
  toolsGroups,
  type SkillItem,
} from "@/constants/skills-data";
import { useTranslation } from "@/contexts/locale-context";
import { cn } from "@/lib/utils";
import {
  BookOpen,
  Clock,
  Code,
  Lightbulb,
  MessageCircleMore,
  Package,
  Send,
  Users,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

const statIcons: Record<string, React.ElementType> = {
  code: Code,
  box: Package,
  calendar: Clock,
  github: Code,
};

const softIcons: Record<string, React.ElementType> = {
  users: Users,
  comments: MessageCircleMore,
  lightbulb: Lightbulb,
  refresh: Clock,
  clock: Clock,
  book: BookOpen,
};

function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.2 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    if (reduceMotion) {
      setCount(end);
      return;
    }
    let raf: number;
    const startTime = performance.now();
    const durationMs = 1000;

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / durationMs, 1);
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.round(eased * end));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, end, reduceMotion]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

function InteractiveSkillCard({
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
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      whileHover={reduceMotion ? undefined : { y: -3 }}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-elevated-border bg-elevated/30 p-5 transition-all duration-300 hover:border-primary-accent/30 hover:bg-elevated/60",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(180px circle at ${coords.x}px ${coords.y}px, rgba(0, 149, 246, 0.1), transparent 80%)`,
        }}
      />
      {children}
    </motion.div>
  );
}

function SkillCard({
  skill,
  name,
  delay = 0,
}: {
  skill: SkillItem;
  name: string;
  delay?: number;
}) {
  const iconSrc = SKILL_ICON_MAP[skill.icon];

  return (
    <InteractiveSkillCard
      delay={delay}
      className="flex flex-col justify-between"
    >
      <div>
        <div className="mb-4 flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-xl border border-elevated-border bg-elevated/60 p-2 shadow-inner group-hover:border-primary-accent/30">
            {iconSrc ? (
              <Image
                src={iconSrc}
                alt={name}
                width={22}
                height={22}
                className="object-contain filter brightness-110"
              />
            ) : (
              <Code className="size-5 text-blue-400" />
            )}
          </div>
          <span className="font-bold tracking-tight text-foreground">{name}</span>
        </div>
      </div>

      {skill.tags && skill.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {skill.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-elevated-border bg-elevated/20 px-2 py-0.5 text-[10px] font-medium text-secondary-text transition-colors hover:border-primary-accent/30 hover:text-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </InteractiveSkillCard>
  );
}

export default function SkillsPage() {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState<
    "technical" | "tools" | "soft"
  >("technical");
  const [activeSubTab, setActiveSubTab] = useState(0);
  const [githubContributions, setGithubContributions] = useState<number | null>(
    null,
  );

  const categoryTabs = [
    { id: "technical" as const, label: t("skills.tabs.technical") },
    { id: "tools" as const, label: t("skills.tabs.tools") },
    { id: "soft" as const, label: t("skills.tabs.soft") },
  ];

  const currentGroups = useMemo(() => {
    return activeCategory === "technical" ? technicalGroups : toolsGroups;
  }, [activeCategory]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 md:px-6">
      <HeaderPageChild
        text={`${t("skills.header.titleMain")} ${t("skills.header.titleGradient")}`}
      />

      <div className="mb-14 grid grid-cols-2 gap-4 md:grid-cols-4">
        {skillStats.map((stat, index) => {
          const Icon = statIcons[stat.icon] ?? Code;
          const isCommitsStat = stat.icon === "github";
          const statValue =
            isCommitsStat && githubContributions !== null
              ? githubContributions
              : stat.value;
          const statSuffix =
            isCommitsStat && githubContributions !== null ? "" : stat.suffix;

          return (
            <SectionCard
              key={stat.labelKey}
              delay={index * 0.04}
              className="relative overflow-hidden border border-elevated-border bg-elevated/40 p-5 text-center backdrop-blur-sm hover:border-primary-accent/30"
            >
              <div className="absolute -right-4 -top-4 -z-10 h-12 w-12 rounded-full bg-blue-500/5 blur-xl" />
              <Icon className="mx-auto mb-2 size-5 text-blue-400" />
              <p className="bg-linear-to-r from-foreground to-secondary-text bg-clip-text text-3xl font-black text-transparent leading-none mb-1">
                <Counter end={statValue} suffix={statSuffix} />
              </p>
              <p className="text-[10px] font-bold uppercase tracking-wider text-secondary-text">
                {t(stat.labelKey)}
              </p>
            </SectionCard>
          );
        })}
      </div>

      <GitHubContributionsSection onTotalChange={setGithubContributions} />

      <div className="mb-10 flex justify-center">
        <div className="inline-flex rounded-xl border border-elevated-border bg-elevated/60 p-1 backdrop-blur-sm">
          {categoryTabs.map((tab) => {
            const isSelected = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setActiveCategory(tab.id);
                  setActiveSubTab(0);
                }}
                className={cn(
                  "relative rounded-lg px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-colors duration-300",
                  isSelected
                    ? "text-white"
                    : "text-secondary-text hover:text-foreground",
                )}
              >
                {isSelected && (
                  <motion.span
                    layoutId="active-skill-category"
                    className="absolute inset-0 rounded-lg bg-linear-to-r from-yellow-400 via-red-500 to-purple-600 shadow-md"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {activeCategory !== "soft" && (
        <>
          {/* Sub-tabs bộ lọc con */}
          <div className="mb-8 flex flex-wrap justify-center gap-1.5">
            {currentGroups.map((group, index) => {
              const isSubSelected = activeSubTab === index;
              return (
                <button
                  key={group.labelKey}
                  type="button"
                  onClick={() => setActiveSubTab(index)}
                  className={cn(
                    "relative rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200",
                    isSubSelected
                      ? "border border-blue-500/30 bg-blue-950/20 text-blue-400"
                      : "border border-elevated-border text-secondary-text hover:border-primary-accent/30 hover:text-foreground",
                  )}
                >
                  {t(group.labelKey)}
                </button>
              );
            })}
          </div>

          <motion.div
            layout
            className="mb-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {currentGroups[activeSubTab]?.skills.map((skill, index) => {
                const name =
                  skill.name ??
                  (skill.nameKey ? (t(skill.nameKey) as string) : "");
                return (
                  <motion.div
                    key={`${name}-${index}`}
                    layout
                    initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={
                      reduceMotion
                        ? undefined
                        : { opacity: 0, scale: 0.96, y: 8 }
                    }
                    transition={{ duration: 0.3, delay: index * 0.015 }}
                  >
                    <SkillCard skill={skill} name={name} delay={0} />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </>
      )}

      {activeCategory === "soft" && (
        <div className="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {softSkills.map((skill, index) => {
            const Icon = softIcons[skill.icon] ?? Users;
            return (
              <SectionCard
                key={skill.nameKey}
                delay={index * 0.04}
                className="group flex flex-col items-center text-center border border-elevated-border bg-elevated/20 p-6 hover:border-primary-accent/30 hover:bg-elevated/40"
              >
                <div className="mb-4 flex size-14 items-center justify-center rounded-2xl border border-elevated-border bg-elevated/60 shadow-inner transition-colors group-hover:border-blue-500/20 group-hover:bg-blue-950/10">
                  <Icon className="size-6 text-blue-400 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="mb-2 font-bold tracking-tight text-foreground">
                  {t(skill.nameKey)}
                </h3>
                <p className="text-xs leading-relaxed text-secondary-text max-w-xs">
                  {t(skill.descKey)}
                </p>
              </SectionCard>
            );
          })}
        </div>
      )}

      <SectionCard className="relative overflow-hidden border border-elevated-border bg-elevated/40 py-10 text-center shadow-xl">
        <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute -right-20 -bottom-20 h-48 w-48 rounded-full bg-purple-500/5 blur-3xl" />

        <h2 className="relative z-10 mb-3 text-2xl font-black tracking-tight text-foreground md:text-3xl">
          {t("skills.cta.title")}
        </h2>
        <p className="relative z-10 mx-auto mb-8 max-w-md text-sm leading-relaxed text-secondary-text">
          {t("skills.cta.desc")}
        </p>
        <Button
          asChild
          className="relative z-10 bg-linear-to-r from-yellow-400 via-red-500 to-purple-600 font-bold text-white shadow-lg transition-all hover:scale-105 hover:opacity-90 border-none cursor-pointer"
        >
          <Link href="/contact" className="gap-2">
            <Send className="size-4" />
            {t("skills.cta.button")}
          </Link>
        </Button>
      </SectionCard>
    </div>
  );
}
