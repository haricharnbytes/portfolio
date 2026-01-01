import React, { useEffect, useRef, useState } from 'react';

interface SectionProps {
  id: string;
  title?: string;
  className?: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id, title, className = "", children }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id={id} 
      ref={sectionRef}
      className={`py-16 md:py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto scroll-mt-20 reveal-on-scroll ${isVisible ? 'is-visible' : ''} ${className}`}
    >
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