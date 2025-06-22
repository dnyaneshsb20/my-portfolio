import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import quizImg1 from '../assets/certificates/quiz1.png';
import quizImg2 from '../assets/certificates/quiz2.png';
import quizImg3 from '../assets/certificates/quiz3.png';
import quizImg4 from '../assets/certificates/quiz4.png';

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
      <header className="bg-primary text-white dark:bg-background dark:text-white py-6 shadow-md text-center">
        <h1 className="text-4xl font-bold mt-12 md:mt-0">Quiz App</h1>
        <h2 className="text-lg mt-1">Python Desktop Based Application</h2>
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
        &copy; 2023 Dnyanesh Badave | Quiz App
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

export default QuizApp;
