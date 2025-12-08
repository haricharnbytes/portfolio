import React, { useState, useEffect } from 'react';
import { ArrowDown, Download } from 'lucide-react';
import { HERO_DATA } from '../constants';

const TypingEffect = ({ words }: { words: string[] }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = words[currentWordIndex];
      
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(40); // Faster when deleting (updated speed)
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(120); // Normal typing speed (updated speed)
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 1600); // Wait before deleting (updated duration)
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, words, currentWordIndex, typingSpeed]);

  return (
    <span className="inline-block min-h-[1.5em]">
      {currentText}
      <span className="animate-pulse ml-1 text-accent">|</span>
    </span>
  );
};

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900 pt-20 overflow-hidden transition-colors duration-300">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl opacity-60 -z-10 transform translate-x-1/2"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-primary/20 dark:bg-slate-700/30 rounded-full blur-3xl opacity-60 -z-10 transform -translate-x-1/3"></div>

      <div className="max-w-4xl px-6 text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent text-xs font-semibold tracking-wider mb-6">
          AVAILABLE FOR HIRE
        </span>
        <h1 className="text-5xl md:text-7xl font-bold text-primary dark:text-white mb-6 tracking-tight group cursor-default">
          <span className="group-hover:text-accent transition-colors duration-300">{HERO_DATA.name}</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-slate-500 dark:text-slate-400 font-light mb-8 h-12">
           <TypingEffect words={HERO_DATA.roles} />
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          {HERO_DATA.tagline}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-8 py-3 bg-accent text-white rounded-lg font-medium hover:bg-opacity-90 transition-colors shadow-lg shadow-accent/20 w-full sm:w-auto"
          >
            View Work
          </a>
          <a
            href={HERO_DATA.resumeLink}
            download="Katta_Hari_Charan_Resume.pdf"
            className="px-8 py-3 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-lg font-medium hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <Download size={18} className="text-accent" />
            Download CV
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-400">
        <a href="#about" aria-label="Scroll down">
          <ArrowDown size={24} />
        </a>
      </div>
    </div>
  );
};