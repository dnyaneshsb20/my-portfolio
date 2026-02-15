import { useEffect } from "react";
import { Link } from "react-router-dom";

import Dashboard from "../assets/certificates/Dashboard.jpeg"
import Authority from "../assets/certificates/Authority.jpeg"
import Student from "../assets/certificates/Student.jpeg"
import Verifier from "../assets/certificates/Verifier.jpeg"
import Login from "../assets/certificates/LoginScreen.jpeg"
import Admin from "../assets/certificates/Admin.jpeg"

type ImageItem = {
  title: string;
  src: string;
};

const SmartQRDocs: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const images: ImageItem[] = [
    { title: "Home Page", src: Dashboard },
    { title: "Login Page", src: Login },
    { title: "Student Dashboard", src: Student },
    { title: "Verifier Dashboard", src: Verifier },
    { title: "Authority Dashboard", src: Authority },
    { title: "Admin Dashhboard", src: Admin },
  ];

  return (
    <div className="min-h-screen bg-secondary/20 text-foreground flex flex-col">
      <header className="bg-primary text-white dark:bg-background dark:text-white py-6 shadow-md text-center">
        <h1 className="text-4xl font-bold mt-12 md:mt-0">
          SmartQR-Docs – Controlled Access to Documents via QR
        </h1>
        <h2 className="text-lg mt-1">
          Role-Based Access | QR Validation | Digital Document Workflow
        </h2>
      </header>

      <main className="flex-grow container mx-auto px-4 py-10 max-w-4xl">

        {/* About the Project */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold border-b border-primary pb-2 mb-4">
            About the Project
          </h2>

          <p className="text-justify mb-3">
            <strong>SmartQR-Docs</strong> is a secure document access platform
            designed to generate a single <strong>QR code for selected documents</strong>,
            enabling <strong>controlled sharing</strong> and
            <strong>role-based access permissions</strong>.
          </p>

          <p className="text-justify mb-3">
            Students can upload and manage their academic documents, while
            authorized verifiers can validate them instantly by scanning the
            generated QR code.
          </p>

          <p className="text-justify">
            It provides a centralized workflow where documents are stored securely,
            linked to unique users, and verified in real time through a clean dashboard.
          </p>
        </section>

        {/* Key Features */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold border-b border-primary pb-2 mb-4">
            Key Features
          </h2>

          <ul className="list-disc list-inside pl-4 space-y-1 text-justify">
            <li>Secure authentication and role-based navigation.</li>
            <li>Student dashboard for uploading and managing documents.</li>
            <li>Verifier dashboard for instant QR-based validation.</li>
            <li>Unique QR code generation for each verified document.</li>
            <li>Real-time document status tracking.</li>
            <li>Centralized user profile management.</li>
            <li>Prevention of fake or duplicate submissions.</li>
          </ul>
        </section>

        {/* Technology Used */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold border-b border-primary pb-2 mb-4">
            Technology Used
          </h2>

          <ul className="list-disc list-inside pl-4 space-y-1 text-justify">
            <li><strong>Frontend:</strong> React Native (Expo)</li>
            <li><strong>Navigation:</strong> React Navigation (Native Stack)</li>
            <li><strong>Backend & Auth:</strong> Supabase</li>
            <li><strong>Database:</strong> PostgreSQL</li>
            <li><strong>QR Generation:</strong> QR Code Library</li>
            <li><strong>Storage:</strong> Supabase Storage</li>
            <li><strong>State Management:</strong> Context API</li>
          </ul>
        </section>

        {/* Impact */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold border-b border-primary pb-2 mb-4">
            Impact
          </h2>

          <ul className="list-disc list-inside pl-4 space-y-1 text-justify">
            <li>Eliminates manual verification process.</li>
            <li>Prevents document misuse through secure QR-based access.</li>
            <li>Speeds up verification for institutions.</li>
            <li>Provides a fully digital workflow.</li>
          </ul>
        </section>

        {/* Future Scope */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold border-b border-primary pb-2 mb-4">
            Future Scope
          </h2>

          <ul className="list-disc list-inside pl-4 space-y-1 text-justify">
            <li>Integration with university ERP systems.</li>
            <li>Blockchain-based document verification.</li>
            <li>Public verification portal for recruiters.</li>
          </ul>
        </section>

        {/* Demo Link */}
        {/* <section className="mb-10">
          <h2 className="text-2xl font-bold border-b border-primary pb-2 mb-4">
            Demo Link
          </h2>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold hover:underline"
          >
            View Project Demo
          </a>
        </section> */}

        {/* Output Screens */}
        <section>
          <h2 className="text-2xl font-bold border-b border-primary pb-2 mb-6">
            Output Screens
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {images.map(({ title, src }, index) => (
              <div key={index}>
                <p className="text-center font-semibold mb-2">{title}</p>
                <img
                  src={src}
                  alt={title}
                  className="rounded-lg shadow-md w-44 object-contain mx-auto"
                />
              </div>
            ))}
          </div>
        </section>

      </main>

      <footer className="w-full text-center text-sm py-4 text-white bg-[#0F172A] dark:bg-background dark:text-white">
        &copy; 2026 SmartQR-Docs | Controlled Access to Documents via QR
      </footer>

      <Link
        to="/#projects"
        className="fixed top-6 left-6 bg-primary text-white dark:bg-muted dark:text-white px-4 py-2 rounded-lg shadow-md font-semibold hover:bg-primary/90 transition-all z-50"
      >
        🔙 Back to Portfolio
      </Link>
    </div>
  );
};

export default SmartQRDocs;
