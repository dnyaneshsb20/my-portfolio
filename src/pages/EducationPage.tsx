import { useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, BookOpen, GraduationCap, Award } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

import modernCollege from "../assets/certificates/mcoe.png";
import sangameshwarCollege from "../assets/certificates/san.png";
import jnanaPrabodhini from "../assets/certificates/Jnana-Prabodhini.jpg";

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
      duration: "September 2024 - Present",
      resultLabel: "CGPA:",
      resultValue: "8.0/10.0",
      status: "Pursuing",
      description: "Pursuing a Master of Computer Applications (MCA) degree, currently in the first year, with a CGPA of 8.0.",
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
      <Header onCertificationsClick={() => {}} />

      <main className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="mb-10 mt-10">
          {/* Back Button */}
          <div className="flex items-center justify-start mb-8">
            <Link to="/#intro" state={{ scrollTo: 'intro' }}>
              <Button
                variant="ghost"
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 relative top-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>
            </Link>
          </div>

          {/* Heading Section */}
          <div className="max-w-4xl mx-auto -mt-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                EDUCATION
              </h1>
            </div>
          </div>
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {educationList.map((edu) => (
              <Card
                key={edu.id}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-8">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start gap-6 mb-5">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                      <div className="w-32 h-32 bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-700 flex items-center justify-center">
                        <img
                          src={edu.logo}
                          alt={edu.title}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>

                    {/* Title and Details */}
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                            {edu.title}
                          </h3>
                          <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
                            <span className="font-medium">{edu.degree}</span>
                          </div>
                        </div>

                        {/* Status Badge */}
                        <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${
                          edu.status === 'Pursuing' 
                            ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' 
                            : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                        }`}>
                          {edu.status === 'Pursuing' ? (
                            <>
                              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                              {edu.status}
                            </>
                          ) : edu.status}
                        </div>
                      </div>

                      {/* Details */}
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <BookOpen className="w-4 h-4" />
                          <span>{edu.resultLabel} {edu.resultValue}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <GraduationCap className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-5">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                      {edu.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Indicator */}
                <div className={`h-1 w-full ${
                  edu.status === 'Pursuing' 
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