import { useEffect } from 'react';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const CampusZ = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            <h1 className="text-3xl sm:text-4xl font-bold">Campus Z – Smart Campus Ecosystem</h1>
        <h2 className="text-lg mt-1">Full-Stack Web Platform</h2>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-10 max-w-4xl">

        {/* ABOUT THE PROJECT */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold border-b border-primary pb-2 mb-4">About the Project</h2>
          <p className="text-justify mb-3">
            Campus Z is a next-generation, full-stack campus management ecosystem designed to unify academics, administration, student life, and campus services into one smart digital platform.
          </p>
          <p className="text-justify mb-3">
            It ensures efficiency, transparency, automation, and better communication across the entire campus. The system helps students, faculty, and management manage all academic and administrative operations smoothly from a centralized portal.
          </p>
        </section>

        {/* KEY FEATURES */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold border-b border-primary pb-2 mb-4">Key Features</h2>
          <ul className="list-disc list-inside pl-4 space-y-2 text-justify">
            <li><strong>Smart Attendance System:</strong> QR-based, face-recognition, or geo-fencing attendance with real-time syncing and auto-generated reports.</li>
            <li><strong>Centralized Student Profile:</strong> Stores academic history, certifications, achievements, documents, and skill analytics.</li>
            <li><strong>Complaint &amp; Grievance Management:</strong> Track hostel, classroom, and facility complaints with full workflow from submission to resolution.</li>
            <li><strong>Events &amp; Social Hub:</strong> Club activities, festivals, seminars, registration, ticketing, and campus-wide announcements.</li>
            <li><strong>Smart Timetable &amp; Scheduler:</strong> Auto-generated, conflict-free schedules with faculty substitution suggestions.</li>
            <li><strong>Transport &amp; Hostel Management:</strong> Bus tracking, seat allocation, hostel room assignment, and visitor logs.</li>
            <li><strong>Result &amp; Exam Module:</strong> Digital mark sheets, internal/external/practical marks entry, analysis graphs for students and faculty.</li>
            <li><strong>Admin Analytics Dashboard:</strong> Attendance trends, complaint statistics, event participation, academic insights.</li>
            <li><strong>Campus Communication System:</strong> Secure messaging, automated alerts, reminders, and notifications.</li>
          </ul>
        </section>

        {/* TECHNOLOGY USED */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold border-b border-primary pb-2 mb-4">Technology Used</h2>
          <ul className="list-disc list-inside pl-4 space-y-1 text-justify">
            <li><strong>Frontend:</strong> HTML, JavaScript, Tailwind CSS</li>
            <li><strong>Backend:</strong> PHP</li>
            <li><strong>Database:</strong> MySQL</li>
            <li><strong>Architecture:</strong> REST API based modular structure</li>
          </ul>
        </section>

        {/* IMPACT */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold border-b border-primary pb-2 mb-4">Impact</h2>
          <ul className="list-disc list-inside pl-4 space-y-2 text-justify">
            <li><strong>For Students:</strong> One platform for attendance, academics, complaints, events, and communication. Faster resolutions and more transparency.</li>
            <li><strong>For Faculty:</strong> Automated attendance, grading, and real-time performance insights.</li>
            <li><strong>For Management:</strong> Centralized monitoring, data-driven decisions, and 30–40% reduction in administrative workload.</li>
            <li><strong>For Campus Environment:</strong> Reduced paperwork, improved discipline, and full digitization of campus operations.</li>
          </ul>
        </section>

        {/* FUTURE SCOPE */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold border-b border-primary pb-2 mb-4">Future Scope</h2>
          <ul className="list-disc list-inside pl-4 space-y-2 text-justify">
            <li><strong>AI-Based Predictive Analytics:</strong> Dropout prediction, performance forecasting, personalized learning paths.</li>
            <li><strong>Digital ID &amp; Access Control:</strong> RFID/NFC based lab, library, and hostel access.</li>
            <li><strong>AI Chatbot:</strong> 24/7 automated support for queries and complaints.</li>
            <li><strong>IoT Integration:</strong> Smart classroom automation, energy monitoring, IoT attendance systems.</li>
            <li><strong>Inter-Campus Networking:</strong> Multi-campus unified management system.</li>
            <li><strong>AR/VR Integration:</strong> Virtual campus tours and immersive orientation experiences.</li>
          </ul>
        </section>

        {/* OUTPUT SCREENS */}
        <section>
          <h2 className="text-2xl font-bold border-b border-primary pb-2 mb-6">Output Screens</h2>
          <h3 className="text-2xl text-center font-bold pb-2 mb-6">Coming Soon...</h3>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default CampusZ;
