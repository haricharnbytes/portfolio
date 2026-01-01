import React, { useState } from 'react';
import { Section } from './Section';
import { JOBS } from '../constants';
import { ChevronRight } from 'lucide-react';

const JobCard: React.FC<{ job: typeof JOBS[0]; isLeft: boolean }> = ({ job, isLeft }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`flex flex-col md:flex-row gap-8 items-start relative w-full ${isLeft ? 'md:flex-row-reverse' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Timeline Marker */}
      <div 
        className={`absolute left-[-10px] md:left-1/2 md:-translate-x-1/2 top-4 w-5 h-5 bg-white dark:bg-zinc-950 brutal-border z-10 transition-all duration-500 ease-out ${
          isHovered 
            ? 'scale-150 bg-zinc-900 dark:bg-white border-zinc-900 dark:border-white' 
            : 'scale-100 border-zinc-300 dark:border-zinc-700'
        }`}
      >
        <div className={`absolute inset-0 bg-zinc-900 dark:bg-white transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
      </div>
      
      {/* Content Card */}
      <div className="w-full md:w-1/2">
        <div 
          className={`relative bg-white dark:bg-zinc-900 brutal-border p-6 md:p-8 transition-all duration-500 ease-in-out group ${
            isHovered 
              ? 'shadow-brutal-lg dark:shadow-brutal-white -translate-y-2 bg-zinc-50 dark:bg-zinc-800/50' 
              : 'shadow-none translate-y-0'
          }`}
        >
          {/* Subtle Accent Line */}
          <div className={`absolute top-0 left-0 w-full h-1 bg-zinc-900 dark:bg-white transition-transform duration-500 origin-left ${isHovered ? 'scale-x-100' : 'scale-x-0'}`}></div>

          <div className="flex flex-col gap-2 mb-6">
            <div className={`transition-colors duration-300 px-3 py-0.5 text-[9px] font-black uppercase brutal-border inline-block self-start ${
              isHovered ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400'
            }`}>
              {job.period}
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tighter text-zinc-900 dark:text-white leading-tight">
              {job.role}
            </h3>
            <div className={`font-black uppercase tracking-widest text-sm transition-colors duration-300 ${isHovered ? 'text-zinc-900 dark:text-white' : 'text-zinc-500'}`}>
              {job.company}
            </div>
          </div>
          
          <ul className="space-y-4">
            {job.description.map((item, index) => (
              <li key={index} className="flex items-start text-zinc-700 dark:text-zinc-300 font-bold leading-snug text-sm">
                <ChevronRight 
                  size={14} 
                  className={`mr-2 mt-0.5 transition-all duration-300 ${
                    isHovered ? 'translate-x-1 text-zinc-900 dark:text-white' : 'text-zinc-400 dark:text-zinc-600'
                  }`} 
                />
                <span className={`transition-colors duration-300 ${isHovered ? 'text-zinc-900 dark:text-zinc-100' : ''}`}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="hidden md:block md:w-1/2"></div>
    </div>
  );
};

export const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-16 relative">
        {/* Central Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-zinc-200 dark:bg-zinc-800 hidden md:block -translate-x-1/2"></div>
        
        {JOBS.map((job, idx) => (
          <JobCard key={job.id} job={job} isLeft={idx % 2 === 0} />
        ))}
      </div>
    </Section>
  );
};