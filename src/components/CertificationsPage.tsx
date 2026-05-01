import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { certificates } from '../data/certificate-data';
import Header from './Header';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';

interface CertificationsPageProps {
  onBack?: () => void;
}

const CertificationsPage = ({ onBack }: CertificationsPageProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header onCertificationsClick={() => {}} />

      <div className="container mx-auto px-4 pb-10">
        <div className="mb-8 mt-24">
          {onBack ? (
            <Button variant="ghost" className="mb-4" onClick={onBack}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
          ) : (
            <Link to="/#intro" state={{ scrollTo: 'intro' }}>
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Portfolio
              </Button>
            </Link>
          )}
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">CERTIFICATIONS</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="flex flex-col justify-between items-center p-4 border rounded-xl shadow-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col items-center gap-2 flex-grow w-full">
                <img
                  src={cert.image}
                  alt={`${cert.title} certificate`}
                  className="w-full max-h-64 object-contain rounded-lg shadow-sm"
                />
                <h2 className="text-lg font-bold text-center text-foreground dark:text-white">{cert.title}</h2>
                <h3 className="text-base font-medium text-center text-foreground/80 dark:text-white/70">{cert.organization}</h3>
                <h3 className="text-base font-medium text-center text-foreground/80 dark:text-white/70">{cert.issueDate}</h3>
              </div>

                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full text-center font-semibold py-2 px-4 rounded-lg shadow-md 
                             bg-black text-white 
                             dark:bg-white dark:text-black 
                             hover:opacity-80 transition-all"
                >
                  View Certificate
                </a>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default CertificationsPage;
