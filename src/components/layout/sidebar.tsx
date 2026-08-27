"use client";

import {
  Compass,
  Film,
  FolderCode,
  GraduationCap,
  Heart,
  Home,
  Layers,
  User,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { LanguageToggle } from "@/components/ui/language-toggle";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useTranslation } from "@/contexts/locale-context";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "home", labelKey: "nav.home", icon: Home, href: "/" },
  { id: "about", labelKey: "nav.about", icon: Compass, href: "/about" },
  { id: "projects", labelKey: "nav.projects", icon: Film, href: "/projects" },
  { id: "skills", labelKey: "nav.skills", icon: Layers, href: "/skills" },
  {
    id: "experience",
    labelKey: "nav.experience",
    icon: Heart,
    href: "/experience",
  },
  {
    id: "education",
    labelKey: "nav.education",
    icon: GraduationCap,
    href: "/education",
  },
  { id: "contact", labelKey: "nav.contact", icon: User, href: "/contact" },
];

function Sidebar() {
  const pathname = usePathname();
  const { t } = useTranslation();

  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-18 flex-col items-center border-r border-elevated-border bg-sidebar py-5 md:flex">
      <div className="relative group mb-5 flex justify-center">
        <Link
          href="/"
          className="flex size-11 items-center justify-center rounded-xl transition-all duration-200 hover:bg-sidebar-hover-bg hover:scale-105 active:scale-95"
          aria-label="Home"
        >
          <FolderCode className="size-6 text-foreground" />
        </Link>
        <div className="pointer-events-none absolute left-full top-1/2 ml-3 -translate-y-1/2 rounded-lg border border-white/10 bg-zinc-900/95 dark:bg-zinc-800/95 px-2.5 py-1 text-xs font-semibold text-white shadow-xl backdrop-blur-md opacity-0 -translate-x-1.5 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 z-50 whitespace-nowrap">
          Hoang Hoan
          <div className="absolute -left-1 top-1/2 -translate-y-1/2 border-4 border-transparent border-r-zinc-900/95 dark:border-r-zinc-800/95" />
        </div>
      </div>

      <nav className="flex flex-1 flex-col items-center gap-2 w-full px-2">
        {navItems.map((item) => {
          const isActive =
            (item.href === "/" && pathname === "/") ||
            (item.href !== "/" && pathname.startsWith(item.href));
          const label = t(item.labelKey);

          return (
            <div
              key={item.id}
              className="relative group w-full flex justify-center"
            >
              <Link
                href={item.href}
                className={cn(
                  "flex size-11 items-center justify-center rounded-xl transition-all duration-200",
                  isActive
                    ? "bg-primary-accent/15 text-primary-accent shadow-xs"
                    : "text-sidebar-text hover:bg-sidebar-hover-bg hover:text-sidebar-hover-text hover:scale-105 active:scale-95",
                )}
                aria-label={label}
              >
                <item.icon
                  className="size-5 shrink-0"
                  strokeWidth={isActive ? 2.5 : 1.75}
                />
              </Link>

              <div className="pointer-events-none absolute left-full top-1/2 ml-3 -translate-y-1/2 rounded-lg border border-white/10 bg-zinc-900/95 dark:bg-zinc-800/95 px-2.5 py-1 text-xs font-semibold text-white shadow-xl backdrop-blur-md opacity-0 -translate-x-1.5 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 z-50 whitespace-nowrap">
                {label}
                <div className="absolute -left-1 top-1/2 -translate-y-1/2 border-4 border-transparent border-r-zinc-900/95 dark:border-r-zinc-800/95" />
              </div>
            </div>
          );
        })}
      </nav>

      <div className="mt-auto flex flex-col items-center gap-2 w-full px-2 pt-3 border-t border-elevated-border/60">
        <ThemeToggle />
        <LanguageToggle />
      </div>
    </aside>
  );
}

export { Sidebar };
