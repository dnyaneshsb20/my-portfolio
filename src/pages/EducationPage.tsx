// src/pages/EducationPage.tsx

import { useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
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
      description: "Pursuing a Master of Computer Applications (MCA) degree, currently in the first year, with a CGPA of 8.0.",
    },
    {
      id: 2,
      logo: sangameshwarCollege,
      title: "Sangameshwar College, Solapur",
      degree: "Bachelor of Science in Entire Computer Science (B.Sc.(ECS))",
      duration: "September 2021 - May 2024",
      resultLabel: "CGPA:",
      resultValue: "9.13/10.0",
      description: "Completed a Bachelor of Science in Entire Computer Science (B.Sc.(ECS)) degree with a CGPA of 9.13.",
    },
    {
      id: 3,
      logo: sangameshwarCollege,
      title: "Sangameshwar College, Solapur",
      degree: "Higher Secondary Certificate (H.S.C.)",
      duration: "June 2020 - March 2021",
      resultLabel: "Percentage:",
      resultValue: "91.83%",
      description: "Completed Higher Secondary Certificate (HSC) with 91.83%.",
    },
    {
      id: 4,
      logo: jnanaPrabodhini,
      title: "Jnana Prabodhini Prashala, Solapur",
      degree: "Secondary School Certificate (S.S.C.)",
      duration: "June 2018 - March 2019",
      resultLabel: "Percentage:",
      resultValue: "81.00%",
      description: "Completed Secondary School Certificate (SSC) with 81.00%.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header onCertificationsClick={() => {}} />

      <div className="container mx-auto px-4 pb-10">
        <div className="mb-8 mt-24">
          <Link to="/#intro" state={{ scrollTo: 'intro' }}>
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">EDUCATION</h1>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6">
          {educationList.map((edu) => (
            <Card
              key={edu.id}
              className="w-full max-w-5xl p-4 border rounded-xl shadow-md bg-white dark:bg-zinc-800 text-foreground dark:text-white"
            >
              {/* Mobile: stacked | Tablet/Desktop: horizontal */}
              <div className="flex flex-col sm:flex-row gap-4 sm:items-start w-full">
                
                {/* Logo */}
                <div className="flex justify-center w-full sm:w-auto">
                  <img
                    src={edu.logo}
                    alt={edu.title}
                    className="w-32 h-32 object-contain rounded"
                  />
                </div>

                {/* Text Info */}
                <div className="space-y-1 text-justify sm:text-left w-full">
                  <h3 className="text-lg font-bold">{edu.title}</h3>
                  <p>
                    <span className="font-semibold">Course / Degree:</span> {edu.degree}
                  </p>
                  <p>
                    <span className="font-semibold">Duration:</span> {edu.duration}
                  </p>
                  <p>
                    <span className="font-semibold">{edu.resultLabel}</span> {edu.resultValue}
                  </p>
                  {edu.description && <p>{edu.description}</p>}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
