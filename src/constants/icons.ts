export const icons = {
  angular: "/icons/angular.svg",
  asp: "/icons/asp.svg",
  aws: "/icons/aws.svg",
  coded: "/icons/coded.svg",
  computer: "/icons/computer.svg",
  docker: "/icons/docker.svg",
  en: "/icons/en.svg",
  facebook: "/icons/facebook.svg",
  figma: "/icons/figma.svg",
  gcp: "/icons/gcp.svg",
  github: "/icons/github.svg",
  gmail: "/icons/gmail.svg",
  intellij: "/icons/intellij.svg",
  javascript: "/icons/javascript.svg",
  linkedin: "/icons/linkedin.svg",
  mongo: "/icons/mongo.svg",
  mysql: "/icons/mysql.svg",
  nestjs: "/icons/nestjs.svg",
  networking: "/icons/networking.svg",
  nextJs: "/icons/next-js.svg",
  nextjs: "/icons/nextjs.svg",
  nodejs: "/icons/nodejs.svg",
  php: "/icons/php.svg",
  postgresql: "/icons/postgresql.svg",
  python: "/icons/python.svg",
  react: "/icons/react.svg",
  setting: "/icons/setting.svg",
  tailwind: "/icons/tailwind.svg",
  tiktok: "/icons/tiktok.svg",
  twitter: "/icons/twitter.svg",
  typescript: "/icons/typescript.svg",
  vi: "/icons/vi.svg",
  visualstudio: "/icons/visualstudio.svg",
  vscode: "/icons/vscode.svg",
  vue: "/icons/vue.svg",
  cursor: "/icons/cursor.svg",
  antigravity: "/icons/Antigravity.png",
  androidStudio: "/icons/Android_Studio.svg",
  html: "/icons/html-5.svg",
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
