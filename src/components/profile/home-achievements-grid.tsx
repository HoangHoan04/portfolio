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
      <div className="grid grid-cols-2 gap-1 md:grid-cols-3 md:gap-1">
        {achievements.map((item) => (
          <Link
            key={item.id}
            href="/experience"
            className="group relative aspect-square overflow-hidden bg-[#1a1a1a]"
          >
            <div
              className={cn(
                "absolute inset-0 bg-gradient-to-br transition-transform duration-300 group-hover:scale-105",
                item.gradient,
              )}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-3 text-center">
              <Trophy
                className="mb-2 size-7 text-white/90"
                weight="duotone"
              />
              <p className="line-clamp-2 text-[11px] font-bold leading-tight text-white opacity-0 transition-opacity group-hover:opacity-100">
                {t(item.titleKey)}
              </p>
              <span className="mt-1 rounded-full bg-black/40 px-2 py-0.5 text-[9px] text-white/80">
                {item.year}
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2 md:hidden">
              <p className="line-clamp-1 text-[10px] font-semibold">{t(item.titleKey)}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="border-t border-[#262626] py-4 text-center">
        <Link
          href="/experience"
          className="text-sm font-semibold text-[#0095f6] hover:text-[#1877f2]"
        >
          {t("home.achievements.viewAll")}
        </Link>
      </div>
    </div>
  );
}

export { HomeAchievementsGrid };
