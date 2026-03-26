import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bootLines = [
  "JVM RUNTIME — READY",
  "SPRING BOOT CONTEXT — STARTING",
  "DB LINK (MySQL/MongoDB) — ONLINE",
  "API GATEWAY — SECURED WITH JWT",
  "DOCKER ENGINE — DAEMON ACTIVE",
];

const BootScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onComplete, 600);
    }, 3200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[99998] flex flex-col items-center justify-center gap-6"
          style={{ background: "hsl(210 80% 3%)" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Reactor */}
          <div className="relative w-[200px] h-[200px] rounded-full flex items-center justify-center">
            <div className="absolute w-[200px] h-[200px] rounded-full opacity-60"
              style={{ background: "radial-gradient(circle, hsl(192 100% 50% / 0.15), transparent 70%)", filter: "blur(20px)" }} />
            <motion.div
              className="absolute w-[150px] h-[150px] rounded-full"
              style={{
                background: "repeating-conic-gradient(#e6ffff 0deg 18deg, transparent 18deg 30deg)",
                mask: "radial-gradient(circle, transparent 45px, black 46px)",
                boxShadow: "0 0 20px #00d4ff, inset 0 0 10px #00d4ff",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute w-[100px] h-[100px] rounded-full border-4 border-arc"
              style={{ boxShadow: "0 0 20px #00d4ff, inset 0 0 12px #00d4ff" }} />
            <motion.div
              className="w-[50px] h-[50px] rounded-full"
              style={{ background: "#fff", boxShadow: "0 0 20px #00d4ff, 0 0 60px #00d4ff, inset 0 0 15px #00d4ff" }}
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>

          <div className="font-orbitron text-[2.5rem] font-black text-arc tracking-[8px]"
            style={{ textShadow: "0 0 40px hsl(192 100% 50% / 0.8)" }}>
            Mitesh.Dev
          </div>
          <div className="font-mono text-xs text-arc-mid tracking-[2px]">
            SDE CONSOLE — INITIALIZING
          </div>

          <div className="flex flex-col gap-1.5 w-[340px]">
            {bootLines.map((line, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-3 font-mono text-[0.62rem] text-text-dim tracking-[1px]"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.5, duration: 0.3 }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green-status flex-shrink-0 animate-blink-status"
                  style={{ boxShadow: "0 0 8px hsl(145 100% 50%)" }} />
                {line}
              </motion.div>
            ))}
          </div>

          <div className="w-[340px] h-[2px] bg-border overflow-hidden">
            <div className="h-full bg-arc animate-boot-load"
              style={{ boxShadow: "0 0 10px hsl(192 100% 50%)" }} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BootScreen;
