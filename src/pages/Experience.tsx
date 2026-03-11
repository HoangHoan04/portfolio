const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Web Developer",
      company: "APETECH Solutions",
      location: "Ho Chi Minh City, Vietnam",
      period: "Mar. 2025 - Present",
      type: "Full-time",
      description:
        "Developing and maintaining web applications in a professional Agile team environment, contributing to both frontend and backend.",
      responsibilities: [
        "Develop and maintain web applications using React, Angular, and NestJS",
        "Design and manage relational databases with PostgreSQL and MySQL",
        "Collaborate with team members following Agile workflow to deliver features on schedule",
        "Diagnose and resolve bugs to ensure system stability and improve application performance",
      ],
      technologies: [
        "React",
        "Angular",
        "NestJS",
        "TypeScript",
        "PostgreSQL",
        "MySQL",
      ],
      achievements: [
        "Contributed to multiple real-world projects within the first months",
        "Improved system stability by actively identifying and resolving bugs",
        "Gained hands-on experience with Agile/Scrum workflow in a professional team",
      ],
    },
  ];

  const activities = [
    {
      title: "Faculty Student Executive Board",
      role: "Committee Member",
      period: "Sept. 2023 - Present",
      description:
        "Represented students and coordinated academic and extracurricular events at faculty level.",
    },
    {
      title: "Competitive Programming Club",
      role: "Member",
      period: "Sept. 2023 - Present",
      description:
        "Participated in algorithm challenges and programming contests to strengthen problem-solving skills.",
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
            My career journey through roles, projects, and activities.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="mb-20">
          <div className="relative">
            <div className="absolute w-1 h-full transform -translate-x-1/2 left-1/2 bg-linear-to-b from-purple-500 to-pink-500"></div>

            <div className="space-y-16">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div
                    className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}
                  >
                    <div className="p-8 transition-all duration-300 border bg-slate-800 rounded-2xl border-slate-700 hover:border-purple-500 hover:transform hover:scale-105">
                      <div className="flex items-center justify-between mb-4">
                        <div
                          className={`${index % 2 === 0 ? "order-2" : "order-1"}`}
                        >
                          <span className="px-3 py-1 text-sm font-medium text-white rounded-full bg-linear-to-r from-purple-600 to-pink-600">
                            {exp.type}
                          </span>
                        </div>
                        <div
                          className={`text-purple-400 font-semibold ${index % 2 === 0 ? "order-1" : "order-2"}`}
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
                              <i className="shrink-0 mt-1 text-green-400 pi pi-check"></i>
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
                              <i className="shrink-0 mt-1 text-yellow-400 pi pi-trophy"></i>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="relative flex items-center justify-center w-12 h-12">
                    <div className="w-6 h-6 border-4 rounded-full bg-linear-to-r from-purple-500 to-pink-500 border-slate-900"></div>
                    <div className="absolute w-12 h-12 rounded-full bg-linear-to-r from-purple-500 to-pink-500 animate-ping opacity-20"></div>
                  </div>

                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Activities & Clubs */}
        <div className="mb-20">
          <h2 className="mb-12 text-3xl font-bold text-center text-white">
            Activities & Clubs
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="p-6 transition-all duration-300 border bg-slate-800 rounded-xl border-slate-700 hover:border-purple-500 hover:transform hover:scale-105"
              >
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-linear-to-r from-purple-500 to-pink-500">
                  <i className="text-xl text-white pi pi-users"></i>
                </div>
                <h3 className="mb-1 text-xl font-bold text-white">
                  {activity.title}
                </h3>
                <div className="mb-1 text-sm font-medium text-purple-400">
                  {activity.role}
                </div>
                <div className="mb-4 text-sm text-gray-500">
                  {activity.period}
                </div>
                <p className="text-sm text-gray-400">{activity.description}</p>
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
                year: "2022",
                skills: "HTML, CSS, JavaScript",
                level: "Beginner",
              },
              {
                year: "2023",
                skills: "OOP, Data Structures & Algorithms, Web Development",
                level: "Learning",
              },
              {
                year: "2024",
                skills: "React, PHP, MySQL, Git",
                level: "Intermediate",
              },
              {
                year: "2025 - Now",
                skills: "Angular, NestJS, TypeScript, PostgreSQL, Tailwind CSS",
                level: "Professional",
              },
            ].map((growth, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center p-3 mx-auto mb-4 text-sm font-bold text-white rounded-full bg-linear-to-r from-purple-500 to-pink-500 w-fit px-4">
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
                  "Approach problems methodically, debug systematically, and find efficient solutions.",
                icon: "pi-lightbulb",
                color: "from-yellow-500 to-orange-500",
              },
              {
                title: "Continuous Learner",
                description:
                  "Continuously learn and apply new technologies quickly in real-world projects.",
                icon: "pi-book",
                color: "from-green-500 to-emerald-500",
              },
              {
                title: "Quality Focused",
                description:
                  "Prioritize code quality, system stability, and a smooth user experience.",
                icon: "pi-star",
                color: "from-purple-500 to-pink-500",
              },
              {
                title: "Team Player",
                description:
                  "Communicate clearly, support teammates, and contribute actively to team goals.",
                icon: "pi-user-plus",
                color: "from-indigo-500 to-purple-500",
              },
              {
                title: "Results Driven",
                description:
                  "Focus on delivering features on schedule and resolving issues that impact the system.",
                icon: "pi-chart-bar",
                color: "from-red-500 to-pink-500",
              },
            ].map((style, index) => (
              <div
                key={index}
                className="p-6 text-center transition-all duration-300 border bg-slate-800 rounded-xl border-slate-700 hover:border-purple-500"
              >
                <div
                  className={`w-16 h-16 mx-auto mb-4 bg-linear-to-r ${style.color} rounded-lg flex items-center justify-center`}
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
            Let's work together!
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-gray-400">
            I'm always looking for new opportunities to apply my experience and
            skills to exciting projects.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/contact"
              className="flex items-center justify-center px-8 py-4 space-x-2 font-semibold text-white transition-all duration-300 transform rounded-lg shadow-lg bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 hover:scale-105"
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
