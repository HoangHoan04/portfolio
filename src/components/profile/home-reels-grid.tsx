"use client";

import { Code } from "lucide-react";
import NextImage from "next/image";
import Link from "next/link";

import { SKILL_ICON_MAP, technicalGroups } from "@/constants/skills-data";
import { useTranslation } from "@/contexts/locale-context";
import { cn } from "@/lib/utils";

const gradients = [
  "from-blue-500/20 to-cyan-500/20",
  "from-violet-500/20 to-purple-500/20",
  "from-emerald-500/20 to-teal-500/20",
  "from-rose-500/20 to-pink-500/20",
  "from-amber-500/20 to-orange-500/20",
  "from-zinc-500/20 to-neutral-500/20",
];

function HomeReelsGrid() {
  const { t } = useTranslation();

  // Deduplicate skills by name
  const uniqueSkills = Array.from(
    new Map(
      technicalGroups
        .flatMap((g) => g.skills)
        .filter((s) => s.name)
        .map((s) => [s.name, s])
    ).values()
  );

  return (
    <div>
      <div className="grid grid-cols-3 gap-1 md:gap-1">
        {uniqueSkills.map((skill, index) => {
          const iconSrc = SKILL_ICON_MAP[skill.icon];
          const gradient = gradients[index % gradients.length];
          const name = skill.name ?? "";

          return (
            <Link
              key={name}
              href="/skills"
              className="group relative aspect-square overflow-hidden rounded-xl border border-elevated-border bg-elevated/40 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-accent/30 hover:shadow-md"
            >
              {/* Gradient background with grid pattern */}
              <div className={cn("relative flex size-full items-center justify-center overflow-hidden bg-gradient-to-br", gradient)}>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[15px_15px]" />
                
                {/* Central Icon */}
                <div className="relative z-10 flex size-14 items-center justify-center rounded-2xl border border-white/10 bg-black/20 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:opacity-0">
                  {iconSrc ? (
                    <NextImage
                      src={iconSrc}
                      alt={name}
                      width={32}
                      height={32}
                      className="object-contain filter brightness-110"
                    />
                  ) : (
                    <Code className="size-6 text-primary-accent" />
                  )}
                </div>
              </div>

              {/* Hover overlay with detail info */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 bg-black/0 p-4 text-center opacity-0 transition-all duration-300 group-hover:bg-black/80 group-hover:opacity-100">
                <span className="text-sm font-bold text-white transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  {name}
                </span>
                {skill.tags && skill.tags.length > 0 && (
                  <div className="mt-1.5 flex flex-wrap justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                    {skill.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="rounded bg-white/10 px-1.5 py-0.5 text-[9px] font-semibold text-white/90 backdrop-blur-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          );
        })}
      </div>
      <div className="border-t border-elevated-border py-4 text-center">
        <Link
          href="/skills"
          className="text-sm font-semibold text-primary-accent hover:opacity-80"
        >
          {t("nav.skills")}
        </Link>
      </div>
    </div>
  );
}

export { HomeReelsGrid };
