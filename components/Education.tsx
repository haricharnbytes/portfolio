import React from 'react';
import { Section } from './Section';
import { EDUCATION } from '../constants';
import { GraduationCap, Calendar } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <Section id="education" title="Academic">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {EDUCATION.map((edu) => (
          <div 
            key={edu.id} 
            className="group relative bg-white dark:bg-zinc-900 brutal-border p-8 transition-all duration-500 ease-out hover:bg-zinc-50 dark:hover:bg-zinc-800/40 hover:-translate-y-2 hover:shadow-brutal-lg dark:hover:shadow-brutal-white"
          >
            {/* High-Contrast Interactive Header */}
            <div className="flex items-start justify-between mb-8">
              <div className="p-3 brutal-border bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white group-hover:bg-zinc-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-zinc-900 transition-colors duration-500">
                <GraduationCap size={28} />
              </div>
              <div className="flex items-center text-[10px] font-black uppercase tracking-widest bg-zinc-100 dark:bg-zinc-800 px-4 py-2 brutal-border group-hover:border-zinc-900 dark:group-hover:border-white transition-colors duration-500">
                <Calendar size={12} className="mr-2" />
                {edu.period}
              </div>
            </div>
            
            <div className="relative overflow-hidden">
              <h3 className="text-3xl font-black uppercase tracking-tighter text-zinc-900 dark:text-white mb-2 leading-[0.9] group-hover:translate-x-1 transition-transform duration-500">
                {edu.degree}
              </h3>
              <p className="text-lg font-bold text-zinc-500 uppercase tracking-tight mb-6 transition-colors duration-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-300">
                {edu.institution}
              </p>
              
              {/* Subtle underline that expands on hover */}
              <div className="h-1 w-12 bg-zinc-900 dark:bg-white mb-6 transition-all duration-500 group-hover:w-full opacity-30 group-hover:opacity-100"></div>
            </div>
            
            {edu.description && (
              <p className="text-sm text-zinc-600 dark:text-zinc-400 font-bold leading-relaxed border-t-2 border-zinc-100 dark:border-zinc-800 pt-6 group-hover:border-zinc-200 dark:group-hover:border-zinc-700 transition-colors duration-500">
                {edu.description}
              </p>
            )}

            {/* Corner Decorative Element */}
            <div className="absolute bottom-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" 
                 style={{ backgroundImage: 'linear-gradient(135deg, transparent 50%, currentColor 50%)' }}></div>
          </div>
        ))}
      </div>
    </Section>
  );
};