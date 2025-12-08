import React from 'react';
import { Section } from './Section';
import { EDUCATION } from '../constants';
import { GraduationCap, Calendar } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <Section id="education" title="Education" className="bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {EDUCATION.map((edu) => (
          <div key={edu.id} className="bg-white dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-accent/10 text-accent rounded-lg">
                <GraduationCap size={24} />
              </div>
              <div className="flex items-center text-sm font-medium text-slate-400 dark:text-slate-400 bg-slate-50 dark:bg-slate-700 px-3 py-1 rounded-full">
                <Calendar size={14} className="mr-1.5" />
                {edu.period}
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-primary dark:text-white mb-1">{edu.degree}</h3>
            <p className="text-accent font-medium mb-4">{edu.institution}</p>
            
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              {edu.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};