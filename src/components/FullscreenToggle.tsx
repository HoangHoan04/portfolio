import { useEffect, useState } from "react";

interface FullscreenToggleProps {
  inline?: boolean;
}

const FullscreenToggle = ({ inline = false }: FullscreenToggleProps) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [supported, setSupported] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
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
        style={
          inline
            ? {
                // Inline style for header
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 36,
                height: 36,
                borderRadius: 8,
                border: `1px solid ${isFullscreen ? "rgba(139,92,246,0.5)" : hovering ? "rgba(99,102,241,0.4)" : "rgba(99,102,241,0.25)"}`,
                cursor: "pointer",
                background: hovering
                  ? isFullscreen
                    ? "linear-gradient(135deg, #8b5cf6, #ec4899)"
                    : "linear-gradient(135deg, #6366f1, #8b5cf6)"
                  : isFullscreen
                    ? "rgba(139,92,246,0.15)"
                    : "rgba(255,255,255,0.04)",
                color: isFullscreen
                  ? "#c4b5fd"
                  : hovering
                    ? "#a5b4fc"
                    : "#94a3b8",
                transform: hovering ? "scale(1.05)" : "scale(1)",
                boxShadow: hovering
                  ? `0 0 12px ${isFullscreen ? "rgba(139,92,246,0.4)" : "rgba(99,102,241,0.3)"}`
                  : isFullscreen
                    ? "0 0 8px rgba(139,92,246,0.25)"
                    : "none",
                transition: "all 0.25s cubic-bezier(0.4,0,0.2,1)",
                outline: "none",
              }
            : {
                // Fixed position style (original)
                position: "fixed",
                bottom: 82,
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
                transform: hovering
                  ? "translateY(-4px) scale(1.07)"
                  : "scale(1)",
                transition:
                  "transform 0.3s cubic-bezier(0.34,1.56,0.64,1), opacity 0.3s ease, background 0.3s ease, box-shadow 0.3s ease, border 0.3s ease",
                outline: "none",
              }
        }
      >
        {/* Ripple ring on hover */}
        {hovering && !inline && (
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
          // Exit fullscreen icon

          <i
            className="pi pi-window-minimize"
            style={{ fontSize: inline ? "16px" : "18px" }}
          />
        ) : (
          // Enter fullscreen icon
          <i
            className="pi pi-window-maximize"
            style={{ fontSize: inline ? "16px" : "18px" }}
          />
        )}
      </button>

      {!inline && (
        <style>{`
          @keyframes fs-ping {
            0%   { transform: scale(1); opacity: 0.8; }
            80%  { transform: scale(1.55); opacity: 0; }
            100% { transform: scale(1.55); opacity: 0; }
          }
        `}</style>
      )}
    </>
  );
};

export default FullscreenToggle;
