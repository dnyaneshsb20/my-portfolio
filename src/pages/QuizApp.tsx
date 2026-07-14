import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import quizImg1 from '../assets/certificates/quiz1.webp';
import quizImg2 from '../assets/certificates/quiz2.webp';
import quizImg3 from '../assets/certificates/quiz3.webp';
import quizImg4 from '../assets/certificates/quiz4.webp';

const quizScreens = [
  { title: "Question with Options", image: quizImg1 },
  { title: "Correct Answer Feedback", image: quizImg2 },
  { title: "Wrong Answer Feedback", image: quizImg3 },
  { title: "End of Quiz", image: quizImg4 },
];

const QuizApp = () => {
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
            <h1 className="text-3xl sm:text-4xl font-bold">Quiz App</h1>
        <h2 className="text-lg mt-1">Python Desktop Based Application</h2>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-10 max-w-4xl">
        <section className="mb-10">
          <h2 className="text-2xl font-bold border-b border-primary pb-2 mb-4">About the Project</h2>
          <p className="text-justify mb-3">
            The Quiz App is a desktop-based interactive quiz game created using Python and Tkinter. 
            It allows users to answer a series of multiple-choice questions and displays the final score.
          </p>
          <p className="text-justify">
            The app is ideal for small educational projects and quiz practice sessions. It uses OOP 
            concepts and separates the logic, data, UI, and flow for modular and clean design.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold border-b border-primary pb-2 mb-4">Key Features</h2>
          <ul className="list-disc list-inside pl-4 space-y-1 text-justify">
            <li>Simple GUI using Tkinter</li>
            <li>Supports multiple-choice questions</li>
            <li>Tracks user score automatically</li>
            <li>Object-Oriented Design for logic separation</li>
            <li>Easy to extend with more questions or features</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold border-b border-primary pb-2 mb-4">Technology Used</h2>
          <ul className="list-disc list-inside pl-4 space-y-1 text-justify">
            <li><strong>Language:</strong> Python</li>
            <li><strong>Library:</strong> Tkinter</li>
            <li><strong>Development Approach:</strong> Object-Oriented Programming</li>
            <li><strong>Files:</strong> main.py, data.py, quiz_brain.py, question_model.py, ui.py</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold border-b border-primary pb-2 mb-6">Output Screens</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {quizScreens.map(({ title, image }, index) => (
              <div key={index}>
                <p className="text-center font-semibold mb-2">{title}</p>
                <img
                  src={image}
                  alt={title}
                  className="rounded-lg shadow-md w-full max-w-md object-contain mx-auto"
                />
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="w-full text-center text-sm py-4 text-white bg-[#0F172A] dark:bg-background dark:text-white">
        &copy; {new Date().getFullYear()} Dnyanesh Badave | Quiz App
      </footer>
    </div>
  );
};

export default QuizApp;
