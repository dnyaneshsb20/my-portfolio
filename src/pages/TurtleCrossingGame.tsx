import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import turtleStart from '../assets/certificates/Turtle.png';
import turtleGameOver from '../assets/certificates/Turtle2.png';

const TurtleCrossingGame = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const images = [
    { title: "Game Start Screen", src: turtleStart },
    { title: "Game Over", src: turtleGameOver },
  ];

  return (
    <div className="min-h-screen bg-secondary/20 text-foreground flex flex-col">
      <header className="bg-primary text-white dark:bg-background dark:text-white py-6 shadow-md text-center">
        <h1 className="text-4xl font-bold mt-12 md:mt-0">Turtle Crossing Game</h1>
        <h2 className="text-lg mt-1">Python Mini Project</h2>
      </header>

      <main className="flex-grow container mx-auto px-4 py-10 max-w-4xl">
        <section className="mb-10">
          <h2 className="text-2xl font-bold border-b border-primary pb-2 mb-4">About the Project</h2>
          <p className="text-justify mb-3">
            This is a fun Python game where you control a turtle trying to cross a busy road.
            You need to avoid cars that move faster as the levels increase. It helps practice
            basic coding with easy controls and simple graphics.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold border-b border-primary pb-2 mb-4">Key Features</h2>
          <ul className="list-disc list-inside pl-4 space-y-1 text-justify">
            <li>Control turtle to move up, down, left, and right</li>
            <li>Multiple levels with increasing difficulty</li>
            <li>Collision detection between turtle and cars</li>
            <li>Score tracking based on successful crossings</li>
            <li>Simple keyboard controls for smooth gameplay</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold border-b border-primary pb-2 mb-4">Technology Used</h2>
          <ul className="list-disc list-inside pl-4 space-y-1 text-justify">
            <li><strong>Language:</strong> Python</li>
            <li><strong>Library:</strong> Turtle graphics module</li>
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
                  className="rounded-lg shadow-md w-full object-contain"
                />
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="w-full text-center text-sm py-4 text-white bg-[#0F172A] dark:bg-background dark:text-white">
        &copy; 2023 Dnyanesh Badave | Turtle Crossing Game
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

export default TurtleCrossingGame;
