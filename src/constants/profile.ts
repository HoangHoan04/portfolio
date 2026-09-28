import type { Profile } from "@/types";

const prefix = process.env.NEXT_PUBLIC_EXPORT === "true" ? "/portfolio" : "";

export const profile: Profile = {
  username: "HoangHoan",
  fullName: "Hoang Dinh Hoan",
  avatar: `${prefix}/images/avatar.jpg`,
  jobTitle: "Full-Stack Developer",
  bio: "Full-Stack Developer with 1.5 years of production experience building enterprise web and SaaS systems for F&B retail and sports management, using React, Angular, NestJS, and PostgreSQL. Delivered core workflows for a 36-branch F&B chain and a large multi-cluster pickleball platform. Also building ASP.NET Core systems (HRM, multi-tenant SaaS) as self-directed projects. Comfortable working in Agile teams.",
  github: "https://github.com/HoangHoan04",
  email: "hoanghoan14204@gmail.com",
  linkedin: "https://www.linkedin.com/in/hoanghoan04/",
  instagram: "https://www.instagram.com/hoangdinhhoan",
  project: 0,
  visitors: 0,
  githubViewers: 0,
  experience: "1.5",
};

export const Z_INDEX = {
  sidebar: 40,
  bottomNav: 50,
  modal: 60,
  backToTop: 30,
};
