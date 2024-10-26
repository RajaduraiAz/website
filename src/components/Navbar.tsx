import React from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav className="fixed w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm z-50 shadow-sm transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <img src="/logo.png" alt="AZ Logo" className="h-12 w-auto" />
          </div>
          
          <div className="hidden md:visible items-center space-x-8">
            <a href="#home" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition">Home</a>
            <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition">About</a>
            <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition">Projects</a>
            <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition">Contact</a>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="text-orange-400" size={20} /> : <Moon className="text-gray-700" size={20} />}
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="text-orange-400" size={20} /> : <Moon className="text-gray-700" size={20} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 dark:text-gray-300">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 transition-colors duration-200">
            <a href="#home" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400">Home</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400">About</a>
            <a href="#projects" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400">Projects</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}