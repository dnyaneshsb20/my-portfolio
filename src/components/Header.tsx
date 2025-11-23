import { useState } from 'react';
import React from "react";
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BadgeCheck, Boxes, Briefcase, Download, FileText, FolderKanban, GraduationCap, Mail, Menu, Sparkles, Trophy, User, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import logo from "../assets/certificates/favicon.png";
import Achievements from '@/pages/Achievements';
import { MdContacts } from "react-icons/md";
import { IoBookSharp } from "react-icons/io5";

interface HeaderProps {
  onCertificationsClick: () => void;
}

const Header = ({ onCertificationsClick }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    if (window.location.pathname === '/') {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { state: { scrollTo: sectionId } });
    }
    setIsMenuOpen(false);
  };

  const handleCertificationsClick = () => {
    navigate('/certifications');
    setIsMenuOpen(false);
  };

  const handleEducationClick = () => {
    navigate('/education');
    setIsMenuOpen(false);
  };

  const handleExperienceClick = () => {
    navigate('/experience');
    setIsMenuOpen(false);
  };

  const handlePublicationsClick = () => {
    navigate('/publications');
    setIsMenuOpen(false);
  };

  const handleAchievementsClick = () => {
    navigate('/achievements');
    setIsMenuOpen(false);
  };

  const handleViewResume = () => {
    window.open('https://drive.google.com/file/d/1F1F8DQ9IEabRCIoiiferoCTQd82xDJM8/view?usp=sharing', '_blank');
    setIsMenuOpen(false);
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1F1F8DQ9IEabRCIoiiferoCTQd82xDJM8';
    link.download = 'Dnyanesh_Santosh_Badave.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsMenuOpen(false);
  };

  const menuItems = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Mini Projects', id: 'mini-projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Education', id: 'edu' },
    { label: 'Achievements', id: 'ach' },
    { id: "publications", label: "Publications" },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          {/* Mobile hamburger button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden mr-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>

          {/* Logo */}
          <div
            className="cursor-pointer"
            onClick={() => scrollToSection("intro")}
          >
            <div className="h-11 w-11 text-[17px] rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold shadow-md
                            dark:bg-white dark:text-black">
              DB
            </div>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            {menuItems.map((item) => {
              const iconMap: any = {
                About: <User />,
                Skills: <Sparkles />,
                Projects: <FolderKanban />,
                "Mini Projects": <Boxes />,
                Experience: <Briefcase />,
                Education: <GraduationCap />,
                Achievements: <Trophy />,
                Publications: <IoBookSharp />,
                Contact: <MdContacts />,
              };

              // Education
              if (item.label === "Education") {
                return (
                  <React.Fragment key="education-achievements">
                    <button
                      onClick={handleEducationClick}
                      className="group flex items-center overflow-hidden rounded-xl bg-transparent border border-muted/20 px-3 py-2
            transition-all duration-300 ease-in-out hover:bg-primary hover:text-white hover:w-32 w-12
            dark:hover:bg-white"
                    >
                      <span className="flex-shrink-0">
                        {React.cloneElement(iconMap[item.label], {
                          className:
                            "text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors duration-300"
                        })}
                      </span>
                      <span
                        className="ml-3 opacity-0 group-hover:opacity-100 whitespace-nowrap 
              transform translate-x-3 group-hover:translate-x-0 transition-all duration-300 text-white dark:text-black"
                      >
                        {item.label}
                      </span>
                    </button>
                  </React.Fragment>
                );
              }

              // Publications
              if (item.label === "Publications") {
                return (
                  <button
                    key="publications-desktop"
                    onClick={handlePublicationsClick}
                    className="group flex items-center hover:justify-center overflow-hidden rounded-xl bg-transparent border border-muted/20 px-3 py-2
      transition-all duration-300 ease-in-out hover:bg-primary hover:text-white hover:w-44 w-12
      dark:hover:bg-white"
                  >
                    <span className="flex-shrink-0">
                      {React.cloneElement(<IoBookSharp />, {
                        className:
                          "text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors duration-300"
                      })}
                    </span>
                    <span
                      className="ml-3 opacity-0 group-hover:opacity-100 whitespace-nowrap 
        transform translate-x-3 group-hover:translate-x-0 transition-all duration-300 text-white dark:text-black"
                    >
                      Publications
                    </span>
                  </button>
                );
              }

              // Achievements
              if (item.label === "Achievements") {
                return (
                  <button
                    onClick={handleAchievementsClick}
                    className="group flex items-center overflow-hidden rounded-xl bg-transparent border border-muted/20 px-3 py-2
          transition-all duration-300 ease-in-out hover:bg-black hover:text-white hover:w-40 w-12
          dark:hover:bg-white"
                  >
                    <span className="flex-shrink-0">
                      {React.cloneElement(iconMap[item.label], {
                        className:
                          "text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors duration-300"
                      })}
                    </span>
                    <span
                      className="ml-3 opacity-0 group-hover:opacity-100 whitespace-nowrap 
              transform translate-x-3 group-hover:translate-x-0 transition-all duration-300 text-white dark:text-black"
                    >
                      {item.label}
                    </span>
                  </button>
                );
              }

              // Experience
              if (item.label === "Experience") {
                return (
                  <button
                    onClick={handleExperienceClick}
                    className="group flex items-center overflow-hidden rounded-xl bg-transparent border border-muted/20 px-3 py-2
          transition-all duration-300 ease-in-out hover:bg-primary hover:text-white hover:w-[135px] w-12
          dark:hover:bg-white"
                  >
                    <span className="flex-shrink-0">
                      {React.cloneElement(iconMap[item.label], {
                        className:
                          "text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors duration-300"
                      })}
                    </span>
                    <span
                      className="ml-3 opacity-0 group-hover:opacity-100 whitespace-nowrap 
              transform translate-x-3 group-hover:translate-x-0 transition-all duration-300 text-white dark:text-black"
                    >
                      {item.label}
                    </span>
                  </button>
                );
              }

              // All other menu items
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="group flex items-center hover:justify-center overflow-hidden rounded-xl bg-transparent border border-muted/20 px-3 py-2
        transition-all duration-300 ease-in-out hover:bg-primary hover:text-white hover:w-36 w-12
        dark:hover:bg-white"
                >
                  <span className="flex-shrink-0">
                    {React.cloneElement(iconMap[item.label], {
                      className:
                        "text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors duration-300"
                    })}
                  </span>
                  <span
                    className="ml-3 opacity-0 group-hover:opacity-100 whitespace-nowrap 
          transform translate-x-3 group-hover:translate-x-0 transition-all duration-300 text-white dark:text-black"
                  >
                    {item.label}
                  </span>
                </button>
              );
            })}

            {/* Certifications */}
            <button
              onClick={handleCertificationsClick}
              className="group flex items-center hover:justify-center overflow-hidden rounded-xl bg-transparent border border-muted/20 px-3 py-2
      transition-all duration-300 ease-in-out hover:bg-primary hover:text-white hover:w-44 w-12 dark:hover:bg-white"
            >
              <span className="flex-shrink-0">
                {React.cloneElement(<BadgeCheck className="w-5 h-5" />, {
                  className:
                    "text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors duration-300"
                })}
              </span>
              <span
                className="ml-3 opacity-0 group-hover:opacity-100 whitespace-nowrap 
      transform translate-x-3 group-hover:translate-x-0 transition-all duration-300 text-white dark:text-black"
              >
                Certifications
              </span>
            </button>

            {/* My Resume */}
            <button
              onClick={handleViewResume}
              className="group flex items-center hover:justify-center overflow-hidden rounded-xl bg-transparent border border-muted/20 px-3 py-2
      transition-all duration-300 ease-in-out hover:bg-primary hover:text-white hover:w-40 w-12 dark:hover:bg-white"
            >
              <span className="flex-shrink-0">
                {React.cloneElement(<FileText className="w-5 h-5" />, {
                  className:
                    "text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors duration-300"
                })}
              </span>
              <span
                className="ml-3 opacity-0 group-hover:opacity-100 whitespace-nowrap 
      transform translate-x-3 group-hover:translate-x-0 transition-all duration-300 text-white dark:text-black"
              >
                My Resume
              </span>
            </button>

            {/* Download Resume */}
            <button
              onClick={handleDownloadResume}
              className="group flex items-center hover:justify-center overflow-hidden rounded-xl border border-muted/20 px-3 py-2
      transition-all duration-300 ease-in-out hover:bg-primary hover:text-white hover:w-52 w-12 dark:hover:bg-white"
            >
              <span className="flex-shrink-0">
                {React.cloneElement(<Download className="w-5 h-5" />, {
                  className:
                    "text-black dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors duration-300"
                })}
              </span>
              <span
                className="ml-3 opacity-0 group-hover:opacity-100 whitespace-nowrap 
      transform translate-x-3 group-hover:translate-x-0 transition-all duration-300 text-white dark:text-black"
              >
                Download Resume
              </span>
            </button>

            <ThemeToggle />
          </div>

        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t">
            <div className="flex flex-col space-y-4 pt-4">
              {menuItems.map((item) => {
                if (item.label === 'Education') {
                  return (
                    <>
                      <button
                        key={item.id}
                        onClick={handleEducationClick}
                        className="text-left text-foreground hover:text-primary transition-colors"
                      >
                        {item.label}
                      </button>

                      {/* 👇 Add Achievements right after Education */}
                      <button
                        key="achievements-mobile"
                        onClick={handleAchievementsClick}
                        className="text-left text-foreground hover:text-primary transition-colors"
                      >
                        Achievements
                      </button>
                    </>
                  );
                }
                if (item.label === 'Experience') {
                  return (
                    <button
                      key={item.id}
                      onClick={handleExperienceClick}
                      className="text-left text-foreground hover:text-primary transition-colors"
                    >
                      {item.label}
                    </button>
                  );
                }
                if (item.label === "Publications") {
                  return (
                    <button
                      key={item.id}
                      onClick={handlePublicationsClick}
                      className="text-left text-foreground hover:text-primary transition-colors"
                    >
                      {item.label}
                    </button>
                  );
                }

                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </button>
                );
              })}
              <button
                onClick={handleCertificationsClick}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Certifications
              </button>
              <button
                onClick={handleViewResume}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                My Resume
              </button>
              <button
                onClick={handleDownloadResume}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Download Resume
              </button>
              <ThemeToggle />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
