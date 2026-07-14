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

// Show intro only on first ever page load per session (not on SPA navigation)
const Index = () => {
  const location = useLocation();
  const [showIntro, setShowIntro] = useState(() => {
    // If arrived here via SPA navigation (state set), skip intro
    if (location.state?.scrollTo || location.state?.skipIntro) return false;
    // If arrived via hash (e.g. /#projects back button), skip intro
    if (window.location.hash) return false;
    // If already played this session, skip intro
    if (sessionStorage.getItem('introPlayed')) return false;
    // Show intro on fresh page load
    return true;
  });
  const [showCertifications, setShowCertifications] = useState(false);

  const handleIntroComplete = () => {
    sessionStorage.setItem('introPlayed', 'true');
    setShowIntro(false);
  };

  const handleCertificationsClick = () => {
    setShowCertifications(true);
  };

  const handleBackToPortfolio = () => {
    setShowCertifications(false);
  };

  // Scroll to section from location.state or hash (back buttons from project pages)
  useEffect(() => {
    if (showIntro) return;
    const scrollTarget = location.state?.scrollTo;
    const hashTarget = location.hash?.replace('#', '');
    const target = scrollTarget || hashTarget;
    if (target) {
      setTimeout(() => {
        const el = document.getElementById(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location.state, location.hash, showIntro]);

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
