import React from 'react';
import { SOCIAL_LINKS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-slate-300 py-12 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-lg font-bold text-white tracking-tight">
            Hari <span className="text-accent">Charan</span>
          </span>
          <p className="text-sm text-slate-400 mt-1">Data Scientist & Machine Learning Engineer</p>
        </div>
        
        <div className="flex gap-4">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              className="p-2 bg-white/10 rounded-full text-slate-300 hover:bg-accent hover:text-white transition-all transform hover:-translate-y-1"
              aria-label={link.platform}
            >
              {link.icon}
            </a>
          ))}
        </div>
        
        <div className="text-sm text-slate-400 text-center md:text-right">
          <p>© {new Date().getFullYear()} Katta Hari Charan.</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};