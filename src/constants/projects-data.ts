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
    id: "americano",
    titleKey: "projectsPage.list.americano.name",
    descKey: "projectsPage.list.americano.desc",
    technologies: ["React", "NestJS", "PostgreSQL"],
    category: "fullstack",
    github: [],
    demo: null,
    featured: true,
    gradient: "from-amber-500 via-orange-600 to-red-600",
  },
  {
    id: "djoy",
    titleKey: "projectsPage.list.djoy.name",
    descKey: "projectsPage.list.djoy.desc",
    technologies: ["React", "NestJS", "PostgreSQL"],
    category: "fullstack",
    github: [],
    demo: null,
    featured: true,
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    id: "pms",
    titleKey: "projectsPage.list.pms.name",
    descKey: "projectsPage.list.pms.desc",
    technologies: ["React", "Angular", "NestJS", "PostgreSQL"],
    category: "fullstack",
    github: [],
    demo: null,
    featured: true,
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    id: "smarthrm",
    titleKey: "projectsPage.list.hrm.name",
    descKey: "projectsPage.list.hrm.desc",
    technologies: [
      "ASP.NET Core",
      "Angular",
      "React Native",
      "PostgreSQL",
    ],
    category: "fullstack",
    github: [
      {
        labelKey: "common.api",
        url: "https://github.com/HoangHoan04/HrmApi.git",
      },
      {
        labelKey: "common.admin",
        url: "https://github.com/HoangHoan04/HrmAdmin.git",
      },
      {
        labelKey: "common.mobile",
        url: "https://github.com/HoangHoan04/HrmMobile.git",
      },
    ],
    demo: null,
    featured: true,
    gradient: "from-sky-400 to-indigo-600",
  },
  {
    id: "wio",
    titleKey: "projectsPage.list.wedding.name",
    descKey: "projectsPage.list.wedding.desc",
    technologies: ["Next.js", "NestJS", "PostgreSQL", "TypeScript"],
    category: "fullstack",
    github: [
      {
        labelKey: "common.api",
        url: "https://github.com/HoangHoan04/wio-api.git",
      },
      {
        labelKey: "common.admin",
        url: "https://github.com/HoangHoan04/wio-admin.git",
      },
      {
        labelKey: "common.customer",
        url: "https://github.com/HoangHoan04/wio-customer.git",
      },
    ],
    demo: null,
    featured: true,
    gradient: "from-violet-500 to-purple-600",
  },
];

export const projectCategories = [
  { id: "all", labelKey: "projectsPage.categories.all" },
  { id: "fullstack", labelKey: "projectsPage.categories.fullstack" },
  { id: "frontend", labelKey: "projectsPage.categories.frontend" },
  { id: "backend", labelKey: "projectsPage.categories.backend" },
] as const;
