import React from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <img src="/logo.png" alt="AZ Logo" className="h-12 w-auto" />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-orange-500 transition">Home</a>
            <a href="#about" className="text-gray-700 hover:text-orange-500 transition">About</a>
            <a href="#projects" className="text-gray-700 hover:text-orange-500 transition">Projects</a>
            <a href="#contact" className="text-gray-700 hover:text-orange-500 transition">Contact</a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-orange-500">Home</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-orange-500">About</a>
            <a href="#projects" className="block px-3 py-2 text-gray-700 hover:text-orange-500">Projects</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-orange-500">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}