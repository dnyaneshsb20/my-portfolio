import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from "react-router-dom";

const MiniProjectsSection = () => {
  const miniProjects = [
    {
      title: "Clap Switch",
      type: "Smart Home IoT Based – Clap Switch",
      description:
        "The Clap Switch is a smart IoT project that controls a device using sound. When you clap, the Arduino detects it and switches the LED on or off.",
      link: "/project/clap"
    },
    {
      title: "To-Do List",
      type: "DSA Based – To-Do List using Linked List",
      description:
        "The To-Do List is a DSA-based C++ project that manages tasks using a linked list. Users can add, delete, and view tasks, which are sorted by their deadlines.",
      link: "/project/todo"
    },
    {
      title: "Turtle Crossing: Beat the Traffic",
      type: "Desktop Game Application",
      description:
        "This is a fun Python game where you control a turtle trying to cross a busy road. You need to avoid cars that move faster as the levels increase.",
      link: "/project/turtle"
    },
    {
      title: "Snake Game",
      type: "Desktop Game Application",
      description:
        "Snake Game is a fun Python game made with Turtle. You control a snake that eats food, gets longer, and must avoid hitting walls or itself. It shows your score and lets you restart.",
      link: "/project/snake"
    },
    {
      title: "Quiz App",
      type: "Desktop Application",
      description:
        "The Quiz App is a fun and interactive game that asks multiple-choice questions and shows your score. Built using Python and Tkinter, it’s easy to use and runs smoothly on any computer.",
      link: "/project/quiz"
    },
    {
      title: "Work Sessions",
      type: "Desktop Application",
      description:
        "The Work Sessions Mini Project is a desktop tool designed to help you stay focused by tracking your work sessions. It records start/end times, allowing you to monitor your productivity.",
      link: "/project/work"
    },
    {
      title: "Password Manager",
      type: "Desktop Application",
      description:
        "This is a Python desktop app that securely stores and manages passwords. It can generate strong random passwords, save login details, and search stored data using a clean Tkinter interface.",
      link: "/project/pass"
    },
    {
      title: "Paddle Battle - 2 Player Ball Game",
      type: "Desktop Game Application",
      description:
        "This is a Python desktop game where two players control paddles to hit a bouncing ball. The first player to score 5 points wins. It has a clean Turtle graphics interface and supports restart with a single key.",
      link: "/project/padbat"
    }
  ];

  return (
    <section id="mini-projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">MINI PROJECTS</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {miniProjects.map((project, index) => (
            <Card key={index} className="hover-scale">
              <CardHeader>
                <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-semibold">{project.type}</p>
                <p className="text-justify">{project.description}</p>
                <Link
                  to={project.link}
                  className="text-primary font-semibold hover:underline"
                >
                  <br />View Project
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MiniProjectsSection;
