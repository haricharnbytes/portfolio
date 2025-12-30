import React, { useState, useEffect, useRef } from 'react';
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
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
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

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      // Close menu first for smoother transition
      setIsOpen(false);
      
      const element = document.querySelector(href);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        // Slight delay to allow menu closing animation to start
        setTimeout(() => {
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 10);
      }
    }
  };

  return (
    <div ref={navRef} className="fixed top-0 left-0 right-0 z-[100]">
      <nav 
        className={`relative z-[110] transition-all duration-300 border-b-2 border-black dark:border-white ${
          isScrolled || isOpen ? 'bg-white dark:bg-zinc-950 py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <a 
            href="#" 
            className="text-lg sm:text-xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter whitespace-nowrap"
            onClick={() => setIsOpen(false)}
          >
            Katta Hari <span className="bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-1 ml-0.5">Charan</span>
          </a>

          {/* Desktop Navigation */}
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
              target="_blank"
              rel="noopener noreferrer"
              download="Katta_Hari_Charan_Resume.pdf"
              className="flex items-center gap-2 px-4 py-2 text-[10px] font-black uppercase tracking-widest bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 brutal-border shadow-brutal-sm dark:shadow-brutal-white brutal-btn transition-all"
            >
              <Download size={12} />
              Resume
            </a>
          </div>

          {/* Mobile Toggle & Theme */}
          <div className="md:hidden flex items-center gap-3">
             <ThemeToggle />
             <button
              className="p-3 brutal-border bg-white dark:bg-zinc-800 text-black dark:text-white transition-all active:scale-95 shadow-brutal-sm min-w-[48px] min-h-[48px] flex items-center justify-center"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown - Expanded within the navbar context */}
        <div 
          className={`md:hidden absolute top-full left-0 right-0 bg-white dark:bg-zinc-950 border-b-4 border-black dark:border-white z-[105] transition-all duration-300 ease-in-out origin-top overflow-hidden ${
            isOpen ? 'opacity-100 scale-y-100 translate-y-0 pointer-events-auto' : 'opacity-0 scale-y-95 -translate-y-2 pointer-events-none'
          }`}
          style={{ maxHeight: '80vh', overflowY: 'auto' }}
        >
          <div className="flex flex-col p-6 space-y-2">
            {NAV_ITEMS.map((item, idx) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-2xl font-black uppercase tracking-tighter text-zinc-900 dark:text-white p-4 brutal-border-b last:border-b-0 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors w-full ${
                  isOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                }`}
                style={{ transitionDelay: `${idx * 50}ms`, transitionProperty: 'transform, opacity, background-color' }}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 px-2">
              <a 
                href={HERO_DATA.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                download="Charan_s_Resume.pdf"
                className={`flex items-center justify-center gap-3 w-full p-5 text-lg font-black uppercase bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 brutal-border shadow-brutal dark:shadow-brutal-white transition-all ${
                  isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
                style={{ transitionDelay: `${NAV_ITEMS.length * 50}ms` }}
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Scrim overlay to focus user on menu */}
      <div 
        className={`md:hidden fixed inset-0 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 pointer-events-none ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ zIndex: 90 }}
      />
    </div>
  );
};