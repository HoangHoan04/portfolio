"use client";

import { useTheme } from "@/components/providers/ThemeProvider";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const label =
    theme === "dark" ? "Giao diện sáng (Light)" : "Giao diện tối (Dark)";

  if (!mounted) {
    return (
      <div className="flex size-11 items-center justify-center rounded-xl text-sidebar-text">
        <div className="size-5 shrink-0" />
      </div>
    );
  }

  return (
    <div className="relative group w-full flex justify-center">
      <button
        onClick={toggleTheme}
        className="flex size-11 items-center justify-center rounded-xl text-sidebar-text transition-all duration-200 hover:bg-sidebar-hover-bg hover:text-sidebar-hover-text hover:scale-105 active:scale-95 cursor-pointer"
        aria-label={label}
      >
        {theme === "dark" ? (
          <Sun className="size-5 shrink-0 text-amber-400" />
        ) : (
          <Moon className="size-5 shrink-0 text-indigo-500" />
        )}
      </button>

      <div className="pointer-events-none absolute left-full top-1/2 ml-3 -translate-y-1/2 rounded-lg border border-white/10 bg-zinc-900/95 dark:bg-zinc-800/95 px-2.5 py-1 text-xs font-semibold text-white shadow-xl backdrop-blur-md opacity-0 -translate-x-1.5 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 z-50 whitespace-nowrap">
        {theme === "dark" ? "Chuyển giao diện sáng" : "Chuyển giao diện tối"}
        <div className="absolute -left-1 top-1/2 -translate-y-1/2 border-4 border-transparent border-r-zinc-900/95 dark:border-r-zinc-800/95" />
      </div>
    </div>
  );
}
