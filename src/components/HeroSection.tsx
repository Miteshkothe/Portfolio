import { motion } from "framer-motion";
import ArcReactorSVG from "./ArcReactorSVG";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6 },
});

const HeroSection = () => (
  <section id="hero" className="min-h-screen flex items-center relative overflow-hidden"
    style={{ background: "radial-gradient(ellipse at 25% 50%, hsl(210 67% 12% / 0.9) 0%, hsl(210 80% 3%) 70%)" }}>
    
    {/* Grid bg */}
    <div className="absolute inset-0 animate-grid-drift opacity-40"
      style={{
        backgroundImage: "linear-gradient(hsl(192 100% 50% / 0.08) 1px, transparent 1px), linear-gradient(90deg, hsl(192 100% 50% / 0.08) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
        maskImage: "radial-gradient(ellipse at 30% 50%, rgba(0,0,0,0.5) 0%, transparent 65%)",
      }} />

    {/* Repulsors */}
    <div className="absolute w-28 h-28 top-[22%] left-[1%] rounded-full animate-repulsor-pulse"
      style={{ background: "radial-gradient(circle, hsl(192 100% 50% / 0.12) 0%, transparent 70%)" }} />
    <div className="absolute w-20 h-20 bottom-[28%] left-[1%] rounded-full animate-repulsor-pulse"
      style={{ background: "radial-gradient(circle, hsl(192 100% 50% / 0.08) 0%, transparent 70%)", animationDelay: "1.5s" }} />

    {/* Arc reactor decorative */}
    <div className="absolute right-[3%] bottom-[8%] w-[min(180px,16vw)] aspect-square opacity-55 animate-helmet-float">
      <ArcReactorSVG />
    </div>

    <div className="relative z-10 px-[6%] w-full">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        <div>
          <motion.div {...fadeUp(0.2)} className="font-mono text-xs text-arc tracking-[3px] mb-5">
            SYS_BOOT <span className="text-text-dim">///</span> PORTFOLIO_v4.1 <span className="text-text-dim">///</span> ONLINE
          </motion.div>
          <motion.h1 {...fadeUp(0.4)} className="font-orbitron text-[clamp(2.8rem,7vw,5.2rem)] font-black leading-[0.95] tracking-tight mb-2"
            style={{ color: "#fff", textShadow: "0 0 60px hsl(192 100% 50% / 0.25)" }}>
            Mitesh <span className="text-arc" style={{ textShadow: "0 0 30px hsl(192 100% 50% / 0.8), 0 0 60px hsl(192 100% 50% / 0.4)" }}>Kothe</span>
          </motion.h1>
          <motion.p {...fadeUp(0.55)} className="font-orbitron text-[0.85rem] md:text-[0.95rem] font-medium text-arc-mid tracking-[3px] uppercase mb-4">
            Backend Engineer · Data Science
          </motion.p>
          <motion.p {...fadeUp(0.7)} className="text-base md:text-lg font-light leading-relaxed text-text-dim max-w-[520px] mb-8">
            I build scalable backends with <span className="text-arc">Java, Spring Boot & Python</span> — focused on real‑time APIs and containers.
          </motion.p>
          <motion.div {...fadeUp(0.9)} className="flex gap-4 flex-wrap">
            <a href="#projects" className="btn-stark font-orbitron text-[0.68rem] tracking-[3px] uppercase no-underline text-background bg-arc px-9 py-4 transition-shadow hover:shadow-[0_0_40px_hsl(192_100%_50%_/_0.8)]"
              style={{ boxShadow: "0 0 20px hsl(192 100% 50% / 0.4)" }}>
              View Projects
            </a>
            <a href="#contact" className="btn-stark font-orbitron text-[0.68rem] tracking-[3px] uppercase no-underline text-arc border border-arc px-9 py-4 transition-all hover:bg-arc-dim hover:shadow-[0_0_20px_hsl(192_100%_50%_/_0.4)]">
              Contact
            </a>
          </motion.div>
          <motion.div {...fadeUp(1.05)} className="flex gap-8 mt-8 flex-wrap">
            {[
              { val: "600+", label: "Problems Solved" },
              { val: "3+", label: "Projects Built" },
              { val: "8.57", label: "CGPA" },
            ].map((m) => (
              <div key={m.label} className="text-left border-l-2 border-arc pl-4">
                <span className="font-orbitron text-2xl font-bold text-arc block leading-none"
                  style={{ textShadow: "0 0 15px hsl(192 100% 50% / 0.8)" }}>{m.val}</span>
                <span className="text-[0.62rem] tracking-[2px] text-text-dim uppercase">{m.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
          className="justify-self-center">
          <div className="bg-card/85 border border-border relative overflow-hidden p-6 panel-glow w-[min(360px,80vw)]">
            {["top-1.5 left-1.5 border-t border-l", "top-1.5 right-1.5 border-t border-r",
              "bottom-1.5 left-1.5 border-b border-l", "bottom-1.5 right-1.5 border-b border-r"].map((c, i) => (
              <div key={i} className={`absolute w-4 h-4 border-arc opacity-60 ${c}`} />
            ))}
            <div className="w-full h-[360px] border border-border mx-auto relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, hsl(210 60% 10% / 0.7), hsl(20 50% 5% / 0.7))" }}>
              <img
                src="/photo.jpeg"
                alt="Profile"
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                  const img = e.currentTarget as HTMLImageElement;
                  img.onerror = null;
                  img.src = "/placeholder.svg";
                }}
              />
              <div className="absolute left-0 right-0 h-[2px] animate-scan-line"
                style={{ background: "linear-gradient(to right, transparent, hsl(192 100% 50%), transparent)", boxShadow: "0 0 10px hsl(192 100% 50%)" }} />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
