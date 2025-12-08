import React from 'react';
import { Section } from './Section';
import { ARTICLES } from '../constants';
import { ArrowRight, Calendar } from 'lucide-react';

export const Blog: React.FC = () => {
  return (
    <Section id="blog" title="Recent Writing" className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {ARTICLES.map((article) => (
          <a 
            key={article.id} 
            href={article.url}
            className="group block bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-teal-200 hover:shadow-lg transition-all"
          >
            <div className="flex items-center text-xs text-teal-600 font-medium mb-3">
              <Calendar size={12} className="mr-1.5" />
              {article.date}
            </div>
            
            <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-teal-700 transition-colors">
              {article.title}
            </h3>
            
            <p className="text-slate-600 text-sm mb-4 line-clamp-3">
              {article.summary}
            </p>
            
            <div className="flex items-center text-sm font-medium text-teal-600 mt-auto">
              Read Article <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
};