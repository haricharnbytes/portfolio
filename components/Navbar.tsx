import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { HERO_DATA } from '../constants';
import { ThemeToggle } from './ThemeToggle';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        setIsOpen(false);
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b-2 border-black dark:border-white ${
        isScrolled || isOpen ? 'bg-white/95 dark:bg-zinc-950/95 backdrop-blur-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="text-xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter">
          Hari<span className="bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-1 ml-0.5">Charan</span>
        </a>

        <div className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-zinc-900 dark:bg-white transition-all group-hover:w-full"></span>
            </a>
          ))}
          <div className="h-4 w-px bg-zinc-200 dark:bg-zinc-800"></div>
          <ThemeToggle />
          <a 
            href={HERO_DATA.resumeLink}
            className="flex items-center gap-2 px-4 py-2 text-[10px] font-black uppercase tracking-widest bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 brutal-border shadow-brutal-sm dark:shadow-brutal-white brutal-btn transition-all"
          >
            <Download size={12} />
            CV
          </a>
        </div>

        <div className="md:hidden flex items-center gap-3">
           <ThemeToggle />
           <button
            className="p-1.5 brutal-border bg-white dark:bg-zinc-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-zinc-950 border-t-2 border-black dark:border-white fixed inset-x-0 top-[68px] bottom-0 z-40 overflow-y-auto">
          <div className="flex flex-col p-8 space-y-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-4xl font-black uppercase tracking-tighter text-zinc-900 dark:text-white"
              >
                {item.label}
              </a>
            ))}
            <a 
              href={HERO_DATA.resumeLink}
              className="flex items-center justify-center gap-3 p-6 text-xl font-black uppercase bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 brutal-border shadow-brutal dark:shadow-brutal-white"
            >
              <Download size={20} />
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};