import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const certifications = [
  { title: "Java", issuer: "GeeksforGeeks", year: "2024" },
  { title: "Cloud Computing", issuer: "NPTEL", year: "2025" },
];

const training = {
  title: "Gokboru | Certificate",
  period: "Jun’ 25 – Jul’ 25",
  bullets: [
    "Mastered advanced paradigms of MERN Stack (MongoDB, Express.js, React.js, Node.js) through 6+ weeks of hands‑on learning",
    "Conceptualized, architected, and deployed real‑world web applications with production‑minded workflows",
    "Built and integrated end‑to‑end RESTful APIs, improving reliability and performance",
  ],
};

const CertificationsSection = () => (
  <section id="certifications" className="py-28 px-[6%] relative overflow-hidden" style={{ background: "hsl(210 67% 5%)" }}>
    <div className="absolute inset-0 pointer-events-none"
      style={{ background: "radial-gradient(ellipse at 0% 50%, hsl(192 100% 50% / 0.05) 0%, transparent 60%)" }} />

    <div className="flex flex-col items-start text-left mb-8">
      <SectionHeader eyebrow="// CREDENTIALS" title="CERTIFICATIONS & TRAINING" />
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[1100px] mx-auto items-stretch">
      <motion.div
        initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.8 }}>
        <div className="border border-border bg-arc-dim p-6 h-full flex flex-col">
          <div className="font-orbitron text-[0.68rem] tracking-[3px] text-arc uppercase mb-4">// CERTIFICATIONS</div>
          <div className="space-y-4 mt-1">
            {certifications.map((c) => (
              <div key={`${c.title}-${c.issuer}`} className="flex items-start justify-between p-4 border border-border hover:border-arc transition-colors gap-6">
                <div className="flex-1">
                  <div className="font-orbitron text-foreground">{c.title}</div>
                  <div className="font-mono text-xs text-text-dim tracking-[1px] mt-1">{c.issuer}</div>
                </div>
                <div className="font-mono text-xs text-arc whitespace-nowrap mt-0.5">{c.year}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}>
        <div className="border border-border bg-arc-dim p-6 h-full flex flex-col">
          <div className="font-orbitron text-[0.68rem] tracking-[3px] text-arc uppercase mb-4">// SUMMER TRAINING</div>
          <div className="p-4 border border-border hover:border-arc transition-colors">
            <div className="flex items-start justify-between gap-6">
              <div className="font-orbitron text-foreground">{training.title}</div>
              <div className="font-mono text-xs text-arc whitespace-nowrap mt-0.5">{training.period}</div>
            </div>
            <ul className="mt-3 list-disc pl-5 space-y-2">
              {training.bullets.map((b, i) => (
                <li key={i} className="font-mono text-xs text-text-dim tracking-[1px]">{b}</li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CertificationsSection;
