
import React, { useState } from 'react';
import { Section } from './Section';
import { PROJECTS } from '../constants';
import { Github, ExternalLink, Code, TrendingUp } from 'lucide-react';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  
  const categories = ['All', ...Array.from(new Set(PROJECTS.map(p => p.category)))];
  
  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <Section id="projects" title="Featured Projects">
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-12">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              filter === category
                ? 'bg-primary text-white shadow-md'
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div 
            key={project.id} 
            className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-100 dark:border-slate-700 hover:border-accent/30 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col h-full"
          >
            <div className="relative h-48 overflow-hidden flex-shrink-0">
              <div className="absolute inset-0 bg-primary/10 dark:bg-slate-900/40 group-hover:bg-transparent transition-colors z-10"></div>
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 z-20">
                <span className="px-2 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur text-xs font-semibold text-primary dark:text-white rounded shadow-sm">
                  {project.category}
                </span>
              </div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              
              <div className="mb-4">
                <p className="text-slate-600 dark:text-slate-300 text-sm mb-3">
                  {project.description}
                </p>
                {project.impact && (
                  <div className="bg-accent/5 dark:bg-accent/10 p-3 rounded-lg border border-accent/20">
                    <div className="flex items-center text-accent text-xs font-bold mb-1 uppercase tracking-wide">
                      <TrendingUp size={12} className="mr-1" /> Impact
                    </div>
                    <p className="text-slate-700 dark:text-slate-200 text-xs font-medium leading-relaxed">
                      {project.impact}
                    </p>
                  </div>
                )}
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs px-2 py-1 bg-slate-50 dark:bg-slate-700 text-slate-500 dark:text-slate-300 rounded border border-slate-100 dark:border-slate-600">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-4 border-t border-slate-50 dark:border-slate-700 pt-4">
                {project.repoUrl && (
                  <a 
                    href={project.repoUrl}
                    className="flex items-center text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-accent dark:hover:text-accent transition-colors"
                  >
                    <Github size={16} className="mr-1.5" />
                    Code
                  </a>
                )}
                {project.demoUrl && (
                  <a 
                    href={project.demoUrl}
                    className="flex items-center text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-accent dark:hover:text-accent transition-colors"
                  >
                    <ExternalLink size={16} className="mr-1.5" />
                    Live Demo
                  </a>
                )}
                {!project.repoUrl && !project.demoUrl && (
                    <span className="flex items-center text-sm font-medium text-slate-400 cursor-not-allowed">
                        <Code size={16} className="mr-1.5" />
                        Internal
                    </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
