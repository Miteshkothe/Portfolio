import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const AboutSection = () => (
  <section id="about" className="py-28 px-[6%] relative"
    style={{ background: "linear-gradient(180deg, hsl(210 80% 3%) 0%, hsl(210 67% 5%) 100%)" }}>
    <SectionHeader eyebrow="// IDENTITY_FILE" title="PROFILE" />

    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-8 max-w-[1100px] mt-4">
      <motion.div
        initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.8 }}>
        <div className="bg-card/85 border border-border relative overflow-hidden p-8 text-center panel-glow">
          {/* Corner brackets */}
          {["top-1.5 left-1.5 border-t border-l", "top-1.5 right-1.5 border-t border-r",
            "bottom-1.5 left-1.5 border-b border-l", "bottom-1.5 right-1.5 border-b border-r"].map((c, i) => (
            <div key={i} className={`absolute w-4 h-4 border-arc opacity-60 ${c}`} />
          ))}

          <div className="w-[250px] h-[300px] border border-border mx-auto mb-5 relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, hsl(210 60% 10% / 0.7), hsl(20 50% 5% / 0.7))" }}>
            <img
              src="/photo.jpeg"
              alt="Profile"
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => {
                const img = e.currentTarget as HTMLImageElement;
                const idx = Number(img.getAttribute("data-idx") || "0");
                const candidates = [
                  "/images/photo.jpeg",
                  "/profile.jpg",
                  "/images/profile.jpg",
                  "/profile.png",
                  "/images/profile.png",
                  "/profile.webp",
                  "/images/profile.webp",
                ];
                img.setAttribute("data-idx", String(idx + 1));
                img.src = candidates[idx] || "/placeholder.svg";
              }}
            />
            <div className="absolute left-0 right-0 h-[2px] animate-scan-line"
              style={{ background: "linear-gradient(to right, transparent, hsl(192 100% 50%), transparent)", boxShadow: "0 0 10px hsl(192 100% 50%)" }} />
          </div>

          <div className="font-orbitron text-lg font-bold tracking-[3px] mb-1" style={{ color: "#fff" }}>MITESH KOTHE</div>
          <div className="font-mono text-[0.68rem] text-arc tracking-[2px] mb-5">// BACKEND ENGINEER</div>

          <div className="text-left border-t border-border pt-4 space-y-0">
            {[
              ["Location", "Punjab, India"],
              ["University", "LPU"],
              ["Status", "AVAILABLE"],
              ["CGPA", "8.57"],
            ].map(([key, val]) => (
              <div key={key} className="flex justify-between py-1.5 border-b border-arc-dim text-sm">
                <span className="font-mono text-text-dim tracking-[1px]">{key}</span>
                <span className={`font-semibold ${key === "Status" ? "text-green-status" : "text-arc"}`}>{val}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
        <div className="space-y-5">
          <p className="text-lg leading-relaxed text-text-dim">
            Hi, <em className="text-arc not-italic">I'm Mitesh</em> — a Computer Science student at{" "}
            <strong className="text-foreground">Lovely Professional University</strong> with a strong focus on backend engineering and data-driven systems.
          </p>
          <p className="text-lg leading-relaxed text-text-dim">
            I design and build API‑first services using <em className="text-arc not-italic">Java, Spring Boot, and Python</em>. My work emphasizes clean architecture, secure authentication with JWT, and reliable data layers on <em className="text-arc not-italic">MySQL and MongoDB</em>.
          </p>
          <p className="text-lg leading-relaxed text-text-dim">
            On the infrastructure side, I containerize apps with <em className="text-arc not-italic">Docker</em>, follow Git‑based workflows, and keep projects easy to run and iterate. I also explore practical machine learning for classification and analytics with <em className="text-arc not-italic">pandas</em> and <em className="text-arc not-italic">scikit‑learn</em>.
          </p>
          <p className="text-lg leading-relaxed text-text-dim">
            I enjoy tackling complex problems — I’ve solved <strong className="text-foreground">600+ coding challenges</strong> across platforms, and maintain a <em className="text-arc not-italic">1500+ LeetCode rating</em>. My goal is to translate that problem‑solving mindset into robust, production‑grade systems.
          </p>
          <p className="text-lg leading-relaxed text-text-dim">
            Currently, I’m refining service reliability, performance, and observability while building real‑world projects and I’m open to opportunities that let me contribute to high‑impact backend systems.
          </p>
        </div>

        

        
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
