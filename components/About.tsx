import React from 'react';
import { Section } from './Section';
import { ABOUT_DATA } from '../constants';
import { MapPin, Target } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <Section id="about" title="Identity">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
        <div className="w-full lg:w-1/3 group">
          <div className="relative max-w-sm mx-auto lg:mx-0">
            <div className="absolute inset-0 bg-zinc-900 dark:bg-white brutal-border translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-all"></div>
            <img 
              src={ABOUT_DATA.image} 
              alt="Profile" 
              className="w-full aspect-square object-cover brutal-border grayscale hover:grayscale-0 transition-all duration-700 shadow-brutal dark:shadow-brutal-white bg-white"
            />
          </div>
          <div className="mt-8 p-4 brutal-border bg-white dark:bg-zinc-800 shadow-brutal-sm dark:shadow-brutal-white inline-flex items-center gap-3 font-black uppercase text-xs tracking-widest text-zinc-900 dark:text-white">
            <MapPin size={18} className="text-zinc-900 dark:text-white" />
            {ABOUT_DATA.location}
          </div>
        </div>
        
        <div className="w-full lg:w-2/3">
          <div className="bg-white dark:bg-zinc-900 brutal-border shadow-brutal dark:shadow-brutal-white p-6 md:p-10">
            <h3 className="text-2xl font-black uppercase tracking-tighter text-zinc-900 dark:text-white mb-6 border-b-2 border-zinc-900 dark:border-white pb-3">
              Mission_Statement
            </h3>
            <p className="text-lg md:text-2xl font-bold text-zinc-800 dark:text-zinc-200 leading-tight mb-8">
              {ABOUT_DATA.bio}
            </p>
            
            <div className="p-6 bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 brutal-border shadow-brutal transition-all hover:translate-y-[-2px]">
              <h4 className="text-xl font-black uppercase tracking-tighter mb-3 flex items-center">
                <Target size={20} className="mr-3 text-zinc-400 dark:text-zinc-600" />
                Objectives
              </h4>
              <p className="text-base font-bold opacity-90 leading-snug">
                {ABOUT_DATA.goals}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};