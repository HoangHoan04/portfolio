import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DeveloperAnimation from "../assets/animations/DeveloperAnimation.json";
import cvFile from "../assets/files/HoangDinhHoanCv.pdf";
import {
  angularIcon,
  awsIcon,
  codeIcon,
  dockerIcon,
  figmaIcon,
  gcpIcon,
  githubIcon,
  javascriptIcon,
  mysqlIcon,
  nestjsIcon,
  networkingIcon,
  nextjsIcon,
  nodeJsIcon,
  pythonIcon,
  reactIcon,
  settingIcon,
  tailwindIcon,
  typescriptIcon,
} from "../assets/icons";
import imageProject from "../assets/images/project.png";
import ScrollAnimation from "../components/ScrollAnimation";

const iconMap: { [key: string]: string } = {
  react: reactIcon,
  typescript: typescriptIcon,
  javascript: javascriptIcon,
  tailwind: tailwindIcon,
  docker: dockerIcon,
  aws: awsIcon,
  gcp: gcpIcon,
  github: githubIcon,
  figma: figmaIcon,
  mysql: mysqlIcon,
  nestjs: nestjsIcon,
  nextjs: nextjsIcon,
  angular: angularIcon,
  python: pythonIcon,
  setting: settingIcon,
  networking: networkingIcon,
  code: codeIcon,
  nodejs: nodeJsIcon,
};

const Home = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);
  const roles = [
    "Full-Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "UI/UX Designer",
  ];

  const projectHighlights = [
    {
      id: 1,
      title: "Wedding Invitation",
      description:
        "A full-stack wedding invitation web app with countdown timer, event details, and RSVP functionality. Built a responsive UI with React and Tailwind CSS, optimized for both desktop and mobile devices.",
      image: imageProject,
      tech: ["TypeScript", "React", "Tailwind", "NestJS"],
      github: "https://github.com/HoangHoan04/wedding-invitation-customer",
      demo: "",
    },
    {
      id: 2,
      title: "Booking Tour HimLamTourist",
      description:
        "A full-stack tour booking platform with separate modules for customer, admin, and API services. Features tour search, filtering, and reservation flow with NestJS and PostgreSQL via Supabase.",
      image: imageProject,
      tech: ["React", "TypeScript", "NestJS", "PostgreSQL", "Supabase"],
      github: "https://github.com/HoangHoan04/bookingtour-customer",
      demo: "https://himlamtourist.xyz/",
    },
    {
      id: 3,
      title: "Apple Store",
      description:
        "A full-stack e-commerce web app simulating the Apple Store with product listings, shopping cart, and order management. Built with core PHP and MVC architecture with a relational MySQL database.",
      image: imageProject,
      tech: ["PHP", "MySQL"],
      github: "https://github.com/HoangHoan04/AppleStore",
      demo: "",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
      setAnimationKey((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-screen px-6 overflow-hidden transition-colors duration-300 bg-linear-to-br from-blue-900/50 to-slate-900/50 dark:from-gray-900/50 dark:to-black/50">
        {/* Main Content */}
        <div className="relative z-10 flex flex-col-reverse items-center justify-between w-full gap-12 mx-auto lg:flex-row max-w-7xl">
          {/* Left: Text Content */}
          <div className="w-full text-center lg:w-1/2 lg:text-left">
            <h1 className="mb-6 text-5xl font-bold text-white dark:text-gray-100 md:text-6xl animate-fade-in-up">
              Hi! I'm HoangHoan
            </h1>

            <div className="h-12 mb-6 text-2xl text-gray-300 dark:text-gray-400 md:text-3xl">
              <span
                key={animationKey}
                className="inline-block overflow-hidden whitespace-nowrap animate-typing"
                style={
                  {
                    "--typing-duration": `${Math.max(
                      1.5,
                      roles[currentRole].length * 0.08,
                    )}s`,
                    "--typing-steps": roles[currentRole].length,
                  } as React.CSSProperties
                }
              >
                {roles[currentRole]}
              </span>
            </div>

            <p
              className="mb-8 text-lg leading-relaxed text-gray-400 dark:text-gray-500 md:text-xl animate-fade-in-up animation-delay-300"
              dangerouslySetInnerHTML={{
                __html:
                  "Hello! I'm a Web Developer with a strong passion for building modern user interfaces and optimizing user experience. I'm currently a Software Engineering student at <strong>Saigon University</strong>, working as a Web Developer at <strong>APETECH Solutions</strong>. I'm actively learning and improving my skills through personal and group projects.",
              }}
            />

            {/* Social Links */}
            <div className="flex justify-center gap-4 mb-8 lg:justify-start animate-fade-in-up animation-delay-400">
              <a
                href={cvFile}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-300 transition-all duration-300 border border-slate-600 rounded-lg hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/10 hover:scale-105"
              >
                <i className="pi pi-file-pdf"></i>
                <span>Resume</span>
              </a>
              <a
                href="https://github.com/HoangHoan04"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-300 transition-all duration-300 border border-slate-600 rounded-lg hover:border-white hover:text-white hover:bg-white/10 hover:scale-105"
              >
                <i className="pi pi-github"></i>
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/hoanghoan04/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-300 transition-all duration-300 border border-slate-600 rounded-lg hover:border-blue-400 hover:text-blue-400 hover:bg-blue-400/10 hover:scale-105"
              >
                <i className="pi pi-linkedin"></i>
                <span>LinkedIn</span>
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start animate-fade-in-up animation-delay-500">
              <Link
                to="/projects"
                className="flex items-center justify-center px-8 py-4 space-x-2 font-semibold text-white transition-all duration-500 transform rounded-lg shadow-lg group bg-linear-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 hover:scale-105 hover:shadow-blue-500/25 hover:shadow-2xl"
              >
                <i className="transition-transform duration-300 pi pi-briefcase group-hover:rotate-12"></i>
                <span>View Projects</span>
              </Link>
              <Link
                to="/contact"
                className="flex items-center justify-center px-8 py-4 space-x-2 font-semibold text-blue-400 transition-all duration-500 transform border-2 border-blue-500 rounded-lg dark:text-blue-300 dark:border-blue-400 group hover:bg-blue-500 hover:text-white hover:scale-105 hover:shadow-blue-400/25 hover:shadow-2xl"
              >
                <i className="transition-transform duration-300 pi pi-envelope group-hover:scale-125"></i>
                <span>Contact</span>
              </Link>
            </div>
          </div>

          {/* Right: Lottie Animation */}
          <div className="flex justify-center w-full lg:w-1/2">
            <div className="relative ">
              <div className="w-full h-full">
                <Lottie
                  animationData={DeveloperAnimation}
                  loop={true}
                  autoplay={true}
                  className="w-full h-full"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-linear-to-r from-blue-500 to-cyan-500 animate-ping opacity-10"></div>
              <div className="absolute inset-0 rounded-full border-blue-400/50 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute text-white transform -translate-x-1/2 dark:text-gray-300 bottom-8 left-1/2 animate-bounce">
          <i className="text-2xl pi pi-chevron-down"></i>
        </div>
      </section>

      {/* Featured Projects */}
      <ScrollAnimation delay={200}>
        <section className="py-20">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-bold text-white">
                Featured Projects
              </h2>
              <p className="max-w-2xl mx-auto text-gray-400">
                Some of the notable projects I've worked on recently
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projectHighlights.map((project, index) => (
                <div
                  key={project.id}
                  className="flex flex-col p-6 transition-all duration-500 transform border bg-slate-800 rounded-xl hover:bg-slate-700 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 border-slate-700 animate-fade-in-up"
                  style={{
                    animationDelay: `${600 + index * 200}ms`,
                    minHeight: "400px",
                  }}
                >
                  {/* Image */}
                  <div className="relative shrink-0 w-full h-48 mb-4 overflow-hidden rounded-lg group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-linear-to-tr from-transparent to-white/10 group-hover:opacity-100"></div>
                  </div>

                  {/* Title and description */}
                  <h3 className="mb-2 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-blue-300">
                    {project.title}
                  </h3>
                  <p className="grow mb-4 overflow-hidden text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                    {project.description.length > 150
                      ? project.description.slice(0, 150) + "..."
                      : project.description}
                  </p>

                  {/* Tech stack + links */}
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs text-white transition-all duration-300 bg-purple-600 rounded hover:bg-purple-500 hover:scale-105"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-gray-400 transition-all duration-300 hover:text-white hover:scale-125 hover:rotate-12"
                        >
                          <i className="pi pi-github"></i>
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-gray-400 transition-all duration-300 hover:text-white hover:scale-125 hover:-rotate-12"
                        >
                          <i className="pi pi-external-link"></i>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* View All Projects */}
            <div className="mt-12 text-center">
              <Link
                to="/projects"
                className="inline-flex items-center space-x-2 text-blue-400 transition-colors hover:text-blue-300"
              >
                <span>View all projects</span>
                <i className="pi pi-arrow-right"></i>
              </Link>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Skills Preview */}
      <section className="py-20 bg-slate-800/50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-white">Skills</h2>
            <p className="max-w-2xl mx-auto text-gray-400">
              The technologies and programming languages I am proficient in
            </p>
          </div>

          <div className="grid grid-cols-6 gap-6">
            {[
              { name: "React", key: "react" },
              { name: "Angular", key: "angular" },
              { name: "Nest.js", key: "nestjs" },
              { name: "TypeScript", key: "typescript" },
              { name: "Node.js", key: "nodejs" },
              { name: "MySQL", key: "mysql" },
            ].map((skill, index) => (
              <div
                key={skill.name}
                className="group p-6 text-center transition-all duration-500 transform border rounded-xl hover:bg-slate-700 hover:scale-110 hover:shadow-xl border-slate-700 animate-fade-in-up"
                style={{ animationDelay: `${800 + index * 100}ms` }}
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-lg flex items-center justify-center transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                  <img
                    src={iconMap[skill.key]}
                    alt={skill.name}
                    className="w-20 h-20 transition-transform duration-300 group-hover:scale-125"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-semibold text-white transition-colors duration-300 group-hover:text-blue-300">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/skills"
              className="inline-flex items-center space-x-2 text-blue-400 transition-colors hover:text-blue-300"
            >
              <span>View all skills</span>
              <i className="pi pi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
