import React from 'react';

interface SectionProps {
  id: string;
  title?: string;
  className?: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id, title, className = "", children }) => {
  // Add scroll-mt-28 to account for sticky header height when scrolling
  return (
    <section id={id} className={`py-20 md:py-28 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto scroll-mt-28 ${className}`}>
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-12 relative inline-block">
          {title}
          <span className="absolute -bottom-3 left-0 w-1/3 h-1.5 bg-accent rounded-full"></span>
        </h2>
      )}
      {children}
    </section>
  );
};