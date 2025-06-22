import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "🧑‍💻 Basic",
      skills: ["C", "C++", "ReactJS"]
    },
    {
      title: "🚀 Intermediate",
      skills: ["CSharp", "Python", "Java", "HTML", "Android Development"]
    },
    {
      title: "🛠️ Tools Used",
      skills: ["Visual Studio 2015", "Android Studio", "AR Studio", "Sublime Text"]
    },
    {
      title: "💾 Database",
      skills: ["SQL Server", "Oracle (Basic)", "MySQL"]
    },
    {
      title: "🧠 Soft Skills",
      skills: ["Debugging", "Communication", "Problem Solving", "Project Management"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">MY SKILLS</h2>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover-scale">
              <CardHeader className="text-center">
                <CardTitle>{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-none space-y-1 text-center">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="text-md">{skill}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
