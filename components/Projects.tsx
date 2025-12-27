import React, { useState } from 'react';
import { Section } from './Section';
import { PROJECTS } from '../constants';
import { Github, ExternalLink, ArrowUpRight, TrendingUp } from 'lucide-react';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', ...Array.from(new Set(PROJECTS.map(p => p.category)))];
  const filteredProjects = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === filter);

  return (
    <Section id="projects" title="Projects">
      <div className="flex flex-wrap gap-3 mb-10">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-5 py-3 md:px-6 md:py-2 text-[10px] font-black uppercase tracking-widest transition-all brutal-border shadow-brutal-sm dark:shadow-brutal-white min-h-[44px] flex items-center justify-center ${
              filter === category
                ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 translate-x-0.5 -translate-y-0.5 shadow-none'
                : 'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-50'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {filteredProjects.map((project) => (
          <div 
            key={project.id} 
            className="group flex flex-col bg-white dark:bg-zinc-900 brutal-border shadow-brutal-lg dark:shadow-brutal-white transition-all duration-300 sm:hover:-translate-y-2 sm:hover:translate-x-2 sm:hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] sm:dark:hover:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)]"
          >
            <div className="relative h-60 sm:h-56 brutal-border-b bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover grayscale sm:group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute top-4 right-4">
                 <div className="bg-white dark:bg-zinc-900 brutal-border p-3 shadow-brutal-sm sm:group-hover:rotate-45 transition-transform duration-300">
                    <ArrowUpRight size={20} />
                 </div>
              </div>
            </div>
            
            <div className="p-6 md:p-8 flex flex-col flex-grow">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 text-[10px] font-black uppercase brutal-border">
                  {project.category}
                </span>
              </div>

              <h3 className="text-2xl font-black uppercase tracking-tighter text-zinc-900 dark:text-white mb-4 sm:group-hover:underline decoration-2">
                {project.title}
              </h3>
              
              <p className="text-zinc-600 dark:text-zinc-400 font-bold mb-6 leading-tight text-base line-clamp-3">
                {project.description}
              </p>
              
              {project.impact && (
                <div className="bg-zinc-100 dark:bg-zinc-800 p-4 brutal-border mb-6 border-l-[8px] border-l-zinc-900 dark:border-l-white">
                  <div className="flex items-center text-[10px] font-black uppercase mb-1.5 opacity-60">
                    <TrendingUp size={14} className="mr-1.5" /> Impact_Metric
                  </div>
                  <p className="text-sm font-bold leading-tight">
                    {project.impact}
                  </p>
                </div>
              )}
              
              <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] px-3 py-1 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white font-black uppercase brutal-border shadow-brutal-sm">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-8 pt-6 border-t-2 border-zinc-100 dark:border-zinc-800">
                {project.repoUrl && (
                  <a href={project.repoUrl} className="flex items-center text-xs font-black uppercase tracking-widest hover:translate-x-1 transition-transform py-3 px-2 -mx-2 min-h-[44px]">
                    Code <Github size={18} className="ml-2" />
                  </a>
                )}
                {project.demoUrl && (
                  <a href={project.demoUrl} className="flex items-center text-xs font-black uppercase tracking-widest hover:translate-x-1 transition-transform py-3 px-2 -mx-2 min-h-[44px]">
                    Live <ExternalLink size={18} className="ml-2" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};