import React from 'react';
import { SOCIAL_LINKS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-zinc-950 border-t-8 border-zinc-900 dark:border-white py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="mb-12">
          <span className="text-6xl md:text-8xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter">
            HARI<span className="outline-text"> CHARAN</span>
          </span>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 w-full max-w-4xl">
           <div className="p-8 brutal-border bg-zinc-50 dark:bg-zinc-900">
              <p className="text-[10px] font-black uppercase mb-4 opacity-50">Focus_Area</p>
              <p className="font-bold uppercase tracking-tight">Machine Learning</p>
           </div>
           <div className="p-8 brutal-border bg-zinc-50 dark:bg-zinc-900">
              <p className="text-[10px] font-black uppercase mb-4 opacity-50">Stack_Main</p>
              <p className="font-bold uppercase tracking-tight">Python / PyTorch</p>
           </div>
           <div className="p-8 brutal-border bg-zinc-50 dark:bg-zinc-900">
              <p className="text-[10px] font-black uppercase mb-4 opacity-50">Region</p>
              <p className="font-bold uppercase tracking-tight">Bengaluru, IN</p>
           </div>
           <div className="p-8 brutal-border bg-zinc-50 dark:bg-zinc-900">
              <p className="text-[10px] font-black uppercase mb-4 opacity-50">Year</p>
              <p className="font-bold uppercase tracking-tight">2025</p>
           </div>
        </div>

        <div className="w-full flex flex-col md:flex-row items-center justify-between pt-12 border-t-2 border-zinc-200 dark:border-zinc-800 gap-10">
          <div className="flex flex-wrap justify-center gap-4">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                className="flex items-center gap-3 px-4 py-2 brutal-border bg-white dark:bg-zinc-900 shadow-brutal-sm dark:shadow-brutal-white hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-900 transition-all transform hover:-translate-y-1 hover:translate-x-1"
                aria-label={link.platform}
              >
                {link.icon}
                <span className="text-[10px] font-black uppercase tracking-widest hidden sm:inline">
                  {link.platform}
                </span>
              </a>
            ))}
          </div>
          
          <div className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">
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