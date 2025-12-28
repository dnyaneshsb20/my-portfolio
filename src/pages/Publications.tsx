import { useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, BookOpen, Calendar, FileText, ExternalLink, Award } from 'lucide-react';
import Header from "../components/Header";
import Footer from "@/components/Footer";
import { Link } from 'react-router-dom';
import certImage from "../assets/certificates/research.png";

const publicationsData = [
  {
    id: 1,
    title: "HeritageBites: A Socio-Technical Approach for Promoting Indigenous Food Systems",
    journal: "International Journal of Scientific Research in Engineering & Management (IJSREM)",
    date: "November 19, 2025",
    description: "Published research paper in IJSREM (Volume 09, Issue 11, November 2025). The paper focuses on promoting indigenous food systems using a simple socio-technical approach.",
    certificate: certImage,
    paperUrl: "https://ijsrem.com/download/heritagebites-a-socio-technical-approach-for-promoting-indigenous-food-systems/",
    certificateUrl: "https://drive.google.com/file/d/1p7g71yJiAjp4AX4kmxZjg2Oy-jripc04/view?usp=sharing",
    status: "Published",
    volume: "Volume 09, Issue 11",
    doi: "IJSREM240906225",
    keywords: ["Food Systems", "Socio-Technical", "Indigenous", "Research", "Technology"]
  },
];

export default function Publications() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <Header
        onCertificationsClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />

      <main className="container mx-auto px-4 py-6">
        {/* Header Section */}
        <div className="mb-8 mt-10">
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
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                PUBLICATIONS
              </h1>
            </div>
          </div>
        </div>

        {/* Publications Section */}
        <div className="max-w-7xl mx-auto">
          {publicationsData.map((pub) => (
            <Card
              key={pub.id}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex flex-col lg:flex-row gap-8 mb-6">
                  {/* Image Section */}
                  <div className="flex-1">
                    <div className="w-full bg-gray-50 dark:bg-gray-900/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700 flex items-center justify-center">
                      <img
                        src={pub.certificate}
                        alt="Publication Certificate"
                        className="w-full max-h-[365px] object-contain rounded-lg"
                      />
                    </div>
                  </div>

                  {/* Details Section */}
                  <div className="flex-1">
                    <div className="flex flex-col h-full">
                      {/* Title with Badge */}
                      <div className="mb-6">
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                          <div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1 text-justify">
                              {pub.title}
                            </h2>
                            <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300 text-justify">
                              <span className="font-medium">{pub.journal}</span>
                            </div>
                          </div>
                        </div>

                        {/* Details */}
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                          {/* Status Badge */}
                          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                            <Award className="w-3 h-3" />
                            {pub.status}
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{pub.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <BookOpen className="w-4 h-4" />
                            <span>{pub.volume}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="mb-3 -mt-2">
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                          {pub.description}
                        </p>
                      </div>

                      {/* Keywords */}
                      <div className="mb-7">
                        <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">
                          Research Keywords
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {pub.keywords.map((keyword, index) => (
                            <span
                              key={index}
                              className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-sm font-medium"
                            >
                              {keyword}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <a
                          href={pub.paperUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center py-3 font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
                        >
                          <ExternalLink className="w-4 h-4" />
                          View Research Paper
                        </a>

                        <a
                          href={pub.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center py-3 font-semibold rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all flex items-center justify-center gap-2"
                        >
                          <FileText className="w-4 h-4" />
                          View Certificate
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline Indicator */}
              <div className="h-1 w-full bg-gradient-to-r from-purple-600 to-pink-600"></div>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}