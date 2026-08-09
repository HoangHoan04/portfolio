const prefix = process.env.NEXT_PUBLIC_EXPORT === "true" ? "/portfolio" : "";

export const icons = {
  angular: `${prefix}/icons/angular.svg`,
  asp: `${prefix}/icons/asp.svg`,
  aws: `${prefix}/icons/aws.svg`,
  coded: `${prefix}/icons/coded.svg`,
  computer: `${prefix}/icons/computer.svg`,
  docker: `${prefix}/icons/docker.svg`,
  en: `${prefix}/icons/en.svg`,
  facebook: `${prefix}/icons/facebook.svg`,
  figma: `${prefix}/icons/figma.svg`,
  gcp: `${prefix}/icons/gcp.svg`,
  github: `${prefix}/icons/github.svg`,
  gmail: `${prefix}/icons/gmail.svg`,
  intellij: `${prefix}/icons/intellij.svg`,
  javascript: `${prefix}/icons/javascript.svg`,
  linkedin: `${prefix}/icons/linkedin.svg`,
  mongo: `${prefix}/icons/mongo.svg`,
  mysql: `${prefix}/icons/mysql.svg`,
  nestjs: `${prefix}/icons/nestjs.svg`,
  networking: `${prefix}/icons/networking.svg`,
  nextJs: `${prefix}/icons/next-js.svg`,
  nextjs: `${prefix}/icons/nextjs.svg`,
  nodejs: `${prefix}/icons/nodejs.svg`,
  php: `${prefix}/icons/php.svg`,
  postgresql: `${prefix}/icons/postgresql.svg`,
  python: `${prefix}/icons/python.svg`,
  react: `${prefix}/icons/react.svg`,
  setting: `${prefix}/icons/setting.svg`,
  tailwind: `${prefix}/icons/tailwind.svg`,
  tiktok: `${prefix}/icons/tiktok.svg`,
  twitter: `${prefix}/icons/twitter.svg`,
  typescript: `${prefix}/icons/typescript.svg`,
  vi: `${prefix}/icons/vi.svg`,
  visualstudio: `${prefix}/icons/visualstudio.svg`,
  vscode: `${prefix}/icons/vscode.svg`,
  vue: `${prefix}/icons/vue.svg`,
  cursor: `${prefix}/icons/cursor.svg`,
  antigravity: `${prefix}/icons/Antigravity.png`,
  androidStudio: `${prefix}/icons/Android_Studio.svg`,
  html: `${prefix}/icons/html-5.svg`,
} as const;

export type IconKey = keyof typeof icons;

const TECH_ICON_MAP: Record<string, IconKey> = {
  React: "react",
  "React Native": "react",
  Angular: "angular",
  Vue: "vue",
  "Next.js": "nextJs",
  NextJS: "nextjs",
  "Next.JS": "nextJs",
  TypeScript: "typescript",
  JavaScript: "javascript",
  "Tailwind CSS": "tailwind",
  Tailwind: "tailwind",
  NestJS: "nestjs",
  "ASP.NET Core": "asp",
  "ASP.NET": "asp",
  ".NET": "asp",
  PHP: "php",
  MySQL: "mysql",
  PostgreSQL: "postgresql",
  Supabase: "postgresql",
  MongoDB: "mongo",
  Docker: "docker",
  "Node.js": "nodejs",
  NodeJS: "nodejs",
  Python: "python",
  AWS: "aws",
  GCP: "gcp",
  Figma: "figma",
  Git: "github",
  "Git / GitHub": "github",
  GitHub: "github",
  Cursor: "cursor",
  Antigravity: "antigravity",
  "Android Studio": "androidStudio",
  HTML: "html",
  "HTML/CSS": "html",
  CSS: "html",
  HTML5: "html",
};

export function getTechIcon(tech: string): string | undefined {
  const key = TECH_ICON_MAP[tech];
  return key ? icons[key] : undefined;
}

export function getProjectIcon(technologies: string[]): string {
  for (const tech of technologies) {
    const icon = getTechIcon(tech);
    if (icon) return icon;
  }
  return icons.computer;
}
