import { Github, Linkedin, Mail, Phone } from "lucide-react";
import React from "react";

const Conatct = () => {
  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Let's Connect</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="mailto:suunnydhanwant4240@gmail.com"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          >
            <Mail size={20} /> Email Me
          </a>
          <a
            href="https://github.com/Sunny-008"
            className="flex items-center gap-2 px-6 py-3 bg-gray-800 rounded-lg hover:bg-gray-900 transition"
          >
            <Github size={20} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sunny-dhanwant008/"
            className="flex items-center gap-2 px-6 py-3 bg-blue-700 rounded-lg hover:bg-blue-800 transition"
          >
            <Linkedin size={20} /> LinkedIn
          </a>
          <a
            href="tel:+91 9718594240"
            className="flex items-center gap-2 px-6 py-3 bg-green-600 rounded-lg hover:bg-green-700 transition"
          >
            <Phone size={20} /> Call Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Conatct;
