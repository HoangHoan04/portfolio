import { useState } from "react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Booking Tour HimLamTourist",
      description:
        "Full-stack tour booking platform with separate modules for customer, admin, and API services. Built RESTful APIs with NestJS and PostgreSQL via Supabase for tour listings, bookings, and user authentication.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "TypeScript", "NestJS", "PostgreSQL", "Supabase"],
      category: "fullstack",
      github: [
        {
          label: "Customer",
          url: "https://github.com/HoangHoan04/bookingtour-customer",
        },
        {
          label: "Admin",
          url: "https://github.com/HoangHoan04/bookingtour-admin",
        },
        { label: "API", url: "https://github.com/HoangHoan04/bookingtour-api" },
      ],
      demo: "https://himlamtourist.xyz/",
      featured: true,
    },
    {
      id: 2,
      title: "Wedding Invitation",
      description:
        "Full-stack wedding invitation web app with countdown timer, event details, and RSVP functionality. Designed RESTful APIs with NestJS and built a responsive UI with React and Tailwind CSS optimized for both desktop and mobile.",
      image: "/api/placeholder/400/250",
      technologies: ["TypeScript", "React", "Tailwind CSS", "NestJS"],
      category: "fullstack",
      github: [
        {
          label: "Source",
          url: "https://github.com/HoangHoan04/wedding-invitation-customer",
        },
      ],
      demo: null,
      featured: true,
    },
    {
      id: 3,
      title: "Apple Store",
      description:
        "E-commerce web app simulating the Apple Store with product listings, shopping cart, and order management. Implemented user authentication and checkout flow using core PHP with MVC architecture and MySQL database.",
      image: "/api/placeholder/400/250",
      technologies: ["PHP", "MySQL"],
      category: "fullstack",
      github: [
        { label: "Source", url: "https://github.com/HoangHoan04/AppleStore" },
      ],
      demo: null,
      featured: false,
    },
  ];

  const categories = [
    { id: "all", name: "All", icon: "pi-th-large" },
    { id: "fullstack", name: "Full-Stack", icon: "pi-desktop" },
    { id: "frontend", name: "Frontend", icon: "pi-palette" },
    { id: "backend", name: "Backend", icon: "pi-server" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <div className="min-h-screen py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-5xl font-bold text-white">My Projects</h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-400">
            Explore projects I have developed, from full-stack web applications
            to e-commerce platforms and interactive experiences.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-20">
          <h2 className="mb-8 text-3xl font-bold text-center text-white">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {featuredProjects.slice(0, 2).map((project) => (
              <div
                key={project.id}
                className="relative overflow-hidden transition-all duration-300 border group bg-slate-800 rounded-2xl border-slate-700 hover:border-blue-500"
              >
                <div className="relative flex items-center justify-center h-64 overflow-hidden bg-linear-to-br from-blue-500 to-cyan-500">
                  <i className="text-6xl text-white pi pi-image"></i>
                  <div className="absolute inset-0 transition-all duration-300 bg-black/20 group-hover:bg-black/10"></div>
                </div>

                <div className="p-8">
                  <h3 className="mb-3 text-2xl font-bold text-white transition-colors group-hover:text-blue-400">
                    {project.title}
                  </h3>
                  <p className="mb-6 leading-relaxed text-gray-400">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm text-gray-300 border rounded-full bg-slate-700 border-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {project.github.map((repo) => (
                      <a
                        key={repo.label}
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 space-x-2 text-white transition-colors rounded-lg bg-slate-700 hover:bg-slate-600"
                      >
                        <i className="pi pi-github"></i>
                        <span>{repo.label}</span>
                      </a>
                    ))}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 space-x-2 text-white transition-all rounded-lg bg-linear-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                      >
                        <i className="pi pi-external-link"></i>
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? "bg-linear-to-r from-blue-600 to-cyan-600 text-white"
                    : "bg-slate-800 text-gray-400 hover:bg-slate-700 hover:text-white border border-slate-700"
                }`}
              >
                <i className={`pi ${category.icon}`}></i>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="overflow-hidden transition-all duration-300 transform border group bg-slate-800 rounded-xl border-slate-700 hover:border-blue-500 hover:scale-105"
            >
              <div className="relative flex items-center justify-center h-48 overflow-hidden bg-linear-to-br from-blue-500 to-cyan-600">
                <i className="text-4xl text-white pi pi-image"></i>
                <div className="absolute inset-0 transition-all duration-300 bg-black/20 group-hover:bg-black/10"></div>
                {project.featured && (
                  <div className="absolute px-2 py-1 text-xs font-bold text-yellow-900 bg-yellow-500 rounded-full top-4 right-4">
                    <i className="mr-1 pi pi-star"></i>
                    Featured
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-white transition-colors group-hover:text-blue-400">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-400">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs text-gray-300 border rounded bg-slate-700 border-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs text-gray-300 border rounded bg-slate-700 border-slate-600">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {project.github.map((repo) => (
                      <a
                        key={repo.label}
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-400 transition-colors hover:text-white"
                        title={`GitHub - ${repo.label}`}
                      >
                        <i className="pi pi-github"></i>
                      </a>
                    ))}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-400 transition-colors hover:text-white"
                        title="Live Demo"
                      >
                        <i className="pi pi-external-link"></i>
                      </a>
                    )}
                  </div>
                  <span className="text-xs text-gray-500 capitalize">
                    {project.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Got a project idea?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-gray-400">
            I'm always open to discussing new and exciting projects. Reach out
            so we can turn your idea into reality!
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 space-x-2 font-semibold text-white transition-all duration-300 transform rounded-lg shadow-lg bg-linear-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 hover:scale-105"
          >
            <i className="pi pi-envelope"></i>
            <span>Contact Me</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
