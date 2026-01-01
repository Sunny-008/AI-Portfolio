import React from "react";
import MobileMenu from "./MobileMenu";
import MobileMenuButton from "./MobileMenuButton";
import DesktopMenu from "./DesktopMenu";

const Navbar = ({
  scrollToSection,
  darkMode,
  setDarkMode,
  mobileMenuOpen,
  setMobileMenuOpen,
}) => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-40 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Sunny Dhanwant
          </div>
          <DesktopMenu
            scrollToSection={scrollToSection}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />

          <MobileMenuButton
            setDarkMode={setDarkMode}
            setMobileMenuOpen={setMobileMenuOpen}
            darkMode={darkMode}
            mobileMenuOpen={mobileMenuOpen}
          />
        </div>
      </div>
      <MobileMenu
        mobileMenuOpen={mobileMenuOpen}
        scrollToSection={scrollToSection}
      />
    </nav>
  );
};

export default Navbar;
