import React from 'react';
import { Section } from './Section';
import { EDUCATION } from '../constants';
import { GraduationCap, Calendar } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <Section id="education" title="Academic">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {EDUCATION.map((edu) => (
          <div 
            key={edu.id} 
            className="group relative bg-white dark:bg-zinc-900 brutal-border shadow-brutal dark:shadow-brutal-white p-8 transition-all duration-300 hover:-translate-y-1 hover:translate-x-1"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="p-3 brutal-border bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 group-hover:bg-zinc-700 dark:group-hover:bg-zinc-200 transition-colors">
                <GraduationCap size={24} />
              </div>
              <div className="flex items-center text-[10px] font-black uppercase tracking-widest bg-zinc-100 dark:bg-zinc-800 px-3 py-1.5 brutal-border">
                <Calendar size={12} className="mr-1.5" />
                {edu.period}
              </div>
            </div>
            
            <h3 className="text-2xl font-black uppercase tracking-tighter text-zinc-900 dark:text-white mb-1 leading-tight">{edu.degree}</h3>
            <p className="text-lg font-bold text-zinc-500 uppercase tracking-tight mb-4">{edu.institution}</p>
            
            {edu.description && (
              <p className="text-sm text-zinc-600 dark:text-zinc-400 font-medium leading-snug border-t-2 border-zinc-100 dark:border-zinc-800 pt-4">
                {edu.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};