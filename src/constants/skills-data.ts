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
    labelKey: "skills.groups.frontend",
    icon: "desktop",
    skills: [
      { name: "React", icon: "react", tags: ["Hooks", "Redux", "Context"] },
      { name: "Angular", icon: "angular", tags: ["RxJS", "NgModule"] },
      {
        name: "TypeScript",
        icon: "typescript",
        tags: ["Generics", "Decorators"],
      },
      {
        name: "JavaScript",
        icon: "javascript",
        tags: ["ES2024", "Async/Await"],
      },
      {
        name: "Tailwind CSS",
        icon: "tailwind",
        tags: ["Responsive", "Theme"],
      },
      {
        name: "HTML/CSS",
        icon: "code",
        tags: ["Flexbox", "Grid", "Animation"],
      },
    ],
  },
  {
    labelKey: "skills.groups.backend",
    icon: "server",
    skills: [
      {
        name: "NestJS",
        icon: "nestjs",
        tags: ["Guards", "Interceptors", "DI"],
      },
      { name: "TypeScript", icon: "typescript", tags: ["OOP", "Decorators"] },
      { name: "PHP", icon: "php", tags: ["MVC", "OOP"] },
      {
        name: "RESTful API",
        icon: "networking",
        tags: ["CRUD", "Auth", "JWT"],
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
        tags: ["Supabase", "Relations", "Indexing"],
      },
      {
        name: "MySQL",
        icon: "mysql",
        tags: ["Query Optimization", "Schema Design"],
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
        name: "Git / GitHub",
        icon: "github",
        tags: ["PRs", "GitFlow", "Branching"],
      },
      { name: "VS Code", icon: "vsCode", tags: ["Extensions", "Debugging"] },
      {
        name: "IntelliJ IDEA",
        icon: "intellij",
        tags: ["Refactoring", "Plugins"],
      },
      { name: "Visual Studio", icon: "vs", tags: [".NET", "Debugging"] },
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
        nameKey: "skills.tools.teamCollab",
        icon: "networking",
        tags: ["Git", "Code Review"],
      },
      {
        nameKey: "skills.tools.bugFixing",
        icon: "code",
        tags: ["Debugging", "Root Cause Analysis"],
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
  { labelKey: "skills.stats.tech", value: 10, suffix: "+", icon: "code" },
  { labelKey: "skills.stats.projects", value: 3, suffix: "+", icon: "box" },
  { labelKey: "skills.stats.experience", value: 12, suffix: "+", icon: "calendar" },
  { labelKey: "skills.stats.commits", value: 100, suffix: "+", icon: "github" },
];
