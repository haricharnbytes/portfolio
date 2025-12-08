import React from 'react';
import { Section } from './Section';
import { SKILLS } from '../constants';

export const Skills: React.FC = () => {
  // Group skills by category
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  return (
    <Section id="skills" title="Technical Arsenal" className="bg-white dark:bg-slate-800/50 transition-colors duration-300">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {categories.map((category) => (
          <div key={category}>
            <h3 className="text-lg font-semibold text-primary dark:text-white mb-4 border-l-4 border-accent pl-3">
              {category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {SKILLS.filter(s => s.category === category).map((skill) => (
                <span 
                  key={skill.name}
                  className="px-4 py-2 bg-slate-50 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 rounded-md text-sm font-medium border border-slate-100 dark:border-slate-700 hover:border-accent/30 hover:bg-accent/10 dark:hover:bg-accent/10 hover:text-accent dark:hover:text-accent hover:scale-105 hover:shadow-md transition-all duration-300 cursor-default"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};