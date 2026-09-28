"use client";

import { Code } from "lucide-react";
import NextImage from "next/image";
import Link from "next/link";

import { SKILL_ICON_MAP, technicalGroups } from "@/constants/skills-data";
import { useTranslation } from "@/contexts/locale-context";

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
    <div className="py-4">
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5">
        {uniqueSkills.map((skill) => {
          const iconSrc = SKILL_ICON_MAP[skill.icon];
          const name = skill.name ?? "";

          return (
            <Link
              key={name}
              href="/skills"
              className="group flex flex-col items-center gap-2.5 rounded-2xl border border-elevated-border bg-elevated/40 px-2 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-accent/40 hover:bg-elevated/70"
            >
              <div className="flex size-16 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-105 sm:size-[4.5rem]">
                {iconSrc ? (
                  <NextImage
                    src={iconSrc}
                    alt={name}
                    width={72}
                    height={72}
                    className="size-12 object-contain sm:size-14"
                  />
                ) : (
                  <Code className="size-8 text-primary-accent" />
                )}
              </div>
              <span className="line-clamp-2 min-h-8 w-full text-center text-xs font-semibold leading-tight text-foreground sm:text-sm">
                {name}
              </span>
            </Link>
          );
        })}
      </div>
      <div className="mt-4 border-t border-elevated-border py-4 text-center">
        <Link
          href="/skills"
          className="text-xs font-semibold text-primary-accent hover:opacity-80 sm:text-sm"
        >
          {t("nav.skills")} →
        </Link>
      </div>
    </div>
  );
}

export { HomeReelsGrid };
