import { useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

import mu from "../assets/certificates/mu-logo.png";

export default function ExperiencePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const calculateExperience = (startDateStr: string, endDateStr?: string) => {
    const startDate = new Date(startDateStr);
    const endDate = endDateStr ? new Date(endDateStr) : new Date();

    let totalMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12;
    totalMonths += endDate.getMonth() - startDate.getMonth();

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    if (years === 0) {
      return months === 1 ? `1 month` : `${months} months`;
    } else {
      if (months === 0) return years === 1 ? `1 yr` : `${years} yrs`;
      return years === 1 ? `1 yr ${months} month${months > 1 ? 's' : ''}` 
                         : `${years} yrs ${months} month${months > 1 ? 's' : ''}`;
    }
  };

  const experienceList = [
    {
      id: 1,
      logo: mu,
      role: "Full Stack Developer",
      company: "Media Urbana",
      startDate: "2025-08-18", 
      endDate: "", 
      duration: "August 2025-Present",
      type: "Internship",
      description: "Built engaging and mobile-friendly web interfaces using HTML5, CSS3, JavaScript, and Tailwind. Ensured responsive layouts and modern design principles for consistent appearance across all devices, while mainly focusing on frontend development and occasionally contributing to backend functionality."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Header */}
      <Header onCertificationsClick={() => {}} />

      {/* Main content fills space */}
      <main className="flex-1 flex flex-col">
        <div className="container mx-auto px-4 pb-10 flex-1">
          <div className="mb-8 mt-28">
            <Link to="/#intro" state={{ scrollTo: 'intro' }}>
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Portfolio
              </Button>
            </Link>
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">WORK EXPERIENCE</h1>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
  {experienceList.map((exp) => (
    <div key={exp.id} className="relative flex items-start">
      {/* Card */}
      <Card className="relative w-full max-w-5xl mx-auto p-5 bg-white dark:bg-zinc-800 shadow-md rounded-lg">
        {/* Timeline Line */}
        <div className="absolute -left-6 top-0 h-full border-l border-primary dark:border-white/30"></div>

        {/* Timeline Circle */}
        <div className="absolute -left-9 top-6 w-6 h-6 rounded-full bg-primary dark:bg-white border-2 border-white dark:border-black"></div>

        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <img
            src={exp.logo}
            alt={exp.company}
            className="w-[15%] h-[15%] object-contain rounded"
          />
          <div>
            <h3 className="text-2xl font-semibold">{exp.role}</h3>
            <p className="text-md font-medium">{exp.company} • {exp.type}</p>
            <p className="text-sm ">
              {exp.duration} • {exp.startDate && calculateExperience(exp.startDate, exp.endDate)}
            </p>
            <p className="mt-2 text-justify">{exp.description}</p>
          </div>
        </div>
      </Card>
    </div>
  ))}
</div>

        </div>
      </main>

      {/* Footer always at bottom */}
      <Footer />
    </div>
  );
}
