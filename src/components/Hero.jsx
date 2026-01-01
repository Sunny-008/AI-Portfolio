import { ChevronDown } from "lucide-react";
import React from "react";

import heroImage from "../assets/heroImage.png";

const Hero = ({ scrollToSection }) => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 px-4"
    >
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-5xl font-bold mb-6">
            <img
              src={heroImage}
              alt="Hero image of me"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
            Full-Stack Developer
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Building intelligent web experiences with AI integration
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition"
            >
              See My Work
            </button>
            <button
              onClick={() => scrollToSection("video")}
              className="px-8 py-4 border-2 border-blue-600 rounded-lg font-semibold hover:bg-blue-600 transition"
            >
              Watch Video
            </button>
          </div>
        </div>
        <ChevronDown className="mx-auto mt-12 animate-bounce" size={32} />
      </div>
    </section>
  );
};

export default Hero;
