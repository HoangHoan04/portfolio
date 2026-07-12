"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

export function LanguageToggle({ expanded }: { expanded?: boolean }) {
  const [locale, setLocale] = useState("en");

  function toggle() {
    setLocale((prev) => (prev === "en" ? "vi" : "en"));
  }

  return (
    <button
      onClick={toggle}
      className={cn(
        "flex w-full shrink-0 items-center rounded-lg py-3 text-base text-sidebar-text transition-colors duration-200 hover:text-sidebar-hover-text hover:bg-sidebar-hover-bg",
        expanded ? "gap-4 px-3" : "justify-center px-0",
      )}
      title={`Switch to ${locale === "en" ? "Vietnamese" : "English"}`}
    >
      <Image
        src={`/icons/${locale}.svg`}
        alt={locale}
        width={24}
        height={24}
        className="size-6 shrink-0 rounded-sm object-cover"
      />
      {expanded && <span className="truncate">{locale.toUpperCase()}</span>}
    </button>
  );
}
