import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import { HERO_DATA } from '../constants';

const TypingEffect = ({ words }: { words: string[] }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = words[currentWordIndex];
      
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(30);
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(100);
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, words, currentWordIndex, typingSpeed]);

  return (
    <span className="inline-block min-h-[1.2em] text-white dark:text-zinc-900">
      {currentText}
      <span className="animate-[pulse_0.8s_infinite] ml-1.5 bg-white/60 dark:bg-zinc-900/40 inline-block w-4 h-[0.85em] translate-y-1.5 border border-white/20 dark:border-zinc-900/10"></span>
    </span>
  );
};

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[85vh] flex items-center justify-center pt-24 pb-12 overflow-hidden transition-colors duration-500">
      {/* Background is clean and minimalist */}
      
      <div className="max-w-7xl px-6 relative z-10 w-full">
        <div className="flex flex-col items-start text-left">
          <div className="relative group cursor-default mb-6 w-full animate-fade-in">
            {/* Layered text shadow effect for depth on hover using subtle grey */}
            <span 
              className="absolute inset-0 text-4xl sm:text-6xl md:text-8xl lg:text-[9.5rem] font-black text-transparent uppercase tracking-tighter leading-[0.85] select-none transition-all duration-500 group-hover:translate-x-3 group-hover:translate-y-3 group-hover:text-zinc-400/20 dark:group-hover:text-zinc-600/20"
              aria-hidden="true"
            >
              {HERO_DATA.name}
            </span>
            
            <h1 className="relative text-4xl sm:text-6xl md:text-8xl lg:text-[9.5rem] font-black text-zinc-900 dark:text-white uppercase tracking-tighter leading-[0.85] transition-all duration-300 whitespace-nowrap group-hover:text-zinc-500 dark:group-hover:text-zinc-400">
              {HERO_DATA.name}
            </h1>
          </div>
          
          <div className="text-xl md:text-4xl font-black uppercase tracking-tighter mb-12 h-14 md:h-16 flex items-center bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-6 brutal-border shadow-brutal dark:shadow-brutal-white transition-all transform hover:scale-[1.02] animate-fade-in delay-100">
             <TypingEffect words={HERO_DATA.roles} />
          </div>
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 w-full max-w-6xl animate-fade-in delay-200">
            <p className="text-lg md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-2xl font-bold leading-tight border-l-8 border-zinc-900 dark:border-white pl-8 py-2">
              {HERO_DATA.tagline}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 w-full lg:w-auto mt-6 lg:mt-0">
              <a
                href="#projects"
                className="px-10 py-5 bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 text-base font-black uppercase tracking-widest brutal-border shadow-brutal dark:shadow-brutal-white transition-all brutal-btn w-full sm:w-auto text-center hover:translate-x-1 hover:-translate-y-1"
              >
                Explore Work
              </a>
              <a
                href="#contact"
                className="px-10 py-5 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white text-base font-black uppercase tracking-widest brutal-border shadow-brutal dark:shadow-brutal-white transition-all brutal-btn w-full sm:w-auto text-center hover:translate-x-1 hover:-translate-y-1"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:left-12 md:translate-x-0 group cursor-pointer" onClick={() => document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})}>
        <div className="p-4 brutal-border bg-white dark:bg-zinc-800 shadow-brutal group-hover:bg-zinc-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-zinc-900 transition-all">
          <ArrowDown size={24} className="animate-bounce" />
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
      `}</style>
    </div>
  );
};