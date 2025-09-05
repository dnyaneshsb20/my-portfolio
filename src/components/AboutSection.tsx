import { useState, useRef } from "react";
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const [showAll, setShowAll] = useState(false);
  const listRef = useRef<HTMLUListElement>(null);

  const learningPoints = [
    <li key={1}>Worked as a <strong>Technical Team Member</strong> during the <strong>SAN Pratibha Shodh 2024 Competition</strong>, helping manage technical tasks and event support.</li>,
    <li key={2}>Attended a 7-day bootcamp organized by <strong>DevTown</strong> where I learned the basics of <strong>Web Development</strong> and how to build websites from scratch.</li>,
    <li key={3}>Participated in a session on <strong>Machine Learning & Generative AI</strong>, led by <strong>Bhushan Garware</strong>, Senior Data Scientist and AI-Consultant at <strong>Google, India</strong>, which gave me a deeper understanding of AI-driven innovation.</li>,
    <li key={4}>Attended a session on <strong>Cloud Computing: The Digital Backbone of Tomorrow</strong>, led by <strong>Abhijeet Chinchole, CTO at Cloudlytics and AWS Ambassador</strong>, who shared valuable insights on cloud trends, real-time applications, and career opportunities in the field.</li>,
    <li key={5}>Participated in a session on <strong>Innovation, Start-Ups, and Start-Up Culture</strong>, led by <strong>Dr. Abhay Jere, Vice-Chairman of AICTE and Chief Innovation Officer, Ministry of Education, Government of India</strong>, which provided valuable insights into innovation and start-up ideas.</li>,
    <li key={6}>I attended an interactive session with <strong>Dr. Manish Joshi, Secretary, UGC, Ministry of Education, Government of India</strong>, where he shared insights on various topics.</li>,
    <li key={7}>Completed IP Awareness Training by <strong>Intellectual Property Office of India</strong>.</li>,
    <li key={8}>Created a <strong>Static Web Page for Maharashtra Day</strong> and a <strong>Dynamic Web Page for Holi</strong>, showcasing Creativity and Cultural Celebration through Technical Skills.</li>,
    
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-center mb-4">ABOUT ME</h2>
        </div>

        {/* Row 1: Who I Am | What Drives Me | Hobbies */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-8">
          <Card className="flex flex-col rounded-2xl shadow-lg border border-gray-200">
            <CardContent className="p-8 flex-1 text-center">
              <h3 className="text-2xl font-bold text-primary mb-6">Who I Am</h3>
              <ul className="list-disc list-inside space-y-3 text-left max-w-md mx-auto">
                <li>MCA Student</li>
                <li>Software Development Enthusiast</li>
                <li>Automation & Problem-Solving</li>
                <li>Proficient in Java, Python, HTML, CSS, C#</li>
                <li>Loves creating real-world projects</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="flex flex-col rounded-2xl shadow-lg border border-gray-200">
            <CardContent className="p-8 flex-1 text-center">
              <h3 className="text-2xl font-bold text-primary mb-6">What Drives Me</h3>
              <ul className="list-disc list-inside space-y-3 text-left max-w-md mx-auto">
                <li>Solving Problems</li>
                <li>Building Useful Tools</li>
                <li>Learning New Technologies</li>
                <li>Team Collaboration & Mentoring</li>
                <li>Continuous Learning & Experimenting</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="flex flex-col rounded-2xl shadow-lg border border-gray-200">
            <CardContent className="p-8 flex-1 text-center">
              <h3 className="text-2xl font-bold text-primary mb-6">Hobbies</h3>
              <ul className="list-disc list-inside space-y-3 text-left max-w-md mx-auto">
                <li>Cricket</li>
                <li>Music</li>
                <li>Traveling</li>
                <li>Surfing Tech News</li>
                <li>Coding Challenges</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Row 2: Learning Beyond the Academics */}
        <div className="max-w-7xl mx-auto">
          <Card className="flex flex-col rounded-2xl shadow-lg border border-gray-200">
            <CardContent className="p-8 text-justify">
              <h3 className="text-2xl font-bold text-primary mb-6 text-center">Learning Beyond the Academics</h3>
              <ul className="list-disc list-outside text-foreground space-y-3" ref={listRef}>
                {learningPoints.slice(0, showAll ? learningPoints.length : 3)}
              </ul>
              <div className="text-center mt-4">
                <button
                  className="text-primary font-semibold hover:underline"
                  onClick={() => {
                    setShowAll(!showAll);
                    setTimeout(() => {
                      if (listRef.current) {
                        listRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
                      }
                    }, 100);
                  }}
                >
                  {showAll ? "Show Less ▲" : "Show More ▼"}
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
