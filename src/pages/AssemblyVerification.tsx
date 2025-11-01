import { useEffect } from "react";
import { Link } from "react-router-dom";

import hackathon1 from "../assets/certificates/hack1.jpg";
import hackathon2 from "../assets/certificates/hack2.jpg";
import hackathon3 from "../assets/certificates/hack3.jpg";

const AssemblyVerification = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const images = [
    { title: "Complete Dashboard", src: hackathon1 },
    { title: "Project Setup", src: hackathon2 },
    { title: "YOLOv8 Object Detection", src: hackathon3 },
  ];

  return (
    <div className="min-h-screen bg-secondary/20 text-foreground flex flex-col">
      <header className="bg-primary text-white dark:bg-background dark:text-white py-6 shadow-md text-center">
        <h1 className="text-4xl font-bold mt-12 md:mt-0">
          Real-Time Assembly Verification using Vision-Language Models
        </h1>
        <h2 className="text-lg mt-1">Hackathon Project | Computer Vision + AI</h2>
      </header>

      <main className="flex-grow container mx-auto px-4 py-10 max-w-4xl">
        {/* About the Project */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold border-b border-primary pb-2 mb-4">
            About the Project
          </h2>
          <p className="text-justify mb-3">
            This project was developed for the Mindspark Hackathon. The problem statement focused on
            <strong> real-time assembly process verification</strong> using Vision-Language Models (VLLMs).
            In manufacturing assembly lines, human errors like missing components, incorrect order of assembly, or incomplete steps
            can reduce product quality and increase rework costs.
          </p>
          <p className="text-justify mb-3">
            Traditional inspection systems are either manual, slow, or expensive to scale. Our solution provides an
            <strong> AI-powered verification system</strong> that automatically analyzes videos of an assembly process
            and checks whether every step was performed correctly and in the right sequence.
          </p>
          <p className="text-justify">
            The system detects each assembly step from a video, compares it with a golden reference procedure,
            and produces a detailed report showing which steps were completed, missed, or out of order — all
            without human supervision.
          </p>
        </section>

        {/* Key Features */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold border-b border-primary pb-2 mb-4">
            Key Features
          </h2>
          <ul className="list-disc list-inside pl-4 space-y-1 text-justify">
            <li>Analyzes assembly videos frame-by-frame using OpenCV.</li>
            <li>Detects components with YOLOv8 and Vision-Language reasoning.</li>
            <li>Compares detected actions with the “Golden Standard Procedure.”</li>
            <li>Generates JSON-based reports showing done, missing, or out-of-order steps.</li>
            <li>Displays annotated visual proof and timestamps for each step.</li>
            <li>Streamlit dashboard for easy video upload and result visualization.</li>
            <li>Color-coded step status: ✅ Done, 🚨 Missing, ⚠ Out of order.</li>
          </ul>
        </section>

        {/* Technology Used */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold border-b border-primary pb-2 mb-4">
            Technology Used
          </h2>
          <ul className="list-disc list-inside pl-4 space-y-1 text-justify">
            <li><strong>Frontend UI:</strong> Streamlit</li>
            <li><strong>Video Processing:</strong> OpenCV</li>
            <li><strong>Object Detection:</strong> YOLOv8 / Vision Model</li>
            <li><strong>Vision-Language Reasoning:</strong> VLLM</li>
            <li><strong>Programming Language:</strong> Python</li>
            <li><strong>Output Format:</strong> JSON + Annotated Frames</li>
            <li><strong>Visualization:</strong> Streamlit Dashboard</li>
          </ul>
        </section>

        {/* Impact */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold border-b border-primary pb-2 mb-4">
            Impact
          </h2>
          <ul className="list-disc list-inside pl-4 space-y-1 text-justify">
            <li>Reduces manual inspection effort by 70–80%.</li>
            <li>Detects assembly errors before product completion.</li>
            <li>Improves quality consistency and traceability in production lines.</li>
            <li>Fully automated and easily integrable into existing workflows.</li>
          </ul>
        </section>

        {/* Future Scope */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold border-b border-primary pb-2 mb-4">
            Future Scope
          </h2>
          <ul className="list-disc list-inside pl-4 space-y-1 text-justify">
            <li>Integration with real-time CCTV feeds.</li>
            <li>Multi-camera synchronization for complex assemblies.</li>
            <li>Fine-tuned VLMs for multi-product adaptability.</li>
            <li>Integration with Manufacturing Execution Systems (MES).</li>
          </ul>
        </section>

        {/* Demo Link */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold border-b border-primary pb-2 mb-4">Demo Link</h2>
          <a
            href="https://drive.google.com/file/d/1KaNIuloaOhvYjN-g7xpvhjDpsmqf3rH7/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold hover:underline"
          >
            View Project Demo
          </a>
        </section>

        {/* Output Screens */}
        <section>
          <h2 className="text-2xl font-bold border-b border-primary pb-2 mb-6">
            Output Screens
          </h2>
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
        &copy; 2025 Dnyanesh Badave | Real-Time Assembly Verification using VLLMs
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

export default AssemblyVerification;
