import React from "react";

const MobileMenu = ({ mobileMenuOpen, scrollToSection }) => {
  return (
    <>
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="px-4 py-3 space-y-3">
            <button
              onClick={() => scrollToSection("hero")}
              className="block w-full text-left py-2 hover:text-blue-600"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left py-2 hover:text-blue-600"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="block w-full text-left py-2 hover:text-blue-600"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="block w-full text-left py-2 hover:text-blue-600"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("video")}
              className="block w-full text-left py-2 hover:text-blue-600"
            >
              Video
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
