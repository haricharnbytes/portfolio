import React from 'react';

interface SectionProps {
  id: string;
  title?: string;
  className?: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id, title, className = "", children }) => {
  return (
    <section id={id} className={`py-16 md:py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto scroll-mt-20 ${className}`}>
      {title && (
        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter brutal-border bg-white dark:bg-zinc-900 px-6 py-3 shadow-brutal dark:shadow-brutal-white inline-block">
            {title}
          </h2>
          <div className="h-1.5 w-16 bg-zinc-900 dark:bg-white mt-3"></div>
        </div>
      )}
      <div className="relative">
        {children}
      </div>
    </section>
  );
};