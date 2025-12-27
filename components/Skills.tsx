import React, { useState, useEffect } from 'react';
import { Section } from './Section';
import { SKILLS } from '../constants';

export const Skills: React.FC = () => {
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Sync initial theme
    setIsDark(document.documentElement.classList.contains('dark'));

    // Observer to detect theme toggle changes
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  return (
    <Section id="skills" title="Skills">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <div 
            key={category} 
            className="flex flex-col bg-white dark:bg-zinc-900 brutal-border shadow-brutal dark:shadow-brutal-white p-6 transition-all hover:translate-x-1 hover:-translate-y-1"
          >
            <h3 className="text-xs font-black uppercase tracking-tighter text-zinc-900 dark:text-white mb-6 border-b-2 border-zinc-900 dark:border-white pb-2 flex items-center justify-between">
              {category}
              <span className="w-1.5 h-1.5 bg-zinc-900 dark:bg-white"></span>
            </h3>
            
            <div className="grid grid-cols-4 gap-3">
              {SKILLS.filter(s => s.category === category).map((skill) => (
                <div 
                  key={skill.name}
                  title={skill.name}
                  className="group flex flex-col items-center justify-center p-2 brutal-border bg-zinc-50 dark:bg-zinc-800 hover:bg-zinc-900 dark:hover:bg-white hover:text-white dark:hover:text-zinc-900 transition-all duration-200 aspect-square"
                >
                  <div className="w-8 h-8 mb-1.5 flex items-center justify-center pointer-events-none">
                    <img 
                      src={skill.icon.startsWith('http') ? skill.icon : `https://cdn.simpleicons.org/${skill.icon}/${isDark ? 'ffffff' : '000000'}`}
                      alt={`${skill.name} logo`}
                      className="w-full h-full object-contain"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        // Final fallback if the icon is unavailable or slug is slightly off
                        if (!target.src.includes('666666') && !skill.icon.startsWith('http')) {
                          target.src = `https://cdn.simpleicons.org/${skill.icon}/666666`;
                        }
                      }}
                    />
                  </div>
                  <span className="text-[7px] font-black uppercase tracking-tighter text-center leading-none">
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