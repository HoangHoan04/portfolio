import { achievements } from "@/constants/achievements";
import { certificates } from "@/constants/certificates";
import { portfolioProjects } from "@/constants/projects-data";
import { projects } from "@/constants/project";
import { reels } from "@/constants/reels-data";
import {
  softSkills,
  technicalGroups,
  toolsGroups,
} from "@/constants/skills-data";

export type SearchResultType =
  | "page"
  | "project"
  | "skill"
  | "reel"
  | "certificate"
  | "achievement";

export type SearchItem = {
  id: string;
  type: SearchResultType;
  titleKey: string;
  descKey?: string;
  href: string;
  tags?: string[];
};

const pages: SearchItem[] = [
  { id: "page-about", type: "page", titleKey: "nav.about", href: "/about" },
  { id: "page-projects", type: "page", titleKey: "nav.projects", href: "/projects" },
  { id: "page-skills", type: "page", titleKey: "nav.skills", href: "/skills" },
  {
    id: "page-experience",
    type: "page",
    titleKey: "nav.experience",
    href: "/experience",
  },
  {
    id: "page-education",
    type: "page",
    titleKey: "nav.education",
    href: "/education",
  },
  { id: "page-contact", type: "page", titleKey: "nav.contact", href: "/contact" },
  { id: "page-reels", type: "page", titleKey: "reels.title", href: "/reels" },
];

export function buildSearchCatalog(): SearchItem[] {
  const projectItems: SearchItem[] = portfolioProjects.map((p) => ({
    id: `project-${p.id}`,
    type: "project",
    titleKey: p.titleKey,
    descKey: p.descKey,
    href: "/projects",
    tags: p.technologies,
  }));

  const gridProjects: SearchItem[] = projects.map((p) => ({
    id: `grid-${p.id}`,
    type: "project",
    titleKey: p.title,
    descKey: p.description,
    href: `/post/${p.id}`,
    tags: p.stack,
  }));

  const skillItems: SearchItem[] = [
    ...technicalGroups.flatMap((g) => g.skills),
    ...toolsGroups.flatMap((g) => g.skills),
  ].map((skill, index) => ({
    id: `skill-${index}-${skill.icon}`,
    type: "skill" as const,
    titleKey: skill.nameKey ?? skill.name ?? skill.icon,
    href: "/skills",
    tags: skill.tags,
  }));

  const softSkillItems: SearchItem[] = softSkills.map((s) => ({
    id: `soft-${s.nameKey}`,
    type: "skill",
    titleKey: s.nameKey,
    descKey: s.descKey,
    href: "/skills",
  }));

  const reelItems: SearchItem[] = reels.map((r) => ({
    id: `reel-${r.id}`,
    type: "reel",
    titleKey: r.titleKey,
    descKey: r.descKey,
    href: "/reels",
    tags: [r.tag],
  }));

  const certificateItems: SearchItem[] = certificates.map((c) => ({
    id: `cert-${c.id}`,
    type: "certificate",
    titleKey: c.titleKey,
    descKey: c.issuerKey,
    href: "/education",
  }));

  const achievementItems: SearchItem[] = achievements.map((a) => ({
    id: `ach-${a.id}`,
    type: "achievement",
    titleKey: a.titleKey,
    descKey: a.descKey,
    href: "/experience",
  }));

  return [
    ...pages,
    ...projectItems,
    ...gridProjects,
    ...skillItems,
    ...softSkillItems,
    ...reelItems,
    ...certificateItems,
    ...achievementItems,
  ];
}

export function filterSearchCatalog(
  catalog: SearchItem[],
  query: string,
  t: (key: string) => string,
): SearchItem[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  return catalog.filter((item) => {
    const title = item.titleKey.includes(".") ? t(item.titleKey) : item.titleKey;
    const desc = item.descKey
      ? item.descKey.includes(".")
        ? t(item.descKey)
        : item.descKey
      : "";
    const haystack = [title, desc, ...(item.tags ?? [])].join(" ").toLowerCase();
    return haystack.includes(q);
  });
}
