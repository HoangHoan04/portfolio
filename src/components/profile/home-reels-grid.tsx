"use client";

import { Play } from "@phosphor-icons/react";
import Link from "next/link";

import { reels } from "@/constants/reels-data";
import { useTranslation } from "@/contexts/locale-context";
import { cn } from "@/lib/utils";

function HomeReelsGrid() {
  const { t } = useTranslation();
  const preview = reels.slice(0, 6);

  return (
    <div>
      <div className="grid grid-cols-2 gap-1 sm:grid-cols-3 md:gap-1">
        {preview.map((reel) => (
          <Link
            key={reel.id}
            href="/reels"
            className="group relative aspect-[9/14] overflow-hidden bg-[#1a1a1a]"
          >
            <div
              className={cn(
                "absolute inset-0 bg-gradient-to-br transition-transform duration-300 group-hover:scale-105",
                reel.gradient,
              )}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute left-2 top-2 rounded bg-black/50 px-1.5 py-0.5 text-[10px] font-semibold">
              {reel.duration}
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
              <Play className="size-8 text-white" weight="fill" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-2">
              <span className="mb-0.5 inline-block rounded-full bg-[#0095f6]/90 px-1.5 py-0.5 text-[9px] font-bold">
                {reel.tag}
              </span>
              <p className="line-clamp-2 text-[10px] font-semibold leading-tight">
                {t(reel.titleKey)}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <div className="border-t border-[#262626] py-4 text-center">
        <Link
          href="/reels"
          className="text-sm font-semibold text-[#0095f6] hover:text-[#1877f2]"
        >
          {t("home.reels.viewAll")}
        </Link>
      </div>
    </div>
  );
}

export { HomeReelsGrid };
