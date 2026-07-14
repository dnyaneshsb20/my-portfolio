import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import snakeStart from '../assets/certificates/Snake.webp';
import snakeGameOver from '../assets/certificates/Snake2.webp';

const SnakeGame = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const images = [
    { title: "Game Start Screen", src: snakeStart },
    { title: "Game Over", src: snakeGameOver },
  ];

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
            <h1 className="text-3xl sm:text-4xl font-bold">Snake Game</h1>
        <h2 className="text-lg mt-1">Python Mini Project</h2>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-10 max-w-4xl">
        <section className="mb-10">
          <h2 className="text-2xl font-bold border-b border-primary pb-2 mb-4">About the Project</h2>
          <p className="text-justify mb-3">
            The Snake Game is a classic arcade-style game developed using Python's Turtle graphics library. 
            The objective of the game is to control a snake that moves around the screen, eats food to grow 
            longer, and avoids colliding with the walls or itself. The game features a scoring system with 
            high score tracking and allows restarting the game after it's over.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold border-b border-primary pb-2 mb-4">Key Features</h2>
          <ul className="list-disc list-inside pl-4 space-y-1 text-justify">
            <li>Classic snake game with growing snake segments</li>
            <li>Controls using arrow keys (Up, Down, Left, Right)</li>
            <li>Food spawns at random positions after being eaten</li>
            <li>Score increases every time the snake eats food</li>
            <li>High score tracking stored in a text file</li>
            <li>Game over when snake hits wall or its own body</li>
            <li>Restart functionality by pressing the 'r' key</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold border-b border-primary pb-2 mb-4">Technology Used</h2>
          <ul className="list-disc list-inside pl-4 space-y-1 text-justify">
            <li><strong>Programming Language:</strong> Python</li>
            <li><strong>Graphics Library:</strong> Turtle</li>
            <li><strong>File Handling:</strong> Used for saving high score (Data.txt)</li>
            <li><strong>IDE:</strong> Any Python-supported editor (e.g., VS Code, PyCharm)</li>
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
        &copy; {new Date().getFullYear()} Dnyanesh Badave | Snake Game
      </footer>
    </div>
  );
};

export default SnakeGame;
