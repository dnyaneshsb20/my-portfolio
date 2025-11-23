import { IoBookSharp } from "react-icons/io5";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import certImage from "../assets/certificates/research.png";

const publicationsData = [
  {
    id: 1,
    title: "HeritageBites: A Socio-Technical Approach for Promoting Indigenous Food Systems",
    journal: "International Journal of Scientific Research in Engineering & Management (IJSREM)",
    date: "November 19, 2025",
    description:
      "Published research paper in IJSREM (Volume 09, Issue 11, November 2025). The paper focuses on promoting indigenous food systems using a simple socio-technical approach.",
    certificate: certImage,
    paperUrl: "https://ijsrem.com/download/heritagebites-a-socio-technical-approach-for-promoting-indigenous-food-systems/",
    certificateUrl: "https://drive.google.com/file/d/1p7g71yJiAjp4AX4kmxZjg2Oy-jripc04/view?usp=sharing", // <-- Add your certificate page URL
  },
];

export default function Publications() {
  return (
    <div className="min-h-screen bg-background">
      <Header
        onCertificationsClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />

      <section className="max-w-6xl mx-auto px-6 py-28">
        <div className="flex items-center justify-center space-x-3 mb-10">
          <IoBookSharp className="text-primary w-8 h-8 dark:text-white" />
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            PUBLICATIONS
          </h1>
        </div>

        <div className="space-y-6">
          {publicationsData.map((pub) => (
            <div
              key={pub.id}
              className="flex flex-col md:flex-row w-full rounded-2xl bg-white dark:bg-zinc-900 shadow-md overflow-hidden"
            >
              {/* Left Side - Certificate Image (40%) */}
              <div className="md:w-3/6 w-full h-56 md:h-auto">
                <img
                  src={pub.certificate}
                  alt="Certificate"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right Side - Content (60%) */}
              <div className="md:w-3/5 w-full p-5 flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-semibold dark:text-white text-justify">
                    {pub.title}
                  </h2>
                  <p className="text-gray-500 dark:text-gray-300 text-justify">
                    {pub.journal}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                    {pub.date}
                  </p>

                  <p className="text-gray-700 dark:text-gray-200 text-justify">
                    {pub.description}
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-5">
                  <a
                    href={pub.paperUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 text-center py-2 font-semibold rounded-lg bg-primary text-white  dark:bg-white dark:text-black hover:opacity-90 transition-all"
                  >
                    View Paper
                  </a>

                  <a
                    href={pub.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 text-center py-2 font-semibold rounded-lg bg-black text-white dark:bg-white dark:text-black hover:opacity-90 transition-all"
                  >
                    View Certificate
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
