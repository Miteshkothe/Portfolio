import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const timeline = [
  {
    emoji: "🎓",
    period: "AUG 2023 — PRESENT",
    title: "B.TECH — COMPUTER SCIENCE",
    company: "// LOVELY PROFESSIONAL UNIVERSITY",
    desc: "Pursuing B.Tech in CSE with 8.57 CGPA. Active competitive programmer with 600+ problems solved across LeetCode, HackerRank, and Codeforces.",
  },
  {
    emoji: "🏫",
    period: "2022 — 2023",
    title: "INTERMEDIATE — SCIENCE",
    company: "// DHYANBHARTI JR COLLEGE OF SCIENCE AND ARTS",
    desc: "Completed intermediate studies with a focus on core science subjects and mathematics.",
  },
  {
    emoji: "🏫",
    period: "2020 — 2021",
    title: "MATRICULATION",
    company: "// KENDRIYA VIDYALAYA",
    desc: "Completed secondary education with strong fundamentals in science and mathematics.",
  },
];

const ExperienceSection = () => (
  <section id="experience" className="py-28 px-[6%]" style={{ background: "hsl(210 80% 3%)" }}>
    <SectionHeader eyebrow="// MISSION_LOG" title="JOURNEY" />

    <div className="max-w-[850px] mx-auto relative">
      {/* Timeline line */}
      <div className="absolute left-[18px] top-0 bottom-0 w-px"
        style={{ background: "linear-gradient(to bottom, hsl(192 100% 50%), hsl(192 100% 50% / 0.4), transparent)", boxShadow: "0 0 8px hsl(192 100% 50% / 0.4)" }} />

      {timeline.map((item, i) => (
        <motion.div
          key={i}
          className="grid grid-cols-[50px_1fr] gap-8 mb-14 group"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: i * 0.1 }}
        >
          <div className="w-[38px] h-[38px] border border-arc rounded-full bg-background flex items-center justify-center relative z-10 flex-shrink-0 transition-all duration-300 group-hover:bg-arc-dim group-hover:shadow-[0_0_25px_hsl(192_100%_50%_/_0.8)]"
            style={{ boxShadow: "0 0 15px hsl(192 100% 50% / 0.4)" }}>
            <span className="text-base">{item.emoji}</span>
          </div>
          <div className="pt-1">
            <div className="font-mono text-[0.65rem] text-arc tracking-[2px] mb-1">{item.period}</div>
            <div className="font-orbitron text-base font-bold tracking-[2px] mb-0.5" style={{ color: "#fff" }}>{item.title}</div>
            <div className="font-mono text-xs text-stark-red tracking-[2px] mb-3" style={{ color: "hsl(0 100% 63%)" }}>{item.company}</div>
            <p className="text-base leading-relaxed text-text-dim">{item.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default ExperienceSection;
