import type { Profile } from "@/types";

const prefix = process.env.NEXT_PUBLIC_EXPORT === "true" ? "/portfolio" : "";

export const profile: Profile = {
  username: "HoangHoan",
  fullName: "Hoang Dinh Hoan",
  avatar: `${prefix}/images/avatar.jpg`,
  jobTitle: "Software Engineer",
  bio: "Hello! I'm a Full-Stack Developer with 1+ years of full-time experience at APETECH Solutions. I specialize in building scalable web and mobile applications, from enterprise management systems (HRM, Digital Signage CMS) to modern e-commerce platforms.",
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
