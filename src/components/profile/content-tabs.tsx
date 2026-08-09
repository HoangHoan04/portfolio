"use client";

import { Bookmark, Clapperboard, Grid3X3 } from "lucide-react";

import { cn } from "@/lib/utils";

import { ContentTab } from "@/constants/enum";

const tabs = [
  { label: ContentTab.PRODUCTS, icon: Grid3X3 },
  { label: ContentTab.SKILLS, icon: Clapperboard },
  { label: ContentTab.CERTIFICATES, icon: Bookmark },
  { label: ContentTab.ACHIEVEMENTS, icon: Bookmark },
];

function ContentTabs({
  activeTab,
  onTabChange,
}: {
  activeTab: ContentTab;
  onTabChange: (tab: ContentTab) => void;
}) {
  return (
    <div className="flex border-t border-elevated-border">
      {tabs.map((tab) => (
        <button
          key={tab.label}
          onClick={() => onTabChange(tab.label)}
          className={cn(
            "relative flex flex-1 items-center justify-center gap-1.5 py-4 text-xs font-semibold uppercase tracking-wider transition-colors duration-200",
            activeTab === tab.label ? "text-foreground" : "text-secondary-text",
          )}
        >
          <tab.icon className="size-4" />
          <span className="hidden md:inline">{tab.label}</span>
          {activeTab === tab.label && (
            <span className="absolute -top-px left-0 right-0 h-px bg-foreground" />
          )}
        </button>
      ))}
    </div>
  );
}

export { ContentTabs };
