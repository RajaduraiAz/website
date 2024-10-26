import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <footer id="contact" className="py-12 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex items-center space-x-8">
            <a
              href="https://github.com/rajaduraiaz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 dark:text-orange-400 hover:text-orange-600 dark:hover:text-orange-300 transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={28} />
            </a>
            <a
              href="https://linkedin.com/in/rajaduraiaz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 dark:text-orange-400 hover:text-orange-600 dark:hover:text-orange-300 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="https://twitter.com/rajaduraiaz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 dark:text-orange-400 hover:text-orange-600 dark:hover:text-orange-300 transition-colors duration-200"
              aria-label="Twitter"
            >
              <Twitter size={28} />
            </a>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <p className="text-orange-500 dark:text-orange-400">
              © {new Date().getFullYear()} Rajadurai. All rights reserved.
            </p>
            <p className="text-orange-500 dark:text-orange-400 text-sm">
              This website was completely made with AI tool{' '}
              <a
                href="https://bolt.new"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-orange-600 dark:hover:text-orange-300"
              >
                bolt.new
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}