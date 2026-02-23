import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
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
  pythonIcon,
  reactIcon,
  settingIcon,
  tailwindIcon,
  typescriptIcon,
} from "../assets/icons";

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


interface SkillItemProps {
  name: string;
  icon: string;
  tags?: string[];
  delay?: number;
}

const SkillCard = ({ name, icon, tags = [], delay = 0 }: SkillItemProps) => {
  const [animated, setAnimated] = useState(false);
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: animated ? 1 : 0,
        transform: animated
          ? hovered
            ? "translateY(-8px) scale(1.02)"
            : "translateY(0) scale(1)"
          : "translateY(24px) scale(0.95)",
        transition: "opacity 0.5s ease, transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
        transitionDelay: animated ? "0ms" : `${delay}ms`,
        background: hovered
          ? "linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(168,85,247,0.1) 100%)"
          : "linear-gradient(135deg, rgba(15,15,30,0.8) 0%, rgba(20,20,40,0.6) 100%)",
        border: `1px solid ${hovered ? "rgba(99,102,241,0.6)" : "rgba(99,102,241,0.15)"}`,
        borderRadius: "16px",
        padding: "20px",
        cursor: "default",
        boxShadow: hovered
          ? `0 20px 40px rgba(0,0,0,0.4), 0 0 20px rgba(99,102,241,0.4)`
          : "0 4px 16px rgba(0,0,0,0.2)",
        backdropFilter: "blur(12px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow orb on hover */}
      <div
        style={{
          position: "absolute",
          top: "-20px",
          right: "-20px",
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          background: "rgba(99,102,241,0.4)",
          filter: "blur(30px)",
          opacity: hovered ? 0.25 : 0,
          transition: "opacity 0.4s ease",
          pointerEvents: "none",
        }}
      />

      {/* Top row: icon + name + badge */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "12px",
            background: `linear-gradient(135deg, rgba(99,102,241,0.15), rgba(168,85,247,0.1))`,
            border: `1px solid rgba(99,102,241,0.4)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            transition: "transform 0.3s ease",
            transform: hovered ? "rotate(-5deg) scale(1.1)" : "rotate(0) scale(1)",
          }}
        >
          {iconMap[icon] ? (
            <img src={iconMap[icon]} alt={name} style={{ width: "30px", height: "30px", objectFit: "contain" }} />
          ) : (
            <i className={`pi ${icon}`} style={{ fontSize: "18px", color: "rgba(99,102,241,0.6)" }} />
          )}
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <span
            style={{
              fontSize: "15px",
              fontWeight: 700,
              color: "#f1f5f9",
              display: "block",
              letterSpacing: "0.01em",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {name}
          </span>

        </div>
      </div>



      {/* Tags */}
      {tags.length > 0 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {tags.map((tag, i) => (
            <span
              key={i}
              style={{
                fontSize: "10px",
                padding: "2px 8px",
                borderRadius: "20px",
                background: "rgba(255,255,255,0.06)",
                color: "#94a3b8",
                border: "1px solid rgba(255,255,255,0.08)",
                letterSpacing: "0.03em",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

const SoftSkillCard = ({
  name,
  icon,
  description,
  delay = 0,
}: {
  name: string;
  icon: string;
  description: string;
  delay?: number;
}) => {
  const [animated, setAnimated] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: animated ? 1 : 0,
        transform: animated
          ? hovered
            ? "translateY(-6px)"
            : "translateY(0)"
          : "translateY(20px)",
        transition: "all 0.4s ease",
        background: hovered
          ? "linear-gradient(135deg, rgba(168,85,247,0.12), rgba(99,102,241,0.08))"
          : "rgba(15,15,30,0.6)",
        border: `1px solid ${hovered ? "rgba(168,85,247,0.4)" : "rgba(99,102,241,0.15)"}`,
        borderRadius: "16px",
        padding: "24px 20px",
        textAlign: "center",
        boxShadow: hovered ? "0 16px 40px rgba(168,85,247,0.15)" : "0 4px 16px rgba(0,0,0,0.2)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          background: hovered
            ? "linear-gradient(135deg, rgba(168,85,247,0.3), rgba(99,102,241,0.2))"
            : "rgba(99,102,241,0.1)",
          border: `2px solid ${hovered ? "rgba(168,85,247,0.5)" : "rgba(99,102,241,0.2)"}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 16px",
          transition: "all 0.4s ease",
          transform: hovered ? "scale(1.1)" : "scale(1)",
        }}
      >
        <i
          className={`pi ${icon}`}
          style={{
            fontSize: "22px",
            background: "linear-gradient(135deg, #a855f7, #6366f1)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        />
      </div>
      <h4
        style={{
          fontSize: "15px",
          fontWeight: 700,
          color: "#f1f5f9",
          marginBottom: "8px",
        }}
      >
        {name}
      </h4>
      <p
        style={{
          fontSize: "13px",
          color: "#64748b",
          lineHeight: 1.6,
        }}
      >
        {description}
      </p>
    </div>
  );
};

// Animated counter
const Counter = ({ end, duration = 1500 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const steps = 60;
    const step = end / steps;
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(current + step, end);
      setCount(Math.round(current));
      if (current >= end) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, end, duration]);

  return <span ref={ref}>{count}</span>;
};

const Skills = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("technical");
  const [activeSubTab, setActiveSubTab] = useState(0);

  const technicalGroups = [
    {
      label: t("skills.skillCategories.technical.frontend"),
      icon: "pi-desktop",
      skills: [
        { name: "React", icon: "react", tags: ["Hooks", "Redux", "Context"] },
        { name: "TypeScript", icon: "typescript", tags: ["Generics", "Decorators"] },
        { name: "Next.js", icon: "nextjs", tags: ["SSR", "ISR", "App Router"] },
        { name: "JavaScript", icon: "javascript", tags: ["ES2024", "Async/Await"] },
        { name: "Tailwind CSS", icon: "tailwind", tags: ["Responsive", "Theme"] },
        { name: "Angular", icon: "angular", tags: ["RxJS", "DI", "NgModule"] },
      ],
    },
    {
      label: t("skills.skillCategories.technical.backend"),
      icon: "pi-server",
      skills: [
        { name: "Node.js", icon: "javascript", tags: ["Express", "PM2", "Clustering"] },
        { name: "NestJS", icon: "nestjs", tags: ["Guards", "Interceptors", "DI"] },
        { name: "Next.js API", icon: "nextjs", tags: ["REST", "Route Handlers"] },
        { name: "TypeScript", icon: "typescript", tags: ["OOP", "Decorators"] },
      ],
    },
    {
      label: t("skills.skillCategories.technical.databaseCloud"),
      icon: "pi-database",
      skills: [
        { name: "MySQL", icon: "mysql", tags: ["Query Optimization", "Indexing"] },
        { name: "AWS", icon: "aws", tags: ["EC2", "S3", "Lambda", "RDS"] },
        { name: "Google Cloud", icon: "gcp", tags: ["GKE", "Cloud Run", "Firebase"] },
        { name: "Docker", icon: "docker", tags: ["Compose", "Registry", "Networks"] },
      ],
    },
    {
      label: t("skills.skillCategories.technical.mobileFramework"),
      icon: "pi-mobile",
      skills: [
        { name: "React Native", icon: "react", tags: ["Expo", "Navigation"] },
        { name: "Next.js", icon: "nextjs", tags: ["PWA", "Responsive"] },
        { name: "TypeScript", icon: "typescript", tags: ["Cross-platform"] },
        { name: "Angular", icon: "angular", tags: ["Ionic", "Material"] },
      ],
    },
  ];

  const toolsGroups = [
    {
      label: t("skills.skillCategories.tools.devTools"),
      icon: "pi-wrench",
      skills: [
        { name: "Git / GitHub", icon: "github", tags: ["PRs", "Actions", "GitFlow"] },
        { name: "Docker", icon: "docker", tags: ["Compose", "Volumes", "Swarm"] },
        { name: "Figma", icon: "figma", tags: ["Prototyping", "Components"] },
        { name: "TypeScript", icon: "typescript", tags: ["TSConfig", "Build"] },
      ],
    },
    {
      label: t("skills.skillCategories.tools.cloudDevOps"),
      icon: "pi-cloud",
      skills: [
        { name: "AWS", icon: "aws", tags: ["CI/CD", "IAM", "CloudWatch"] },
        { name: "Google Cloud", icon: "gcp", tags: ["GCR", "Artifact Registry"] },
        { name: "Docker", icon: "docker", tags: ["Multi-stage Build"] },
        { name: "GitHub Actions", icon: "github", tags: ["Workflows", "Secrets"] },
      ],
    },
    {
      label: t("skills.skillCategories.tools.testing"),
      icon: "pi-check-circle",
      skills: [
        { name: "Jest", icon: "code", tags: ["Unit Tests", "Mocking", "Coverage"] },
        { name: "Cypress", icon: "code", tags: ["E2E", "Component Testing"] },
        { name: "Testing Library", icon: "code", tags: ["RTL", "Queries"] },
        { name: "Selenium", icon: "code", tags: ["WebDriver", "Grid"] },
      ],
    },
  ];

  const softSkills = [
    { name: "Team Leadership", icon: "pi-users", description: "Lead small teams with clear task distribution and supportive communication." },
    { name: "Communication", icon: "pi-comments", description: "Articulate technical ideas clearly to both technical and non-technical stakeholders." },
    { name: "Critical Thinking", icon: "pi-lightbulb", description: "Break down complex problems into manageable solutions systematically." },
    { name: "Agile / Scrum", icon: "pi-refresh", description: "Experienced in sprint planning, stand-ups, retrospectives, and velocity tracking." },
    { name: "Mentoring", icon: "pi-user-plus", description: "Guide junior developers through code reviews, pairing sessions, and 1-on-1s." },
    { name: "System Design", icon: "pi-sitemap", description: "Design scalable, maintainable system architectures for web applications." },
    { name: "Time Management", icon: "pi-clock", description: "Prioritize tasks effectively, meet deadlines, and manage parallel workstreams." },
    { name: "Documentation", icon: "pi-file-edit", description: "Write clear technical docs, API references, and knowledge-base articles." },
    { name: "Problem Solving", icon: "pi-search", description: "Debug complex issues efficiently with structured root-cause analysis." },
  ];

  const learningPath = [
    { skill: "Machine Learning", icon: "python", desc: "TensorFlow, scikit-learn, pandas", color: "#f59e0b" },
    { skill: "Blockchain Dev", icon: "javascript", desc: "Solidity, Web3.js, DeFi protocols", color: "#10b981" },
    { skill: "DevOps Advanced", icon: "docker", desc: "k8s, Terraform, Monitoring stacks", color: "#6366f1" },
  ];

  const stats = [
    { label: "Technologies", value: 18, suffix: "+", icon: "pi-code" },
    { label: "Projects Built", value: 12, suffix: "+", icon: "pi-box" },
    { label: "Months Coding", value: 18, suffix: "+", icon: "pi-calendar" },
    { label: "GitHub Commits", value: 500, suffix: "+", icon: "pi-github" },
  ];

  const currentGroups = activeCategory === "technical" ? technicalGroups : toolsGroups;

  const categoryTabs = [
    { id: "technical", label: t("skills.categories.technical"), icon: "pi-code", iconKey: "code" },
    { id: "tools", label: t("skills.categories.tools"), icon: "pi-cog", iconKey: "setting" },
    { id: "soft", label: t("skills.categories.softSkills"), icon: "pi-users", iconKey: "networking" },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        paddingTop: "80px",
        paddingBottom: "80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient background blobs */}
      <div
        style={{
          position: "fixed",
          top: "10%",
          left: "-10%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "fixed",
          bottom: "10%",
          right: "-10%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>

        {/* ─── Header ─── */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 18px",
              borderRadius: "100px",
              background: "rgba(99,102,241,0.1)",
              border: "1px solid rgba(99,102,241,0.25)",
              marginBottom: "24px",
            }}
          >
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#6366f1", boxShadow: "0 0 8px #6366f1" }} />
            <span style={{ fontSize: "13px", color: "#818cf8", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Skills & Expertise
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(36px, 5vw, 60px)",
              fontWeight: 800,
              marginBottom: "20px",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            <span style={{ color: "#f1f5f9" }}>{t("skills.title").split("&")[0]}&</span>
            <span
              style={{
                background: "linear-gradient(135deg, #a855f7 0%, #6366f1 50%, #06b6d4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {t("skills.title").split("&")[1] || " Technologies"}
            </span>
          </h1>

          <p
            style={{
              fontSize: "17px",
              color: "#64748b",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            {t("skills.subtitle")}
          </p>
        </div>

        {/* ─── Stats Row ─── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "16px",
            marginBottom: "60px",
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              style={{
                background: "linear-gradient(135deg, rgba(15,15,30,0.8), rgba(20,20,40,0.6))",
                border: "1px solid rgba(99,102,241,0.15)",
                borderRadius: "16px",
                padding: "20px",
                textAlign: "center",
                backdropFilter: "blur(12px)",
              }}
            >
              <i
                className={`pi ${stat.icon}`}
                style={{
                  fontSize: "22px",
                  background: "linear-gradient(135deg, #a855f7, #6366f1)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: "block",
                  marginBottom: "8px",
                }}
              />
              <div
                style={{
                  fontSize: "32px",
                  fontWeight: 800,
                  background: "linear-gradient(135deg, #a855f7, #6366f1)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  lineHeight: 1,
                  marginBottom: "6px",
                }}
              >
                <Counter end={stat.value} />
                {stat.suffix}
              </div>
              <div style={{ fontSize: "12px", color: "#475569", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* ─── Category Tabs ─── */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "48px" }}>
          <div
            style={{
              display: "inline-flex",
              background: "rgba(10,10,20,0.8)",
              border: "1px solid rgba(99,102,241,0.2)",
              borderRadius: "14px",
              padding: "6px",
              gap: "4px",
              backdropFilter: "blur(12px)",
            }}
          >
            {categoryTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveCategory(tab.id);
                  setActiveSubTab(0);
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "10px 22px",
                  borderRadius: "10px",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: 600,
                  fontSize: "14px",
                  transition: "all 0.3s ease",
                  background:
                    activeCategory === tab.id
                      ? "linear-gradient(135deg, #7c3aed, #6366f1)"
                      : "transparent",
                  color: activeCategory === tab.id ? "#fff" : "#64748b",
                  boxShadow: activeCategory === tab.id ? "0 4px 16px rgba(124,58,237,0.35)" : "none",
                }}
              >
                {iconMap[tab.iconKey] ? (
                  <img
                    src={iconMap[tab.iconKey]}
                    alt={tab.label}
                    style={{
                      width: "18px",
                      height: "18px",
                      objectFit: "contain",
                      opacity: activeCategory === tab.id ? 1 : 0.5,
                    }}
                  />
                ) : (
                  <i className={`pi ${tab.icon}`} style={{ fontSize: "15px" }} />
                )}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* ─── Technical & Tools ─── */}
        {activeCategory !== "soft" && (
          <div>
            {/* Sub-tabs */}
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "32px" }}>
              {currentGroups.map((group, i) => (
                <button
                  key={i}
                  onClick={() => setActiveSubTab(i)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "7px 16px",
                    borderRadius: "100px",
                    border: `1px solid ${activeSubTab === i ? "rgba(99,102,241,0.5)" : "rgba(99,102,241,0.15)"}`,
                    background: activeSubTab === i ? "rgba(99,102,241,0.15)" : "transparent",
                    color: activeSubTab === i ? "#818cf8" : "#475569",
                    fontSize: "13px",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.25s ease",
                  }}
                >
                  <i className={`pi ${group.icon}`} style={{ fontSize: "13px" }} />
                  {group.label}
                </button>
              ))}
            </div>

            {/* Skills Grid */}
            <div
              key={`${activeCategory}-${activeSubTab}`}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "16px",
              }}
            >
              {currentGroups[activeSubTab]?.skills.map((skill, i) => (
                <SkillCard
                  key={`${skill.name}-${i}`}
                  name={skill.name}
                  icon={skill.icon}
                  tags={skill.tags}
                  delay={i * 80}
                />
              ))}
            </div>
          </div>
        )}

        {/* ─── Soft Skills ─── */}
        {activeCategory === "soft" && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: "16px",
            }}
          >
            {softSkills.map((skill, i) => (
              <SoftSkillCard
                key={i}
                name={skill.name}
                icon={skill.icon}
                description={skill.description}
                delay={i * 60}
              />
            ))}
          </div>
        )}

        {/* ─── Learning Path ─── */}
        <div style={{ marginTop: "80px" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <h2
              style={{
                fontSize: "32px",
                fontWeight: 800,
                color: "#f1f5f9",
                marginBottom: "12px",
              }}
            >
              {t("skills.learningPath")}
            </h2>
            <p style={{ color: "#475569", fontSize: "15px" }}>
              Technologies I'm actively exploring to stay ahead of the curve
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            {learningPath.map((item, i) => (
              <div
                key={i}
                style={{
                  background: "linear-gradient(135deg, rgba(15,15,30,0.8), rgba(20,20,40,0.6))",
                  border: "1px solid rgba(99,102,241,0.15)",
                  borderRadius: "20px",
                  padding: "28px 24px",
                  backdropFilter: "blur(12px)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* background accent */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: `linear-gradient(90deg, ${item.color}, transparent)`,
                    borderRadius: "20px 20px 0 0",
                  }}
                />

                <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px" }}>
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "14px",
                      background: `${item.color}18`,
                      border: `1px solid ${item.color}40`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {iconMap[item.icon] ? (
                      <img src={iconMap[item.icon]} alt={item.skill} style={{ width: "32px", height: "32px", objectFit: "contain" }} />
                    ) : (
                      <i className="pi pi-code" style={{ color: item.color, fontSize: "20px" }} />
                    )}
                  </div>
                  <div>
                    <h3 style={{ fontSize: "17px", fontWeight: 700, color: "#f1f5f9", marginBottom: "4px" }}>
                      {item.skill}
                    </h3>
                    <p style={{ fontSize: "12px", color: "#475569" }}>{item.desc}</p>
                  </div>
                </div>




              </div>
            ))}
          </div>
        </div>

        {/* ─── Certifications ─── */}
        <div style={{ marginTop: "80px" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <h2 style={{ fontSize: "32px", fontWeight: 800, color: "#f1f5f9", marginBottom: "12px" }}>
              {t("skills.certifications")}
            </h2>
            <p style={{ color: "#475569", fontSize: "15px" }}>
              Professional credentials that validate my technical expertise
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "16px",
            }}
          >
            {[
              { title: "AWS Certified Solutions Architect", issuer: "Amazon Web Services", date: "2024", icon: "aws", color: "#f97316" },
              { title: "Google Cloud Professional", issuer: "Google Cloud", date: "2023", icon: "gcp", color: "#3b82f6" },
              { title: "React Developer Certification", issuer: "Meta", date: "2023", icon: "react", color: "#06b6d4" },
              { title: "Docker Certified Associate", issuer: "Docker Inc.", date: "2024", icon: "docker", color: "#2563eb" },
              { title: "MySQL DBA", issuer: "Oracle", date: "2023", icon: "mysql", color: "#fb923c" },
              { title: "TypeScript Advanced", issuer: "Microsoft", date: "2022", icon: "typescript", color: "#6366f1" },
            ].map((cert, i) => (
              <CertCard key={i} {...cert} delay={i * 80} />
            ))}
          </div>
        </div>

        {/* ─── CTA ─── */}
        <div
          style={{
            marginTop: "80px",
            textAlign: "center",
            padding: "60px 32px",
            background: "linear-gradient(135deg, rgba(99,102,241,0.1), rgba(168,85,247,0.08))",
            border: "1px solid rgba(99,102,241,0.2)",
            borderRadius: "24px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "400px",
              height: "200px",
              background: "radial-gradient(ellipse, rgba(124,58,237,0.12) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <h2 style={{ fontSize: "36px", fontWeight: 800, color: "#f1f5f9", marginBottom: "16px", position: "relative" }}>
            {t("skills.cta.title")}
          </h2>
          <p style={{ color: "#64748b", fontSize: "16px", maxWidth: "500px", margin: "0 auto 32px", lineHeight: 1.7, position: "relative" }}>
            {t("skills.cta.desc")}
          </p>
          <a
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "14px 32px",
              background: "linear-gradient(135deg, #7c3aed, #6366f1)",
              color: "#fff",
              borderRadius: "12px",
              fontWeight: 700,
              fontSize: "15px",
              textDecoration: "none",
              boxShadow: "0 8px 24px rgba(124,58,237,0.4)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              position: "relative",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 12px 32px rgba(124,58,237,0.5)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 24px rgba(124,58,237,0.4)";
            }}
          >
            <i className="pi pi-envelope" style={{ fontSize: "16px" }} />
            {t("skills.cta.button")}
          </a>
        </div>
      </div>
    </div>
  );
};

// Cert card component
const CertCard = ({
  title,
  issuer,
  date,
  icon,
  color,
  delay = 0,
}: {
  title: string;
  issuer: string;
  date: string;
  icon: string;
  color: string;
  delay?: number;
}) => {
  const [hovered, setHovered] = useState(false);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: animated ? 1 : 0,
        transform: animated ? (hovered ? "translateY(-6px)" : "translateY(0)") : "translateY(16px)",
        transition: "all 0.4s ease",
        background: hovered
          ? `linear-gradient(135deg, ${color}12, rgba(10,10,20,0.8))`
          : "linear-gradient(135deg, rgba(15,15,30,0.8), rgba(20,20,40,0.6))",
        border: `1px solid ${hovered ? color + "50" : "rgba(99,102,241,0.15)"}`,
        borderRadius: "16px",
        padding: "20px",
        backdropFilter: "blur(12px)",
        boxShadow: hovered ? `0 16px 40px rgba(0,0,0,0.3), 0 0 20px ${color}22` : "0 4px 16px rgba(0,0,0,0.2)",
        cursor: "default",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
        <div
          style={{
            width: "52px",
            height: "52px",
            borderRadius: "12px",
            background: `${color}18`,
            border: `1px solid ${color}40`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            transition: "transform 0.3s ease",
            transform: hovered ? "scale(1.05)" : "scale(1)",
          }}
        >
          {iconMap[icon] ? (
            <img src={iconMap[icon]} alt={title} style={{ width: "32px", height: "32px", objectFit: "contain" }} />
          ) : (
            <i className="pi pi-verified" style={{ color, fontSize: "20px" }} />
          )}
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <h3
            style={{
              fontSize: "14px",
              fontWeight: 700,
              color: "#f1f5f9",
              marginBottom: "4px",
              lineHeight: 1.4,
            }}
          >
            {title}
          </h3>
          <p style={{ fontSize: "12px", color: "#64748b", marginBottom: "8px" }}>{issuer}</p>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "4px",
              padding: "2px 10px",
              borderRadius: "100px",
              background: `${color}15`,
              border: `1px solid ${color}30`,
            }}
          >
            <i className="pi pi-calendar" style={{ fontSize: "9px", color }} />
            <span style={{ fontSize: "11px", fontWeight: 700, color }}>{date}</span>
          </div>
        </div>
      </div>

      {/* Shine on hover */}
      <div
        style={{
          position: "absolute",
          top: "-50%",
          left: "-50%",
          width: "50px",
          height: "200%",
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent)",
          transform: hovered ? "translateX(400px)" : "translateX(-100px)",
          transition: "transform 0.6s ease",
          pointerEvents: "none",
        }}
      />
    </div>
  );
};

export default Skills;
