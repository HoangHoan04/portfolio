"use client";

import { FolderCode } from "lucide-react";
import Link from "next/link";

import { LanguageToggle } from "@/components/ui/language-toggle";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function MobileHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex h-14 w-full items-center justify-between border-b border-elevated-border/80 bg-background/85 px-4 backdrop-blur-md md:hidden">
      <Link href="/" className="flex items-center gap-2">
        <div className="flex size-8 items-center justify-center rounded-lg bg-linear-to-tr from-yellow-400 via-red-500 to-purple-600 p-0.5">
          <div className="flex size-full items-center justify-center rounded-[6px] bg-background">
            <FolderCode className="size-4 text-foreground" />
          </div>
        </div>
        <span className="text-base font-bold tracking-tight bg-linear-to-r from-yellow-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
          Hoang Hoan
        </span>
      </Link>

      <div className="flex items-center gap-1.5">
        <ThemeToggle />
        <LanguageToggle />
      </div>
    </header>
  );
}
