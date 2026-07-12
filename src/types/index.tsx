export interface Profile {
  /** Thông tin cá nhân */
  username: string;
  fullName: string;
  avatar: string;
  // Thông tin công việc
  jobTitle: string;
  bio: string;
  // Liên kết mạng xã hội
  github: string;
  email: string;
  linkedin: string;
  instagram: string;
  // Sản phẩm và dự án
  project: number;
  visitors: number;
  githubViewers: number;
  experience: string | number;
}

export interface About {
  /** Thông tin cá nhân */
  fullName: string;
  age: number;
  currentAddress: string;
  newAddress: string;
  phone: string;
  email: string;
  languages: string[];
  hobbies: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  type: string;
  thumbnail: string;
  link_github: string[];
  link_demo: string;
  stack: string[];
}

export interface Skill {
  id: string;
  name: string;
  description: string;
  icon: string;
  level: number;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  mainSkills: string[];
  mainResponsibilities: string[];
  technologies: string[];
  achievements: string[];
}

export interface Education {
  id: string;
  degree: string;
  gpa: string;
  activities: string[];
  achievements: string[];
  fieldOfStudy: string;
  school: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  mainCourses: string[];
}

export interface Highlight {
  id: string;
  label: string;
  cover: string;
  gradient: string;
}

export interface Contact {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
}
