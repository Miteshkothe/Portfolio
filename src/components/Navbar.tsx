import { useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between px-6 md:px-12 py-4 border-b border-border"
      style={{ background: "linear-gradient(to bottom, hsl(210 80% 3% / 0.97), transparent)" }}>
      <div className="font-orbitron text-sm font-black text-arc tracking-[4px] flex items-center gap-3"
        style={{ textShadow: "0 0 20px hsl(192 100% 50% / 0.8)" }}>
        <div className="w-6 h-6 border-2 border-arc rounded-full relative inline-flex items-center justify-center"
          style={{ boxShadow: "0 0 10px hsl(192 100% 50% / 0.4), inset 0 0 8px hsl(192 100% 50% / 0.15)" }}>
          <span className="w-2.5 h-2.5 bg-arc rounded-full animate-arc-pulse"
            style={{ boxShadow: "0 0 8px hsl(192 100% 50% / 0.8)" }} />
        </div>
        Mitesh.Dev
      </div>

      <ul className={`${open ? 'flex' : 'hidden'} md:flex flex-col md:flex-row gap-5 md:gap-10 list-none absolute md:relative top-full left-0 right-0 md:top-auto bg-background/95 md:bg-transparent border-b md:border-0 border-border p-8 md:p-0`}>
        {navItems.map((item) => (
          <li key={item.label}>
            <a href={item.href} onClick={() => setOpen(false)}
              className="font-orbitron text-[0.6rem] tracking-[3px] uppercase text-text-dim no-underline transition-all duration-300 hover:text-arc relative group">
              <span className="text-arc opacity-0 group-hover:opacity-100 transition-opacity mr-1">//</span>
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="hidden md:flex items-center gap-2 font-mono text-[0.6rem] text-arc-mid tracking-[1px]">
        <span className="w-1.5 h-1.5 bg-green-status rounded-full animate-blink-status"
          style={{ boxShadow: "0 0 8px hsl(145 100% 50%)" }} />
        ONLINE
      </div>

      <button className="flex md:hidden flex-col gap-[5px] cursor-pointer" onClick={() => setOpen(!open)}>
        <span className="w-6 h-px bg-arc block" style={{ boxShadow: "0 0 4px hsl(192 100% 50%)" }} />
        <span className="w-6 h-px bg-arc block" style={{ boxShadow: "0 0 4px hsl(192 100% 50%)" }} />
        <span className="w-6 h-px bg-arc block" style={{ boxShadow: "0 0 4px hsl(192 100% 50%)" }} />
      </button>
    </nav>
  );
};

export default Navbar;
