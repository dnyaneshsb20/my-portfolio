import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Milk Products Management System",
      type: "Desktop Application",
      description:
        "I have created a CSharp and MySQL-based Milk Products Management System to help Dairy Shop Owners. It will Easily Calculate Bills, Maintain Records, Reducing Manual Work and Saving Time.",
      link: "/project/milk-products"
    },
    {
      title: "User Authentication System",
      type: "Web Application",
      description:
        "I have created a Java and Oracle-based User Authentication System to help websites and applications manage user login and registration. Securely verifies user details, stores log-in data, and prevents unauthorized access, making the system safer and more reliable.",
      link: "/project/userauth"
    },
    {
      title: "Scan and See: Augmented Reality for Instant Data Access",
      type: "Augmented Reality (AR) | Android & Web Application",
      description:
        "Scan and See is an AR-based app to scan real-world cards and instantly access data. Built with Android Studio and Unity for AR, with a backend powered by Oracle DB for seamless data retrieval.",
      link: "/project/scan"
    },
    {
      title: "Data Packet Flow In Network Layer",
      type: "Web Application (Simulation and Visualisation)",
      description:
        "Created a web-based interactive simulation using HTML, CSS, and JS to visually represent how data packets travel through the network layer. Demonstrates IP packet flow and routing decisions.",
      link: "/projects/data-packet-flow-in-network-layer/data-packets.html"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">MY PROJECTS</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="hover-scale">
              <CardHeader>
                <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-semibold">{project.type}</p>
                <p className="text-justify">{project.description}</p>

                {project.link.endsWith('.html') ? (
                  <a
                    href={project.link}
                    className="text-primary font-semibold hover:underline"
                  >
                    <br />View Project
                  </a>
                ) : (
                  <Link
                    to={project.link}
                    className="text-primary font-semibold hover:underline"
                  >
                    <br />View Project
                  </Link>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
