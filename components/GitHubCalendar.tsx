import React, { useEffect, useState, useRef } from 'react';

interface Contribution {
  date: string;
  count: number;
  level: number;
}

interface Week {
  days: (Contribution | null)[];
}

interface GitHubCalendarProps {
  username: string;
  onDataLoaded?: (total: number) => void;
}

export const GitHubCalendar: React.FC<GitHubCalendarProps> = ({ username, onDataLoaded }) => {
  const [weeks, setWeeks] = useState<Week[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hoveredDay, setHoveredDay] = useState<{ date: string; count: number; x: number; y: number } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!username) return;
      
      setLoading(true);
      setError(null);
      
      try {
        const response = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`);
        
        if (!response.ok) {
           throw new Error(`API returned status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (!data || !data.contributions) {
           throw new Error('Invalid data format');
        }

        const contributions: Contribution[] = data.contributions;
        
        // Calculate total contributions
        const total = contributions.reduce((acc: number, curr: Contribution) => acc + curr.count, 0);
        
        // Pass total back to parent if callback exists
        if (onDataLoaded) {
            onDataLoaded(total);
        }

        // Process into weeks
        const processedWeeks: Week[] = [];
        let currentWeek: (Contribution | null)[] = Array(7).fill(null);
        
        contributions.forEach((day, index) => {
          // Manually parse YYYY-MM-DD to avoid timezone shifts
          const [y, m, d] = day.date.split('-').map(Number);
          const dateObj = new Date(y, m - 1, d);
          const dayOfWeek = dateObj.getDay(); // 0 = Sunday
          
          currentWeek[dayOfWeek] = day;
          
          if (dayOfWeek === 6 || index === contributions.length - 1) {
            processedWeeks.push({ days: [...currentWeek] });
            currentWeek = Array(7).fill(null);
          }
        });

        setWeeks(processedWeeks);
      } catch (err) {
        console.error("GitHub Calendar Error:", err);
        setError('Unable to load activity feed');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username, onDataLoaded]);

  // Auto-scroll to end (latest date) when data loads
  useEffect(() => {
    if (!loading && scrollRef.current) {
        // Small timeout to ensure DOM is fully rendered before scrolling
        setTimeout(() => {
            if (scrollRef.current) {
                scrollRef.current.scrollLeft = scrollRef.current.scrollWidth;
            }
        }, 10);
    }
  }, [loading, weeks]);

  const getLevelColor = (level: number) => {
    // Brutalist grayscale theme
    switch (level) {
      case 0: return 'bg-zinc-100 dark:bg-zinc-800/50';
      case 1: return 'bg-zinc-300 dark:bg-zinc-700';
      case 2: return 'bg-zinc-400 dark:bg-zinc-500';
      case 3: return 'bg-zinc-600 dark:bg-zinc-300';
      case 4: return 'bg-zinc-900 dark:bg-zinc-100';
      default: return 'bg-zinc-100 dark:bg-zinc-800/50';
    }
  };

  const handleMouseEnter = (e: React.MouseEvent, day: Contribution) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const containerRect = containerRef.current?.getBoundingClientRect() || { left: 0, top: 0 };
    
    // Calculate position relative to container
    let x = rect.left - containerRect.left + rect.width / 2;
    let y = rect.top - containerRect.top;

    setHoveredDay({
      date: day.date,
      count: day.count,
      x,
      y
    });
  };

  const formatDate = (dateString: string) => {
    const [y, m, d] = dateString.split('-').map(Number);
    const date = new Date(y, m - 1, d);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="w-full h-[140px] flex items-center justify-center bg-zinc-50 dark:bg-zinc-900/50 animate-pulse border border-zinc-100 dark:border-zinc-800">
        <span className="text-xs font-bold uppercase text-zinc-400 tracking-widest">Loading...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-[140px] flex items-center justify-center bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
        <span className="text-xs font-bold uppercase text-zinc-400 tracking-widest">{error}</span>
      </div>
    );
  }

  return (
    <div className="w-full relative select-none" ref={containerRef}>
      <div className="w-full overflow-x-auto pb-2 scrollbar-hide" ref={scrollRef}>
        {/* Force min-width to ensure weeks don't get squashed */}
        <div className="flex gap-[3px] min-w-max">
          {weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="flex flex-col gap-[3px]">
              {week.days.map((day, dayIndex) => {
                if (!day) return <div key={`empty-${weekIndex}-${dayIndex}`} className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-transparent" />;
                
                return (
                  <div
                    key={day.date}
                    className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-[1px] ${getLevelColor(day.level)} hover:scale-125 transition-transform duration-100 cursor-pointer`}
                    onMouseEnter={(e) => handleMouseEnter(e, day)}
                    onMouseLeave={() => setHoveredDay(null)}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Tooltip */}
      {hoveredDay && (
        <div 
          className="absolute z-50 pointer-events-none transform -translate-x-1/2 -translate-y-full pb-2"
          style={{ 
            left: hoveredDay.x, 
            top: hoveredDay.y
          }}
        >
          <div className="bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 text-[10px] font-black uppercase tracking-wider py-2 px-3 brutal-border shadow-brutal-sm whitespace-nowrap relative">
            <div className="mb-0.5">{hoveredDay.count} Contributions</div>
            <div className="text-zinc-400 dark:text-zinc-500">{formatDate(hoveredDay.date)}</div>
            {/* Arrow */}
            <div className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-2 h-2 bg-zinc-900 dark:bg-white rotate-45 border-b-2 border-r-2 border-black dark:border-zinc-900"></div>
          </div>
        </div>
      )}
    </div>
  );
};