"use client";

import {
  Compass,
  Film,
  Heart,
  Home,
  Mail,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Z_INDEX } from "@/constants/profile";
import { useTranslation } from "@/contexts/locale-context";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "home", labelKey: "nav.home", icon: Home, href: "/" },
  { id: "about", labelKey: "nav.about", icon: Compass, href: "/about" },
  { id: "projects", labelKey: "nav.projects", icon: Film, href: "/projects" },
  { id: "experience", labelKey: "nav.experience", icon: Heart, href: "/experience" },
  { id: "contact", labelKey: "nav.contact", icon: Mail, href: "/contact" },
];

function BottomNav() {
  const pathname = usePathname();
  const { t } = useTranslation();

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 flex h-16 w-full items-center justify-around border-t border-elevated-border/80 bg-background/90 px-2 backdrop-blur-xl md:hidden pb-[env(safe-area-inset-bottom)]"
      style={{ zIndex: Z_INDEX.bottomNav }}
    >
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
              "relative flex flex-col items-center justify-center py-1 px-3 transition-all duration-200",
              isActive
                ? "text-primary-accent font-semibold scale-105"
                : "text-secondary-text hover:text-foreground active:scale-95",
            )}
            aria-label={label}
          >
            <item.icon
              className="size-5.5 transition-transform"
              strokeWidth={isActive ? 2.5 : 1.75}
            />
            <span className="text-[10px] mt-1 tracking-tight leading-none font-medium truncate max-w-[58px]">
              {label}
            </span>

            {isActive && (
              <span className="absolute -bottom-1 size-1 rounded-full bg-primary-accent" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}

export { BottomNav };
