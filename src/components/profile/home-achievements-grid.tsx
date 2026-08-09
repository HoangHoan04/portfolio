"use client";

import { Trophy } from "@phosphor-icons/react";
import Link from "next/link";

import { achievements } from "@/constants/achievements";
import { useTranslation } from "@/contexts/locale-context";
import { cn } from "@/lib/utils";

function HomeAchievementsGrid() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="grid grid-cols-3 gap-1 md:gap-1">
        {achievements.map((item) => (
          <Link
            key={item.id}
            href="/experience"
            className="group relative aspect-square overflow-hidden rounded-xl border border-elevated-border bg-elevated/40 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-accent/30 hover:shadow-md"
          >
            <div
              className={cn(
                "relative flex size-full items-center justify-center overflow-hidden bg-linear-to-br",
                item.gradient,
              )}
            >
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[15px_15px]" />

              <div className="relative z-10 flex size-14 items-center justify-center rounded-2xl border border-white/10 bg-black/20 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:opacity-0">
                <Trophy className="size-7 text-white/90" weight="duotone" />
              </div>
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 bg-black/0 p-3 text-center opacity-0 transition-all duration-300 group-hover:bg-black/80 group-hover:opacity-100">
              <p className="line-clamp-2 text-[11px] font-bold leading-tight text-white transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                {t(item.titleKey)}
              </p>
              <p className="line-clamp-2 text-[10px] text-white/60 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 delay-75">
                {t(item.descKey)}
              </p>
              <span className="mt-1 rounded-full bg-white/10 px-2 py-0.5 text-[9px] text-white/80 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 delay-100">
                {item.year}
              </span>
            </div>
          </Link>
        ))}
      </div>
      <div className="border-t border-elevated-border py-4 text-center">
        <Link
          href="/experience"
          className="text-sm font-semibold text-primary-accent hover:opacity-80"
        >
          {t("home.achievements.viewAll")}
        </Link>
      </div>
    </div>
  );
}

export { HomeAchievementsGrid };
