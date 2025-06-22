import { useEffect } from "react";
import { Link } from "react-router-dom";

import passwordManagerMain from "../assets/certificates/PasswordManager-GUI.png";
import passwordManagerSearch from "../assets/certificates/PasswordManager-Search.png";

const images = [
  { title: "Main Interface", src: passwordManagerMain },
  { title: "Search Password", src: passwordManagerSearch },
];

const PasswordManager = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-secondary/20 text-foreground flex flex-col">
      <header className="bg-primary text-white dark:bg-background dark:text-white py-6 shadow-md text-center">
        <h1 className="text-4xl font-bold mt-12 md:mt-0">Password Manager</h1>
        <h2 className="text-lg mt-1">Python Mini Project</h2>
      </header>

      <main className="flex-grow container mx-auto px-4 py-10 max-w-4xl">
        <section className="mb-10">
          <h2 className="text-2xl font-bold border-b border-primary pb-2 mb-4">About the Project</h2>
          <p className="text-justify">
            This is a desktop-based password manager built using Python and Tkinter. It allows users to
            generate strong random passwords and store login details for websites securely in a local JSON file.
            The app also provides a search function to retrieve stored credentials easily.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold border-b border-primary pb-2 mb-4">Key Features</h2>
          <ul className="list-disc list-inside pl-4 space-y-1 text-justify">
            <li>Generate random passwords between 8 to 16 characters</li>
            <li>Store website login details (email and password) securely</li>
            <li>Search for stored credentials using website name</li>
            <li>Case-insensitive search functionality</li>
            <li>Clipboard support to copy passwords automatically</li>
            <li>Clean and simple Tkinter GUI with centered window</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold border-b border-primary pb-2 mb-4">Technology Used</h2>
          <ul className="list-disc list-inside pl-4 space-y-1 text-justify">
            <li>Python</li>
            <li>Tkinter</li>
            <li>JSON</li>
            <li>Pyperclip</li>
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
        &copy; 2023 Dnyanesh Badave | Password Manager
      </footer>

      <Link
        to="/#mini-projects"
        className="fixed top-6 left-6 bg-primary text-white dark:bg-muted dark:text-white px-4 py-2 rounded-lg shadow-md font-semibold hover:bg-primary/90 transition-all z-50"
      >
        🔙 Back to Portfolio
      </Link>
    </div>
  );
};

export default PasswordManager;
