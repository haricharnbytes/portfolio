import React from 'react';
import { SOCIAL_LINKS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-zinc-950 border-t-8 border-zinc-900 dark:border-white py-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="mb-10 w-full overflow-hidden">
          <span className="text-4xl sm:text-7xl md:text-8xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter block leading-none whitespace-nowrap">
            KATTA HARI<span className="outline-text"> CHARAN</span>
          </span>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-16 w-full max-w-4xl">
           <div className="p-6 md:p-8 brutal-border bg-zinc-50 dark:bg-zinc-900 flex flex-col justify-center items-center">
              <p className="text-[10px] font-black uppercase mb-3 opacity-50">Focus_Area</p>
              <p className="font-bold uppercase tracking-tight text-sm sm:text-base">Machine Learning</p>
           </div>
           <div className="p-6 md:p-8 brutal-border bg-zinc-50 dark:bg-zinc-900 flex flex-col justify-center items-center">
              <p className="text-[10px] font-black uppercase mb-3 opacity-50">Stack_Main</p>
              <p className="font-bold uppercase tracking-tight text-sm sm:text-base">Python / PyTorch</p>
           </div>
           <div className="p-6 md:p-8 brutal-border bg-zinc-50 dark:bg-zinc-900 flex flex-col justify-center items-center">
              <p className="text-[10px] font-black uppercase mb-3 opacity-50">Region</p>
              <p className="font-bold uppercase tracking-tight text-sm sm:text-base">Bengaluru, IN</p>
           </div>
           <div className="p-6 md:p-8 brutal-border bg-zinc-50 dark:bg-zinc-900 flex flex-col justify-center items-center">
              <p className="text-[10px] font-black uppercase mb-3 opacity-50">Year</p>
              <p className="font-bold uppercase tracking-tight text-sm sm:text-base">2025</p>
           </div>
        </div>

        <div className="w-full flex flex-col md:flex-row items-center justify-between pt-10 border-t-2 border-zinc-200 dark:border-zinc-800 gap-10">
          <div className="flex flex-wrap justify-center gap-5">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                className="flex items-center gap-3 px-5 py-3 brutal-border bg-white dark:bg-zinc-900 shadow-brutal-sm dark:shadow-brutal-white hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-900 transition-all transform hover:-translate-y-1 hover:translate-x-1 min-h-[48px] min-w-[48px] justify-center"
                aria-label={link.platform}
              >
                {link.icon}
                <span className="text-[10px] font-black uppercase tracking-widest">
                  {link.platform}
                </span>
              </a>
            ))}
          </div>
          
          <div className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40 py-4">
            © Katta Hari Charan
          </div>
        </div>
      </div>
      
      <style>{`
        .outline-text {
          -webkit-text-stroke: 2px #18181b;
          color: transparent;
        }
        .dark .outline-text {
          -webkit-text-stroke: 2px #fff;
          color: transparent;
        }
      `}</style>
    </footer>
  );
};