import { useEffect, useState } from "react";

const BackToTop = () => {
    const [visible, setVisible] = useState(false);
    const [hovering, setHovering] = useState(false);
    const [clicking, setClicking] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        setClicking(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
        setTimeout(() => setClicking(false), 400);
    };

    return (
        <>
            <button
                onClick={scrollToTop}
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
                aria-label="Back to top"
                title="Back to top"
                style={{
                    position: "fixed",
                    bottom: 24,
                    right: 24,
                    zIndex: 9999,
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    border: "1px solid rgba(99,102,241,0.45)",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: hovering
                        ? "linear-gradient(135deg, #6366f1, #8b5cf6)"
                        : "rgba(15,15,30,0.85)",
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                    boxShadow: hovering
                        ? "0 0 28px rgba(99,102,241,0.55), 0 8px 32px rgba(0,0,0,0.4)"
                        : "0 4px 20px rgba(0,0,0,0.35)",
                    transform: visible
                        ? clicking
                            ? "translateY(0) scale(0.9)"
                            : hovering
                                ? "translateY(-4px) scale(1.07)"
                                : "translateY(0) scale(1)"
                        : "translateY(80px) scale(0.7)",
                    opacity: visible ? 1 : 0,
                    pointerEvents: visible ? "auto" : "none",
                    transition:
                        "transform 0.35s cubic-bezier(0.34,1.56,0.64,1), opacity 0.35s ease, background 0.3s ease, box-shadow 0.3s ease",
                    outline: "none",
                }}
            >
                {/* Ripple ring on hover */}
                {hovering && (
                    <span
                        style={{
                            position: "absolute",
                            inset: -4,
                            borderRadius: "50%",
                            border: "1px solid rgba(99,102,241,0.4)",
                            animation: "btt-ping 1.2s ease-out infinite",
                            pointerEvents: "none",
                        }}
                    />
                )}

                {/* Arrow icon */}
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={hovering ? "#fff" : "#a5b4fc"}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                        transition: "stroke 0.3s ease, transform 0.3s ease",
                        transform: clicking ? "translateY(-3px)" : "translateY(0)",
                    }}
                >
                    <polyline points="18 15 12 9 6 15" />
                </svg>
            </button>

            <style>{`
        @keyframes btt-ping {
          0%   { transform: scale(1); opacity: 0.8; }
          80%  { transform: scale(1.55); opacity: 0; }
          100% { transform: scale(1.55); opacity: 0; }
        }
      `}</style>
        </>
    );
};

export default BackToTop;
