import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { HERO_DATA } from '../constants';
import { ThemeToggle } from './ThemeToggle';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
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
    // Only intercept internal links (starting with #)
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isOpen ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-primary dark:text-white tracking-tight group">
          <span className="group-hover:text-accent transition-colors">Hari</span> <span className="text-accent group-hover:text-primary dark:group-hover:text-white transition-colors">Charan</span>
        </a>

        {/* Desktop Menu - visible on medium screens and up */}
        <div className="hidden md:flex items-center space-x-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-accent dark:hover:text-accent transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a 
            href={HERO_DATA.resumeLink}
            download="Katta_Hari_Charan_Resume.pdf"
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-accent bg-accent/10 rounded-lg hover:bg-accent hover:text-white transition-colors"
          >
            <Download size={16} />
            Resume
          </a>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button - hidden on medium screens and up */}
        <div className="md:hidden flex items-center gap-4">
           <ThemeToggle />
           <button
            className="text-primary dark:text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
       
      </div>

      {/* Mobile Menu Dropdown - hidden on medium screens and up */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 absolute w-full shadow-lg h-screen overflow-y-auto pb-20">
          <div className="flex flex-col px-6 py-6 space-y-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-lg font-medium text-slate-600 dark:text-slate-300 hover:text-accent"
              >
                {item.label}
              </a>
            ))}
            <a 
              href={HERO_DATA.resumeLink}
              download="Katta_Hari_Charan_Resume.pdf"
              className="flex items-center justify-center gap-2 px-4 py-3 text-lg font-medium text-white bg-accent rounded-lg hover:bg-opacity-90 transition-colors"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};