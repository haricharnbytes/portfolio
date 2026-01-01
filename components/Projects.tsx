import React, { useState } from 'react';
import { Section } from './Section';
import { PROJECTS } from '../constants';
import { Github, ExternalLink, ArrowUpRight, TrendingUp, Sparkles, Brain, Home, Database, BarChart3, Terminal } from 'lucide-react';
import { Project } from '../types';

const ProjectIcon: React.FC<{ name?: string; className?: string }> = ({ name, className }) => {
  switch (name) {
    case 'Sparkles': return <Sparkles className={className} />;
    case 'Brain': return <Brain className={className} />;
    case 'Home': return <Home className={className} />;
    case 'Database': return <Database className={className} />;
    case 'BarChart3': return <BarChart3 className={className} />;
    case 'Terminal': return <Terminal className={className} />;
    default: return <Database className={className} />;
  }
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group flex flex-col bg-white dark:bg-zinc-900 brutal-border shadow-brutal-lg dark:shadow-brutal-white transition-all duration-300 sm:hover:-translate-y-2 sm:hover:translate-x-2 sm:hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] sm:dark:hover:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Visual Header */}
      <div className="relative h-64 sm:h-72 brutal-border-b bg-zinc-100 dark:bg-zinc-800 overflow-hidden flex items-center justify-center">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        
        {/* Default State: Icon */}
        <div className={`transition-all duration-500 flex flex-col items-center gap-4 ${isHovered ? 'opacity-0 scale-90 translate-y-4' : 'opacity-100 scale-100 translate-y-0'}`}>
          <div className="p-8 brutal-border bg-white dark:bg-zinc-900 shadow-brutal transition-transform group-hover:rotate-3">
             <ProjectIcon name={project.iconName} className="w-16 h-16 text-zinc-900 dark:text-white" />
          </div>
        </div>

        {/* Hover State: Image Preview */}
        <div className={`absolute inset-0 transition-opacity duration-500 flex items-center justify-center ${isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-105' : 'scale-110'}`}
          />
          {/* Subtle Overlay to make the 'Arrow' pop */}
          <div className="absolute inset-0 bg-black/10 dark:bg-white/5"></div>
        </div>

        <div className="absolute top-4 right-4 z-20">
           <div className="bg-white dark:bg-zinc-900 brutal-border p-3 shadow-brutal-sm sm:group-hover:rotate-45 transition-transform duration-300">
              <ArrowUpRight size={20} />
           </div>
        </div>
      </div>
      
      {/* Content */}
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
          <div className="bg-zinc-100 dark:bg-zinc-800 p-4 brutal-border mb-6 border-l-[8px] border-l-zinc-900 dark:border-l-white transition-all group-hover:translate-x-1">
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
            <span key={tag} className="text-[10px] px-3 py-1 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white font-black uppercase brutal-border shadow-brutal-sm group-hover:bg-zinc-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-zinc-900 transition-colors">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center gap-8 pt-6 border-t-2 border-zinc-100 dark:border-zinc-800">
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-xs font-black uppercase tracking-widest hover:translate-x-1 transition-transform py-3 px-2 -mx-2 min-h-[44px]">
              Code <Github size={18} className="ml-2" />
            </a>
          )}
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-xs font-black uppercase tracking-widest hover:translate-x-1 transition-transform py-3 px-2 -mx-2 min-h-[44px]">
              Live <ExternalLink size={18} className="ml-2" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', ...Array.from(new Set(PROJECTS.map(p => p.category)))];
  const filteredProjects = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === filter);

  return (
    <Section id="projects" title="Projects">
      <div className="flex flex-wrap gap-3 mb-12">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 lg:gap-16">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
};