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
    technologies: ["React", "TypeScript", "NestJS", "PostgreSQL"],
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
    demo: null,
    featured: true,
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    id: "2",
    titleKey: "projectsPage.list.wedding.name",
    descKey: "projectsPage.list.wedding.desc",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "NestJS"],
    category: "fullstack",
    github: [
      {
        labelKey: "common.customer",
        url: "https://github.com/HoangHoan04/wio-customer.git",
      },
      {
        labelKey: "common.admin",
        url: "https://github.com/HoangHoan04/wio-admin.git",
      },
      {
        labelKey: "common.api",
        url: "https://github.com/HoangHoan04/wio-api.git",
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
  {
    id: "4",
    titleKey: "projectsPage.list.adminDashboardAngular.name",
    descKey: "projectsPage.list.adminDashboardAngular.desc",
    technologies: ["Angular", "TypeScript", "Tailwind CSS", "RxJS"],
    category: "frontend",
    github: [
      {
        labelKey: "common.code",
        url: "https://github.com/HoangHoan04/admin-dashboard-angular.git",
      },
    ],
    demo: null,
    featured: false,
    gradient: "from-red-500 to-pink-500",
  },
  {
    id: "5",
    titleKey: "projectsPage.list.adminDashboardVue.name",
    descKey: "projectsPage.list.adminDashboardVue.desc",
    technologies: ["Vue", "TypeScript", "Tailwind CSS", "Pinia"],
    category: "frontend",
    github: [
      {
        labelKey: "common.code",
        url: "https://github.com/HoangHoan04/admin-dashboard-vue.git",
      },
    ],
    demo: null,
    featured: false,
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    id: "6",
    titleKey: "projectsPage.list.adminDashboardNext.name",
    descKey: "projectsPage.list.adminDashboardNext.desc",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    category: "frontend",
    github: [
      {
        labelKey: "common.code",
        url: "https://github.com/HoangHoan04/admin-dashboard-next.git",
      },
    ],
    demo: null,
    featured: false,
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    id: "7",
    titleKey: "projectsPage.list.adminDashboardReact.name",
    descKey: "projectsPage.list.adminDashboardReact.desc",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    category: "frontend",
    github: [
      {
        labelKey: "common.code",
        url: "https://github.com/HoangHoan04/admin-dashboard-react.git",
      },
    ],
    demo: null,
    featured: false,
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    id: "8",
    titleKey: "projectsPage.list.hrm.name",
    descKey: "projectsPage.list.hrm.desc",
    technologies: [
      "Angular",
      "React Native",
      "TypeScript",
      "ASP.NET Core",
      "PostgreSQL",
    ],
    category: "fullstack",
    github: [
      {
        labelKey: "common.mobile",
        url: "https://github.com/HoangHoan04/HrmMobile.git",
      },
      {
        labelKey: "common.admin",
        url: "https://github.com/HoangHoan04/HrmAdmin.git",
      },
      {
        labelKey: "common.api",
        url: "https://github.com/HoangHoan04/HrmApi.git",
      },
    ],
    demo: null,
    featured: true,
    gradient: "from-sky-400 to-indigo-600",
  },
  {
    id: "9",
    titleKey: "projectsPage.list.cms.name",
    descKey: "projectsPage.list.cms.desc",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "NestJS",
      "PostgreSQL",
    ],
    category: "fullstack",
    github: [
      {
        labelKey: "common.admin",
        url: "https://github.com/HoangHoan04/cms-admin.git",
      },
      {
        labelKey: "common.player",
        url: "https://github.com/HoangHoan04/cms-player.git",
      },
      {
        labelKey: "common.api",
        url: "https://github.com/HoangHoan04/cms-api.git",
      },
    ],
    demo: null,
    featured: true,
    gradient: "from-amber-500 via-orange-600 to-red-600",
  },
];

export const projectCategories = [
  { id: "all", labelKey: "projectsPage.categories.all" },
  { id: "fullstack", labelKey: "projectsPage.categories.fullstack" },
  { id: "frontend", labelKey: "projectsPage.categories.frontend" },
  { id: "backend", labelKey: "projectsPage.categories.backend" },
] as const;
