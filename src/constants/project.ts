import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "HimLamTourist Booking",
    description:
      "Full-stack tour booking platform with customer, admin, and API modules.",
    type: "Full-Stack",
    thumbnail: "https://picsum.photos/seed/himlam-tour/600/600",
    link_github: ["https://github.com/HoangHoan04/bookingtour-customer"],
    link_demo: "https://himlamtourist.xyz/",
    stack: ["React", "TypeScript", "NestJS", "PostgreSQL"],
  },
  {
    id: "2",
    title: "Wedding Invitation",
    description:
      "Full-stack wedding invitation web app with countdown and RSVP.",
    type: "Full-Stack",
    thumbnail: "https://picsum.photos/seed/wedding-invite/600/600",
    link_github: ["https://github.com/HoangHoan04/wedding-invitation-customer"],
    link_demo: "",
    stack: ["React", "TypeScript", "NestJS", "Tailwind CSS"],
  },
  {
    id: "3",
    title: "Apple Store",
    description:
      "E-commerce web app simulating Apple Store with PHP and MySQL.",
    type: "Full-Stack",
    thumbnail: "https://picsum.photos/seed/apple-store/600/600",
    link_github: ["https://github.com/HoangHoan04/AppleStore"],
    link_demo: "",
    stack: ["PHP", "MySQL"],
  },
  {
    id: "4",
    title: "Portfolio Next.js",
    description: "Instagram-style developer portfolio built with Next.js 16.",
    type: "Frontend",
    thumbnail: "https://picsum.photos/seed/portfolio-next/600/600",
    link_github: ["https://github.com/HoangHoan04"],
    link_demo: "",
    stack: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    id: "5",
    title: "NestJS API",
    description: "RESTful API with authentication and PostgreSQL integration.",
    type: "Backend",
    thumbnail: "https://picsum.photos/seed/nestjs-api/600/600",
    link_github: ["https://github.com/HoangHoan04/bookingtour-api"],
    link_demo: "",
    stack: ["NestJS", "TypeScript", "PostgreSQL"],
  },
  {
    id: "6",
    title: "Angular Dashboard",
    description: "Admin dashboard with charts and role-based access control.",
    type: "Frontend",
    thumbnail: "https://picsum.photos/seed/angular-dash/600/600",
    link_github: ["https://github.com/HoangHoan04/bookingtour-admin"],
    link_demo: "",
    stack: ["Angular", "TypeScript", "RxJS"],
  },
];
