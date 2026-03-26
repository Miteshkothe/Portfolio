import { motion } from "framer-motion";

const SectionHeader = ({ eyebrow, title }: { eyebrow: string; title: string }) => (
  <motion.div
    className="flex items-start gap-6 mb-12"
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <div className="w-[3px] h-14 flex-shrink-0 mt-1"
      style={{ background: "linear-gradient(to bottom, hsl(192 100% 50%), transparent)" }} />
    <div>
      <div className="font-mono text-[0.68rem] text-arc tracking-[3px] mb-2">{eyebrow}</div>
      <h2 className="font-orbitron text-[clamp(1.7rem,4vw,2.6rem)] font-black tracking-[2px]"
        style={{ color: "#fff", textShadow: "0 0 30px hsl(192 100% 50% / 0.2)" }}>{title}</h2>
    </div>
  </motion.div>
);

export default SectionHeader;
