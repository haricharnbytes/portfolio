import React from 'react';
import { Section } from './Section';
import { JOBS } from '../constants';
import { Calendar, ChevronRight } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-12 relative">
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-zinc-900 dark:bg-white hidden md:block -translate-x-1/2"></div>
        
        {JOBS.map((job, idx) => (
          <div key={job.id} className={`flex flex-col md:flex-row gap-8 items-start relative ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
            <div className="absolute left-[-10px] md:left-1/2 md:-translate-x-1/2 top-2 w-5 h-5 bg-zinc-900 dark:bg-white brutal-border z-10 shadow-brutal-sm"></div>
            
            <div className="w-full md:w-1/2">
              <div className="bg-white dark:bg-zinc-900 brutal-border shadow-brutal dark:shadow-brutal-white p-6 md:p-8 hover:-translate-y-1 transition-all">
                <div className="flex flex-col gap-2 mb-6">
                  <div className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-3 py-0.5 text-[9px] font-black uppercase brutal-border inline-block self-start">
                    {job.period}
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tighter text-zinc-900 dark:text-white leading-tight">{job.role}</h3>
                  <div className="font-black text-zinc-500 uppercase tracking-widest text-sm">
                    {job.company}
                  </div>
                </div>
                
                <ul className="space-y-4">
                  {job.description.map((item, index) => (
                    <li key={index} className="flex items-start text-zinc-700 dark:text-zinc-300 font-bold leading-snug text-sm">
                      <ChevronRight size={14} className="mr-2 mt-0.5 text-zinc-900 dark:text-white flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="hidden md:block md:w-1/2"></div>
          </div>
        ))}
      </div>
    </Section>
  );
};