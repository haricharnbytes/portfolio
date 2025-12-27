import React from 'react';
import { Section } from './Section';
import { ABOUT_DATA } from '../constants';
import { MapPin, Target } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <Section id="about" title="Identity">
      <div className="flex flex-col gap-10 items-start max-w-5xl mx-auto w-full">
        <div className="w-full">
          <div className="bg-white dark:bg-zinc-900 brutal-border shadow-brutal dark:shadow-brutal-white p-6 sm:p-10 md:p-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 border-b-4 border-zinc-900 dark:border-white pb-8">
              <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-zinc-900 dark:text-white">
                Mission_Statement
              </h3>
              <div className="p-3 brutal-border bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 shadow-brutal-sm dark:shadow-brutal-white inline-flex items-center gap-3 font-black uppercase text-[10px] tracking-widest self-start md:self-center">
                <MapPin size={20} />
                {ABOUT_DATA.location}
              </div>
            </div>
            
            <p className="text-2xl sm:text-3xl font-bold text-zinc-800 dark:text-zinc-200 leading-tight mb-12">
              {ABOUT_DATA.bio}
            </p>
            
            <div className="p-8 bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 brutal-border shadow-brutal transition-all sm:hover:translate-y-[-4px] sm:hover:translate-x-[4px]">
              <h4 className="text-2xl font-black uppercase tracking-tighter mb-5 flex items-center">
                <Target size={28} className="mr-4 text-zinc-400 dark:text-zinc-600" />
                Objectives
              </h4>
              <p className="text-lg sm:text-xl font-bold opacity-90 leading-snug">
                {ABOUT_DATA.goals}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};