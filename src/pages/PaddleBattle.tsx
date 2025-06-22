import { useEffect } from "react";
import { Link } from "react-router-dom";

import paddleImg1 from "../assets/certificates/Paddle1.png";
import paddleImg2 from "../assets/certificates/Paddle2.png";

const paddleScreens = [
  { title: "Game Start", image: paddleImg1 },
  { title: "Winning Message and Restart Option", image: paddleImg2 },
];

const PaddleBattle = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-secondary/20 text-foreground flex flex-col">
      <header className="bg-primary text-white dark:bg-background dark:text-white py-6 shadow-md text-center">
        <h1 className="text-4xl font-bold mt-12 md:mt-0">Paddle Battle - 2 Player Ball Game</h1>
        <h2 className="text-lg mt-1">Python Desktop Based Game</h2>
      </header>

      <main className="flex-grow container mx-auto px-4 py-10 max-w-4xl">
        <section className="mb-10">
          <h2 className="text-2xl font-bold border-b border-primary pb-2 mb-4">About the Project</h2>
          <p className="text-justify">
            Paddle Battle is a simple 2-player ball game developed using Python and Turtle graphics.
            Each player controls a paddle to hit a bouncing ball, and the first to score 5 points wins.
            The game supports continuous paddle movement, displays winner messages, and includes a
            one-key restart function to replay instantly.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold border-b border-primary pb-2 mb-4">Key Features</h2>
          <ul className="list-disc list-inside pl-4 space-y-1 text-justify">
            <li>Simple 2-player gameplay with paddles and ball</li>
            <li>5-point win condition with winning display</li>
            <li>Real-time paddle control with continuous key press</li>
            <li>Game restart with single key press (R)</li>
            <li>Built using clean object-oriented design</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold border-b border-primary pb-2 mb-4">Technology Used</h2>
          <ul className="list-disc list-inside pl-4 space-y-1 text-justify">
            <li><strong>Language:</strong> Python</li>
            <li><strong>Library:</strong> Turtle</li>
            <li><strong>Design:</strong> Object-Oriented Programming (OOP)</li>
            <li><strong>Files:</strong> main.py, paddle.py, ball.py, scoreboard.py</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold border-b border-primary pb-2 mb-6">Output Screens</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {paddleScreens.map(({ title, image }, index) => (
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
        &copy; 2023 Dnyanesh Badave | Paddle Battle
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

export default PaddleBattle;
