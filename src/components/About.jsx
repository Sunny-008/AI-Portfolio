import { User } from "lucide-react";
import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-48 h-48 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-6xl font-bold flex-shrink-0">
            <User size={80} />
          </div>
          <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
            <p>
              Hi! I'm a passionate full-stack developer with expertise in
              building modern, scalable web applications. I specialize in React,
              Spring Boot, and AI integration, creating seamless user
              experiences that combine beautiful design with powerful
              functionality.
            </p>
            <p>
              My journey in tech started with a curiosity about how things work
              behind the scenes. Today, I transform that curiosity into
              production-ready applications that solve real-world problems. I
              love learning new technologies and pushing the boundaries of
              what's possible on the web.
            </p>
            <p>
              When I'm not coding, you'll find me exploring the latest AI
              developments, contributing to open-source projects, or mentoring
              aspiring developers. I believe in clean code, continuous learning,
              and building products that make a difference.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
