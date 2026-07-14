import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import appscreen from '../assets/certificates/appscreen.webp';
import loginscreen from '../assets/certificates/scan_loginscreen.webp';
import arstudiocamera from '../assets/certificates/arstudiocamera.webp';
import carddetails from '../assets/certificates/carddetails.webp';

const ScanAndSee = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const images = [
    { title: "App Screen", src: appscreen },
    { title: "Login Attempt (External Scan)", src: loginscreen },
    { title: "AR Camera Scan", src: arstudiocamera },
    { title: "Virtual Card Display", src: carddetails },
  ];

  return (
    <div className="min-h-screen bg-secondary/20 text-foreground flex flex-col">
      <header className="bg-primary text-white dark:bg-background dark:text-white py-6 shadow-md">
        <div className="relative flex items-center justify-center px-4">
          <Link
            to="/#projects"
            className="absolute left-4 flex items-center gap-2 text-white/90 hover:text-white dark:text-white/90 dark:hover:text-white transition-colors"
          >
            <span className="text-xl">&#8592;</span>
            <span className="hidden sm:inline font-semibold">Back</span>
          </Link>
          <div className="text-center px-12">
            <h1 className="text-3xl sm:text-4xl font-bold">Scan & See</h1>
        <h2 className="text-lg mt-1">Augmented Reality for Instant Data Access</h2>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-10 max-w-4xl">
        <section className="mb-10">
          <h2 className="text-2xl font-bold border-b border-primary pb-2 mb-4">About the Project</h2>
          <p className="text-justify mb-3">
            In many colleges and institutions, students use physical ID cards for accessing services like libraries, attendance, and academic systems.
          </p>
          <p className="text-justify mb-3">
            Our project introduces a Virtual Student Card system with a scannable QR code that links to live, web-based student data.
          </p>
          <p className="text-justify mb-2">
            This improves efficiency, eco-friendliness, and safety for institutions.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold border-b border-primary pb-2 mb-4">Objective of the Project</h2>
          <ul className="list-disc list-inside pl-4 space-y-1 text-justify">
            <li>Build a digital student ID system with QR code scanning</li>
            <li>Replace plastic cards with smart, virtual cards</li>
            <li>Integrate with academic and attendance systems</li>
            <li>Offer an eco-friendly and secure alternative</li>
            <li>Support scalability across multiple institutions</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold border-b border-primary pb-2 mb-4">Key Features</h2>
          <ul className="list-disc list-inside pl-4 space-y-1 text-justify">
            <li>QR code scan to access live student data</li>
            <li>Data can be updated anytime</li>
            <li>Displays academics, attendance, achievements</li>
            <li>Secure access control</li>
            <li>Supports linking to social media</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold border-b border-primary pb-2 mb-4">Technology Used</h2>
          <ul className="list-disc list-inside pl-4 space-y-1 text-justify">
            <li><strong>Language:</strong> Java (Android)</li>
            <li><strong>Database:</strong> Supabase / SQLite</li>
            <li><strong>Platform:</strong> Android WebView, AR Studio</li>
            <li><strong>Tools:</strong> Android Studio, AR Studio</li>
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
                  className="mx-auto h-auto max-h-[500px]"
                />
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="w-full text-center text-sm py-4 text-white bg-[#0F172A] dark:bg-background dark:text-white">
        &copy; {new Date().getFullYear()} Dnyanesh Badave | Scan & See – Augmented Reality for Instant Data Access
      </footer>
    </div>
  );
};

export default ScanAndSee;
