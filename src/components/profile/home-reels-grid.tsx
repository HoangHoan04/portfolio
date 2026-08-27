"use client";

import { Code } from "lucide-react";
import NextImage from "next/image";
import Link from "next/link";

import { SKILL_ICON_MAP, technicalGroups } from "@/constants/skills-data";
import { useTranslation } from "@/contexts/locale-context";
import { cn } from "@/lib/utils";

const gradients = [
  "from-blue-500/25 to-cyan-500/25",
  "from-violet-500/25 to-purple-500/25",
  "from-emerald-500/25 to-teal-500/25",
  "from-rose-500/25 to-pink-500/25",
  "from-amber-500/25 to-orange-500/25",
  "from-zinc-500/25 to-neutral-500/25",
];

function HomeReelsGrid() {
  const { t } = useTranslation();

  const uniqueSkills = Array.from(
    new Map(
      technicalGroups
        .flatMap((g) => g.skills)
        .filter((s) => s.name)
        .map((s) => [s.name, s]),
    ).values(),
  );

  return (
    <div className="py-3">
      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        {uniqueSkills.map((skill, index) => {
          const iconSrc = SKILL_ICON_MAP[skill.icon];
          const gradient = gradients[index % gradients.length];
          const name = skill.name ?? "";

          return (
            <Link
              key={name}
              href="/skills"
              className="group relative aspect-square w-full overflow-hidden rounded-xl border border-elevated-border bg-elevated/40 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-accent/40 hover:shadow-lg"
            >
              <div
                className={cn(
                  "absolute inset-0 bg-linear-to-br transition-transform duration-500 group-hover:scale-105",
                  gradient,
                )}
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[15px_15px]" />
              <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/50 to-black/30" />

              <div className="relative z-10 flex size-full flex-col items-center justify-between p-2.5 sm:p-3.5 text-center">
                <div className="flex size-9 sm:size-11 items-center justify-center rounded-xl border border-white/15 bg-black/40 backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
                  {iconSrc ? (
                    <NextImage
                      src={iconSrc}
                      alt={name}
                      width={28}
                      height={28}
                      className="size-5 sm:size-6 object-contain filter brightness-110"
                    />
                  ) : (
                    <Code className="size-5 sm:size-6 text-primary-accent" />
                  )}
                </div>

                <div className="flex w-full flex-col items-center gap-1">
                  <span className="line-clamp-1 text-xs sm:text-sm font-bold text-white transition-colors duration-200 group-hover:text-primary-accent">
                    {name}
                  </span>
                  {skill.tags && skill.tags.length > 0 && (
                    <div className="flex flex-wrap justify-center gap-1">
                      {skill.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="rounded border border-white/10 bg-black/50 px-1.5 py-0.5 text-[8px] sm:text-[9px] font-medium text-white/80 backdrop-blur-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="mt-4 border-t border-elevated-border py-4 text-center">
        <Link
          href="/skills"
          className="text-xs sm:text-sm font-semibold text-primary-accent hover:opacity-80"
        >
          {t("nav.skills")} →
        </Link>
      </div>
    </div>
  );
}

export { HomeReelsGrid };
