"use client";

import { Bookmark, Clapperboard, Grid3X3 } from "lucide-react";

import { cn } from "@/lib/utils";

const tabs = [
  { label: "PRODUCTS", icon: Grid3X3 },
  { label: "SKILLS", icon: Clapperboard },
  { label: "CERTIFICATES", icon: Bookmark },
  { label: "ACHIEVEMENTS", icon: Bookmark },
];

function ContentTabs({
  activeTab,
  onTabChange,
}: {
  activeTab: string;
  onTabChange: (tab: string) => void;
}) {
  return (
    <div className="flex border-t border-[#262626]">
      {tabs.map((tab) => (
        <button
          key={tab.label}
          onClick={() => onTabChange(tab.label)}
          className={cn(
            "relative flex flex-1 items-center justify-center gap-1.5 py-4 text-xs font-semibold uppercase tracking-wider transition-colors duration-200",
            activeTab === tab.label ? "text-white" : "text-[#737373]",
          )}
        >
          <tab.icon className="size-4" />
          <span className="hidden md:inline">{tab.label}</span>
          {activeTab === tab.label && (
            <span className="absolute -top-px left-0 right-0 h-px bg-white" />
          )}
        </button>
      ))}
    </div>
  );
}

export { ContentTabs };
