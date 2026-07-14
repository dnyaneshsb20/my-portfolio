import { useEffect } from "react";
import { Link } from "react-router-dom";

import work1 from "../assets/certificates/work1.webp";
import work2 from "../assets/certificates/work2.webp";
import work3 from "../assets/certificates/work3.webp";
import work4 from "../assets/certificates/work4.webp";

const images = [
  { title: "Enter Work Session Details", src: work1 },
  { title: "Work Session In Progress", src: work2 },
  { title: "Break Started", src: work3 },
  { title: "Long Break Started", src: work4 },
];

const WorkSessions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-secondary/20 text-foreground flex flex-col">
      <header className="bg-primary text-white dark:bg-background dark:text-white py-6 shadow-md">
        <div className="relative flex items-center justify-center px-4">
          <Link
            to="/#mini-projects"
            className="absolute left-4 flex items-center gap-2 text-white/90 hover:text-white dark:text-white/90 dark:hover:text-white transition-colors"
          >
            <span className="text-xl">&#8592;</span>
            <span className="hidden sm:inline font-semibold">Back</span>
          </Link>
          <div className="text-center px-12">
            <h1 className="text-3xl sm:text-4xl font-bold">Work Sessions Tracker</h1>
        <h2 className="text-lg mt-1">Mini Project</h2>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-10 max-w-4xl">
        <section className="mb-10">
          <h2 className="text-2xl font-bold border-b border-primary pb-2 mb-4">About the Project</h2>
          <p className="text-justify">
            The Work Sessions Tracker is a mini project designed to help users monitor the duration of their work or study sessions.
            It provides a simple GUI-based timer that allows users to start, pause, and reset their session, helping build focus and track productivity.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold border-b border-primary pb-2 mb-4">Key Features</h2>
          <ul className="list-disc list-inside pl-4 space-y-1 text-justify">
            <li>Simple start, pause, and reset buttons</li>
            <li>Displays real-time elapsed time</li>
            <li>Helpful for focus sessions or Pomodoro technique</li>
            <li>Built with Python and tkinter</li>
            <li>User-friendly GUI for easy use</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold border-b border-primary pb-2 mb-4">Technology Used</h2>
          <ul className="list-disc list-inside pl-4 space-y-1 text-justify">
            <li><strong>Language:</strong> Python</li>
            <li><strong>Library:</strong> tkinter</li>
            <li><strong>Platform:</strong> Desktop GUI Application</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold border-b border-primary pb-2 mb-6">Output Screens</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {images.map(({ title, src }, index) => (
              <div key={index}>
                <p className="text-center font-semibold mb-2">{title}</p>
                <img
                  src={src}
                  alt={title}
                  className="rounded-lg shadow-md w-full max-w-md object-contain mx-auto"
                />
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="w-full text-center text-sm py-4 text-white bg-[#0F172A] dark:bg-background dark:text-white">
        &copy; {new Date().getFullYear()} Dnyanesh Badave | Work Sessions Tracker
      </footer>
    </div>
  );
};

export default WorkSessions;
