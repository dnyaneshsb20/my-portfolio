import { useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, MapPin, Briefcase, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import tm from '../assets/certificates/TATA-Motors.webp';
import mu from "../assets/certificates/mu-logo.webp";

export default function ExperiencePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const experienceList = [
    {
      id: 1,
      logo: tm,
      role: "Software Engineering Intern",
      company: "TATA MOTORS Digital.AI Labs Ltd",
      startDate: "2025-12-16",
      type: "Internship",
      location: "Pimpri-Chinchwad, Pune, Maharashtra",
      status: "Working",
      description: "Spearheading digital transformation by architecting AI-powered RAG pipelines, modernizing data infrastructure, and automating workflows to significantly enhance operational efficiency and data accuracy.",
      responsibilities: [
        "Engineered a RAG pipeline using vector embeddings and LLMs across 200+ industrial manuals, cutting manual lookup time by 50% and resolving queries in under 10 seconds.",
        "Automated AI-driven document workflows processing 100+ unstructured PDFs/month, reducing manual review effort by 40%.",
        "Modernized data infrastructure by migrating 50K+ automotive records and 20+ spreadsheet datasets into normalized PostgreSQL/MySQL schemas, improving data accuracy by 30% and query performance by 25%.",
        "Build automated web scraping pipelines spanning 15+ OEMs and 100+ models, replacing manual data collection and saving 10+ hours/week.",
        "Optimize 8+ FastAPI microservices and React frontend components while automating Excel/BI reporting, cutting report generation time by 45%."
      ],
      technologies: ["Python", "SQLite", "SQL", "ReactJS", "Tailwind CSS", "MySQL"]
    },
    {
      id: 2,
      logo: mu,
      role: "Full Stack Developer Intern",
      company: "Media Urbana",
      startDate: "2025-08-25",
      endDate: "2025-11-25",
      type: "Internship",
      location: "Remote",
      status: "Completed",
      description: "Built engaging and mobile-friendly web interfaces using HTML5, CSS3, JavaScript, and Tailwind. Ensured responsive layouts and modern design principles for consistent appearance across all devices, while mainly focusing on frontend development and occasionally contributing to backend functionality.",
      responsibilities: [
        "Built 5+ responsive web interfaces using Tailwind CSS, HTML5, PHP, and JavaScript, improving page load speed by 20%.",
        "Standardized responsive layouts across 5+ device sizes, reducing UI-related bug reports by 30%.",
        "Delivered 10+ frontend features and supported backend functionality, cutting development turnaround time by 25%.",
        "Collaborated with a 3-member team to ship 6+ client website updates, maintaining 100% on-time delivery."
      ],
      technologies: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "PHP", "MySQL"]
    }
  ];

  const calculateExperience = (startDateStr: string, endDateStr?: string) => {
    const startDate = new Date(startDateStr);
    const today = new Date();
    const endDate = endDateStr ? new Date(endDateStr) : today;

    const options: Intl.DateTimeFormatOptions = { month: 'short', year: 'numeric' };
    const startStr = startDate.toLocaleDateString('en-US', options);
    const endStr = endDateStr ? endDate.toLocaleDateString('en-US', options) : 'Present';

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <Header onCertificationsClick={() => { }} />

      <main className="container mx-auto px-4 pt-24 pb-8">
        {/* Header Section */}
        <div className="mb-10">
          {/* Back Button + Title on same level */}
          <div className="max-w-5xl mx-auto w-full relative flex items-center justify-center mb-10">
            {/* Back Button - absolute left */}
            <div className="absolute left-0">
              <Link to="/#intro" state={{ scrollTo: 'intro' }}>
                <Button
                  variant="ghost"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span className="hidden sm:inline">Back</span>
                </Button>
              </Link>
            </div>

            {/* Title - centered */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white text-center px-12">
              WORK EXPERIENCE
            </h1>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            {experienceList.map((exp) => (
              <Card
                key={exp.id}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-8">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start gap-6 mb-5">
                    {/* Logo */}
                    <div className="flex-shrink-0 self-center md:self-start">
                      <div className="w-28 h-28 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 flex items-center justify-center overflow-hidden">
                        <img
                          src={exp.logo}
                          alt={exp.company}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Title and Details */}
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                            {exp.role}
                          </h3>
                          <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 text-gray-700 dark:text-gray-300">
                            <span className="font-medium">{exp.company}</span>
                            <span className="hidden md:inline text-gray-500">•</span>
                            <span className="text-gray-600 dark:text-gray-400">{exp.type}</span>
                          </div>
                        </div>

                        {/* Status Badge */}
                        <div className={`self-start inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium ${exp.status === 'Working'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                          : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                          }`}>
                          {exp.status === 'Working' ? (
                            <>
                              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                              {exp.status}
                            </>
                          ) : exp.status}
                        </div>
                      </div>

                      {/* Details */}
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{calculateExperience(exp.startDate, exp.endDate)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-5">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                      {exp.description}
                    </p>
                  </div>

                  {/* Responsibilities */}
                  <div className="mb-5">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Key Responsibilities
                    </h4>
                    <div className="flex flex-col gap-3">
                      {exp.responsibilities.map((resp, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">{resp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline Indicator */}
                <div className={`h-1 w-full ${exp.status === 'Working'
                  ? 'bg-gradient-to-r from-blue-600 to-green-500'
                  : 'bg-gradient-to-r from-blue-600 to-purple-600'
                  }`}></div>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}