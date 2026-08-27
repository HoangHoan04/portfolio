import type { Profile } from "@/types";

const prefix = process.env.NEXT_PUBLIC_EXPORT === "true" ? "/portfolio" : "";

export const profile: Profile = {
  username: "HoangHoan",
  fullName: "Hoang Dinh Hoan",
  avatar: `${prefix}/images/avatar.jpg`,
  jobTitle: "Software Engineer",
  bio: "Hello! I'm a Full-Stack Software Engineer with 2+ years of full-time experience at APETECH Solutions. I specialize in developing Enterprise ERP Systems (HRM, FnB, PMS) and actively building modern ERP solutions with scalable Web & Mobile architectures.",
  github: "https://github.com/HoangHoan04",
  email: "hoanghoanpineapple04@gmail.com",
  linkedin: "https://www.linkedin.com/in/hoangdinhhoan",
  instagram: "https://www.instagram.com/hoangdinhhoan",
  project: 18,
  visitors: 0,
  githubViewers: 649,
  experience: "2+",
};

export const Z_INDEX = {
  sidebar: 40,
  bottomNav: 50,
  modal: 60,
  backToTop: 30,
};
