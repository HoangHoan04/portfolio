import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "americano",
    title: "Americano — F&B Retail",
    description:
      "Purchase order, stock liquidation, item-locking, and audit logging workflows for a ~36-branch F&B chain. Built at APETECH with React and NestJS.",
    type: "Full-Stack",
    thumbnail: "https://picsum.photos/seed/americano-fnb/600/600",
    link_github: [],
    link_demo: "",
    stack: ["React", "NestJS", "PostgreSQL"],
  },
  {
    id: "djoy",
    title: "D-Joy Pickleball",
    description:
      "Court booking and tournament brackets for 3 large court clusters in Saigon, with reservation logic that prevents double-booking under peak-hour traffic.",
    type: "Full-Stack",
    thumbnail: "https://picsum.photos/seed/djoy-pickleball/600/600",
    link_github: [],
    link_demo: "",
    stack: ["React", "NestJS", "PostgreSQL"],
  },
  {
    id: "pms",
    title: "PMS SaaS",
    description:
      "Multi-tenant data schemas, reusable component libraries, and PostgreSQL index tuning for dashboard queries. APIs delivered across Agile sprints.",
    type: "Full-Stack",
    thumbnail: "https://picsum.photos/seed/pms-saas/600/600",
    link_github: [],
    link_demo: "",
    stack: ["React", "Angular", "NestJS", "PostgreSQL"],
  },
  {
    id: "smarthrm",
    title: "SmartHRM — HR Platform",
    description:
      "Self-directed 3-tier HR system with ASP.NET Core, Angular 19, and React Native. RBAC, dynamic approval chains, payroll, and GPS geofenced check-in.",
    type: "Full-Stack",
    thumbnail: "https://picsum.photos/seed/smarthrm/600/600",
    link_github: [
      "https://github.com/HoangHoan04/HrmApi.git",
      "https://github.com/HoangHoan04/HrmAdmin.git",
      "https://github.com/HoangHoan04/HrmMobile.git",
    ],
    link_demo: "",
    stack: [".NET 9", "Angular 19", "React Native", "PostgreSQL"],
  },
  {
    id: "wio",
    title: "WIO — Wedding Invitation SaaS",
    description:
      "Digital invitations with template customization, guest wishbooks, VietQR gifts, live RSVP via NestJS WebSockets, and Next.js SSR Open Graph previews.",
    type: "Full-Stack",
    thumbnail: "https://picsum.photos/seed/wio-wedding/600/600",
    link_github: [
      "https://github.com/HoangHoan04/wio-api.git",
      "https://github.com/HoangHoan04/wio-admin.git",
      "https://github.com/HoangHoan04/wio-customer.git",
    ],
    link_demo: "",
    stack: ["Next.js 14", "NestJS", "PostgreSQL", "WebSockets"],
  },
];
