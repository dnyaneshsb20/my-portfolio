import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import homepage from "../assets/certificates/homepage.png";
import carddetails from "../assets/certificates/carddetails.jpg";
import login from "../assets/certificates/login-page.png";
import datapackets from "../assets/certificates/data-packet.png";
import medicloud from "../assets/certificates/MediCloud.png";
import HB from "../assets/certificates/HB.png"
import hackathon from "../assets/certificates/hackathon.jpeg"
import smart from "../assets/certificates/smart.png"
import campusz from "../assets/certificates/campusz.png"
import ac from "../assets/certificates/AeroC.png"
import ib from "../assets/certificates/ib.png"

const ProjectsSection = () => {
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [visibleCount, setVisibleCount] = useState(4); 
  const [expanded, setExpanded] = useState(false);

  const projects = [
    {
      title: "Campus Z – Smart Campus Ecosystem",
      type: "Full-Stack Web Application | Smart India Hackathon (SIH) Project",
      description:
        "Campus Z is a next-generation campus management ecosystem that unifies academics, administration, student services, and campus operations into a single smart digital platform. It includes smart attendance, centralized student profiles, grievance tracking, events hub, timetable automation, hostel & transport management, and an analytics dashboard for faculty and management. Designed for efficiency, transparency, and complete campus digital transformation.",
      link: "/project/campusz",
      comingSoon: false,
      image: campusz 
    },
    {
      title: "AI-Powered Assembly Verification System",
      type: "Hackathon Project | Computer Vision + AI",
      description:
        "Built for the COEP Mindspark TATA Motors Hackathon, this AI-powered assembly verification system uses Vision-Language Models (VLLMs) and YOLOv8 to analyze manufacturing assembly videos, detect missing or incorrect steps, and generate real-time verification reports with visual proof. The system reduces manual inspection effort by up to 80% and improves product quality consistency.",
      link: "/project/assembly",
      comingSoon: false,
      image: hackathon
    },
    {
      title: "AeroCommand",
      type: "Web Application",
      description:
        "A modern drone fleet management and mission orchestration platform. AeroCommand enables organizations to plan, monitor, and analyze autonomous drone missions through an interactive dashboard, real-time mission control, and comprehensive survey analytics, ensuring operational visibility, efficiency, and scalability.",
      link: "https://aerocommand.vercel.app/",
      comingSoon: false,
      image: ac
    },
    {
      title: "IndusBot",
      type: "Web Application",
      description:
        "A multilingual AI-powered assistant for industrial machine troubleshooting. IndusBot enables operators to report machine issues in regional languages and receive accurate, context-aware solutions using vector embeddings and Large Language Models, improving maintenance efficiency and reducing downtime.",
      link: "/project/ib",
      comingSoon: true,
      image: ib
    },
    {
      title: "Heritage Bites",
      type: "Web Application | Research Project",
      description:
        "A personalized recipe recommendation and cultural food exploration platform. Heritage Bites helps users discover regional recipes, save favorites, and track preferences through AI-powered suggestions and community sharing.",
      link: "https://heritage-bites.vercel.app/",
      comingSoon: false,
      image: HB
    },
    {
      title: "SmartQR Docs",
      type: "Full-Stack Project",
      description:
        "SmartQR-Docs enables users to store documents once and share them securely using a unique QR that provides controlled, temporary access to authorized viewers, eliminating repeated submissions and manual handling.",
      link: "/project/qrdocs",
      comingSoon: false,
      image: smart,
    },
    {
      title: "MediCloud",
      type: "Web Application",
      description:
        "Working on a cloud-based patient record system with role-based access for Patients, Doctors, and Pharmacists, supporting appointments, medical records, prescriptions, and billing with real-time Supabase integration.",
      link: "/project/medicloud",
      comingSoon: true,
      image: medicloud
    },
    {
      title: "Milk Products Management System",
      type: "Desktop Application",
      description:
        "CSharp and MySQL-based Milk Products Management System to help Dairy Shop Owners. It calculates bills, maintains records, reduces manual work, and saves time.",
      link: "/project/milk-products",
      image: homepage
    },
    {
      title: "User Authentication System",
      type: "Web Application",
      description:
        "Java and Oracle-based User Authentication System to manage user login and registration. Securely verifies user details, stores log-in data, and prevents unauthorized access.",
      link: "/project/userauth",
      image: login
    },
    {
      title: "Scan and See: Augmented Reality for Instant Data Access",
      type: "AR | Android & Web Application",
      description:
        "Scan and See is an AR app to scan real-world cards and instantly access data. Built with Android Studio and Unity for AR, with Oracle DB backend for seamless data retrieval.",
      link: "/project/scan",
      image: carddetails
    },
    {
      title: "Data Packet Flow In Network Layer",
      type: "Web Application (Simulation and Visualization)",
      description:
        "Web-based interactive simulation using HTML, CSS, and JS to represent how data packets travel through the network layer. Demonstrates IP packet flow and routing decisions.",
      link: "https://datapacketflow.vercel.app/",
      image: datapackets
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">MY PROJECTS</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto items-stretch">
          <AnimatePresence>
            {projects.slice(0, expanded ? projects.length : visibleCount).map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="hover-scale flex flex-col h-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                  </CardHeader>
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-98 h-48 object-contain rounded-lg shadow-sm mx-1 px-4 md:px-0"
                    />
                  )}
                  <CardContent className="flex flex-col flex-grow space-y-4 mt-4">
                    <p className="font-semibold">{project.type}</p>
                    <p className="text-justify flex-grow">{project.description}</p>
                    <div className="mt-auto">
                      {project.comingSoon ? (
                        <button
                          onClick={() => setShowComingSoon(true)}
                          className="px-6 py-2 bg-primary text-white rounded hover:bg-primary/90 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                        >
                          View Project
                        </button>
                      ) : project.title === "Data Packet Flow In Network Layer" ? (
                        <Button
                          asChild
                          className="px-6 py-2 bg-primary text-white rounded hover:bg-primary/90 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                        >
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            View Project
                          </a>
                        </Button>
                      ) : (
                        <button
                          onClick={() => (window.location.href = project.link)}
                          className="px-6 py-2 bg-primary text-white rounded hover:bg-primary/90 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                        >
                          View Project
                        </button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show More / Show Less Button */}
        {visibleCount < projects.length && (
          <div className="col-span-2 text-center mt-4">
            <button
              onClick={() => {
                setExpanded(prev => !prev);
                setVisibleCount(prev => !prev ? projects.length : 4);

                // Scroll to top of the Projects section when collapsing
                if (expanded) {
                  const section = document.getElementById("projects");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }
              }}
              className="px-6 py-2 bg-primary text-white rounded hover:bg-primary/90 dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              {expanded ? "Show Less" : "Show More"}
            </button>
          </div>
        )}

        {/* Coming Soon Modal */}
        {showComingSoon && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center max-w-sm mx-4">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Coming Soon!</h3>
              <p className="mb-6 text-gray-800 dark:text-gray-200">
                This project is still in progress and will be available soon.
              </p>
              <button
                onClick={() => setShowComingSoon(false)}
                className="px-6 py-2 bg-primary text-white rounded hover:bg-primary/90 dark:bg-white dark:text-black dark:hover:bg-gray-200"
              >
                OK
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
