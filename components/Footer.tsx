import React from 'react';
import { SOCIAL_LINKS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-zinc-950 border-t-8 border-zinc-900 dark:border-white py-16 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="mb-12 w-full">
          <span className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter block leading-[0.9] break-words">
            KATTA HARI <span className="outline-text">CHARAN</span>
          </span>
        </div>
        
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-16 w-full max-w-5xl">
           <div className="p-6 md:p-8 brutal-border bg-zinc-50 dark:bg-zinc-900 flex flex-col justify-center items-center min-h-[140px]">
              <p className="text-[10px] font-black uppercase mb-3 opacity-50 tracking-widest">Focus_Area</p>
              <p className="font-bold uppercase tracking-tight text-sm sm:text-base leading-tight">ML / DL / Generative AI</p>
           </div>
           <div className="p-6 md:p-8 brutal-border bg-zinc-50 dark:bg-zinc-900 flex flex-col justify-center items-center min-h-[140px]">
              <p className="text-[10px] font-black uppercase mb-3 opacity-50 tracking-widest">Stack_Main</p>
              <p className="font-bold uppercase tracking-tight text-sm sm:text-base leading-tight">Python / TensorFlow / PyTorch / LangChain</p>
           </div>
           <div className="p-6 md:p-8 brutal-border bg-zinc-50 dark:bg-zinc-900 flex flex-col justify-center items-center min-h-[140px]">
              <p className="text-[10px] font-black uppercase mb-3 opacity-50 tracking-widest">Region</p>
              <p className="font-bold uppercase tracking-tight text-sm sm:text-base leading-tight">Bengaluru, IN</p>
           </div>
           <div className="p-6 md:p-8 brutal-border bg-zinc-50 dark:bg-zinc-900 flex flex-col justify-center items-center min-h-[140px]">
              <p className="text-[10px] font-black uppercase mb-3 opacity-50 tracking-widest">Year</p>
              <p className="font-bold uppercase tracking-tight text-sm sm:text-base leading-tight">2025</p>
           </div>
        </div>

        <div className="w-full flex flex-col md:flex-row items-center justify-between pt-10 border-t-2 border-zinc-200 dark:border-zinc-800 gap-8 md:gap-4">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 brutal-border bg-white dark:bg-zinc-900 shadow-brutal-sm dark:shadow-brutal-white hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-900 transition-all transform hover:-translate-y-1 hover:translate-x-1 min-h-[48px] min-w-[48px] justify-center"
                aria-label={link.platform}
              >
                {link.icon}
                <span className="text-[10px] font-black uppercase tracking-widest hidden sm:inline">
                  {link.platform}
                </span>
              </a>
            ))}
          </div>
          
          <div className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40 py-2">
            © Katta Hari Charan • 2025
          </div>
        </div>
      </div>
      
      <style>{`
        .outline-text {
          -webkit-text-stroke: 1px #18181b;
          color: transparent;
        }
        @media (min-width: 640px) {
          .outline-text {
            -webkit-text-stroke: 2px #18181b;
          }
        }
        .dark .outline-text {
          -webkit-text-stroke: 1px #fff;
        }
        @media (min-width: 640px) {
          .dark .outline-text {
            -webkit-text-stroke: 2px #fff;
          }
        }
      `}</style>
    </footer>
  );
};