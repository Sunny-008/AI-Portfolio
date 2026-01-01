import { Moon, Sun } from "lucide-react";
import React from "react";

const DesktopMenu = ({ scrollToSection, darkMode, setDarkMode }) => {
  return (
    <div className="hidden md:flex items-center space-x-8">
      <button
        onClick={() => scrollToSection("hero")}
        className="hover:text-blue-600 transition"
      >
        Home
      </button>
      <button
        onClick={() => scrollToSection("about")}
        className="hover:text-blue-600 transition"
      >
        About
      </button>
      <button
        onClick={() => scrollToSection("projects")}
        className="hover:text-blue-600 transition"
      >
        Projects
      </button>
      <button
        onClick={() => scrollToSection("skills")}
        className="hover:text-blue-600 transition"
      >
        Skills
      </button>
      <button
        onClick={() => scrollToSection("video")}
        className="hover:text-blue-600 transition"
      >
        Video
      </button>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition"
      >
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </div>
  );
};

export default DesktopMenu;
