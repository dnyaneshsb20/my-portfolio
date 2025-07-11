import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

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

  const handleViewResume = () => {
    window.open('https://drive.google.com/file/d/1RS0J1983VMYyJHGmCdMfo76GLFfOR7lN/view?usp=sharing', '_blank');
    setIsMenuOpen(false);
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1RS0J1983VMYyJHGmCdMfo76GLFfOR7lN';
    link.download = 'Dnyanesh_Santosh_Badave.pdf'; // This name works for local files, Drive ignores it
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
    { label: 'Contact', id: 'contact' },
    { label: 'Education', id: 'edu' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div
            className="text-2xl font-bold cursor-pointer"
            onClick={() => scrollToSection('intro')}
          >
            Portfolio
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => {
              if (item.label === 'Education') {
                return (
                  <button
                    key={item.id}
                    onClick={handleEducationClick}
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </button>
                );
              }
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              );
            })}
            <button
              onClick={handleCertificationsClick}
              className="text-foreground hover:text-primary transition-colors"
            >
              Certifications
            </button>
            <button
              onClick={handleViewResume}
              className="text-foreground hover:text-primary transition-colors"
            >
              My Resume
            </button>
            <button
              onClick={handleDownloadResume}
              className="text-foreground hover:text-primary transition-colors"
            >
              Download Resume
            </button>
            <ThemeToggle />
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t">
            <div className="flex flex-col space-y-4 pt-4">
              {menuItems.map((item) => {
                if (item.label === 'Education') {
                  return (
                    <button
                      key={item.id}
                      onClick={handleEducationClick}
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
