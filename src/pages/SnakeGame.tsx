import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import snakeStart from '../assets/certificates/Snake.png';
import snakeGameOver from '../assets/certificates/Snake2.png';

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
      <header className="bg-primary text-white dark:bg-background dark:text-white py-6 shadow-md text-center">
        <h1 className="text-4xl font-bold mt-12 md:mt-0">Snake Game</h1>
        <h2 className="text-lg mt-1">Python Mini Project</h2>
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
        &copy; 2023 Dnyanesh Badave | Snake Game
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

export default SnakeGame;
