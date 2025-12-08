import React from 'react';
import { Section } from './Section';
import { ABOUT_DATA } from '../constants';
import { MapPin, Target } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <Section id="about">
      <div className="flex flex-col md:flex-row items-start gap-12 lg:gap-20">
        {/* Image Column - Sticky only on desktop (md+) */}
        <div className="w-full md:w-1/3 flex justify-center md:sticky md:top-24">
          <div className="relative group">
            <div className="absolute inset-0 bg-accent rounded-2xl transform rotate-6 transition-transform group-hover:rotate-3 opacity-20"></div>
            <img 
              src={ABOUT_DATA.image} 
              alt="Profile" 
              className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-xl grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
        
        {/* Text Content Column */}
        <div className="w-full md:w-2/3">
          <h3 className="text-2xl font-bold text-primary dark:text-white mb-6 flex items-center">
            About Me
            <span className="ml-4 h-px flex-1 bg-slate-200 dark:bg-slate-700"></span>
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8 text-justify md:text-left">
            {ABOUT_DATA.bio}
          </p>
          
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-primary dark:text-white mb-3 flex items-center">
              <Target size={20} className="mr-2 text-accent" />
              Career Goals
            </h4>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-justify md:text-left">
              {ABOUT_DATA.goals}
            </p>
          </div>
          
          <div className="flex items-center text-slate-500 dark:text-slate-400 font-medium bg-slate-50 dark:bg-slate-800 px-4 py-2 rounded-lg inline-flex">
            <MapPin size={18} className="mr-2 text-accent" />
            {ABOUT_DATA.location}
          </div>
        </div>
      </div>
    </Section>
  );
};