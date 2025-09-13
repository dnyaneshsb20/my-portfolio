  import { useState, useEffect } from 'react';
  import { motion, AnimatePresence } from 'framer-motion';
  import { Button } from '@/components/ui/button';

  interface SlidingIntroProps {
    onComplete: () => void;
  }

  const SlidingIntro = ({ onComplete }: SlidingIntroProps) => {
    const [currentText, setCurrentText] = useState(0);
    const [showButtons, setShowButtons] = useState(false);

    const texts = [
      "Personal Website",
      "Welcome I'm Dnyanesh Badave"
    ];

    useEffect(() => {
      if (currentText < texts.length - 1) {
        const timer = setTimeout(() => {
          setCurrentText(currentText + 1);
        }, 2000);
        return () => clearTimeout(timer);
      } else {
        const btnTimer = setTimeout(() => {
          setShowButtons(true);
        }, 2000);
        return () => clearTimeout(btnTimer);
      }
    }, [currentText]);

    const handleDownloadResume = () => {
      const link = document.createElement('a');
      link.href = 'https://drive.google.com/uc?export=download&id=1XA1d1afEPHvgS46yDTz19HiUbYJ5PGRl';
      link.setAttribute('download', 'Dnyanesh_Badave.pdf'); // File name for the download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/20">
        <div className="text-center">
          <AnimatePresence mode="wait">
            <motion.h1
              key={texts[currentText]}
              className="text-5xl md:text-7xl font-bold mb-8 text-primary"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 1 }}
            >
              {texts[currentText]}
            </motion.h1>
          </AnimatePresence>

          {showButtons && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" onClick={onComplete} className="hover-scale">
                Explore More
              </Button>
              <Button variant="outline" size="lg" onClick={handleDownloadResume} className="hover-scale">
                Download Resume
              </Button>
            </motion.div>
          )}
        </div>
      </div>
    );
  };

  export default SlidingIntro;
