import { useState } from "react";
import BootScreen from "@/components/BootScreen";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import CertificationsSection from "@/components/CertificationsSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const Index = () => {
  const [booted, setBooted] = useState(false);

  return (
    <>
      {!booted && <BootScreen onComplete={() => setBooted(true)} />}

      {/* HUD Corners */}
      <div className="hud-corner tl" />
      <div className="hud-corner tr" />
      <div className="hud-corner bl" />
      <div className="hud-corner br" />

      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
      <BackToTop />
    </>
  );
};

export default Index;
