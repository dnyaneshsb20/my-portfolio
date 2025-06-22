import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-2">
          <h2 className="text-4xl font-bold mb-4 text-center">ABOUT ME</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          <Card>
            <CardContent className="p-8 space-y-6 text-justify">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2 text-center">👨‍💻 Who I Am</h3>
                <p className="text-muted-foreground">
                  Hi! I am a passionate and curious MCA student at <strong>P.E.S. Modern College of Engineering, Pune</strong>, with a strong interest in <strong>software development</strong>, <strong>automation</strong>, and <strong>problem-solving</strong>. I’ve gained hands-on experience in <strong>C#</strong>, <strong>Python</strong>, <strong>Java</strong>, <strong>HTML</strong>, and <strong>CSS</strong>, and love creating real-world projects that solve actual problems.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary mb-2 text-center">🎯 What Drives Me</h3>
                <p className="text-muted-foreground">
                  I love solving problems, building useful tools, and learning new technologies. I enjoy working in teams and always stay open to new experiences and opportunities.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-primary mb-2 text-center">🎨 Hobbies</h3>
                <p className="text-muted-foreground text-center">Cricket 🏏 | Music 🎵 | Traveling 🌍</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8 text-justify">
              <h3 className="text-xl font-semibold text-primary mb-4 text-center">📚 Learning Beyond the Academics</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-3">
                <li>
                  Participated in a session on <strong>Machine Learning & Generative AI</strong>, led by <strong>Bhushan Garware</strong>, Senior Data Scientist and AI-Consultant at <strong>Google, India</strong>, which gave me a deeper understanding of AI-driven innovation.
                </li>
                <li>
                  I attended an interactive session with <strong>Dr. Manish Joshi</strong>, Secretary, UGC, where he shared insights on various topics.
                </li>
                <li>
                  Completed IP Awareness Training by <strong>Intellectual Property Office of India</strong>.
                </li>
                <li>
                  Created a <strong>Static Web Page for Maharashtra Day</strong> and a <strong>Dynamic Web Page for Holi</strong>, showcasing Creativity and Cultural Celebration through Technical Skills.
                </li>
                <li>
                  Worked as a <strong>Technical Team Member</strong> during the <strong>SAN Pratibha Shodh 2024 Competition</strong>, helping manage technical tasks and event support.
                </li>
                <li>
                  Attended a 7-day bootcamp organized by <strong>DevTown</strong> where I learned the basics of <strong>Web Development</strong> and how to build websites from scratch.
                </li>
                <li>
                  Attended a 7-day bootcamp organized by <strong>DevTown</strong> focused on building an <strong>Instagram Clone</strong> using HTML & CSS, gaining hands-on experience in <strong>Front-end Web Development</strong>.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
