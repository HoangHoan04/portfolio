import { useEffect, useState } from "react";

const FullscreenToggle = () => {
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [hovering, setHovering] = useState(false);
    const [supported, setSupported] = useState(false);

    useEffect(() => {
        setSupported(!!document.documentElement.requestFullscreen);

        const onChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };
        document.addEventListener("fullscreenchange", onChange);
        return () => document.removeEventListener("fullscreenchange", onChange);
    }, []);

    const toggle = async () => {
        try {
            if (!document.fullscreenElement) {
                await document.documentElement.requestFullscreen();
            } else {
                await document.exitFullscreen();
            }
        } catch {
            // Browser may block fullscreen without user gesture or on unsupported env
        }
    };

    if (!supported) return null;

    return (
        <>
            <button
                onClick={toggle}
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
                aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
                title={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
                style={{
                    position: "fixed",
                    bottom: 82,  // sits directly above the BackToTop button (48px + 24px gap + 10px margin)
                    right: 24,
                    zIndex: 9999,
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    border: `1px solid ${isFullscreen ? "rgba(139,92,246,0.55)" : "rgba(99,102,241,0.45)"}`,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: hovering
                        ? isFullscreen
                            ? "linear-gradient(135deg, #8b5cf6, #ec4899)"
                            : "linear-gradient(135deg, #6366f1, #8b5cf6)"
                        : "rgba(15,15,30,0.85)",
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                    boxShadow: hovering
                        ? `0 0 28px ${isFullscreen ? "rgba(139,92,246,0.55)" : "rgba(99,102,241,0.55)"}, 0 8px 32px rgba(0,0,0,0.4)`
                        : "0 4px 20px rgba(0,0,0,0.35)",
                    transform: hovering ? "translateY(-4px) scale(1.07)" : "scale(1)",
                    transition:
                        "transform 0.3s cubic-bezier(0.34,1.56,0.64,1), opacity 0.3s ease, background 0.3s ease, box-shadow 0.3s ease, border 0.3s ease",
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
                            border: `1px solid ${isFullscreen ? "rgba(139,92,246,0.4)" : "rgba(99,102,241,0.4)"}`,
                            animation: "fs-ping 1.2s ease-out infinite",
                            pointerEvents: "none",
                        }}
                    />
                )}

                {/* Icon: enter fullscreen ↔ exit fullscreen */}
                {isFullscreen ? (
                    // Compress / exit icon
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={hovering ? "#fff" : "#a5b4fc"}
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ transition: "stroke 0.3s ease" }}
                    >
                        <polyline points="8 3 3 3 3 8" />
                        <polyline points="21 8 21 3 16 3" />
                        <polyline points="3 16 3 21 8 21" />
                        <polyline points="16 21 21 21 21 16" />
                        {/* inner arrows pointing in */}
                        <line x1="3" y1="3" x2="9" y2="9" />
                        <line x1="21" y1="3" x2="15" y2="9" />
                        <line x1="3" y1="21" x2="9" y2="15" />
                        <line x1="21" y1="21" x2="15" y2="15" />
                    </svg>
                ) : (
                    // Expand / enter icon
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={hovering ? "#fff" : "#a5b4fc"}
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ transition: "stroke 0.3s ease" }}
                    >
                        <polyline points="15 3 21 3 21 9" />
                        <polyline points="9 21 3 21 3 15" />
                        <line x1="21" y1="3" x2="14" y2="10" />
                        <line x1="3" y1="21" x2="10" y2="14" />
                    </svg>
                )}
            </button>

            <style>{`
        @keyframes fs-ping {
          0%   { transform: scale(1); opacity: 0.8; }
          80%  { transform: scale(1.55); opacity: 0; }
          100% { transform: scale(1.55); opacity: 0; }
        }
      `}</style>
        </>
    );
};

export default FullscreenToggle;
