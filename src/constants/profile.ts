import type { About, Profile } from "@/types";

export const profile: Profile = {
  username: "HoangHoan",
  fullName: "Hoang Dinh Hoan",
  avatar: "/images/avatar.jpg",
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

export const about: About = {
  fullName: "Hoang Dinh Hoan",
  age: 28,
  currentAddress: "Hanoi, Vietnam",
  newAddress: "HCMC, Vietnam",
  phone: "+84 123 456 789",
  email: "hoanghoanpineapple04@gmail.com",
  languages: ["Vietnamese", "English"],
  hobbies: ["Reading", "Traveling", "Photography"],
};

export const projects = [
  {
    id: "1",
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with React and TypeScript.",
    type: "Web Development",
    thumbnail: "/images/projects/portfolio.jpg",
    link_github: [""],
    link_demo: "https://hoangdinhhoan.com",
    stack: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "2",
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform with shopping cart and payment integration.",
    type: "Web Development",
    thumbnail: "/images/projects/ecommerce.jpg",
    link_github: [""],
    link_demo: "https://ecommerce.example.com",
    stack: ["Next.js", "Node.js", "MongoDB"],
  },
];

export const skills = [
  {
    id: "1",
    name: "JavaScript",
    description: "Proficient in JavaScript and its modern frameworks.",
    icon: "/images/skills/javascript.png",
    level: 90,
  },
  {
    id: "2",
    name: "TypeScript",
    description:
      "Strong understanding of TypeScript for building scalable applications.",
    icon: "/images/skills/typescript.png",
    level: 85,
  },
];

export const experiences = [
  {
    id: "1",
    title: "Frontend Developer",
    company: "Tech Company A",
    description:
      "Developed and maintained web applications using React and TypeScript.",
    startDate: "2020-01-01",
    endDate: "2022-12-31",
    location: "Hanoi, Vietnam",
    mainSkills: ["React", "TypeScript", "Redux"],
    mainResponsibilities: [
      "Developed user interfaces",
      "Collaborated with backend team",
      "Implemented responsive designs",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    achievements: [
      "Improved application performance by 30%",
      "Mentored junior developers",
    ],
  },
];

export const educations = [
  {
    id: "1",
    degree: "Bachelor of Science in Computer Science",
    gpa: "3.8/4.0",
    activities: ["Coding Club", "Hackathons"],
    achievements: ["Dean's List", "Best Capstone Project"],
    fieldOfStudy: "Computer Science",
    school: "University of Technology",
    startDate: "2015-09-01",
    endDate: "2019-06-30",
    location: "Hanoi, Vietnam",
    description:
      "Studied various computer science topics including algorithms, data structures, and software engineering.",
    mainCourses: ["Data Structures", "Algorithms", "Web Development"],
  },
];

export const Z_INDEX = {
  sidebar: 40,
  bottomNav: 50,
  modal: 60,
  backToTop: 30,
};
