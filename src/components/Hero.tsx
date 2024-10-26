import React from 'react';
import { Code, Database, Brain, Cloud, Command } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-orange-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left order-2 md:order-1">
            <h2 className="text-2xl text-orange-500 dark:text-orange-400 font-semibold mb-4">Hi, I'm</h2>
            <h1 className="text-6xl md:text-8xl font-bold text-gray-900 dark:text-white mb-6">
              Rajadurai
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-2xl">
              Professional developer crafting innovative digital solutions and memorable user experiences with Angular, React, and .NET.
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <span className="inline-flex items-center px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium">
                <Command className="w-4 h-4 mr-2" />
                Project Lead
              </span>
              <span className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                <Database className="w-4 h-4 mr-2" />
                Data & Tech Enthusiast
              </span>
              <span className="inline-flex items-center px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
                <Brain className="w-4 h-4 mr-2" />
                Power Platform
              </span>
              <span className="inline-flex items-center px-4 py-2 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-full text-sm font-medium">
                <Cloud className="w-4 h-4 mr-2" />
                Azure
              </span>
              <span className="inline-flex items-center px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
                <Code className="w-4 h-4 mr-2" />
                Fullstack Developer
              </span>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                <img
                  src="/profile.jpg"
                  alt="Rajadurai"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-500/10 to-transparent dark:from-orange-400/10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}