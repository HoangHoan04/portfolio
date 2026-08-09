"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

import { useLocale } from "@/contexts/locale-context";
import { icons } from "@/constants/icons";

const LOCALES = {
  en: { label: "English", icon: icons.en },
  vi: { label: "Tiếng Việt", icon: icons.vi },
} as const;

export function LanguageToggle({ expanded }: { expanded?: boolean }) {
  const { locale, toggleLocale } = useLocale();

  const current = LOCALES[locale];
  const next = locale === "en" ? LOCALES.vi : LOCALES.en;

  return (
    <button
      onClick={toggleLocale}
      className={cn(
        "flex w-full shrink-0 items-center rounded-lg py-3 text-base font-medium text-sidebar-text transition-colors duration-200 hover:bg-sidebar-hover-bg hover:text-sidebar-hover-text",
        expanded ? "gap-3 px-3" : "justify-center px-0",
      )}
      title={`Switch to ${next.label}`}
    >
      <Image
        src={current.icon}
        alt={current.label}
        width={24}
        height={24}
        className="size-6 shrink-0 rounded-full object-cover ring-1 ring-black/5"
      />
      {expanded && <span className="truncate">{current.label}</span>}
    </button>
  );
}
