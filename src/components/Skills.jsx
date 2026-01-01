import { Award, Briefcase, Code } from "lucide-react";
import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30">
            <Code className="text-blue-600 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-4">Frontend</h3>
            <div className="space-y-2">
              {["React", "HTML/CSS", "JavaScript", "Tailwind CSS", "Redux"].map(
                (skill) => (
                  <div
                    key={skill}
                    className="bg-white dark:bg-gray-700 px-4 py-2 rounded-lg"
                  >
                    {skill}
                  </div>
                )
              )}
            </div>
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30">
            <Briefcase className="text-purple-600 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-4">Backend</h3>
            <div className="space-y-2">
              {[
                "Java ",
                "Spring Boot",
                "OOP's Concepts",
                "MySQL",
                "MongoDB",
              ].map((skill) => (
                <div
                  key={skill}
                  className="bg-white dark:bg-gray-700 px-4 py-2 rounded-lg"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/30 dark:to-pink-800/30">
            <Award className="text-pink-600 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-4">AI & Tools</h3>
            <div className="space-y-2">
              {["OpenAI API", "Gemini", "Docker", "Git", "AWS"].map((skill) => (
                <div
                  key={skill}
                  className="bg-white dark:bg-gray-700 px-4 py-2 rounded-lg"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
