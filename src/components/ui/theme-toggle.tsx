"use client";

import { useTheme } from "@/components/providers/ThemeProvider";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle({ expanded }: { expanded?: boolean }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "flex w-full shrink-0 items-center rounded-lg py-3 text-base text-sidebar-text transition-colors duration-200 hover:text-sidebar-hover-text hover:bg-sidebar-hover-bg",
        expanded ? "gap-4 px-3" : "justify-center px-0",
      )}
      title={theme === "dark" ? "Light mode" : "Dark mode"}
    >
      {theme === "dark" ? (
        <Sun className="size-6 shrink-0" />
      ) : (
        <Moon className="size-6 shrink-0" />
      )}
      {expanded && (
        <span className="truncate">
          {theme === "dark" ? "Light mode" : "Dark mode"}
        </span>
      )}
    </button>
  );
}
