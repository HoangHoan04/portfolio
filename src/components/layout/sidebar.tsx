"use client";

import {
  Compass,
  Film,
  FolderCode,
  GraduationCap,
  Heart,
  Home,
  Layers,
  PanelLeft,
  PanelLeftClose,
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
  { id: "experience", labelKey: "nav.experience", icon: Heart, href: "/experience" },
  { id: "education", labelKey: "nav.education", icon: GraduationCap, href: "/education" },
  { id: "contact", labelKey: "nav.contact", icon: User, href: "/contact" },
];

function Sidebar({
  expanded,
  pinned,
  onToggle,
  onHover,
}: {
  expanded: boolean;
  pinned: boolean;
  onToggle: () => void;
  onHover: (hovering: boolean) => void;
}) {
  const pathname = usePathname();
  const { t } = useTranslation();

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-40 hidden h-screen flex-col overflow-hidden border-none bg-sidebar transition-[width] duration-200 ease-out md:flex",
        expanded ? "w-60" : "w-18",
      )}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
    >
      <div className={cn("flex shrink-0 items-center pt-6 pb-4 px-6")}>
        <Link
          href="/"
          className={cn("flex shrink-0 items-center", expanded && "gap-2")}
        >
          <FolderCode className="size-6 shrink-0" />
          {expanded && (
            <span className="whitespace-nowrap text-xl font-semibold tracking-tight">
              Hoang Hoan
            </span>
          )}
        </Link>
      </div>

      <nav className="flex shrink-0 flex-col gap-1 px-2">
        {navItems.map((item) => {
          const isActive =
            (item.href === "/" && pathname === "/") ||
            (item.href !== "/" && pathname.startsWith(item.href));
          const label = t(item.labelKey);

          return (
            <Link
              key={item.id}
              href={item.href}
              className={cn(
                "flex shrink-0 items-center rounded-lg py-3 text-base transition-colors duration-200",
                expanded ? "gap-4 px-3" : "justify-center px-0",
                isActive
                  ? "font-semibold text-sidebar-active-text"
                  : "font-normal text-sidebar-text hover:text-sidebar-hover-text hover:bg-sidebar-hover-bg",
              )}
              title={!expanded ? label : undefined}
            >
              <item.icon
                className="size-6 shrink-0"
                strokeWidth={isActive ? 2.5 : 1.5}
              />
              {expanded && <span className="truncate">{label}</span>}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto shrink-0 px-2 pb-6 flex flex-col gap-1">
        <button
          onClick={onToggle}
          className={cn(
            "flex w-full shrink-0 items-center rounded-lg py-3 text-base text-sidebar-text transition-colors duration-200 hover:text-sidebar-hover-text hover:bg-sidebar-hover-bg cursor-pointer",
            expanded ? "gap-4 px-3" : "justify-center px-0",
          )}
          title={pinned ? t("common.unpinSidebar") : t("common.pinSidebar")}
        >
          {expanded ? (
            <>
              <PanelLeftClose className="size-6 shrink-0" />
              <span className="truncate">
                {pinned ? t("common.unpin") : t("common.pin")}
              </span>
            </>
          ) : (
            <PanelLeft className="size-6 shrink-0" />
          )}
        </button>
        <ThemeToggle expanded={expanded} />
        <LanguageToggle expanded={expanded} />
      </div>
    </aside>
  );
}

export { Sidebar };
