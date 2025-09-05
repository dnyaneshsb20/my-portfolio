import { DiVisualstudio, DiMsqlServer } from "react-icons/di";
import { Card, CardContent } from '@/components/ui/card';
import { FaJava } from "react-icons/fa6";
import pythonLogo from "../assets/certificates/python-logo.png";
import {
  SiC,
  SiCplusplus,
  SiReact,
  SiDotnet,
  SiPython,
  SiHtml5,
  SiAndroid,
  SiAndroidstudio,
  SiSublimetext,
  SiMysql,
  SiOracle,
  SiCss3,
  SiJavascript,
  SiSupabase,
  SiTailwindcss
} from "react-icons/si";
import { FaBug, FaComments, FaPuzzlePiece, FaProjectDiagram, FaUsers, FaSyncAlt, FaClock  } from "react-icons/fa";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages and Technologies",
      skills: [
        { name: "HTML", icon: <SiHtml5 className="text-orange-600" /> },
        { name: "CSS", icon: <SiCss3 className="text-blue-600" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "ReactJS", icon: <SiReact className="text-cyan-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss color="#38B2AC" />},
        { name: "C#", icon: <SiDotnet className="text-purple-600" /> },
        { name: "Python", icon: <img src={pythonLogo} alt="Python" className="w-12 h-13" /> },
        { name: "Java", icon: <FaJava className="text-red-600" /> },
        { name: "C", icon: <SiC className="text-gray-700" /> },
        { name: "C++", icon: <SiCplusplus className="text-blue-700" /> },
        { name: "Android Dev", icon: <SiAndroid className="text-green-600" /> },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "SQL Server", icon: <DiMsqlServer className="text-red-700" /> },
        { name: "Oracle", icon: <SiOracle className="text-red-600" /> },
        { name: "MySQL", icon: <SiMysql className="text-teal-600" /> },
        { name: "Supabase", icon: <SiSupabase className="text-green-500" /> },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Visual Studio", icon: <DiVisualstudio className="text-indigo-600" /> },
        { name: "Android Studio", icon: <SiAndroidstudio className="text-green-600" /> },
        { name: "AR Studio", icon: "🇦🇷" },
        { name: "Sublime Text", icon: <SiSublimetext className="text-yellow-600" /> },
      ],
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Communication", icon: <FaComments className="text-blue-500" /> },
        { name: "Problem Solving", icon: <FaPuzzlePiece className="text-green-500" /> },
        { name: "Project Management", icon: <FaProjectDiagram className="text-purple-500" /> },
        { name: "Teamwork", icon: <FaUsers className="text-pink-500" /> },
        { name: "Adaptability", icon: <FaSyncAlt className="text-yellow-500" /> },
        { name: "Time Management", icon: <FaClock className="text-orange-500" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        {/* Main title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">TECHNICAL SKILLS</h2>
        </div>

        {/* Category wise skills */}
        {skillCategories.map((category, index) => (
          <div key={index} className="mb-5 text-center max-w-7xl mx-auto">
            <Card className="flex flex-col rounded-2xl shadow-lg border border-gray-200">
              <CardContent className="p-8 text-justify">
              {/* Category Title */}
              <h3 className="text-2xl font-bold text-primary mb-6 text-center">
                {category.title}
              </h3>

              {/* Skills Grid - Centered */}
              <div className="flex flex-wrap justify-center gap-10">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center justify-center space-y-2 hover:scale-110 transition-transform duration-300 w-28"
                  >
                    <span className="text-5xl">{skill.icon}</span>
                    <span className="text-md font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
