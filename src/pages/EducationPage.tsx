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
      title: "P.E.S. Modern College of Engineering, Pune",
      degree: "Master in Computer Application (MCA)",
      duration: "September 2024 - Present",
      result: "CGPA: 8.0/10.0",
      description: "Pursuing a Master of Computer Applications (MCA) degree, currently in the first year, with a CGPA of 8.0.",
    },
    {
      id: 2,
      logo: sangameshwarCollege,
      title: "Sangameshwar College, Solapur",
      degree: "Computer Science, B.Sc",
      duration: "September 2021 - May 2024",
      result: "CGPA: 9.13/10.0",
    },
    {
      id: 3,
      logo: sangameshwarCollege,
      title: "Sangameshwar College, Solapur",
      degree: "H.S.C.",
      duration: "June 2020 - March 2021",
      result: "Percentage: 91.83%",
    },
    {
      id: 4,
      logo: jnanaPrabodhini,
      title: "Jnana Prabodhini Prashala, Solapur",
      degree: "S.S.C.",
      duration: "June 2018 - March 2019",
      result: "Percentage: 81.00%",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header onCertificationsClick={() => {}} />

      <div className="container mx-auto px-4 pb-10">
        <div className="mb-8 mt-28">
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

        <div className="flex flex-col items-center gap-6 px-4 md:px-0">
          {educationList.map((edu) => (
            <Card
              key={edu.id}
              className="w-full max-w-4xl flex flex-col items-start p-3 border rounded-lg shadow-sm bg-white dark:bg-zinc-800 text-foreground dark:text-white"
            >
              <div className="flex gap-4 items-start w-full">
                <img
                  src={edu.logo}
                  alt={edu.title}
                  className="w-16 h-16 object-contain rounded"
                />
                <div className="space-y-1">
                  <h3 className="text-lg font-bold">{edu.title}</h3>
                  <p>
                    <span className="font-semibold">Course / Degree:</span> {edu.degree}
                  </p>
                  <p>
                    <span className="font-semibold">Duration:</span> {edu.duration}
                  </p>
                  <p>{edu.result}</p>
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
