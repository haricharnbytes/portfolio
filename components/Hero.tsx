import React, { useState, useEffect } from 'react';
import { HERO_DATA } from '../constants';
import { Download } from 'lucide-react';

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
    <div className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl px-6 relative z-10 w-full">
        <div className="flex flex-col items-start text-left">
          <div className="relative group cursor-default mb-6 w-full reveal-on-scroll is-visible overflow-hidden md:overflow-visible">
            {/* Fluid typography using clamp to ensure fit on all screens */}
            <span 
              className="absolute inset-0 text-[clamp(2.5rem,10vw,8rem)] font-black text-transparent uppercase tracking-tighter leading-[0.85] select-none transition-all duration-500 group-hover:translate-x-3 group-hover:translate-y-3 group-hover:text-zinc-400/20 dark:group-hover:text-zinc-600/20 whitespace-normal sm:whitespace-nowrap"
              aria-hidden="true"
            >
              {HERO_DATA.name}
            </span>
            
            <h1 className="relative text-[clamp(2.5rem,10vw,8rem)] font-black text-zinc-900 dark:text-white uppercase tracking-tighter leading-[0.85] transition-all duration-300 group-hover:text-zinc-500 dark:group-hover:text-zinc-400 whitespace-normal sm:whitespace-nowrap">
              {HERO_DATA.name}
            </h1>
          </div>
          
          <div className="text-xl md:text-4xl font-black uppercase tracking-tighter mb-10 h-auto min-h-[56px] md:h-16 flex items-center bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-6 brutal-border shadow-brutal dark:shadow-brutal-white transition-all transform hover:scale-[1.02] reveal-on-scroll is-visible" style={{ animationDelay: '200ms' }}>
             <TypingEffect words={HERO_DATA.roles} />
          </div>
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 w-full max-w-6xl reveal-on-scroll is-visible" style={{ animationDelay: '400ms' }}>
            <p className="text-lg md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-2xl font-bold leading-tight border-l-8 border-zinc-900 dark:border-white pl-8 py-2">
              {HERO_DATA.tagline}
            </p>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto mt-6 lg:mt-0">
              {/* Mobile Only Resume Button */}
              <a
                href={HERO_DATA.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex sm:hidden px-8 py-5 bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 text-sm font-black uppercase tracking-widest brutal-border shadow-brutal dark:shadow-brutal-white transition-all brutal-btn text-center items-center justify-center gap-2 mb-2"
              >
                <Download size={18} />
                Download Resume
              </a>

              <a
                href="#projects"
                className="px-8 md:px-10 py-5 bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 text-sm md:text-base font-black uppercase tracking-widest brutal-border shadow-brutal dark:shadow-brutal-white transition-all brutal-btn text-center hover:translate-x-1 hover:-translate-y-1 min-h-[56px] flex items-center justify-center whitespace-nowrap"
              >
                Explore Work
              </a>
              <a
                href="#contact"
                className="px-8 md:px-10 py-5 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white text-sm md:text-base font-black uppercase tracking-widest brutal-border shadow-brutal dark:shadow-brutal-white transition-all brutal-btn text-center hover:translate-x-1 hover:-translate-y-1 min-h-[56px] flex items-center justify-center whitespace-nowrap"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};