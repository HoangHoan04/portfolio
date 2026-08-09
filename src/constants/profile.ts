import type { Profile } from "@/types";

const prefix = process.env.NEXT_PUBLIC_EXPORT === "true" ? "/portfolio" : "";

export const profile: Profile = {
  username: "HoangHoan",
  fullName: "Hoang Dinh Hoan",
  avatar: `${prefix}/images/avatar.jpg`,
  jobTitle: "Software Engineer",
  bio: "Hello! I'm a Web Developer with a strong passion for building modern user interfaces and optimizing user experience. I'm currently a Software Engineering student at Saigon University, working as a Web Developer at APETECH Solutions. I'm actively learning and improving my skills through personal and group projects.",
  github: "https://github.com/HoangHoan04",
  email: "hoanghoanpineapple04@gmail.com",
  linkedin: "https://www.linkedin.com/in/hoangdinhhoan",
  instagram: "https://www.instagram.com/hoangdinhhoan",
  project: 0,
  visitors: 0,
  githubViewers: 0,
  experience: "1+",
};

export const Z_INDEX = {
  sidebar: 40,
  bottomNav: 50,
  modal: 60,
  backToTop: 30,
};
