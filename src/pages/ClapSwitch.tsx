import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import clapImg1 from '../assets/certificates/clap.webp';
import clapImg2 from '../assets/certificates/clap2.webp';
import clapImg3 from '../assets/certificates/clap3.webp';

const ClapSwitch = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const images = [
    { title: 'Circuit Assembled', src: clapImg1 },
    { title: 'LED Before Clap', src: clapImg2 },
    { title: 'LED ON After Clap', src: clapImg3 },
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
            <h1 className="text-3xl sm:text-4xl font-bold">Clap Switch</h1>
            <h2 className="text-lg mt-1">IoT-Based Mini Project</h2>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-10 max-w-4xl">
        <section className="mb-10">
          <h2 className="text-2xl font-bold border-b border-primary pb-2 mb-4">About the Project</h2>
          <p className="text-justify mb-3">
            The Clap Switch is an Arduino-based project that enables controlling devices like an LED through the sound of a clap. It utilizes a sound sensor to detect claps and toggles the output state, offering a simple demonstration of sound-based automation.
          </p>
          <p className="text-justify mb-3">
            This project is great for learning basic Arduino programming, signal processing, and interactive hardware systems. It is useful in smart home applications and introduces the concept of sound-controlled electronics.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold border-b border-primary pb-2 mb-4">Key Features</h2>
          <ul className="list-disc list-inside pl-4 space-y-1 text-justify">
            <li>Sound-based ON/OFF control using claps</li>
            <li>Utilizes Arduino and a sound sensor module</li>
            <li>LED toggles with every detected clap</li>
            <li>Adjustable sensitivity via potentiometer</li>
            <li>Simple and beginner-friendly circuit design</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold border-b border-primary pb-2 mb-4">Technology Used</h2>
          <ul className="list-disc list-inside pl-4 space-y-1 text-justify">
            <li><strong>Hardware:</strong> Arduino Uno, Sound Sensor (KY-038 or similar)</li>
            <li><strong>Components:</strong> LED, 220-ohm resistor, Breadboard, Wires</li>
            <li><strong>Software:</strong> Arduino IDE</li>
            <li><strong>Language:</strong> Arduino C/C++</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold border-b border-primary pb-2 mb-6">Circuits and Connections</h2>
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
        &copy; {new Date().getFullYear()} Dnyanesh Badave | Clap Switch Project
      </footer>


    </div>
  );
};

export default ClapSwitch;
