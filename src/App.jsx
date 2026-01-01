import React, { useState, useEffect, useRef } from "react";

import Conatct from "./components/Conatct";
import VideoIntro from "./components/VideoIntro";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ChatBot2 from "./components/ChatBot2";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [messages, setMessages] = useState([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const chatEndRef = useRef(null);

  // Apply dark mode to document root - THIS IS THE KEY FIX
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Scroll chat to bottom when new messages arrive
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };
  return (
    <div className="min-h-screen transition-colors duration-300">
      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:via-gray-900 dark:to-slate-800 text-gray-900 dark:text-white">
        {/* Navigation */}
        <Navbar
          scrollToSection={scrollToSection}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />

        {/* Hero Section */}
        <Hero scrollToSection={scrollToSection} />

        {/* About Section */}
        <About />

        {/* Projects Section */}
        <Projects />

        {/* Skills Section */}
        <Skills />

        {/* Video Section */}
        <VideoIntro />

        {/* Contact Section */}
        <Conatct />

        {/* Footer */}
        <Footer />

        {/* AI Chatbot */}
        <ChatBot2
          messages={messages}
          setMessages={setMessages}
          chatEndRef={chatEndRef}
        />
      </div>
    </div>
  );
}

export default App;
