import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import clapImg from "../assets/certificates/clap.jpg";
import todoImg from "../assets/certificates/todo2.png";
import turtleImg from "../assets/certificates/Turtle.png";
import snakeImg from "../assets/certificates/Snake.png";
import quizImg from "../assets/certificates/quiz1.png";
import workImg from "../assets/certificates/work2.png";
import passImg from "../assets/certificates/PasswordManager-GUI.png";
import paddleImg from "../assets/certificates/Paddle1.png";
import medi from "../assets/certificates/medi5.jpg"

const MiniProjectsSection = () => {
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [visibleCount, setVisibleCount] = useState(4); // initially show 4 projects
  const [expanded, setExpanded] = useState(false);
  const miniProjects = [
    {
      title: "Medical Billing Analyzer",
      type: "Data Science & Visualization Project",
      description:
        "MediCloud – Medical Billing Analyzer is a data-driven Streamlit app that analyzes hospital billing data to provide insights like total revenue, most treated symptoms, doctor-wise performance, and patient demographics using Python, Pandas, and Matplotlib.",
      link: "/medicalbill",
      image:medi,
    },
    {
      title: "Clap Switch",
      type: "Smart Home IoT Based – Clap Switch",
      description:
        "The Clap Switch is a smart IoT project that controls a device using sound. When you clap, the Arduino detects it and switches the LED on or off.",
      link: "/project/clap",
      image: clapImg,
    },
    {
      title: "To-Do List",
      type: "DSA Based – To-Do List using Linked List",
      description:
        "The To-Do List is a DSA-based C++ project that manages tasks using a linked list. Users can add, delete, and view tasks, which are sorted by their deadlines.",
      link: "/project/todo",
      image: todoImg,
    },
    {
      title: "Turtle Crossing: Beat the Traffic",
      type: "Desktop Game Application",
      description:
        "This is a fun Python game where you control a turtle trying to cross a busy road. You need to avoid cars that move faster as the levels increase.",
      link: "/project/turtle",
      image: turtleImg,
    },
    {
      title: "Snake Game",
      type: "Desktop Game Application",
      description:
        "Snake Game is a fun Python game made with Turtle. You control a snake that eats food, gets longer, and must avoid hitting walls or itself. It shows your score and lets you restart.",
      link: "/project/snake",
      image: snakeImg,
    },
    {
      title: "Quiz App",
      type: "Desktop Application",
      description:
        "The Quiz App is a fun and interactive game that asks multiple-choice questions and shows your score. Built using Python and Tkinter, it’s easy to use and runs smoothly on any computer.",
      link: "/project/quiz",
      image: quizImg,
    },
    {
      title: "Work Sessions",
      type: "Desktop Application",
      description:
        "The Work Sessions Mini Project is a desktop tool designed to help you stay focused by tracking your work sessions. It records start/end times, allowing you to monitor your productivity.",
      link: "/project/work",
      image: workImg,
    },
    {
      title: "Password Manager",
      type: "Desktop Application",
      description:
        "This is a Python desktop app that securely stores and manages passwords. It can generate strong random passwords, save login details, and search stored data using a clean Tkinter interface.",
      link: "/project/pass",
      image: passImg,
    },
    {
      title: "Paddle Battle - 2 Player Ball Game",
      type: "Desktop Game Application",
      description:
        "This is a Python desktop game where two players control paddles to hit a bouncing ball. The first player to score 5 points wins. It has a clean Turtle graphics interface and supports restart with a single key.",
      link: "/project/padbat",
      image: paddleImg,
    },
  ];

  return (
    <section id="mini-projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">MINI PROJECTS</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto items-stretch">
          <AnimatePresence>
            {miniProjects.slice(0, visibleCount).map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="hover-scale flex flex-col h-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 flex flex-col flex-grow">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-contain rounded-lg"
                    />
                    <p className="font-semibold">{project.type}</p>
                    <p className="text-justify flex-grow">
                      {project.description}
                    </p>
                    <button
                      onClick={() => (window.location.href = project.link)}
                      className="inline-block px-6 py-2 bg-primary text-white rounded hover:bg-primary/90 dark:bg-white dark:text-black dark:hover:bg-gray-200 mr-auto"
                    >
                      View Project
                    </button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="col-span-2 text-center mt-4">
          <button
            onClick={() => {
              if (expanded) {
                setVisibleCount(4);
                const section = document.getElementById("mini-projects");
                if (section) section.scrollIntoView({ behavior: "smooth" });
              } else {
                setVisibleCount(miniProjects.length);
              }
              setExpanded(!expanded);
            }}
            className="px-6 py-2 bg-primary text-white rounded hover:bg-primary/90 dark:bg-white dark:text-black dark:hover:bg-gray-200"
          >
            {expanded ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default MiniProjectsSection;