"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Terminal, Cpu, HardDrive, ShieldCheck, 
  Activity, Radio, ChevronRight, Binary 
} from "lucide-react";

export function StartScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [visibleLogs, setVisibleLogs] = useState<number>(0);
  const [isReady, setIsReady] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [randomHex, setRandomHex] = useState("0x000000");

  const logs = [
    { text: "CORE::BIOS_INIT_SEQUENCE_START", icon: Cpu },
    { text: "SYSTEM::ATTACHING_VIRTUAL_KERNELS...", icon: Terminal },
    { text: "MODULE::LOADED_FRAMEWORKS [React, Next.js, TS]", icon: Binary },
    { text: "DB::CONNECTING_LOCAL_INSTANCE_POSTGRES...", icon: HardDrive },
    { text: "DB::HANDSHAKE_SUCCESSFUL [PORT_5432]", icon: HardDrive },
    { text: "SECURE::FIREWALL_ACTIVE_LEVEL_A", icon: ShieldCheck },
    { text: "SYSTEM::BOOT_LOAD_COMPLETE_SUCCESS", icon: Activity },
  ];

  // 1. Progress count-up and hex generation
  useEffect(() => {
    const duration = 3800; // Increased load time to 3.8 seconds
    const start = performance.now();
    let raf: number;

    const tick = (now: number) => {
      const elapsed = now - start;
      const p = Math.min((elapsed / duration) * 100, 100);
      setProgress(p);

      // Generate random cyber hex codes
      setRandomHex("0x" + Math.floor(Math.random() * 16777215).toString(16).toUpperCase().padStart(6, "0"));

      if (p < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setIsReady(true);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // 2. Log timing
  useEffect(() => {
    if (visibleLogs >= logs.length) return;
    const delay = 3400 / logs.length;
    const timer = setTimeout(() => {
      setVisibleLogs((prev) => prev + 1);
    }, delay);
    return () => clearTimeout(timer);
  }, [visibleLogs, logs.length]);

  // 3. Listen for Enter key to trigger exit when ready
  useEffect(() => {
    if (!isReady) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        setIsFinished(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isReady]);

  // 4. Finish sequence callback
  useEffect(() => {
    if (isFinished) {
      const timer = setTimeout(onComplete, 600);
      return () => clearTimeout(timer);
    }
  }, [isFinished, onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#060608] font-mono text-xs select-none"
        >
          {/* Futuristic blueprint matrix lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00f0ff03_1px,transparent_1px),linear-gradient(to_bottom,#00f0ff03_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#000_100%)] pointer-events-none" />

          {/* Holographic Glowing CRT Scanline sweep */}
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-cyan-500/5 to-transparent bg-[size:100%_12px] pointer-events-none opacity-40 animate-pulse" />

          {/* System Control Dashboard Terminal */}
          <div className="relative z-10 w-full max-w-2xl mx-4 border border-cyan-500/20 bg-[#09090d]/80 backdrop-blur-xl p-6 shadow-[0_0_50px_rgba(6,182,212,0.15)] rounded-none overflow-hidden">
            {/* Corner Decorative Target Marks */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-cyan-500/60" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-cyan-500/60" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-cyan-500/60" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-cyan-500/60" />

            {/* Top Stats Banner */}
            <div className="flex items-center justify-between border-b border-cyan-500/10 pb-4 mb-5">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                <span className="font-extrabold tracking-widest text-cyan-400 text-[10px]">HOANGHOAN::SYSTEM_BOOT</span>
              </div>
              <div className="flex items-center gap-4 text-[10px] text-zinc-500">
                <span className="flex items-center gap-1"><Radio className="size-3 text-cyan-500 animate-pulse" /> ADDR: {randomHex}</span>
                <span>VER: 2.10.8</span>
              </div>
            </div>

            {/* Split Dashboard Area */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
              {/* Left & Middle: Scrolling Diagnostic Log */}
              <div className="md:col-span-2 space-y-2.5 min-h-[160px] bg-black/40 p-4 border border-cyan-500/5">
                {logs.slice(0, visibleLogs).map((log, index) => {
                  const Icon = log.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center gap-3 text-zinc-300"
                    >
                      <span className="text-cyan-400 shrink-0">
                        <Icon className="size-3.5" />
                      </span>
                      <span className="text-zinc-600 text-[10px]">[{(index * 13).toString(16).toUpperCase().padStart(2, "0")}]</span>
                      <span className="tracking-wide truncate text-[11px]">{log.text}</span>
                    </motion.div>
                  );
                })}
                {visibleLogs < logs.length && (
                  <div className="flex items-center gap-1 text-cyan-400 animate-pulse">
                    <ChevronRight className="size-3.5" />
                    <span className="w-1.5 h-3.5 bg-cyan-400" />
                  </div>
                )}
              </div>

              {/* Right: Hardware Monitor Column */}
              <div className="flex flex-col justify-between border border-cyan-500/5 bg-black/20 p-4 space-y-4">
                {/* Dial/Stat 1 */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] text-zinc-500">
                    <span>CPU LOAD</span>
                    <span className="text-cyan-400 font-bold">{Math.round(progress * 0.73)}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-zinc-900 overflow-hidden">
                    <div className="h-full bg-cyan-500 transition-[width] duration-150" style={{ width: `${progress * 0.73}%` }} />
                  </div>
                </div>

                {/* Dial/Stat 2 */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] text-zinc-500">
                    <span>RAM STACK</span>
                    <span className="text-cyan-400 font-bold">{Math.round(progress * 0.48 + 20)}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-zinc-900 overflow-hidden">
                    <div className="h-full bg-cyan-500 transition-[width] duration-150" style={{ width: `${progress * 0.48 + 20}%` }} />
                  </div>
                </div>

                {/* Status Readouts */}
                <div className="pt-2 border-t border-cyan-500/5 space-y-1 text-[9px] text-zinc-500">
                  <div className="flex justify-between">
                    <span>MEM_ALLOC:</span>
                    <span className="text-zinc-400">SECURE</span>
                  </div>
                  <div className="flex justify-between">
                    <span>NET_PING:</span>
                    <span className="text-cyan-400 animate-pulse">12ms</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Cyber Progress Loading Bar / Boot Prompt */}
            <div className="border-t border-cyan-500/10 pt-4 flex flex-col gap-2">
              <div className="flex justify-between text-[10px] text-zinc-500 font-bold tracking-wider">
                <span>{isReady ? "BOOT LOADER READY" : "INITIALIZING SYSTEM DRIVERS"}</span>
                <span className="text-cyan-400">{Math.round(progress)}%</span>
              </div>
              
              {isReady ? (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="flex items-center justify-center h-5 border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 font-bold tracking-widest text-[10px]"
                >
                  &gt;&gt; PRESS ENTER TO BOOT SYSTEM &lt;&lt;
                </motion.div>
              ) : (
                <div className="relative h-2 w-full bg-zinc-950/80 border border-cyan-500/10 p-0.5 overflow-hidden">
                  <div 
                    className="h-full bg-linear-to-r from-cyan-600 via-cyan-400 to-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.6)] transition-[width] duration-100 ease-out" 
                    style={{ width: `${progress}%` }}
                  />
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
