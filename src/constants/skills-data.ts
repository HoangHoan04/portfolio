import { icons } from "@/constants/icons";

export const SKILL_ICON_MAP: Record<string, string> = {
  react: icons.react,
  typescript: icons.typescript,
  javascript: icons.javascript,
  tailwind: icons.tailwind,
  github: icons.github,
  mysql: icons.mysql,
  postgres: icons.postgresql,
  nestjs: icons.nestjs,
  php: icons.php,
  angular: icons.angular,
  code: icons.computer,
  setting: icons.setting,
  networking: icons.networking,
  vsCode: icons.vscode,
  vs: icons.visualstudio,
  intellij: icons.intellij,
  cursor: icons.cursor,
  antigravity: icons.antigravity,
  androidStudio: icons.androidStudio,
  html: icons.html,
  docker: icons.docker,
  nextjs: icons.nextJs,
};

export type SkillItem = {
  name?: string;
  nameKey?: string;
  icon: string;
  tags?: string[];
};

export type SkillGroup = {
  labelKey: string;
  icon: string;
  skills: SkillItem[];
};

export const technicalGroups: SkillGroup[] = [
  {
    labelKey: "skills.groups.languages",
    icon: "code",
    skills: [
      {
        name: "TypeScript",
        icon: "typescript",
        tags: ["Generics", "Types"],
      },
      {
        name: "JavaScript",
        icon: "javascript",
        tags: ["ES2024", "Async/Await"],
      },
      { name: "C#", icon: "vs", tags: ["ASP.NET Core", "OOP"] },
      { name: "SQL", icon: "postgres", tags: ["Queries", "Indexing"] },
      {
        name: "HTML5/CSS3",
        icon: "html",
        tags: ["Semantic", "Responsive"],
      },
    ],
  },
  {
    labelKey: "skills.groups.frameworks",
    icon: "desktop",
    skills: [
      { name: "NestJS", icon: "nestjs", tags: ["Guards", "WebSockets"] },
      { name: "React", icon: "react", tags: ["Hooks", "Components"] },
      { name: "Next.js", icon: "nextjs", tags: ["SSR", "App Router"] },
      { name: "Angular", icon: "angular", tags: ["Angular 19", "RxJS"] },
      {
        name: "React Native",
        icon: "react",
        tags: ["Mobile", "Geofencing"],
      },
      {
        name: "ASP.NET Core",
        icon: "vs",
        tags: [".NET 9", "Web API", "EF Core"],
      },
      {
        name: "Tailwind CSS",
        icon: "tailwind",
        tags: ["Responsive", "Theme"],
      },
    ],
  },
  {
    labelKey: "skills.groups.database",
    icon: "database",
    skills: [
      {
        name: "PostgreSQL",
        icon: "postgres",
        tags: ["Indexes", "Multi-tenant"],
      },
      {
        name: "MySQL",
        icon: "mysql",
        tags: ["Schema Design", "Queries"],
      },
      {
        name: "Supabase",
        icon: "postgres",
        tags: ["Postgres", "Auth"],
      },
      { name: "TypeORM", icon: "nestjs", tags: ["Entities", "Migrations"] },
      {
        name: "Entity Framework Core",
        icon: "vs",
        tags: ["LINQ", "Migrations"],
      },
    ],
  },
];

export const toolsGroups: SkillGroup[] = [
  {
    labelKey: "skills.groups.devTools",
    icon: "wrench",
    skills: [
      {
        name: "Git",
        icon: "github",
        tags: ["Branching", "Pull Requests"],
      },
      { name: "Docker", icon: "docker", tags: ["Containers", "Compose"] },
      { name: "Postman", icon: "networking", tags: ["API Testing", "Collections"] },
      {
        name: "RESTful APIs",
        icon: "networking",
        tags: ["CRUD", "Auth"],
      },
      {
        name: "WebSockets",
        icon: "networking",
        tags: ["Gateways", "Live Updates"],
      },
    ],
  },
  {
    labelKey: "skills.groups.workflow",
    icon: "refresh",
    skills: [
      {
        name: "Agile / Scrum",
        icon: "networking",
        tags: ["Sprint", "Stand-up", "Retro"],
      },
      {
        name: "Cursor",
        icon: "cursor",
        tags: ["Code Review", "Refactoring", "Debugging"],
      },
      {
        nameKey: "skills.tools.claude",
        icon: "cursor",
        tags: ["Code Review", "Refactoring", "Debugging"],
      },
    ],
  },
];

export type SoftSkill = {
  nameKey: string;
  descKey: string;
  icon: string;
};

export const softSkills: SoftSkill[] = [
  {
    nameKey: "skills.soft.teamwork",
    descKey: "skills.soft.teamworkDesc",
    icon: "users",
  },
  {
    nameKey: "skills.soft.comm",
    descKey: "skills.soft.commDesc",
    icon: "comments",
  },
  {
    nameKey: "skills.soft.problemSolving",
    descKey: "skills.soft.problemSolvingDesc",
    icon: "lightbulb",
  },
  {
    nameKey: "skills.soft.agile",
    descKey: "skills.soft.agileDesc",
    icon: "refresh",
  },
  {
    nameKey: "skills.soft.time",
    descKey: "skills.soft.timeDesc",
    icon: "clock",
  },
  {
    nameKey: "skills.soft.learning",
    descKey: "skills.soft.learningDesc",
    icon: "book",
  },
];

export const skillStats = [
  { labelKey: "skills.stats.tech", value: 25, suffix: "", icon: "code" },
  { labelKey: "skills.stats.projects", value: 5, suffix: "", icon: "box" },
  {
    labelKey: "skills.stats.experience",
    value: 18,
    suffix: "",
    icon: "calendar",
  },
  { labelKey: "skills.stats.commits", value: 100, suffix: "+", icon: "github" },
];
