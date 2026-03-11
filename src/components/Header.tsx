import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import FullscreenToggle from "./FullscreenToggle";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const location = useLocation();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false);
  }, [location.pathname]);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
    { name: "Experience", href: "/experience" },
    { name: "Education", href: "/education" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        ref={headerRef}
        style={{
          background: scrolled
            ? "rgba(8, 10, 20, 0.92)"
            : "rgba(8, 10, 20, 0.6)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: scrolled
            ? "1px solid rgba(99, 102, 241, 0.25)"
            : "1px solid rgba(255,255,255,0.04)",
          boxShadow: scrolled
            ? "0 4px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(99,102,241,0.08)"
            : "none",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
        className="fixed top-0 z-50 w-full"
      >
        {/* Scroll progress bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            height: "2px",
            width: `${scrollProgress}%`,
            background:
              "linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899, #6366f1)",
            backgroundSize: "200% 100%",
            animation: "shimmer 2s linear infinite",
            transition: "width 0.1s linear",
          }}
        />

        <nav className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* ── LOGO ── */}
            <Link
              to="/"
              className="flex items-center gap-2 group"
              style={{ textDecoration: "none" }}
            >
              {/* Logo text */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  lineHeight: 1,
                }}
              >
                <span
                  style={{
                    fontFamily: "'Fira Code', 'Space Mono', monospace",
                    fontWeight: 800,
                    fontSize: 30,
                    letterSpacing: "-0.5px",
                    background:
                      "linear-gradient(90deg, #c7d2fe, #a5b4fc, #818cf8, #6366f1)",
                    backgroundSize: "200% 100%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    animation: "shine 3s linear infinite",
                    transition: "all 0.3s ease",
                  }}
                >
                  HoangHoan
                </span>
              </div>
            </Link>

            {/* ── DESKTOP NAV ── */}
            <div className="items-center hidden lg:flex gap-1">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                const isHovered = hoveredItem === item.href;

                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    onMouseEnter={() => setHoveredItem(item.href)}
                    onMouseLeave={() => setHoveredItem(null)}
                    style={{
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "7px 12px",
                      borderRadius: 8,
                      fontSize: 15,
                      fontWeight: 500,
                      textDecoration: "none",
                      color: isActive ? "#fff" : "rgba(203,213,225,0.8)",
                      background: isActive
                        ? "linear-gradient(135deg, rgba(99,102,241,0.3), rgba(139,92,246,0.2))"
                        : isHovered
                          ? "rgba(255,255,255,0.06)"
                          : "transparent",
                      border: isActive
                        ? "1px solid rgba(99,102,241,0.4)"
                        : "1px solid transparent",
                      boxShadow: isActive
                        ? "0 0 12px rgba(99,102,241,0.2), inset 0 1px 0 rgba(255,255,255,0.1)"
                        : "none",
                      transition: "all 0.25s cubic-bezier(0.4,0,0.2,1)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <span>{item.name}</span>

                    {/* Active / Hover bottom bar */}
                    <span
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: 2,
                        borderRadius: "2px 2px 0 0",
                        background:
                          "linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899)",
                        boxShadow: isActive
                          ? "0 0 8px rgba(99,102,241,0.7)"
                          : "none",
                        opacity: isActive ? 1 : isHovered ? 0.45 : 0,
                        transform: isActive
                          ? "scaleX(1)"
                          : isHovered
                            ? "scaleX(0.85)"
                            : "scaleX(0)",
                        transformOrigin: "center",
                        transition:
                          "opacity 0.25s ease, transform 0.25s cubic-bezier(0.4,0,0.2,1), box-shadow 0.25s ease",
                      }}
                    />
                  </Link>
                );
              })}

              {/* Fullscreen button — desktop */}
              <div
                style={{
                  marginLeft: 8,
                  paddingLeft: 12,
                  borderLeft: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <FullscreenToggle inline={true} />
              </div>
            </div>

            {/* ── MOBILE: Language + Fullscreen + Hamburger ── */}
            <div className="flex items-center gap-2 lg:hidden">
              <FullscreenToggle inline={true} />
              <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 38,
                  height: 38,
                  borderRadius: 9,
                  border: "1px solid rgba(99,102,241,0.3)",
                  background: isOpen
                    ? "rgba(99,102,241,0.2)"
                    : "rgba(255,255,255,0.04)",
                  color: isOpen ? "#a5b4fc" : "#94a3b8",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: 18,
                    height: 14,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      style={{
                        display: "block",
                        height: 2,
                        borderRadius: 2,
                        background: isOpen ? "#a5b4fc" : "#94a3b8",
                        transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
                        transformOrigin: "center",
                        transform: isOpen
                          ? i === 0
                            ? "rotate(45deg) translate(4px, 6px)"
                            : i === 1
                              ? "scaleX(0)"
                              : "rotate(-45deg) translate(4px, -6px)"
                          : "none",
                        opacity: isOpen && i === 1 ? 0 : 1,
                        width: i === 1 ? 14 : 18,
                      }}
                    />
                  ))}
                </div>
              </button>
            </div>
          </div>

          {/* ── MOBILE MENU ── */}
          <div
            style={{
              maxHeight: isOpen ? 600 : 0,
              overflow: "hidden",
              transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1)",
            }}
            className="lg:hidden"
          >
            <div
              style={{
                padding: "12px 0 16px",
                display: "flex",
                flexDirection: "column",
                gap: 4,
                borderTop: "1px solid rgba(255,255,255,0.06)",
                marginTop: 4,
              }}
            >
              {navigation.map((item, idx) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "10px 14px",
                      borderRadius: 10,
                      fontSize: 14,
                      fontWeight: 500,
                      textDecoration: "none",
                      color: isActive ? "#fff" : "rgba(203,213,225,0.8)",
                      background: isActive
                        ? "linear-gradient(135deg, rgba(99,102,241,0.25), rgba(139,92,246,0.15))"
                        : "transparent",
                      border: isActive
                        ? "1px solid rgba(99,102,241,0.35)"
                        : "1px solid transparent",
                      transition: "all 0.2s ease",
                      animationDelay: `${idx * 40}ms`,
                    }}
                  >
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: 8,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: isActive
                          ? "linear-gradient(135deg, #6366f1, #8b5cf6)"
                          : "rgba(255,255,255,0.06)",
                      }}
                    ></div>
                    <span>{item.name}</span>
                    {isActive && (
                      <i
                        className="pi pi-chevron-right"
                        style={{
                          marginLeft: "auto",
                          fontSize: 11,
                          color: "#6366f1",
                        }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
