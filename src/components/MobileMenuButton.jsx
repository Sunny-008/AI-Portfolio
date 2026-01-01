import { Menu, Moon, Sun, XCircle } from "lucide-react";
import React from "react";

const MobileMenuButton = ({
  setDarkMode,
  setMobileMenuOpen,
  darkMode,
  mobileMenuOpen,
}) => {
  return (
    <div className="md:hidden flex items-center space-x-4">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800"
      >
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="p-2"
      >
        {mobileMenuOpen ? <XCircle size={24} /> : <Menu size={24} />}
      </button>
    </div>
  );
};

export default MobileMenuButton;
