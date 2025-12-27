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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        setIsOpen(false);
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 border-b-2 border-black dark:border-white ${
          isScrolled || isOpen ? 'bg-white dark:bg-zinc-950 py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <a 
            href="#" 
            className="text-xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter z-[110]"
            onClick={() => setIsOpen(false)}
          >
            Hari<span className="bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-1 ml-0.5">Charan</span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors relative group py-2"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-zinc-900 dark:bg-white transition-all group-hover:w-full"></span>
              </a>
            ))}
            <div className="h-4 w-px bg-zinc-200 dark:bg-zinc-800"></div>
            <ThemeToggle />
            <a 
              href={HERO_DATA.resumeLink}
              download="Katta_Hari_Charan_Resume.pdf"
              className="flex items-center gap-2 px-4 py-2 text-[10px] font-black uppercase tracking-widest bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 brutal-border shadow-brutal-sm dark:shadow-brutal-white brutal-btn transition-all"
            >
              <Download size={12} />
              Resume
            </a>
          </div>

          <div className="md:hidden flex items-center gap-3 z-[110]">
             <ThemeToggle />
             <button
              className="p-3 brutal-border bg-white dark:bg-zinc-800 text-black dark:text-white transition-transform active:scale-95 shadow-brutal-sm min-w-[44px] min-h-[44px] flex items-center justify-center"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <div 
          className={`md:hidden fixed inset-0 bg-white dark:bg-zinc-950 z-[105] transition-transform duration-500 ease-in-out flex flex-col ${
            isOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="flex flex-col items-center justify-center flex-grow p-8 space-y-6">
            {NAV_ITEMS.map((item, idx) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                style={{ transitionDelay: `${idx * 50}ms` }}
                className={`text-4xl sm:text-5xl font-black uppercase tracking-tighter text-zinc-900 dark:text-white transition-all transform py-2 block w-full text-center ${
                  isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a 
              href={HERO_DATA.resumeLink}
              download="Katta_Hari_Charan_Resume.pdf"
              style={{ transitionDelay: `${NAV_ITEMS.length * 50}ms` }}
              className={`flex items-center justify-center gap-3 w-full max-w-xs p-5 text-xl font-black uppercase bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 brutal-border shadow-brutal dark:shadow-brutal-white transition-all transform mt-4 min-h-[60px] ${
                isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <Download size={24} />
              Resume
            </a>
            
            <div className="absolute inset-0 -z-10 opacity-5 pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] dark:bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div 
          className="fixed inset-0 z-[102] bg-black/40 backdrop-blur-[4px] md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};