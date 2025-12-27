import React, { useState, useEffect } from 'react';
import { Section } from './Section';
import { SKILLS } from '../constants';

export const Skills: React.FC = () => {
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  return (
    <Section id="skills" title="Skills">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <div 
            key={category} 
            className="flex flex-col bg-white dark:bg-zinc-900 brutal-border shadow-brutal dark:shadow-brutal-white p-6 transition-all sm:hover:translate-x-1 sm:hover:-translate-y-1"
          >
            <h3 className="text-[10px] font-black uppercase tracking-tighter text-zinc-900 dark:text-white mb-6 border-b-2 border-zinc-900 dark:border-white pb-3 flex items-center justify-between">
              {category}
              <span className="w-2 h-2 bg-zinc-900 dark:bg-white"></span>
            </h3>
            
            <div className="grid grid-cols-3 xs:grid-cols-4 gap-3">
              {SKILLS.filter(s => s.category === category).map((skill) => (
                <div 
                  key={skill.name}
                  title={skill.name}
                  className="group flex flex-col items-center justify-center p-3 brutal-border bg-zinc-50 dark:bg-zinc-800 sm:hover:bg-zinc-900 dark:sm:hover:bg-white sm:hover:text-white dark:sm:hover:text-zinc-900 transition-all duration-200 aspect-square min-w-[60px]"
                >
                  <div className="w-8 h-8 sm:w-9 sm:h-9 mb-2 flex items-center justify-center pointer-events-none">
                    <img 
                      src={skill.icon.startsWith('http') ? skill.icon : `https://cdn.simpleicons.org/${skill.icon}/${isDark ? 'ffffff' : '000000'}`}
                      alt={`${skill.name} logo`}
                      className="w-full h-full object-contain"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (!target.src.includes('666666') && !skill.icon.startsWith('http')) {
                          target.src = `https://cdn.simpleicons.org/${skill.icon}/666666`;
                        }
                      }}
                    />
                  </div>
                  <span className="text-[8px] font-black uppercase tracking-tighter text-center leading-none">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};