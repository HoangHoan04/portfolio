"use client";

import Image from "next/image";
import { useLocale } from "@/contexts/locale-context";
import { icons } from "@/constants/icons";

const LOCALES = {
  en: { label: "English", icon: icons.en },
  vi: { label: "Tiếng Việt", icon: icons.vi },
} as const;

export function LanguageToggle() {
  const { locale, toggleLocale } = useLocale();

  const current = LOCALES[locale];
  const next = locale === "en" ? LOCALES.vi : LOCALES.en;

  return (
    <div className="relative group w-full flex justify-center">
      <button
        onClick={toggleLocale}
        className="flex size-11 items-center justify-center rounded-xl text-sidebar-text transition-all duration-200 hover:bg-sidebar-hover-bg hover:text-sidebar-hover-text hover:scale-105 active:scale-95 cursor-pointer"
        aria-label={`Chuyển sang ${next.label}`}
      >
        <Image
          src={current.icon}
          alt={current.label}
          width={22}
          height={22}
          className="size-5.5 shrink-0 rounded-full object-cover ring-1 ring-black/10 shadow-xs"
        />
      </button>

      <div className="pointer-events-none absolute left-full top-1/2 ml-3 -translate-y-1/2 rounded-lg border border-white/10 bg-zinc-900/95 dark:bg-zinc-800/95 px-2.5 py-1 text-xs font-semibold text-white shadow-xl backdrop-blur-md opacity-0 -translate-x-1.5 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 z-50 whitespace-nowrap">
        {locale === "en" ? "Đổi sang Tiếng Việt" : "Switch to English"}
        <div className="absolute -left-1 top-1/2 -translate-y-1/2 border-4 border-transparent border-r-zinc-900/95 dark:border-r-zinc-800/95" />
      </div>
    </div>
  );
}
