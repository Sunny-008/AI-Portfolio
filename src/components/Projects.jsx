import { Code, ExternalLink, Github } from "lucide-react";
import React, { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // In production, this would be: fetch('http://localhost:8080/api/projects')---------
    const mockProjects = [
      {
        id: 1,
        title: "E-Commerce Platform",
        description:
          "Full-stack MERN application with payment integration, real-time inventory management, and admin dashboard.",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        githubUrl: "https://github.com/yourusername/ecommerce",
        liveUrl: "https://ecommerce-demo.com",
      },
      {
        id: 2,
        title: "AI Task Manager",
        description:
          "Smart task management system with AI-powered priority suggestions and natural language processing.",
        technologies: ["Next.js", "Python", "OpenAI API", "PostgreSQL"],
        githubUrl: "https://github.com/yourusername/ai-tasks",
        liveUrl: "https://ai-tasks-demo.com",
      },
      {
        id: 3,
        title: "Social Media Analytics",
        description:
          "Data visualization dashboard for social media metrics with real-time updates and sentiment analysis.",
        technologies: ["React", "Spring Boot", "MySQL", "Chart.js"],
        githubUrl: "https://github.com/yourusername/analytics",
        liveUrl: "https://analytics-demo.com",
      },
    ];
    setProjects(mockProjects);
  }, []);
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
            >
              <div className="flex items-center gap-2 mb-4">
                <Code className="text-blue-600" size={24} />
                <h3 className="text-xl font-bold">{project.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.githubUrl}
                  className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-blue-600 transition"
                >
                  <Github size={18} /> Code
                </a>
                <a
                  href={project.liveUrl}
                  className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-blue-600 transition"
                >
                  <ExternalLink size={18} /> Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
