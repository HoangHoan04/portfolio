"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ExternalLink,
  FolderGit2,
  GitFork,
  Search,
  Star,
  Code2,
  Calendar,
  X,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import Image from "next/image";
import { icons } from "@/constants/icons";
import { useTranslation } from "@/contexts/locale-context";
import { cn } from "@/lib/utils";
import type { GitHubRepo } from "@/types";

const LANGUAGE_THEMES: Record<
  string,
  { dot: string; glow: string; border: string; text: string; badge: string }
> = {
  TypeScript: {
    dot: "bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.6)]",
    glow: "from-blue-500/15 via-blue-500/5 to-transparent",
    border: "hover:border-blue-500/50 hover:shadow-blue-500/10",
    text: "text-blue-400",
    badge: "border-blue-500/20 bg-blue-500/10 text-blue-300",
  },
  JavaScript: {
    dot: "bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.6)]",
    glow: "from-yellow-500/15 via-yellow-500/5 to-transparent",
    border: "hover:border-yellow-500/50 hover:shadow-yellow-500/10",
    text: "text-yellow-400",
    badge: "border-yellow-500/20 bg-yellow-500/10 text-yellow-300",
  },
  "C#": {
    dot: "bg-purple-400 shadow-[0_0_8px_rgba(192,132,252,0.6)]",
    glow: "from-purple-500/15 via-purple-500/5 to-transparent",
    border: "hover:border-purple-500/50 hover:shadow-purple-500/10",
    text: "text-purple-400",
    badge: "border-purple-500/20 bg-purple-500/10 text-purple-300",
  },
  Vue: {
    dot: "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]",
    glow: "from-emerald-500/15 via-emerald-500/5 to-transparent",
    border: "hover:border-emerald-500/50 hover:shadow-emerald-500/10",
    text: "text-emerald-400",
    badge: "border-emerald-500/20 bg-emerald-500/10 text-emerald-300",
  },
  Python: {
    dot: "bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.6)]",
    glow: "from-sky-500/15 via-sky-500/5 to-transparent",
    border: "hover:border-sky-500/50 hover:shadow-sky-500/10",
    text: "text-sky-400",
    badge: "border-sky-500/20 bg-sky-500/10 text-sky-300",
  },
  PHP: {
    dot: "bg-indigo-400 shadow-[0_0_8px_rgba(129,140,248,0.6)]",
    glow: "from-indigo-500/15 via-indigo-500/5 to-transparent",
    border: "hover:border-indigo-500/50 hover:shadow-indigo-500/10",
    text: "text-indigo-400",
    badge: "border-indigo-500/20 bg-indigo-500/10 text-indigo-300",
  },
  HTML: {
    dot: "bg-orange-400 shadow-[0_0_8px_rgba(251,146,60,0.6)]",
    glow: "from-orange-500/15 via-orange-500/5 to-transparent",
    border: "hover:border-orange-500/50 hover:shadow-orange-500/10",
    text: "text-orange-400",
    badge: "border-orange-500/20 bg-orange-500/10 text-orange-300",
  },
  CSS: {
    dot: "bg-pink-400 shadow-[0_0_8px_rgba(244,114,182,0.6)]",
    glow: "from-pink-500/15 via-pink-500/5 to-transparent",
    border: "hover:border-pink-500/50 hover:shadow-pink-500/10",
    text: "text-pink-400",
    badge: "border-pink-500/20 bg-pink-500/10 text-pink-300",
  },
  Java: {
    dot: "bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)]",
    glow: "from-amber-500/15 via-amber-500/5 to-transparent",
    border: "hover:border-amber-500/50 hover:shadow-amber-500/10",
    text: "text-amber-400",
    badge: "border-amber-500/20 bg-amber-500/10 text-amber-300",
  },
};

const DEFAULT_THEME = {
  dot: "bg-primary-accent shadow-[0_0_8px_rgba(225,48,108,0.6)]",
  glow: "from-primary-accent/15 via-primary-accent/5 to-transparent",
  border: "hover:border-primary-accent/50 hover:shadow-primary-accent/10",
  text: "text-primary-accent",
  badge: "border-elevated-border bg-elevated text-secondary-text",
};

export function GitHubReposSection() {
  const { t, locale } = useTranslation();
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("all");
  const [displayCount, setDisplayCount] = useState<number>(12);

  useEffect(() => {
    const isProd = process.env.NODE_ENV === "production";
    const basePath = isProd ? "/portfolio" : "";

    fetch(`${basePath}/api/github-repos`)
      .then((res) => res.json())
      .then((data) => {
        if (data.repos && Array.isArray(data.repos)) {
          setRepos(data.repos);
        }
      })
      .catch((err) => {
        console.error("Failed to load GitHub repos:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const languages = useMemo(() => {
    const map = new Map<string, number>();
    repos.forEach((r) => {
      if (r.language) {
        map.set(r.language, (map.get(r.language) || 0) + 1);
      }
    });
    return Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
  }, [repos]);

  const filteredRepos = useMemo(() => {
    return repos.filter((repo) => {
      const matchesSearch =
        repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (repo.description &&
          repo.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (repo.language &&
          repo.language.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesLang =
        selectedLanguage === "all" || repo.language === selectedLanguage;

      return matchesSearch && matchesLang;
    });
  }, [repos, searchQuery, selectedLanguage]);

  const displayedRepos = useMemo(() => {
    return filteredRepos.slice(0, displayCount);
  }, [filteredRepos, displayCount]);

  const formatTimeAgo = (dateStr: string) => {
    try {
      const date = new Date(dateStr);
      const now = new Date();
      const diffMs = now.getTime() - date.getTime();
      const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

      if (locale === "vi") {
        if (diffDays === 0) return "Hôm nay";
        if (diffDays === 1) return "Hôm qua";
        if (diffDays < 30) return `${diffDays} ngày trước`;
        if (diffDays < 365) return `${Math.floor(diffDays / 30)} tháng trước`;
        return `${Math.floor(diffDays / 365)} năm trước`;
      } else {
        if (diffDays === 0) return "Today";
        if (diffDays === 1) return "Yesterday";
        if (diffDays < 30) return `${diffDays}d ago`;
        if (diffDays < 365) return `${Math.floor(diffDays / 30)}mo ago`;
        return `${Math.floor(diffDays / 365)}y ago`;
      }
    } catch {
      return dateStr.slice(0, 10);
    }
  };

  return (
    <section className="mb-20">
      <div className="mb-8 flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="relative flex size-12 items-center justify-center rounded-2xl border border-elevated-border bg-elevated/70 shadow-inner backdrop-blur-md">
              <FolderGit2 className="size-6 text-primary-accent" />
              <span className="absolute -top-1 -right-1 flex size-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full size-3 bg-emerald-500" />
              </span>
            </div>
            <div>
              <h2 className="text-xl font-black tracking-tight text-foreground md:text-2xl flex items-center gap-2.5">
                {t("projectsPage.githubRepos")}
                {!loading && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-primary-accent/15 text-primary-accent border border-primary-accent/30 shadow-xs">
                    {repos.length} repos
                  </span>
                )}
              </h2>
              <p className="text-xs sm:text-sm text-secondary-text mt-0.5">
                {t("projectsPage.githubReposSubtitle")}
              </p>
            </div>
          </div>

          <a
            href="https://github.com/HoangHoan04?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 self-start sm:self-auto rounded-xl border border-elevated-border bg-elevated/80 px-4 py-2.5 text-xs font-bold text-foreground transition-all hover:border-primary-accent/50 hover:bg-elevated hover:shadow-md shadow-xs cursor-pointer"
          >
            <Image
              src={icons.github}
              alt="GitHub"
              width={16}
              height={16}
              className="object-contain dark:invert transition-transform group-hover:scale-110"
            />
            {t("projectsPage.viewAllOnGithub")}
            <ArrowUpRight className="size-4 opacity-70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="mt-2 flex flex-col gap-3.5">
          <div className="relative w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-secondary-text transition-colors peer-focus:text-primary-accent" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setDisplayCount(12);
              }}
              placeholder={t("projectsPage.searchPlaceholder")}
              className="peer w-full rounded-2xl border border-elevated-border bg-elevated/60 py-3.5 pl-12 pr-12 text-sm sm:text-base text-foreground placeholder:text-secondary-text/60 focus:border-primary-accent focus:ring-2 focus:ring-primary-accent/20 focus:outline-none backdrop-blur-md transition-all shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setDisplayCount(12);
                }}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 rounded-full p-1.5 text-secondary-text hover:text-foreground hover:bg-elevated-hover transition-colors cursor-pointer"
                title="Clear search"
              >
                <X className="size-4" />
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => {
                setSelectedLanguage("all");
                setDisplayCount(12);
              }}
              className={cn(
                "rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-all cursor-pointer shadow-xs",
                selectedLanguage === "all"
                  ? "bg-foreground text-background shadow-md font-bold"
                  : "border border-elevated-border bg-elevated/50 text-secondary-text hover:text-foreground hover:bg-elevated",
              )}
            >
              {t("projectsPage.allLanguages")} ({repos.length})
            </button>

            {languages.map(([lang, count]) => {
              const theme = LANGUAGE_THEMES[lang] || DEFAULT_THEME;
              return (
                <button
                  key={lang}
                  onClick={() => {
                    setSelectedLanguage(lang);
                    setDisplayCount(12);
                  }}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-xl px-3 py-1.5 text-xs font-semibold transition-all cursor-pointer shadow-xs",
                    selectedLanguage === lang
                      ? "bg-foreground text-background shadow-md font-bold"
                      : "border border-elevated-border bg-elevated/50 text-secondary-text hover:text-foreground hover:bg-elevated",
                  )}
                >
                  <span className={cn("size-2.5 rounded-full", theme.dot)} />
                  {lang}{" "}
                  <span className="opacity-60 text-[11px]">({count})</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-56 rounded-2xl border border-elevated-border bg-elevated/20 animate-pulse p-5 flex flex-col justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-xl bg-elevated/60" />
                <div className="h-4 w-32 rounded bg-elevated/60" />
              </div>
              <div className="space-y-2">
                <div className="h-3 w-full rounded bg-elevated/40" />
                <div className="h-3 w-3/4 rounded bg-elevated/40" />
              </div>
              <div className="h-8 w-full rounded-xl bg-elevated/40" />
            </div>
          ))}
        </div>
      ) : filteredRepos.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-elevated-border bg-elevated/30 p-12 text-center">
          <Code2 className="mx-auto size-12 text-secondary-text/40 mb-3" />
          <p className="text-sm text-secondary-text font-medium">
            {t("projectsPage.noReposFound")}
          </p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {displayedRepos.map((repo) => {
              const theme =
                (repo.language && LANGUAGE_THEMES[repo.language]) ||
                DEFAULT_THEME;

              return (
                <div
                  key={repo.id}
                  className={cn(
                    "group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-elevated-border/80 bg-linear-to-b from-elevated/80 via-elevated/50 to-elevated/30 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl shadow-sm",
                    theme.border,
                  )}
                >
                  <div
                    className={cn(
                      "pointer-events-none absolute -top-12 -right-12 size-36 rounded-full bg-linear-to-br blur-2xl opacity-60 transition-opacity duration-500 group-hover:opacity-100",
                      theme.glow,
                    )}
                  />

                  <div
                    className={cn(
                      "absolute top-0 left-0 right-0 h-0.75 bg-linear-to-r opacity-40 transition-opacity duration-300 group-hover:opacity-100",
                      theme.glow,
                    )}
                  />

                  <div>
                    <div className="flex items-start justify-between gap-3 mb-3.5">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-black/40 shadow-inner backdrop-blur-md transition-transform duration-300 group-hover:scale-105">
                          <FolderGit2 className={cn("size-4.5", theme.text)} />
                        </div>
                        <div className="min-w-0">
                          <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold text-sm sm:text-base text-foreground tracking-tight line-clamp-1 transition-colors group-hover:text-primary-accent flex items-center gap-1"
                            title={repo.name}
                          >
                            {repo.name}
                          </a>
                          {repo.homepage && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                              <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              Live Preview
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0">
                        {repo.stars > 0 && (
                          <span className="inline-flex items-center gap-1 rounded-md border border-amber-500/20 bg-amber-500/10 px-1.5 py-0.5 text-[11px] font-bold text-amber-300 shadow-xs">
                            <Star className="size-3 fill-amber-400 text-amber-400" />
                            {repo.stars}
                          </span>
                        )}
                        {repo.forks > 0 && (
                          <span className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-1.5 py-0.5 text-[11px] font-semibold text-secondary-text shadow-xs">
                            <GitFork className="size-3" />
                            {repo.forks}
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="text-xs leading-relaxed text-secondary-text line-clamp-2 min-h-9 mb-4">
                      {repo.description ? (
                        repo.description
                      ) : (
                        <span className="italic text-secondary-text/50">
                          {repo.name} • GitHub open source repository
                        </span>
                      )}
                    </p>

                    {repo.topics && repo.topics.length > 0 && (
                      <div className="mb-4 flex flex-wrap gap-1">
                        {repo.topics.slice(0, 3).map((topic) => (
                          <span
                            key={topic}
                            className="rounded-md border border-white/5 bg-white/5 px-1.5 py-0.5 text-[10px] font-medium text-secondary-text/90 backdrop-blur-xs"
                          >
                            #{topic}
                          </span>
                        ))}
                        {repo.topics.length > 3 && (
                          <span className="rounded-md border border-white/5 bg-white/5 px-1 py-0.5 text-[10px] font-medium text-secondary-text/60">
                            +{repo.topics.length - 3}
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="mt-4 pt-3.5 border-t border-elevated-border/60 flex flex-col gap-3">
                    <div className="flex items-center justify-between text-xs">
                      {repo.language ? (
                        <span
                          className={cn(
                            "inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-0.5 text-[11px] font-semibold tracking-wide shadow-2xs",
                            theme.badge,
                          )}
                        >
                          <span
                            className={cn(
                              "size-1.5 rounded-full shrink-0",
                              theme.dot,
                            )}
                          />
                          {repo.language}
                        </span>
                      ) : (
                        <span className="text-[11px] text-secondary-text">
                          Source Code
                        </span>
                      )}

                      <span className="inline-flex items-center gap-1 text-[11px] text-secondary-text/80">
                        <Calendar className="size-3 shrink-0" />
                        {formatTimeAgo(repo.updated_at)}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-0.5">
                      {repo.homepage ? (
                        <>
                          <a
                            href={repo.homepage}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-linear-to-r from-emerald-500/20 to-teal-500/20 hover:from-emerald-500 hover:to-teal-500 border border-emerald-500/30 px-3 py-2 text-xs font-bold text-emerald-300 hover:text-white transition-all shadow-xs cursor-pointer"
                            title="Open Live Preview"
                          >
                            <ExternalLink className="size-3.5" />
                            <span>{t("projectsPage.liveDemo")}</span>
                          </a>

                          <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-elevated-border bg-elevated/80 hover:bg-elevated px-3 py-2 text-xs font-semibold text-foreground transition-all hover:border-foreground/40 shadow-xs cursor-pointer"
                            title="View Source on GitHub"
                          >
                            <Image
                              src={icons.github}
                              alt="GitHub"
                              width={13}
                              height={13}
                              className="dark:invert"
                            />
                            <span>{t("projectsPage.openGithub")}</span>
                          </a>
                        </>
                      ) : (
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="col-span-2 inline-flex items-center justify-center gap-1.5 rounded-xl border border-elevated-border bg-elevated/80 hover:bg-elevated px-3 py-2 text-xs font-semibold text-foreground transition-all hover:border-foreground/40 shadow-xs cursor-pointer"
                          title="View Source on GitHub"
                        >
                          <Image
                            src={icons.github}
                            alt="GitHub"
                            width={13}
                            height={13}
                            className="dark:invert"
                          />
                          <span>{t("projectsPage.openGithub")}</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredRepos.length > displayCount && (
            <div className="mt-12 text-center">
              <button
                onClick={() => setDisplayCount((prev) => prev + 12)}
                className="inline-flex items-center gap-2 rounded-2xl border border-elevated-border bg-elevated/80 px-8 py-3 text-xs font-bold text-foreground transition-all hover:border-primary-accent/50 hover:bg-elevated hover:shadow-lg hover:scale-105 cursor-pointer shadow-sm"
              >
                <Sparkles className="size-4 text-primary-accent" />
                {t("common.viewAll")} ({filteredRepos.length - displayCount}{" "}
                more)
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}
