export type PortfolioProject = {
  id: string;
  titleKey: string;
  descKey: string;
  technologies: string[];
  category: "fullstack" | "frontend" | "backend";
  github: { labelKey: string; url: string }[];
  demo: string | null;
  featured: boolean;
  gradient: string;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "1",
    titleKey: "projectsPage.list.himlam.name",
    descKey: "projectsPage.list.himlam.desc",
    technologies: ["React", "TypeScript", "NestJS", "PostgreSQL", "Supabase"],
    category: "fullstack",
    github: [
      {
        labelKey: "common.customer",
        url: "https://github.com/HoangHoan04/bookingtour-customer",
      },
      {
        labelKey: "common.admin",
        url: "https://github.com/HoangHoan04/bookingtour-admin",
      },
      {
        labelKey: "common.api",
        url: "https://github.com/HoangHoan04/bookingtour-api",
      },
    ],
    demo: "https://himlamtourist.xyz/",
    featured: true,
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    id: "2",
    titleKey: "projectsPage.list.wedding.name",
    descKey: "projectsPage.list.wedding.desc",
    technologies: ["TypeScript", "React", "Tailwind CSS", "NestJS"],
    category: "fullstack",
    github: [
      {
        labelKey: "common.code",
        url: "https://github.com/HoangHoan04/wedding-invitation-customer",
      },
    ],
    demo: null,
    featured: true,
    gradient: "from-violet-500 to-purple-600",
  },
  {
    id: "3",
    titleKey: "projectsPage.list.apple.name",
    descKey: "projectsPage.list.apple.desc",
    technologies: ["PHP", "MySQL"],
    category: "fullstack",
    github: [
      {
        labelKey: "common.code",
        url: "https://github.com/HoangHoan04/AppleStore",
      },
    ],
    demo: null,
    featured: false,
    gradient: "from-zinc-500 to-zinc-700",
  },
];

export const projectCategories = [
  { id: "all", labelKey: "projectsPage.categories.all" },
  { id: "fullstack", labelKey: "projectsPage.categories.fullstack" },
  { id: "frontend", labelKey: "projectsPage.categories.frontend" },
  { id: "backend", labelKey: "projectsPage.categories.backend" },
] as const;
