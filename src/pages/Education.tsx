const Education = () => {
  const educations = [
    {
      id: 1,
      degree: "Kỹ sư Kỹ thuật Phần mềm",
      school: "Trường Đại học Sài Gòn",
      location: "Thành phố Hồ Chí Minh, Việt Nam",
      period: "2022 - 2027",
      gpa: "2.7/4.0",
      description:
        "Chuyên ngành Software Engineering với focus vào web development và database systems.",
      coursework: [
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Software Engineering",
        "Web Development",
        "Mobile App Development",
        "Computer Networks",
        "Operating Systems",
        "Object-Oriented Programming",
      ],
      achievements: [
        "Tốt nghiệp loại Khá (GPA 2.8/4.0)",
        "Thành viên CLB Lập trình",
        "Hoàn thành đồ án tốt nghiệp với điểm 9.5/10",
        "Có 2 năm kinh nghiệm thực tập tại các công ty công nghệ",
      ],
      projects: [
        {
          name: "Hệ thống quản lý thư viện",
          description: "Web application quản lý sách, độc giả và mượn trả sách",
          tech: ["Java", "Spring Boot", "MySQL", "HTML/CSS"],
        },
        {
          name: "Hệ thống quản lý thư viện",
          description: "Web application quản lý sách, độc giả và mượn trả sách",
          tech: ["Java", "Spring Boot", "MySQL", "HTML/CSS"],
        },
        {
          name: "Hệ thống quản lý thư viện",
          description: "Web application quản lý sách, độc giả và mượn trả sách",
          tech: ["Java", "Spring Boot", "MySQL", "HTML/CSS"],
        },
        {
          name: "Hệ thống quản lý thư viện",
          description: "Web application quản lý sách, độc giả và mượn trả sách",
          tech: ["Java", "Spring Boot", "MySQL", "HTML/CSS"],
        },
        {
          name: "Mobile Game 2D",
          description: "Game mobile đơn giản sử dụng Unity và C#",
          tech: ["Unity", "C#", "Android SDK"],
        },
      ],
    },
  ];

  const certifications = [
    {
      name: "AWS Certified Solutions Architect - Associate",
      issuer: "Amazon Web Services",
      date: "2024",
      validUntil: "2027",
      credentialId: "AWS-ASA-12345",
      icon: "pi-cloud",
      color: "from-orange-500 to-yellow-500",
    },
    {
      name: "Google Cloud Professional Cloud Architect",
      issuer: "Google Cloud",
      date: "2023",
      validUntil: "2025",
      credentialId: "GCP-PCA-67890",
      icon: "pi-cloud",
      color: "from-blue-500 to-green-500",
    },
    {
      name: "Meta React Developer Professional Certificate",
      issuer: "Meta",
      date: "2023",
      validUntil: "Lifetime",
      credentialId: "META-REACT-54321",
      icon: "pi-code",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "MongoDB Certified Developer Associate",
      issuer: "MongoDB University",
      date: "2023",
      validUntil: "2026",
      credentialId: "MONGO-DEV-98765",
      icon: "pi-database",
      color: "from-green-600 to-green-400",
    },
    {
      name: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      date: "2024",
      validUntil: "2027",
      credentialId: "CKA-13579",
      icon: "pi-sitemap",
      color: "from-blue-600 to-indigo-500",
    },
    {
      name: "Scrum Master Certified (SMC)",
      issuer: "Scrum Alliance",
      date: "2022",
      validUntil: "2025",
      credentialId: "SMC-24680",
      icon: "pi-users",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const onlineCourses = [
    {
      title: "Complete Node.js Developer Course",
      platform: "Udemy",
      instructor: "Andrew Mead",
      completed: "2021",
      rating: 5,
      hours: 40,
    },
    {
      title: "React - The Complete Guide",
      platform: "Udemy",
      instructor: "Maximilian Schwarzmüller",
      completed: "2021",
      rating: 5,
      hours: 48,
    },
    {
      title: "AWS Solutions Architect",
      platform: "A Cloud Guru",
      instructor: "Ryan Kroonenburg",
      completed: "2023",
      rating: 5,
      hours: 30,
    },
    {
      title: "Machine Learning Specialization",
      platform: "Coursera",
      instructor: "Andrew Ng",
      completed: "2023",
      rating: 5,
      hours: 80,
    },
    {
      title: "Deep Learning Specialization",
      platform: "Coursera",
      instructor: "Andrew Ng",
      completed: "2024",
      rating: 5,
      hours: 100,
    },
    {
      title: "Docker & Kubernetes Complete Guide",
      platform: "Udemy",
      instructor: "Stephen Grider",
      completed: "2022",
      rating: 5,
      hours: 35,
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-5xl font-bold text-white">
            Học vấn & Chứng chỉ
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-400">
            Hành trình học tập không ngừng để cập nhật kiến thức và kỹ năng
            trong lĩnh vực công nghệ.
          </p>
        </div>

        {/* Formal Education */}
        <div className="mb-20">
          <h2 className="mb-12 text-3xl font-bold text-center text-white">
            Học vấn chính quy
          </h2>
          <div className="space-y-12">
            {educations.map((edu) => (
              <div
                key={edu.id}
                className="p-8 transition-all duration-300 border bg-slate-800 rounded-2xl border-slate-700 hover:border-purple-500"
              >
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                  {/* Main Info */}
                  <div className="lg:col-span-2">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-white">
                        {edu.degree}
                      </h3>
                      <span className="px-3 py-1 text-sm font-medium text-white rounded-full bg-gradient-to-r from-purple-600 to-pink-600">
                        GPA: {edu.gpa}
                      </span>
                    </div>

                    <div className="mb-2 text-lg font-medium text-gray-300">
                      {edu.school}
                    </div>
                    <div className="flex items-center mb-4 space-x-4 text-gray-400">
                      <span className="flex items-center space-x-1">
                        <i className="pi pi-map-marker"></i>
                        <span>{edu.location}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <i className="pi pi-calendar"></i>
                        <span>{edu.period}</span>
                      </span>
                    </div>

                    <p className="mb-6 text-gray-400">{edu.description}</p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="flex items-center mb-3 space-x-2 font-semibold text-white">
                        <i className="text-yellow-400 pi pi-trophy"></i>
                        <span>Thành tích:</span>
                      </h4>
                      <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
                        {edu.achievements.map((achievement, idx) => (
                          <li
                            key={idx}
                            className="flex items-start space-x-2 text-sm text-gray-400"
                          >
                            <i className="flex-shrink-0 mt-1 text-green-400 pi pi-check"></i>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Projects */}
                    <div>
                      <h4 className="flex items-center mb-3 space-x-2 font-semibold text-white">
                        <i className="text-purple-400 pi pi-briefcase"></i>
                        <span>Dự án học tập:</span>
                      </h4>
                      <div className="space-y-3">
                        {edu.projects.map((project, idx) => (
                          <div
                            key={idx}
                            className="p-4 border rounded-lg bg-slate-700 border-slate-600"
                          >
                            <h5 className="mb-2 font-medium text-white">
                              {project.name}
                            </h5>
                            <p className="mb-3 text-sm text-gray-400">
                              {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {project.tech.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-2 py-1 text-xs text-gray-300 border rounded bg-slate-800 border-slate-600"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Coursework */}
                  <div>
                    <h4 className="flex items-center mb-4 space-x-2 font-semibold text-white">
                      <i className="text-purple-400 pi pi-book"></i>
                      <span>Môn học chính:</span>
                    </h4>
                    <div className="space-y-2">
                      {edu.coursework.map((course, idx) => (
                        <div
                          key={idx}
                          className="p-3 border rounded-lg bg-slate-700 border-slate-600"
                        >
                          <span className="text-sm text-gray-300">
                            {course}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-20">
          <h2 className="mb-12 text-3xl font-bold text-center text-white">
            Chứng chỉ chuyên môn
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="p-6 transition-all duration-300 border bg-slate-800 rounded-xl border-slate-700 hover:border-purple-500 hover:transform hover:scale-105"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${cert.color} rounded-lg flex items-center justify-center mb-4`}
                >
                  <i className={`pi ${cert.icon} text-white text-2xl`}></i>
                </div>

                <h3 className="mb-2 text-lg font-bold text-white">
                  {cert.name}
                </h3>
                <p className="mb-3 font-medium text-gray-300">{cert.issuer}</p>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Ngày cấp:</span>
                    <span className="text-white">{cert.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Hiệu lực:</span>
                    <span className="text-white">{cert.validUntil}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">ID:</span>
                    <span className="text-xs text-purple-400">
                      {cert.credentialId}
                    </span>
                  </div>
                </div>

                <button className="flex items-center justify-center w-full px-4 py-2 mt-4 space-x-2 text-sm text-white transition-colors rounded-lg bg-slate-700 hover:bg-slate-600">
                  <i className="pi pi-external-link"></i>
                  <span>Xác minh</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Online Courses */}
        <div className="mb-20">
          <h2 className="mb-12 text-3xl font-bold text-center text-white">
            Khóa học trực tuyến
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {onlineCourses.map((course, index) => (
              <div
                key={index}
                className="p-6 transition-all duration-300 border bg-slate-800 rounded-xl border-slate-700 hover:border-purple-500"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500">
                    <i className="text-xl text-white pi pi-play"></i>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center mb-1 space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <i
                          key={i}
                          className={`pi pi-star ${
                            i < course.rating
                              ? "text-yellow-400"
                              : "text-gray-600"
                          }`}
                        ></i>
                      ))}
                    </div>
                    <span className="text-sm text-gray-400">
                      {course.hours} giờ
                    </span>
                  </div>
                </div>

                <h3 className="mb-2 text-lg font-bold text-white">
                  {course.title}
                </h3>
                <p className="mb-1 font-medium text-purple-400">
                  {course.platform}
                </p>
                <p className="mb-3 text-sm text-gray-400">
                  Giảng viên: {course.instructor}
                </p>

                <div className="flex items-center justify-between">
                  <span className="flex items-center space-x-1 text-sm font-medium text-green-400">
                    <i className="pi pi-check-circle"></i>
                    <span>Hoàn thành {course.completed}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Timeline */}
        <div className="p-8 mb-20 border bg-slate-800/50 rounded-2xl border-slate-700">
          <h2 className="mb-8 text-3xl font-bold text-center text-white">
            Timeline học tập
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                year: "2017-2021",
                title: "Đại học",
                description: "Nền tảng CS cơ bản, Java, Database",
                icon: "pi-graduation-cap",
              },
              {
                year: "2021-2022",
                title: "Self-learning",
                description: "React, Node.js, Web Development",
                icon: "pi-desktop",
              },
              {
                year: "2022-2023",
                title: "Cloud & DevOps",
                description: "AWS, Docker, Kubernetes",
                icon: "pi-cloud",
              },
              {
                year: "2023-2025",
                title: "AI/ML Master",
                description: "Deep Learning, NLP, Computer Vision",
                icon: "pi-chart-line",
              },
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
                  <i className={`pi ${phase.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="mb-2 font-bold text-white">{phase.year}</h3>
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
            Triết lý học tập
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="mb-8 text-xl leading-relaxed text-gray-400">
              "Học tập là một hành trình không có điểm kết thúc. Trong lĩnh vực
              công nghệ, kiến thức luôn thay đổi và phát triển. Tôi tin rằng
              việc duy trì tinh thần học hỏi và khả năng thích nghi là chìa khóa
              để thành công trong sự nghiệp."
            </p>

            <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-3">
              {[
                {
                  icon: "pi-lightbulb",
                  title: "Tư duy phản biện",
                  description:
                    'Luôn đặt câu hỏi "Tại sao?" và tìm hiểu bản chất của vấn đề',
                },
                {
                  icon: "pi-users",
                  title: "Học từ cộng đồng",
                  description:
                    "Tham gia forums, meetups và học hỏi từ kinh nghiệm của người khác",
                },
                {
                  icon: "pi-cog",
                  title: "Thực hành liên tục",
                  description:
                    "Áp dụng ngay kiến thức mới học vào các dự án thực tế",
                },
              ].map((principle, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500">
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
              className="inline-flex items-center px-8 py-4 space-x-2 font-semibold text-white transition-all duration-300 transform rounded-lg shadow-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 hover:scale-105"
            >
              <i className="pi pi-envelope"></i>
              <span>Thảo luận về học tập</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
