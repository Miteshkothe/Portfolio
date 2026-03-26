import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import ArcReactorSVG from "./ArcReactorSVG";

const ContactSection = () => (
  <section id="contact" className="py-28 px-[6%] relative overflow-hidden" style={{ background: "hsl(210 67% 5%)" }}>
    <div className="absolute inset-0 pointer-events-none"
      style={{ background: "radial-gradient(ellipse at 50% 100%, hsl(192 100% 50% / 0.06) 0%, transparent 60%)" }} />

    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(600px,80vw)] h-[min(600px,80vw)] opacity-[0.04] pointer-events-none">
      <ArcReactorSVG />
    </div>

    <div className="flex flex-col items-center text-center mb-12">
      <SectionHeader eyebrow="// OPEN_COMMS" title="INITIATE CONTACT" />
    </div>

    <div className="max-w-[700px] mx-auto text-center relative z-10">
      <motion.p
        className="text-lg leading-relaxed text-text-dim mb-12"
        initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.8 }}>
        Systems online. Whether you're building a team, launching a project, or want to discuss backend architecture — open a channel. All transmissions answered.
      </motion.p>

      <motion.div
        className="flex justify-center gap-4 flex-wrap"
        initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
        {[
          { label: "Email", href: "mailto:miteshkothe97@gmail.com", icon: "M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" },
          { label: "GitHub", href: "https://github.com/Miteshkothe", icon: "M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17 6.8 18 7.1 18 7.1c.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3" },
          { label: "LinkedIn", href: "https://www.linkedin.com/in/Miteshkothe", icon: "M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46C23.21 24 24 23.23 24 22.27V1.73C24 .77 23.21 0 22.23 0z" },
        ].map((c) => (
          <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer"
            className="btn-stark inline-flex items-center gap-2.5 no-underline text-arc border border-border bg-arc-dim px-7 py-4 font-orbitron text-[0.62rem] tracking-[3px] uppercase transition-all duration-300 hover:bg-arc-dim hover:border-arc hover:shadow-[0_0_20px_hsl(192_100%_50%_/_0.4)]">
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current"><path d={c.icon} /></svg>
            {c.label}
          </a>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
