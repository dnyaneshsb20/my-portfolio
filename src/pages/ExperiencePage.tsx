import { useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import tm from '../assets/certificates/TATA-Motors.jpeg'
import mu from "../assets/certificates/mu-logo.png";

export default function ExperiencePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Keeping the function (not used now) — you said don't touch other things
  const calculateExperience = (startDateStr: string, endDateStr?: string) => {
    const startDate = new Date(startDateStr);
    const today = new Date();
    const endDate = endDateStr ? new Date(endDateStr) : today;

    // Display string: e.g., "Dec 2025 - Present"
    const options: Intl.DateTimeFormatOptions = { month: 'short', year: 'numeric' };
    const startStr = startDate.toLocaleDateString('en-US', options);
    const endStr = endDateStr ? endDate.toLocaleDateString('en-US', options) : 'Present';

    // Only calculate duration if start date is in the past
    if (startDate > today) return `${startStr} - ${endStr}`;

    let totalMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12;
    totalMonths += endDate.getMonth() - startDate.getMonth();

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    let durationStr = '';
    if (years > 0) durationStr += years === 1 ? '1 yr' : `${years} yrs`;
    if (months > 0) durationStr += (years > 0 ? ' ' : '') + (months === 1 ? '1 month' : `${months} months`);
    if (durationStr === '') durationStr = 'Less than a month';

    return `${startStr} - ${endStr} • ${durationStr}`;
  };

  const experienceList = [
    {
      id: 1,
      logo: tm,
      role: "Software Engineering-Intern",
      company: "TATA Motors",
      startDate: "2025-12-16",
      // endDate: "2026-06-16",
      duration: "Dec 2025 - Present",
      type: "Internship",
      description:
        "Excited to work on real-world software engineering tasks like data processing, visualization, and AI integration. I will collaborate with senior team members to understand industry workflows and contribute to ongoing projects. This internship will provide hands-on experience in building and integrating software solutions."
    },
    {
      id: 2,
      logo: mu,
      role: "Full Stack Developer-Intern",
      company: "Media Urbana",
      startDate: "2025-08-25",
      endDate: "2025-11-25",
      duration: "Aug 2025 - Nov 2025",
      type: "Internship",
      description:
        "Built engaging and mobile-friendly web interfaces using HTML5, CSS3, JavaScript, and Tailwind. Ensured responsive layouts and modern design principles for consistent appearance across all devices, while mainly focusing on frontend development and occasionally contributing to backend functionality."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header onCertificationsClick={() => { }} />

      <main className="flex-1 flex flex-col">
        <div className="container mx-auto px-4 pb-10 flex-1">
          <div className="mb-8 mt-24">
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
          <div className="space-y-8 relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-[148px] top-0 h-full border-l-2 border-primary dark:border-white"></div>

            {experienceList.map((exp) => (
              <div key={exp.id} className="relative flex items-start">
                <Card className="relative w-full max-w-5xl mx-auto p-5 bg-white dark:bg-zinc-800 shadow-md rounded-lg">

                  {/* Timeline Circle */}
                  <div className="hidden lg:block absolute -left-9 top-7 w-6 h-6 rounded-full bg-primary dark:bg-white border-2 border-white dark:border-black"></div>

                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex justify-center w-full md:w-auto">
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-40 md:w-[15%] md:min-w-[150px] h-40 md:h-auto object-contain rounded"
                      />
                    </div>

                    <div className="space-y-1 text-justify md:text-left w-full">
                      <h3 className="text-2xl font-semibold">{exp.role}</h3>
                      <p className="text-md font-medium">
                        {exp.company} • {exp.type}
                      </p>

                      <p className="text-sm">
                        {calculateExperience(exp.startDate, exp.endDate)}
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

      <Footer />
    </div>
  );
}
