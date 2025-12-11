import { useState } from "react";

// Import SVGs or images for icons
import angularIcon from "../assets/icons/angular.svg";
import awsIcon from "../assets/icons/aws.svg";
import codeIcon from "../assets/icons/coded.svg";
import dockerIcon from "../assets/icons/docker.svg";
import figmaIcon from "../assets/icons/figma.svg";
import gcpIcon from "../assets/icons/gcp.svg";
import githubIcon from "../assets/icons/github.svg";
import javascriptIcon from "../assets/icons/javascript.svg";
import mysqlIcon from "../assets/icons/mysql.svg";
import nestjsIcon from "../assets/icons/nestjs.svg";
import networkingIcon from "../assets/icons/networking.svg";
import nextjsIcon from "../assets/icons/nextjs.svg";
import pythonIcon from "../assets/icons/python.svg";
import reactIcon from "../assets/icons/react.svg";
import settingIcon from "../assets/icons/setting.svg";
import tailwindIcon from "../assets/icons/tailwind.svg";
import typescriptIcon from "../assets/icons/typescript.svg";

// Mapping icon names to SVG imports
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
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("technical");

  const skillCategories = {
    technical: {
      title: "Kỹ năng kỹ thuật",
      icon: "pi-code",
      skills: [
        {
          category: "Frontend",
          items: [
            {
              name: "React",
              level: 95,
              icon: "react",
              color: "from-blue-500 to-cyan-500",
            },
            {
              name: "TypeScript",
              level: 90,
              icon: "typescript",
              color: "from-blue-600 to-blue-400",
            },
            {
              name: "Next.js",
              level: 85,
              icon: "nextjs",
              color: "from-gray-800 to-gray-600",
            },
            {
              name: "JavaScript",
              level: 95,
              icon: "javascript",
              color: "from-yellow-500 to-orange-500",
            },
            {
              name: "Tailwind CSS",
              level: 90,
              icon: "tailwind",
              color: "from-cyan-500 to-blue-500",
            },
            {
              name: "Angular",
              level: 85,
              icon: "angular",
              color: "from-red-500 to-red-400",
            },
          ],
        },
        {
          category: "Backend",
          items: [
            {
              name: "Node.js",
              level: 90,
              icon: "javascript",
              color: "from-green-600 to-green-400",
            },
            {
              name: "NestJS",
              level: 85,
              icon: "nestjs",
              color: "from-red-500 to-pink-500",
            },
            {
              name: "Next.js API",
              level: 90,
              icon: "nextjs",
              color: "from-gray-800 to-gray-600",
            },
            {
              name: "TypeScript",
              level: 90,
              icon: "typescript",
              color: "from-blue-600 to-blue-400",
            },
          ],
        },
        {
          category: "Database & Cloud",
          items: [
            {
              name: "MySQL",
              level: 90,
              icon: "mysql",
              color: "from-blue-600 to-orange-500",
            },
            {
              name: "AWS",
              level: 85,
              icon: "aws",
              color: "from-orange-500 to-yellow-500",
            },
            {
              name: "Google Cloud",
              level: 80,
              icon: "gcp",
              color: "from-blue-500 to-green-500",
            },
            {
              name: "Docker",
              level: 85,
              icon: "docker",
              color: "from-blue-500 to-blue-400",
            },
          ],
        },
        {
          category: "Mobile & Framework",
          items: [
            {
              name: "React Native",
              level: 85,
              icon: "react",
              color: "from-blue-500 to-cyan-500",
            },
            {
              name: "Next.js",
              level: 90,
              icon: "nextjs",
              color: "from-gray-800 to-gray-600",
            },
            {
              name: "TypeScript",
              level: 88,
              icon: "typescript",
              color: "from-blue-600 to-blue-400",
            },
            {
              name: "Angular",
              level: 70,
              icon: "angular",
              color: "from-red-500 to-red-400",
            },
          ],
        },
      ],
    },
    tools: {
      title: "Công cụ & DevOps",
      icon: "pi-cog",
      skills: [
        {
          category: "Development Tools",
          items: [
            {
              name: "Git/GitHub",
              level: 95,
              icon: "github",
              color: "from-gray-600 to-gray-400",
            },
            {
              name: "Docker",
              level: 85,
              icon: "docker",
              color: "from-blue-500 to-blue-400",
            },
            {
              name: "Figma",
              level: 85,
              icon: "figma",
              color: "from-purple-500 to-pink-500",
            },
            {
              name: "TypeScript",
              level: 90,
              icon: "typescript",
              color: "from-blue-600 to-blue-400",
            },
          ],
        },
        {
          category: "Cloud & DevOps",
          items: [
            {
              name: "AWS",
              level: 85,
              icon: "aws",
              color: "from-orange-500 to-yellow-500",
            },
            {
              name: "Google Cloud Platform",
              level: 80,
              icon: "gcp",
              color: "from-blue-500 to-green-500",
            },
            {
              name: "Docker",
              level: 80,
              icon: "docker",
              color: "from-blue-500 to-blue-400",
            },
            {
              name: "GitHub Actions",
              level: 85,
              icon: "github",
              color: "from-gray-800 to-gray-600",
            },
          ],
        },
        {
          category: "Testing",
          items: [
            {
              name: "Jest",
              level: 85,
              icon: "pi-check",
              color: "from-red-500 to-orange-500",
            },
            {
              name: "Cypress",
              level: 80,
              icon: "pi-check",
              color: "from-green-500 to-green-400",
            },
            {
              name: "Testing Library",
              level: 85,
              icon: "pi-check",
              color: "from-blue-500 to-blue-400",
            },
            {
              name: "Selenium",
              level: 75,
              icon: "pi-check",
              color: "from-green-600 to-green-400",
            },
          ],
        },
      ],
    },
    soft: {
      title: "Kỹ năng mềm",
      icon: "pi-users",
      skills: [
        {
          category: "Leadership & Communication",
          items: [
            {
              name: "Team Leadership",
              level: 90,
              icon: "pi-users",
              color: "from-purple-500 to-pink-500",
            },
            {
              name: "Communication",
              level: 95,
              icon: "pi-comments",
              color: "from-blue-500 to-cyan-500",
            },
            {
              name: "Presentation",
              level: 85,
              icon: "pi-chart-bar",
              color: "from-green-500 to-emerald-500",
            },
            {
              name: "Mentoring",
              level: 88,
              icon: "pi-user-plus",
              color: "from-orange-500 to-red-500",
            },
          ],
        },
        {
          category: "Problem Solving",
          items: [
            {
              name: "Critical Thinking",
              level: 92,
              icon: "pi-lightbulb",
              color: "from-yellow-500 to-orange-500",
            },
            {
              name: "Debugging",
              level: 95,
              icon: "pi-search",
              color: "from-red-500 to-pink-500",
            },
            {
              name: "Algorithm Design",
              level: 85,
              icon: "pi-sitemap",
              color: "from-blue-600 to-indigo-500",
            },
            {
              name: "System Design",
              level: 80,
              icon: "pi-th-large",
              color: "from-purple-600 to-blue-500",
            },
          ],
        },
        {
          category: "Project Management",
          items: [
            {
              name: "Agile/Scrum",
              level: 90,
              icon: "pi-refresh",
              color: "from-green-500 to-teal-500",
            },
            {
              name: "Time Management",
              level: 88,
              icon: "pi-clock",
              color: "from-blue-500 to-blue-400",
            },
            {
              name: "Planning",
              level: 85,
              icon: "pi-calendar",
              color: "from-purple-500 to-purple-400",
            },
            {
              name: "Documentation",
              level: 90,
              icon: "pi-file-edit",
              color: "from-gray-600 to-gray-400",
            },
          ],
        },
      ],
    },
  };

  const categories = [
    { id: "technical", name: "Technical", icon: "code" },
    { id: "tools", name: "Tools", icon: "setting" },
    { id: "soft", name: "Soft Skills", icon: "networking" },
  ];

  const currentSkills =
    skillCategories[activeCategory as keyof typeof skillCategories];

  return (
    <div className="min-h-screen py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-5xl font-bold text-white">
            My Skills & Technologies
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-400">
            This is an overview of the skills and technologies I have learned
            and applied in real projects.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex p-2 border border-gray-700 rounded-lg bg-slate-800/50">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                    : "text-gray-400 hover:text-white hover:bg-gray-700"
                }`}
              >
                {iconMap[category.icon] && (
                  <img
                    src={iconMap[category.icon]}
                    alt={category.name}
                    className="object-contain w-6 h-6"
                  />
                )}
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Skills Content */}
        <div className="space-y-12">
          {currentSkills.skills.map((skillGroup, groupIndex) => (
            <div
              key={groupIndex}
              className="p-8 border border-gray-700 bg-slate-800/50 rounded-2xl"
            >
              <h2 className="flex items-center mb-8 space-x-4 text-2xl font-bold text-white">
                {iconMap[
                  categories.find((cat) => cat.id === activeCategory)?.icon ||
                    "react"
                ] && (
                  <img
                    src={
                      iconMap[
                        categories.find((cat) => cat.id === activeCategory)
                          ?.icon || "react"
                      ]
                    }
                    alt={skillGroup.category}
                    className="object-contain w-10 h-10"
                  />
                )}
                <span>{skillGroup.category}</span>
              </h2>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-4">
                        {iconMap[skill.icon] ? (
                          <img
                            src={iconMap[skill.icon]}
                            alt={skill.name}
                            className="object-contain w-12 h-12"
                          />
                        ) : (
                          <div className="w-12 h-12 rounded opacity-50 bg-slate-800/50"></div>
                        )}
                        <span className="text-lg font-medium text-white">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-gray-400">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="w-full h-3 overflow-hidden rounded-full bg-slate-800/50">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out transform origin-left`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-20">
          <h2 className="mb-12 text-3xl font-bold text-center text-white">
            Certifications and Achievements
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "AWS Certified Solutions Architect",
                issuer: "Amazon Web Services",
                date: "2024",
                icon: "aws",
                color: "from-orange-500 to-yellow-500",
              },
              {
                title: "Google Cloud Professional",
                issuer: "Google Cloud",
                date: "2023",
                icon: "gcp",
                color: "from-blue-500 to-green-500",
              },
              {
                title: "React Developer Certification",
                issuer: "Meta",
                date: "2023",
                icon: "react",
                color: "from-blue-500 to-cyan-500",
              },
              {
                title: "Docker Certified",
                issuer: "Docker Inc.",
                date: "2024",
                icon: "docker",
                color: "from-blue-600 to-indigo-500",
              },
              {
                title: "MySQL Database Administrator",
                issuer: "Oracle",
                date: "2023",
                icon: "mysql",
                color: "from-blue-600 to-orange-500",
              },
              {
                title: "TypeScript Advanced",
                issuer: "Microsoft",
                date: "2022",
                icon: "typescript",
                color: "from-blue-600 to-blue-400",
              },
            ].map((cert, index) => (
              <div
                key={index}
                className="p-6 transition-all duration-300 border bg-slate-800/50 rounded-xl border-slate-700 hover:border-purple-500 hover:transform hover:scale-105"
              >
                {iconMap[cert.icon] ? (
                  <img
                    src={iconMap[cert.icon]}
                    alt={cert.title}
                    className="object-contain w-16 h-16 mb-4"
                  />
                ) : (
                  <div className="w-16 h-16 mb-4 bg-gray-600 rounded opacity-50"></div>
                )}
                <h3 className="mb-2 text-lg font-bold text-white">
                  {cert.title}
                </h3>
                <p className="mb-1 text-sm text-gray-400">{cert.issuer}</p>
                <p className="text-sm font-medium text-purple-400">
                  {cert.date}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Path */}
        <div className="p-8 mt-20 border bg-slate-800/50 rounded-2xl border-slate-700">
          <h2 className="mb-8 text-3xl font-bold text-center text-white">
            Learning Path
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                skill: "Machine Learning",
                progress: 60,
                description:
                  " Learning Path Python ML libraries như TensorFlow và scikit-learn",
                icon: "python",
              },
              {
                skill: "Blockchain Development",
                progress: 45,
                description: "Research Solidity và Web3 development",
                icon: "javascript",
              },
              {
                skill: "DevOps Advanced",
                progress: 70,
                description: "Learn more about CI/CD pipelines and monitoring",
                icon: "docker",
              },
            ].map((learning, index) => (
              <div key={index} className="text-center">
                {iconMap[learning.icon] ? (
                  <img
                    src={iconMap[learning.icon]}
                    alt={learning.skill}
                    className="object-contain w-16 h-16 mx-auto mb-4"
                  />
                ) : (
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-600 rounded opacity-50"></div>
                )}
                <h3 className="mb-2 text-xl font-bold text-white">
                  {learning.skill}
                </h3>
                <p className="mb-4 text-sm text-gray-400">
                  {learning.description}
                </p>
                <div className="w-full h-2 mb-2 rounded-full bg-slate-700">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                    style={{ width: `${learning.progress}%` }}
                  ></div>
                </div>
                <span className="text-sm font-medium text-purple-400">
                  {learning.progress}%
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Let's work together!
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-gray-400">
            I'm always ready to apply these skills to real-world projects. Let's
            get in touch to discuss your project!
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 space-x-2 font-semibold text-white transition-all duration-300 transform rounded-lg shadow-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 hover:scale-105"
          >
            <i className="pi pi-envelope"></i>
            <span>Contact for me</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Skills;
