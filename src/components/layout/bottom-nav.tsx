"use client";

import { Clapperboard, Compass, Home, PlusSquare, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Z_INDEX } from "@/constants/profile";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", icon: Home, href: "/" },
  { label: "Explore", icon: Compass, href: "#" },
  { label: "Reels", icon: Clapperboard, href: "/reels" },
  { label: "Create", icon: PlusSquare, href: "#" },
  { label: "Profile", icon: User, href: "/" },
];

function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed bottom-0 left-0 z-50 flex h-16 w-full items-center justify-evenly border-t border-[#262626] bg-black md:hidden"
      style={{ zIndex: Z_INDEX.bottomNav }}
    >
      {navItems.map((item) => {
        const isActive =
          (item.href === "/" && pathname === "/") ||
          (item.href !== "/" && pathname.startsWith(item.href));

        return (
          <Link
            key={item.label}
            href={item.href}
            className={cn(
              "flex flex-col items-center justify-center px-4 py-2 transition-colors",
              isActive ? "text-white" : "text-[#737373]",
            )}
            aria-label={item.label}
          >
            <item.icon className="size-6" strokeWidth={isActive ? 2.5 : 1.5} />
          </Link>
        );
      })}
    </nav>
  );
}

export { BottomNav };
