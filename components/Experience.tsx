import React from 'react';
import { Section } from './Section';
import { JOBS } from '../constants';
import { Briefcase, Calendar } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Work Experience" className="bg-white dark:bg-slate-800/50 transition-colors duration-300">
      <div className="relative border-l-2 border-slate-200 dark:border-slate-700 ml-3 md:ml-6 space-y-12">
        {JOBS.map((job) => (
          <div key={job.id} className="relative pl-8 md:pl-12">
            {/* Timeline Dot */}
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white dark:bg-slate-800 border-4 border-accent"></div>
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h3 className="text-xl font-bold text-primary dark:text-white">{job.role}</h3>
              <div className="flex items-center text-sm font-medium text-accent mt-1 sm:mt-0">
                <Calendar size={14} className="mr-1.5" />
                {job.period}
              </div>
            </div>
            
            <div className="flex items-center text-slate-500 dark:text-slate-400 font-medium mb-4">
              <Briefcase size={16} className="mr-2" />
              {job.company}
            </div>
            
            <ul className="space-y-2">
              {job.description.map((item, index) => (
                <li key={index} className="flex items-start text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
                  <span className="mr-2 mt-2 w-1.5 h-1.5 bg-slate-300 dark:bg-slate-600 rounded-full flex-shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};