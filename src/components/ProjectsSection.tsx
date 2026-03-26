import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const projects = [
  {
    id: "SYS-001",
    title: "ONLINE EDITOR",
    desc: "Full-stack online code translator and compiler supporting 5+ languages with Docker-based sandboxed execution, JWT-secured APIs, and real-time code execution interface.",
    tags: ["Java", "Spring Boot", "Docker", "Next.js", "React", "MongoDB"],
    link: "https://github.com/Miteshkothe",
    gradient: "linear-gradient(135deg, #040c1e, #001228)",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1600&q=60",
  },
  {
    id: "SYS-002",
    title: "JOURNAL APP",
    desc: "Secure RESTful API platform with JWT + OAuth 2.0 authentication, MongoDB Atlas cloud storage, and modular architecture. Improved response latency by 20%.",
    tags: ["Spring Boot", "Spring Security", "MongoDB Atlas", "Redis", "JUnit"],
    link: "https://github.com/Miteshkothe",
    gradient: "linear-gradient(135deg, #0e0700, #180500)",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1600&q=60",
  },
  {
    id: "SYS-003",
    title: "HATE SPEECH DETECTOR",
    desc: "Web-based ML application using Flask to classify comments as hate or non-hate speech. Trained Logistic Regression model with TF-IDF vectorization for real-time predictions.",
    tags: ["Python", "Flask", "Scikit-learn", "NLTK", "Pandas"],
    link: "https://github.com/Miteshkothe",
    gradient: "linear-gradient(135deg, #060c18, #000e16)",
    image: "/hate-speech.jpg",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-28 px-[6%]" style={{ background: "hsl(210 67% 5%)" }}>
    <SectionHeader eyebrow="// ACTIVE_SYSTEMS" title="DEPLOYED PROJECTS" />

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
      {projects.map((p, i) => (
        <motion.div
          key={p.id}
          className="border border-border bg-card/85 relative overflow-hidden flex flex-col transition-all duration-300 hover:border-arc-mid hover:shadow-[0_0_30px_hsl(192_100%_50%_/_0.15)] hover:-translate-y-1 group"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: i * 0.15 }}
        >
          <div className="h-[180px] relative overflow-hidden">
            {p.image ? (
              <img
                src={p.image}
                alt={`${p.title} preview`}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  const img = e.currentTarget as HTMLImageElement;
                  const idx = Number(img.getAttribute("data-idx") || "0");
                  const candidates = [
                    "/images/hate-speech.jpg",
                    "/hate-speech.png",
                    "/images/hate-speech.png",
                    "/hate-speech.webp",
                    "/images/hate-speech.webp",
                  ];
                  img.setAttribute("data-idx", String(idx + 1));
                  img.src = candidates[idx] || "/placeholder.svg";
                }}
              />
            ) : (
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105" style={{ background: p.gradient }} />
            )}
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.45), rgba(0,0,0,0.15) 60%, rgba(0,0,0,0))" }} />
            <span className="absolute top-3 left-3 font-orbitron text-[0.58rem] text-arc-mid tracking-[2px]">{p.id}</span>
            <span className="absolute top-3 right-3 font-mono text-[0.58rem] tracking-[2px] text-green-status bg-green-status/10 border border-green-status/30 px-2 py-0.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-green-status rounded-full animate-blink-status" style={{ boxShadow: "0 0 6px hsl(145 100% 50%)" }} />
              LIVE
            </span>
          </div>

          <div className="p-7 flex-1 flex flex-col">
            <h3 className="font-orbitron text-base font-bold tracking-[2px] mb-2" style={{ color: "#fff" }}>{p.title}</h3>
            <p className="text-[0.95rem] leading-relaxed text-text-dim mb-5 flex-1">{p.desc}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {p.tags.map((t) => (
                <span key={t} className="font-mono text-[0.6rem] tracking-[1px] text-arc border border-border px-2 py-0.5">{t}</span>
              ))}
            </div>
            <a href={p.link} target="_blank" rel="noopener noreferrer"
              className="font-orbitron text-[0.62rem] tracking-[3px] text-arc no-underline inline-flex items-center gap-2 uppercase transition-all duration-300 hover:gap-4">
              VIEW ON GITHUB →
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default ProjectsSection;
