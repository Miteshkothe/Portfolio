import { useState, useEffect } from "react";

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handler = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <a href="#hero"
      className={`fixed bottom-8 right-8 w-[42px] h-[42px] border border-arc bg-arc-dim text-arc flex items-center justify-center font-orbitron text-base no-underline z-[999] btn-stark transition-all duration-300 hover:shadow-[0_0_25px_hsl(192_100%_50%_/_0.8)] ${show ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      style={{ boxShadow: "0 0 12px hsl(192 100% 50% / 0.4)" }}>
      ↑
    </a>
  );
};

export default BackToTop;
