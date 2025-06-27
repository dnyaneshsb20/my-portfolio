import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import SlidingIntro from '@/components/SlidingIntro';
import IntroSection from '@/components/IntroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import MiniProjectsSection from '@/components/MiniProjectsSection';
import ContactSection from '@/components/ContactSection';
import CertificationsPage from '@/components/CertificationsPage';
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();
  const [showIntro, setShowIntro] = useState(() => {
    // Show intro only if no hash in URL (like #projects)
    return !window.location.hash;
  });
  const [showCertifications, setShowCertifications] = useState(false);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  const handleCertificationsClick = () => {
    setShowCertifications(true);
  };

  const handleBackToPortfolio = () => {
    setShowCertifications(false);
  };

  // Scroll to specific section if URL has hash like "#projects"
  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth' });
        }, 100); // delay to allow DOM to load
      }
    }
  }, [location]);

  if (showIntro) {
    return <SlidingIntro onComplete={handleIntroComplete} />;
  }

  if (showCertifications) {
    return <CertificationsPage onBack={handleBackToPortfolio} />;
  }

  return (
    <div className="min-h-screen">
      <Header onCertificationsClick={handleCertificationsClick} />
      <IntroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <MiniProjectsSection />
      <ContactSection />
      <Footer/>
    </div>
  );
};

export default Index;
