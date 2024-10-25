import React from 'react';
import { Code, Database, Brain, Cloud, Command } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-orange-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left order-2 md:order-1">
            <h2 className="text-2xl text-orange-500 font-semibold mb-4">Hi, I'm</h2>
            <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-6">
              Rajadurai
            </h1>
            <p className="text-xl text-gray-600 mb-6 max-w-2xl">
              Professional developer crafting innovative digital solutions and memorable user experiences with Angular, React, and .NET.
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <span className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                <Command className="w-4 h-4 mr-2" />
                Project Lead
              </span>
              <span className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                <Database className="w-4 h-4 mr-2" />
                Data & Tech Enthusiast
              </span>
              <span className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                <Brain className="w-4 h-4 mr-2" />
                Power Platform
              </span>
              <span className="inline-flex items-center px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium">
                <Cloud className="w-4 h-4 mr-2" />
                Azure
              </span>
              <span className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                <Code className="w-4 h-4 mr-2" />
                Fullstack Developer
              </span>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
                  alt="Rajadurai"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-500/10 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}