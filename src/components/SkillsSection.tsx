import React from "react";  
import { DiVisualstudio, DiMsqlServer, DiJavascript, DiNetbeans } from "react-icons/di";
import { Card, CardContent } from '@/components/ui/card';
import { FaJava } from "react-icons/fa6";
import pythonLogo from "../assets/certificates/python-logo.webp";
import { SiC, SiCplusplus, SiReact, SiDotnet, SiHtml5, SiAndroid, SiAndroidstudio, SiSublimetext, SiMysql, SiOracle, SiCss3, SiSupabase, SiTailwindcss, SiPhp, SiPhpmyadmin } from "react-icons/si";
import { FaBug, FaComments, FaPuzzlePiece, FaProjectDiagram, FaUsers, FaSyncAlt, FaClock, FaNode, FaGitAlt, FaGithub } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { MdOutlineRecordVoiceOver } from "react-icons/md";
import { GiMagnifyingGlass } from "react-icons/gi";
import { IoBookSharp } from "react-icons/io5";
import { icons } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages and Technologies",
      skills: [
        { name: "HTML", icon: <SiHtml5 className="text-orange-600" /> },
        { name: "CSS", icon: <SiCss3 className="text-blue-600" /> },
        { name: "JavaScript", icon: <DiJavascript className="text-yellow-400" /> },
        { name: "ReactJS", icon: <SiReact className="text-cyan-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss color="#38B2AC" /> },
        { name: "PHP", icon: <SiPhp color="#777BB4" /> },
        { name: "NodeJS", icon: <FaNode color="#339933" /> },
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
        { name: "Supabase", icon: <SiSupabase className="text-green-500" /> },
        { name: "Oracle", icon: <SiOracle className="text-red-600" /> },
        { name: "PHP MyAdmin", icon:<SiPhpmyadmin color="#6C78AF"/>},
        { name: "MySQL", icon: <SiMysql className="text-teal-600" /> },
        { name: "SQL Server", icon: <DiMsqlServer className="text-red-700" /> },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
        { name: "Git Hub", icon: <FaGithub /> },
        { name: "Visual Studio Code", icon: <VscVscode className="text-blue-600" /> },
        { name: "Visual Studio Community", icon: <DiVisualstudio color="#68217A" /> },
        { name: "Android Studio", icon: <SiAndroidstudio className="text-green-600" /> },
        { name: "AR Studio", icon: "🇦🇷" },
        { name: "Sublime Text", icon: <SiSublimetext className="text-yellow-600" /> },
        { name: "Net Beans", icon: <DiNetbeans color="#1B6AC6" /> },
      ],
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Communication", icon: <MdOutlineRecordVoiceOver className="text-blue-500" /> },
        { name: "Problem Solving", icon: <FaPuzzlePiece className="text-green-500" /> },
        { name: "Project Management", icon: <FaProjectDiagram className="text-purple-500" /> },
        { name: "Teamwork", icon: <FaUsers className="text-pink-500" /> },
        // { name: "Team Collaboration", icon: <FaUsers className="text-blue-500" /> }, 
        { name: "Analytical Debugging", icon: <GiMagnifyingGlass className="text-orange-500" /> },
        { name: "Adaptability", icon: <FaSyncAlt className="text-yellow-500" /> },
        { name: "Time Management", icon: <FaClock className="text-orange-500" /> },
        { name: "Eager to Learn", icon: <IoBookSharp className="text-green-500" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        {/* Main title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">TECHNICAL SKILLS</h2>
        </div>

        {/* Category wise skills */}
        {skillCategories.map((category, index) => (
          <div key={index} className="mb-5 text-center max-w-7xl mx-auto">
            <Card className="flex flex-col rounded-2xl shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <CardContent className="p-8 text-center">
                {/* Category Title */}
                <h3 className="text-2xl font-bold text-primary mb-6 text-center">
                  {category.title}
                </h3>

                {/* Skills Grid - Centered */}
                <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-10">
                  {category.skills.map((skill, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center justify-center space-y-2 hover:scale-110 transition-transform duration-300 w-28"
                    >
                      <span className="text-5xl text-black dark:text-white">{skill.icon}</span>
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
