import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import billingImg1 from '../assets/certificates/medi1.webp';
import billingImg2 from '../assets/certificates/medi2.webp';
import billingImg3 from '../assets/certificates/medi3.webp';
import billingImg4 from '../assets/certificates/medi4.webp';

const MedicalBillingAnalyzer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const images = [
    { title: 'Dashboard Overview', src: billingImg1 },
    { title: 'Number of Patients by Gender', src: billingImg4 },
    { title: 'Common Symptoms', src: billingImg2 },
    { title: 'Doctor Revenue', src: billingImg3 },
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
            <h1 className="text-3xl sm:text-4xl font-bold">Medical Billing Analyzer</h1>
        <h2 className="text-lg mt-1">Data Science Mini Project</h2>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-10 max-w-4xl">
        <section className="mb-10">
          <h2 className="text-2xl font-bold border-b border-primary pb-2 mb-4">About the Project</h2>
          <p className="text-justify mb-3">
            The Medical Billing Analyzer is a data science project designed to analyze healthcare billing data and provide meaningful insights. The system processes patient records, medical symptoms, doctor involvement, and revenue generation to help hospitals understand performance and financial metrics.
          </p>
          <p className="text-justify mb-3">
            This project uses Python, Pandas, and Streamlit to visualize medical billing trends, doctor performance, revenue distribution, and patient demographics. It is useful in hospital data analytics and healthcare decision‑making.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold border-b border-primary pb-2 mb-4">Key Features</h2>
          <ul className="list-disc list-inside pl-4 space-y-1 text-justify">
            <li>Interactive dashboard built with Streamlit</li>
            <li>Doctor‑wise revenue analysis</li>
            <li>Symptom‑based patient distribution</li>
            <li>Gender‑based patient insights</li>
            <li>Downloadable filtered medical billing dataset</li>
            <li>Dynamic data filtering based on doctors, gender, and symptoms</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold border-b border-primary pb-2 mb-4">Technology Used</h2>
          <ul className="list-disc list-inside pl-4 space-y-1 text-justify">
            <li><strong>Programming Language:</strong> Python</li>
            <li><strong>Libraries:</strong> Pandas, Matplotlib, Faker</li>
            <li><strong>Framework:</strong> Streamlit</li>
            <li><strong>Tools:</strong> VS Code, Jupyter Notebook, CSV Dataset</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold border-b border-primary pb-2 mb-6">Project Screenshots</h2>
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
        &copy; {new Date().getFullYear()} Dnyanesh Badave | Medical Billing Analyzer Project
      </footer>
    </div>
  );
};

export default MedicalBillingAnalyzer;
