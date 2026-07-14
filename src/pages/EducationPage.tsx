import { useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, BookOpen, GraduationCap, Award } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

import modernCollege from "../assets/certificates/mcoe.webp";
import sangameshwarCollege from "../assets/certificates/san.webp";
import jnanaPrabodhini from "../assets/certificates/Jnana-Prabodhini.webp";

export default function EducationPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const educationList = [
    {
      id: 1,
      logo: modernCollege,
      title: "Progressive Education Society's Modern College of Engineering, Pune",
      degree: "Master in Computer Application (MCA)",
      duration: "September 2024 - June 2026",
      resultLabel: "CGPA:",
      resultValue: "8.43/10.0",
      status: "Completed",
      description: "Completed a Master of Computer Applications (MCA) degree, with a CGPA of 8.43.",
      location: "Pune, Maharashtra"
    },
    {
      id: 2,
      logo: sangameshwarCollege,
      title: "Sangameshwar College, Solapur",
      degree: "Bachelor of Science in Entire Computer Science (B.Sc.(ECS))",
      duration: "September 2021 - May 2024",
      resultLabel: "CGPA:",
      resultValue: "9.13/10.0",
      status: "Completed",
      description: "Completed a Bachelor of Science in Entire Computer Science (B.Sc.(ECS)) degree with a CGPA of 9.13.",
      location: "Solapur, Maharashtra"
    },
    {
      id: 3,
      logo: sangameshwarCollege,
      title: "Sangameshwar College, Solapur",
      degree: "Higher Secondary Certificate (H.S.C.)",
      duration: "June 2020 - March 2021",
      resultLabel: "Percentage:",
      resultValue: "91.83%",
      status: "Completed",
      description: "Completed Higher Secondary Certificate (HSC) with 91.83% in Science stream.",
      location: "Solapur, Maharashtra"
    },
    {
      id: 4,
      logo: jnanaPrabodhini,
      title: "Jnana Prabodhini Prashala, Solapur",
      degree: "Secondary School Certificate (S.S.C.)",
      duration: "June 2018 - March 2019",
      resultLabel: "Percentage:",
      resultValue: "81.00%",
      status: "Completed",
      description: "Completed Secondary School Certificate (SSC) with 81.00%.",
      location: "Solapur, Maharashtra"
    },
  ];

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
              EDUCATION
            </h1>
          </div>
        </div>

        {/* Education Cards */}
        <div className="max-w-5xl mx-auto space-y-8">
          {educationList.map((edu) => (
            <Card
              key={edu.id}
              className="overflow-hidden border-2 border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm"
            >
              <div className="p-6">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  {/* Institution Logo */}
                  {/* Institution Logo */}
                  <div className="flex flex-col items-center md:items-start mx-auto md:mx-0">
                    <div className="w-28 h-28 rounded-xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
                      <img
                        src={edu.logo}
                        alt={edu.title}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Mobile view: Status below image */}
                    {edu.status === "Pursuing" && (
                      <div className="mt-3 md:hidden inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-full">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                          Currently Pursuing
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Education Details */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                          {edu.title}
                        </h3>

                        {edu.status === "Pursuing" && (
                          <div className="hidden md:inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-full mt-1 ml-3">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                              Currently Pursuing
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <BookOpen className="w-4 h-4 text-blue-500" />
                        <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                          {edu.degree}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-center gap-2 p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
                        <Award className="w-8 h-8 text-emerald-500" />
                        <div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Score</p>
                          <p className="font-medium text-gray-900 dark:text-white">
                            <span className="font-semibold">{edu.resultLabel}</span> {edu.resultValue}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <Calendar className="w-8 h-8 text-blue-500" />
                        <div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Duration</p>
                          <p className="font-medium text-gray-900 dark:text-white">
                            {edu.duration}
                          </p>
                        </div>
                      </div>
                    </div>

                    {edu.description && (
                      <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {edu.description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
