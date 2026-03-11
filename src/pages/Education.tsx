const Education = () => {
  const education = {
    degree: "Bachelor of Software Engineering",
    degreeVi: "Kỹ sư Kỹ thuật Phần mềm",
    school: "Saigon University",
    location: "Ho Chi Minh City, Vietnam",
    period: "2022 - 2026",
    gpa: "2.7/4.0",
    description:
      "Studying Software Engineering with a focus on web development, database systems, and software engineering principles.",
    coursework: [
      "Object-Oriented Programming",
      "Web & Application Development",
      "Data Structures & Algorithms",
      "Database Management",
      "Discrete Math",
      "Linear Algebra",
      "Probability & Statistics",
    ],
    activities: [
      "Competitive Programming Club Member",
      "Member of Faculty Student Executive Board",
    ],
  };

  const projects = [
    {
      name: "Wedding Invitation",
      description:
        "Full-stack wedding invitation web app with countdown timer, event details, and RSVP functionality.",
      tech: ["TypeScript", "React", "Tailwind CSS", "NestJS"],
      github: "https://github.com/HoangHoan04/wedding-invitation-customer",
      demo: null,
    },
    {
      name: "Booking Tour HimLamTourist",
      description:
        "Full-stack tour booking platform with customer, admin, and API modules. Includes tour search, filtering, reservation flow, and user authentication.",
      tech: ["React", "TypeScript", "NestJS", "PostgreSQL", "Supabase"],
      github: "https://github.com/HoangHoan04/bookingtour-customer",
      demo: "https://himlamtourist.xyz/",
    },
    {
      name: "Apple Store",
      description:
        "E-commerce web app simulating the Apple Store with product listings, shopping cart, order management, and user authentication.",
      tech: ["PHP", "MySQL"],
      github: "https://github.com/HoangHoan04/AppleStore",
      demo: null,
    },
  ];

  const learningTimeline = [
    {
      year: "2022",
      title: "University Start",
      description: "HTML, CSS, JavaScript — programming fundamentals",
      icon: "pi-graduation-cap",
    },
    {
      year: "2023",
      title: "Core CS",
      description: "OOP, Data Structures & Algorithms, Web Development",
      icon: "pi-desktop",
    },
    {
      year: "2024",
      title: "Personal Projects",
      description: "React, PHP, MySQL, Git — built first real projects",
      icon: "pi-code",
    },
    {
      year: "2025 - Now",
      title: "Professional",
      description:
        "Angular, NestJS, TypeScript, PostgreSQL at APETECH Solutions",
      icon: "pi-briefcase",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-5xl font-bold text-white">
            Education & Projects
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-400">
            Academic background and hands-on projects built throughout my
            learning journey.
          </p>
        </div>

        {/* Formal Education */}
        <div className="mb-20">
          <h2 className="mb-12 text-3xl font-bold text-center text-white">
            Formal Education
          </h2>
          <div className="p-8 transition-all duration-300 border bg-slate-800 rounded-2xl border-slate-700 hover:border-purple-500">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {/* Main Info */}
              <div className="lg:col-span-2">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <h3 className="text-2xl font-bold text-white">
                    {education.degree}
                  </h3>
                  <span className="px-3 py-1 text-sm font-medium text-white rounded-full bg-linear-to-r from-purple-600 to-pink-600">
                    GPA: {education.gpa}
                  </span>
                </div>

                <div className="mb-1 text-lg font-medium text-gray-300">
                  {education.school}
                </div>
                <div className="flex flex-wrap items-center gap-4 mb-4 text-gray-400">
                  <span className="flex items-center space-x-1">
                    <i className="pi pi-map-marker"></i>
                    <span>{education.location}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <i className="pi pi-calendar"></i>
                    <span>{education.period}</span>
                  </span>
                </div>

                <p className="mb-6 text-gray-400">{education.description}</p>

                {/* Activities */}
                <div>
                  <h4 className="flex items-center mb-3 space-x-2 font-semibold text-white">
                    <i className="text-yellow-400 pi pi-users"></i>
                    <span>Activities:</span>
                  </h4>
                  <ul className="space-y-2">
                    {education.activities.map((activity, idx) => (
                      <li
                        key={idx}
                        className="flex items-start space-x-2 text-sm text-gray-400"
                      >
                        <i className="shrink-0 mt-1 text-green-400 pi pi-check"></i>
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Coursework */}
              <div>
                <h4 className="flex items-center mb-4 space-x-2 font-semibold text-white">
                  <i className="text-purple-400 pi pi-book"></i>
                  <span>Main Courses:</span>
                </h4>
                <div className="space-y-2">
                  {education.coursework.map((course, idx) => (
                    <div
                      key={idx}
                      className="p-3 border rounded-lg bg-slate-700 border-slate-600"
                    >
                      <span className="text-sm text-gray-300">{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Academic Projects */}
        <div className="mb-20">
          <h2 className="mb-12 text-3xl font-bold text-center text-white">
            Projects
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className="p-6 transition-all duration-300 border bg-slate-800 rounded-xl border-slate-700 hover:border-purple-500 hover:transform hover:scale-105"
              >
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-linear-to-r from-purple-500 to-pink-500">
                  <i className="text-xl text-white pi pi-code"></i>
                </div>

                <h3 className="mb-2 text-lg font-bold text-white">
                  {project.name}
                </h3>
                <p className="mb-4 text-sm text-gray-400">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs text-gray-300 border rounded bg-slate-700 border-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4 border-t border-slate-700">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    <i className="pi pi-github"></i>
                    <span>Code</span>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-sm text-purple-400 transition-colors hover:text-purple-300"
                    >
                      <i className="pi pi-external-link"></i>
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Timeline */}
        <div className="p-8 mb-20 border bg-slate-800/50 rounded-2xl border-slate-700">
          <h2 className="mb-8 text-3xl font-bold text-center text-white">
            Learning Timeline
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {learningTimeline.map((phase, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-linear-to-r from-purple-500 to-pink-500">
                  <i className={`pi ${phase.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="mb-1 font-bold text-white">{phase.year}</h3>
                <h4 className="mb-2 font-semibold text-purple-400">
                  {phase.title}
                </h4>
                <p className="text-sm text-gray-400">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Philosophy */}
        <div className="text-center">
          <h2 className="mb-6 text-3xl font-bold text-white">
            Learning Philosophy
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="mb-8 text-xl leading-relaxed text-gray-400">
              "I believe the best way to learn is by building real things. Every
              project teaches me something new — and I never stop."
            </p>

            <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-3">
              {[
                {
                  icon: "pi-lightbulb",
                  title: "Build to Learn",
                  description:
                    "Apply knowledge immediately through real projects rather than just theory.",
                },
                {
                  icon: "pi-users",
                  title: "Learn from Others",
                  description:
                    "Collaborate with teammates and learn from code reviews and feedback.",
                },
                {
                  icon: "pi-cog",
                  title: "Keep Improving",
                  description:
                    "Continuously refine skills and stay updated with new technologies.",
                },
              ].map((principle, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-lg bg-linear-to-r from-purple-500 to-pink-500">
                    <i
                      className={`pi ${principle.icon} text-white text-2xl`}
                    ></i>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-white">
                    {principle.title}
                  </h3>
                  <p className="text-gray-400">{principle.description}</p>
                </div>
              ))}
            </div>

            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 space-x-2 font-semibold text-white transition-all duration-300 transform rounded-lg shadow-lg bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 hover:scale-105"
            >
              <i className="pi pi-envelope"></i>
              <span>Contact Me</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
