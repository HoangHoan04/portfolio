const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Senior Full-Stack Developer",
      company: "TechCorp Solutions",
      location: "Hanoi, Vietnam",
      period: "2024 - Present",
      type: "Full-time",
      description:
        "Leading the team to develop large-scale web applications serving millions of users.",
      responsibilities: [
        "Design and develop microservices architecture",
        "Mentoring 5+ junior developers",
        "Implement CI/CD pipelines and DevOps practices",
        "Code review and ensure code quality",
        "Collaborate with Product Manager and Designer",
      ],
      technologies: [
        "React",
        "Node.js",
        "TypeScript",
        "AWS",
        "Docker",
        "MongoDB",
      ],
      achievements: [
        "Increased application performance by 40% through optimization",
        "Reduced deployment time by 60% with CI/CD",
        "Led team to successfully complete 15+ projects",
      ],
    },
    {
      id: 2,
      title: "Full-Stack Developer",
      company: "StartupXYZ",
      location: "Ho Chi Minh City, Vietnam",
      period: "2022 - 2024",
      type: "Full-time",
      description:
        "Developed the product from 0 to scale, serving 100k+ users in a dynamic startup environment.",
      responsibilities: [
        "Build MVP and iterate based on user feedback",
        "Develop both frontend and backend",
        "Design database schema and APIs",
        "Implement real-time features with WebSocket",
        "Mobile app development with React Native",
      ],
      technologies: [
        "React",
        "Node.js",
        "Python",
        "PostgreSQL",
        "Redis",
        "React Native",
      ],
      achievements: [
        "Grew product from 0 users to 100k+ users",
        "Reduced loading time by 50% using caching strategies",
        "Successfully launched mobile app on both iOS and Android",
      ],
    },
    {
      id: 3,
      title: "Frontend Developer",
      company: "Digital Agency ABC",
      location: "Hanoi, Vietnam",
      period: "2021 - 2022",
      type: "Full-time",
      description:
        "Developed user interfaces for major clients in e-commerce and fintech industries.",
      responsibilities: [
        "Develop responsive web applications",
        "Optimize SEO and web performance",
        "Collaborate closely with UI/UX designers",
        "Cross-browser compatibility testing",
        "Client communication and requirement gathering",
      ],
      technologies: ["React", "Vue.js", "SASS", "Webpack", "Jest", "Figma"],
      achievements: [
        "Delivered 20+ projects on time",
        "Increased conversion rate by 25% for e-commerce clients",
        'Won the company’s "Best Frontend Implementation" award',
      ],
    },
    {
      id: 4,
      title: "Junior Web Developer",
      company: "WebDev Solutions",
      location: "Hanoi, Vietnam",
      period: "2020 - 2021",
      type: "Full-time",
      description:
        "Started my career by learning and contributing to various web development projects.",
      responsibilities: [
        "Develop static websites and landing pages",
        "Bug fixing and maintenance",
        "Learn best practices from senior developers",
        "Write unit tests and documentation",
        "Support QA testing",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "jQuery", "PHP", "MySQL"],
      achievements: [
        "Completed 30+ landing pages",
        "Self-learned React and applied it to projects",
        "Promoted to Frontend Developer after 8 months",
      ],
    },
  ];

  const freelanceProjects = [
    {
      title: "E-commerce Platform",
      client: "Local Business",
      period: "3 months",
      description:
        "Built an online sales platform with full payment and order management features.",
      result: "Increased client’s online sales by 200%",
    },
    {
      title: "Restaurant Management System",
      client: "Restaurant Chain",
      period: "4 months",
      description:
        "Management system including POS, inventory, and customer loyalty features.",
      result: "Reduced order processing time by 30%",
    },
    {
      title: "Learning Management System",
      client: "Educational Institute",
      period: "6 months",
      description:
        "Online learning platform with video streaming, quizzes, and progress tracking.",
      result: "Served 5000+ students and 100+ instructors",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-5xl font-bold text-white">
            Work Experience
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-400">
            My career journey through different roles and projects.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="mb-20">
          <h2 className="mb-12 text-3xl font-bold text-center text-white">
            Experience Timeline
          </h2>
          <div className="relative">
            <div className="absolute w-1 h-full transform -translate-x-1/2 left-1/2 bg-gradient-to-b from-purple-500 to-pink-500"></div>

            <div className="space-y-16">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8"
                    }`}
                  >
                    <div className="p-8 transition-all duration-300 border bg-slate-800 rounded-2xl border-slate-700 hover:border-purple-500 hover:transform hover:scale-105">
                      <div className="flex items-center justify-between mb-4">
                        <div
                          className={`${
                            index % 2 === 0 ? "order-2" : "order-1"
                          }`}
                        >
                          <span className="px-3 py-1 text-sm font-medium text-white rounded-full bg-gradient-to-r from-purple-600 to-pink-600">
                            {exp.type}
                          </span>
                        </div>
                        <div
                          className={`text-purple-400 font-semibold ${
                            index % 2 === 0 ? "order-1" : "order-2"
                          }`}
                        >
                          {exp.period}
                        </div>
                      </div>

                      <h3 className="mb-2 text-2xl font-bold text-white">
                        {exp.title}
                      </h3>
                      <div className="mb-1 text-lg font-medium text-gray-300">
                        {exp.company}
                      </div>
                      <div className="flex items-center mb-4 space-x-1 text-gray-400">
                        <i className="pi pi-map-marker"></i>
                        <span>{exp.location}</span>
                      </div>

                      <p className="mb-6 text-gray-400">{exp.description}</p>

                      <div className="mb-6">
                        <h4 className="flex items-center mb-3 space-x-2 font-semibold text-white">
                          <i className="text-purple-400 pi pi-list"></i>
                          <span>Main Responsibilities:</span>
                        </h4>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((resp, idx) => (
                            <li
                              key={idx}
                              className="flex items-start space-x-2 text-sm text-gray-400"
                            >
                              <i className="flex-shrink-0 mt-1 text-green-400 pi pi-check"></i>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-6">
                        <h4 className="flex items-center mb-3 space-x-2 font-semibold text-white">
                          <i className="text-purple-400 pi pi-cog"></i>
                          <span>Technologies:</span>
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 text-sm text-gray-300 border rounded-full bg-slate-700 border-slate-600"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="flex items-center mb-3 space-x-2 font-semibold text-white">
                          <i className="text-purple-400 pi pi-star"></i>
                          <span>Achievements:</span>
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li
                              key={idx}
                              className="flex items-start space-x-2 text-sm text-gray-400"
                            >
                              <i className="flex-shrink-0 mt-1 text-yellow-400 pi pi-trophy"></i>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="relative flex items-center justify-center w-12 h-12">
                    <div className="w-6 h-6 border-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 border-slate-900"></div>
                    <div className="absolute w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-ping opacity-20"></div>
                  </div>

                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Freelance Projects */}
        <div className="mb-20">
          <h2 className="mb-12 text-3xl font-bold text-center text-white">
            Freelance Projects
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {freelanceProjects.map((project, index) => (
              <div
                key={index}
                className="p-6 transition-all duration-300 border bg-slate-800 rounded-xl border-slate-700 hover:border-purple-500 hover:transform hover:scale-105"
              >
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500">
                  <i className="text-xl text-white pi pi-briefcase"></i>
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">
                  {project.title}
                </h3>
                <div className="mb-2 font-medium text-gray-300">
                  {project.client}
                </div>
                <div className="mb-4 text-sm font-medium text-purple-400">
                  {project.period}
                </div>
                <p className="mb-4 text-sm text-gray-400">
                  {project.description}
                </p>
                <div className="pt-4 border-t border-slate-700">
                  <div className="flex items-start space-x-2">
                    <i className="flex-shrink-0 mt-1 text-green-400 pi pi-chart-line"></i>
                    <span className="text-sm font-medium text-green-400">
                      {project.result}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Growth */}
        <div className="p-8 mb-20 border bg-slate-800/50 rounded-2xl border-slate-700">
          <h2 className="mb-8 text-3xl font-bold text-center text-white">
            Skills Growth
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                year: "2020",
                skills: "HTML, CSS, JavaScript",
                level: "Beginner",
              },
              {
                year: "2021",
                skills: "React, Node.js, Git",
                level: "Intermediate",
              },
              {
                year: "2022",
                skills: "TypeScript, AWS, Docker",
                level: "Advanced",
              },
              {
                year: "2023-2025",
                skills: "Architecture, Leadership, AI/ML",
                level: "Expert",
              },
            ].map((growth, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-xl font-bold text-white rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
                  {growth.year}
                </div>
                <h3 className="mb-2 font-semibold text-white">
                  {growth.level}
                </h3>
                <p className="text-sm text-gray-400">{growth.skills}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Work Style */}
        <div className="mb-20">
          <h2 className="mb-12 text-3xl font-bold text-center text-white">
            Work Style
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Agile & Collaborative",
                description:
                  "Adapt well to Agile/Scrum methodology and work efficiently in cross-functional teams.",
                icon: "pi-users",
                color: "from-blue-500 to-cyan-500",
              },
              {
                title: "Problem Solver",
                description:
                  "Approach problems methodically and find creative, efficient solutions.",
                icon: "pi-lightbulb",
                color: "from-yellow-500 to-orange-500",
              },
              {
                title: "Continuous Learner",
                description:
                  "Keep up-to-date with new technologies by joining courses and conferences regularly.",
                icon: "pi-book",
                color: "from-green-500 to-emerald-500",
              },
              {
                title: "Quality Focused",
                description:
                  "Put code quality and user experience as the top priority in every project.",
                icon: "pi-star",
                color: "from-purple-500 to-pink-500",
              },
              {
                title: "Mentor & Leader",
                description:
                  "Share knowledge with peers and mentor junior developers.",
                icon: "pi-user-plus",
                color: "from-indigo-500 to-purple-500",
              },
              {
                title: "Results Driven",
                description:
                  "Focus on business results and measure work impact using metrics.",
                icon: "pi-chart-bar",
                color: "from-red-500 to-pink-500",
              },
            ].map((style, index) => (
              <div
                key={index}
                className="p-6 text-center transition-all duration-300 border bg-slate-800 rounded-xl border-slate-700 hover:border-purple-500"
              >
                <div
                  className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${style.color} rounded-lg flex items-center justify-center`}
                >
                  <i className={`pi ${style.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">
                  {style.title}
                </h3>
                <p className="text-sm text-gray-400">{style.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Let’s work together!
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-gray-400">
            I'm always looking for new opportunities to apply my experience and
            skills to exciting projects.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/contact"
              className="flex items-center justify-center px-8 py-4 space-x-2 font-semibold text-white transition-all duration-300 transform rounded-lg shadow-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 hover:scale-105"
            >
              <i className="pi pi-envelope"></i>
              <span>Contact</span>
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              className="flex items-center justify-center px-8 py-4 space-x-2 font-semibold text-purple-400 transition-all duration-300 transform border-2 border-purple-500 rounded-lg hover:bg-purple-500 hover:text-white hover:scale-105"
            >
              <i className="pi pi-download"></i>
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
