import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const techStack = [
  "Java", "Spring Boot", "Python", "React", "Node.js", "JavaScript",
  "C++", "MongoDB", "MySQL", "Redis", "Docker", "Git",
  "Linux", "REST APIs", "JWT", "Postman", "Power BI", "Flask",
  "Scikit-learn", "Pandas", "NumPy", "NLTK",
];

const iconMap: Record<string, string> = {
  "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "Spring Boot": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "Redis": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "Linux": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  "Postman": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  "Flask": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  "Scikit-learn": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg",
  "Pandas": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
  "NumPy": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-28 px-[6%] relative overflow-hidden"
      style={{ background: "hsl(210 80% 3%)" }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 100% 50%, hsl(192 100% 50% / 0.04) 0%, transparent 60%)" }} />

      <SectionHeader eyebrow="// CAPABILITY_MATRIX" title="SYSTEMS SPECS" />

      <motion.div
        initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.8 }}
        className="max-w-[1100px] mx-auto">
        <div className="font-orbitron text-[0.68rem] tracking-[3px] text-arc uppercase mb-5">// TECH_STACK</div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {techStack.map((t) => {
            const icon = iconMap[t];
            return (
              <div key={t} className="p-4 border border-border bg-arc-dim flex items-center gap-3 hover:border-arc transition-colors">
                {icon ? (
                  <img src={icon} alt={t} className="w-6 h-6 object-contain" />
                ) : (
                  <div className="w-6 h-6 flex items-center justify-center font-orbitron text-xs text-arc">//</div>
                )}
                <span className="font-mono text-xs tracking-[1.5px] text-text-dim">{t}</span>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
