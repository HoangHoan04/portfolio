"use client";

import HeaderPageChild from "@/components/pages/page-header-child";
import { SectionCard } from "@/components/pages/section-card";
import { Button } from "@/components/ui/button";
import { TechIcon } from "@/components/ui/tech-icon";
import { getProjectIcon, icons } from "@/constants/icons";
import {
  portfolioProjects,
  projectCategories,
} from "@/constants/projects-data";
import { useTranslation } from "@/contexts/locale-context";
import { cn } from "@/lib/utils";
import { Folder, Layers, LinkIcon, Send, Star } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

function useCountUp(target: number, durationMs = 1200, start = false) {
  const [value, setValue] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!start) return;
    if (reduceMotion) {
      setValue(target);
      return;
    }
    let raf: number;
    const startTime = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / durationMs, 1);
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setValue(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, durationMs, reduceMotion]);

  return value;
}

function InteractiveCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setCoords({ x, y });

    if (!reduceMotion) {
      const xc = rect.width / 2;
      const yc = rect.height / 2;
      const angleX = (yc - y) / 20;
      const angleY = (x - xc) / 20;
      ref.current.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale3d(1.01, 1.01, 1.01)`;
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (!ref.current) return;
    ref.current.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-elevated-border bg-elevated/50 backdrop-blur-md transition-all duration-200 ease-out will-change-transform shadow-xl hover:border-primary-accent/30 hover:shadow-2xl",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(350px circle at ${coords.x}px ${coords.y}px, rgba(225, 48, 108, 0.1), transparent 80%)`,
        }}
      />
      {children}
    </div>
  );
}

function ProjectVisual({
  project,
  title,
  large = false,
}: {
  project: (typeof portfolioProjects)[number];
  title: string;
  large?: boolean;
}) {
  const iconSrc = getProjectIcon(project.technologies);

  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden bg-linear-to-br",
        large ? "h-52" : "h-36",
        project.gradient,
      )}
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[20px_20px]" />
      <div
        className={cn(
          "relative z-10 flex items-center justify-center rounded-2xl border border-white/10 bg-black/20 backdrop-blur-sm",
          large ? "size-24" : "size-16",
        )}
      >
        <Image
          src={iconSrc}
          alt={title}
          width={large ? 56 : 36}
          height={large ? 56 : 36}
          className="object-contain"
        />
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState("all");
  const reduceMotion = useReducedMotion();

  const filteredProjects = useMemo(() => {
    return activeFilter === "all"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  const featuredProjects = useMemo(() => {
    return portfolioProjects.filter((p) => p.featured);
  }, []);

  const stats = useMemo(() => {
    const techSet = new Set<string>();
    portfolioProjects.forEach((p) =>
      p.technologies.forEach((tech) => techSet.add(tech)),
    );
    return {
      total: portfolioProjects.length,
      tech: techSet.size,
      categories: projectCategories.length - 1,
    };
  }, []);

  const totalCount = useCountUp(stats.total, 1000, true);
  const techCount = useCountUp(stats.tech, 1200, true);
  const categoryCount = useCountUp(stats.categories, 800, true);

  const statItems = [
    {
      value: totalCount,
      label: t("projectsPage.statsProjects"),
      icon: <Folder className="size-5 text-primary-accent" />,
    },
    {
      value: techCount,
      label: t("projectsPage.statsTech"),
      icon: (
        <Image
          src={icons.react}
          alt="Tech stack"
          width={20}
          height={20}
          className="object-contain"
        />
      ),
    },
    {
      value: categoryCount,
      label: t("projectsPage.statsCategories"),
      icon: <Layers className="size-5 text-primary-accent" />,
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 md:px-6">
      <HeaderPageChild text={t("projectsPage.title")} />

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-14 grid grid-cols-1 gap-4 sm:grid-cols-3"
      >
        {statItems.map((stat) => (
          <div
            key={stat.label}
            className="relative overflow-hidden rounded-2xl border border-elevated-border bg-elevated/40 p-5 shadow-inner backdrop-blur-sm transition-all hover:border-primary-accent/30"
          >
            <div className="absolute -right-4 -top-4 -z-10 h-16 w-16 rounded-full bg-blue-500/10 blur-2xl" />
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-elevated-border bg-elevated">
                {stat.icon}
              </div>
              <div>
                <div className="bg-linear-to-r from-yellow-400 via-red-500 to-purple-600 bg-clip-text text-3xl font-black text-transparent tabular-nums leading-none">
                  {stat.value}+
                </div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wide text-secondary-text">
                  {stat.label}
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      <section className="mb-16">
        <div className="mb-8 flex items-center gap-3">
          <h2 className="text-2xl font-black tracking-tight text-foreground md:text-3xl">
            {t("projectsPage.featured")}
          </h2>
          <div className="h-px flex-1 bg-linear-to-r from-elevated-border to-transparent" />
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {featuredProjects.map((project) => {
            const title = t(project.titleKey);
            return (
              <InteractiveCard
                key={project.id}
                className="group flex h-full flex-col justify-between"
              >
                <div>
                  <div className="relative">
                    <ProjectVisual project={project} title={title} large />
                    <span className="absolute left-4 top-4 z-20 inline-flex items-center gap-1 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-amber-300 backdrop-blur-md">
                      <Star className="size-3.5 fill-amber-300" />
                      Featured
                    </span>
                  </div>

                  <div className="p-6 md:p-8">
                    <h3 className="mb-3 text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary-accent">
                      {title}
                    </h3>
                    <p className="mb-6 text-sm leading-relaxed text-secondary-text">
                      {t(project.descKey)}
                    </p>

                    <div className="mb-6 flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-elevated-border bg-elevated px-3 py-1 text-xs font-medium text-secondary-text transition-colors group-hover:border-primary-accent/30 group-hover:bg-elevated-hover"
                        >
                          <TechIcon name={tech} size={14} />
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 border-t border-elevated-border bg-elevated-hover p-6 md:px-8">
                  {project.github.map((repo) => (
                    <a
                      key={repo.url}
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-elevated-border bg-elevated px-4 py-2.5 text-sm font-medium text-secondary-text transition-all hover:bg-elevated-hover hover:text-foreground"
                    >
                      <Image
                        src={icons.github}
                        alt="GitHub"
                        width={18}
                        height={18}
                        className="object-contain dark:invert"
                      />
                      {t(repo.labelKey)}
                    </a>
                  ))}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-yellow-400 via-red-500 to-purple-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:opacity-90"
                    >
                      <LinkIcon className="size-4.5" />
                      {t("common.demo")}
                    </a>
                  )}
                </div>
              </InteractiveCard>
            );
          })}
        </div>
      </section>

      <section className="mb-16">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <h2 className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
            {t("projectsPage.allProjects")}
          </h2>

          <div className="flex flex-wrap gap-1.5 self-start rounded-xl border border-elevated-border bg-elevated p-1 backdrop-blur-sm sm:self-auto">
            {projectCategories.map((category) => {
              const isSelected = activeFilter === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveFilter(category.id)}
                  className={cn(
                    "relative rounded-lg px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors duration-300",
                    isSelected
                      ? "text-white"
                      : "text-secondary-text hover:text-foreground",
                  )}
                >
                  {isSelected && (
                    <motion.span
                      layoutId="active-filter-pill"
                      className="absolute inset-0 rounded-lg bg-linear-to-r from-yellow-400 via-red-500 to-purple-600 shadow-md"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{t(category.labelKey)}</span>
                </button>
              );
            })}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const title = t(project.titleKey);
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={
                    reduceMotion ? false : { opacity: 0, y: 24, scale: 0.95 }
                  }
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={
                    reduceMotion
                      ? undefined
                      : { opacity: 0, scale: 0.95, y: 10 }
                  }
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                    delay: index * 0.02,
                  }}
                  className="group h-full"
                >
                  <div className="flex h-full flex-col justify-between overflow-hidden rounded-xl border border-elevated-border bg-elevated/30 transition-all duration-300 hover:-translate-y-1 hover:border-primary-accent/30 hover:bg-elevated-hover hover:shadow-lg">
                    <div>
                      <ProjectVisual project={project} title={title} />
                      <div className="p-5">
                        <h3 className="mb-2 font-bold tracking-tight text-foreground transition-colors group-hover:text-primary-accent">
                          {title}
                        </h3>
                        <p className="mb-4 line-clamp-3 text-xs leading-relaxed text-secondary-text">
                          {t(project.descKey)}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="inline-flex items-center gap-1 rounded border border-elevated-border bg-elevated px-2 py-0.5 text-[11px] text-secondary-text"
                            >
                              <TechIcon name={tech} size={12} />
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="rounded border border-elevated-border/50 bg-elevated-hover/50 px-1.5 py-0.5 text-[11px] font-bold text-secondary-text">
                              +{project.technologies.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-t border-elevated-border bg-elevated-hover px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        {project.github.map((repo) => (
                          <a
                            key={repo.url}
                            href={repo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-secondary-text transition-colors hover:text-foreground"
                            title={t(repo.labelKey)}
                          >
                            <Image
                              src={icons.github}
                              alt="GitHub"
                              width={20}
                              height={20}
                              className="object-contain dark:invert"
                            />
                          </a>
                        ))}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-secondary-text transition-colors hover:text-primary-accent"
                          >
                            <LinkIcon className="size-5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </section>

      <SectionCard className="relative overflow-hidden border border-elevated-border bg-elevated py-10 text-center shadow-xl">
        <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-primary-accent/10 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-primary-accent/10 blur-3xl" />

        <h2 className="relative z-10 mb-3 text-2xl font-black tracking-tight text-foreground md:text-3xl">
          {t("projectsPage.cta")}
        </h2>
        <p className="relative z-10 mx-auto mb-8 max-w-xl text-sm leading-relaxed text-secondary-text">
          {t("projectsPage.ctaDesc")}
        </p>
        <Button
          asChild
          className="relative z-10 bg-linear-to-r from-yellow-400 via-red-500 to-purple-600 font-bold shadow-lg transition-all hover:scale-105 hover:opacity-90"
        >
          <Link href="/contact" className="gap-2">
            <Send className="size-4" />
            {t("common.contact")}
          </Link>
        </Button>
      </SectionCard>
    </div>
  );
}
