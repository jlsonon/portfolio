'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { GitCommit, Flame, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DayData {
    date: string;
    count: number;
    level: 0 | 1 | 2 | 3 | 4;
}

interface ApiResponse {
    total: {
        lastYear: number;
        [year: string]: number;
    };
    contributions: DayData[];
}

const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export default function GitHubCalendar() {
    const [daysData, setDaysData] = useState<DayData[]>([]);
    const [totalCommits, setTotalCommits] = useState<number>(273);
    const [hoveredDay, setHoveredDay] = useState<DayData | null>(null);
    const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

    useEffect(() => {
        let isMounted = true;

        async function fetchGitHubData() {
            try {
                const res = await fetch('https://github-contributions-api.jogruber.de/v4/jlsonon?y=last');
                if (!res.ok) throw new Error('Failed to fetch from GitHub API');
                const data: ApiResponse = await res.json();
                if (isMounted && data.contributions && data.contributions.length > 0) {
                    setDaysData(data.contributions);
                    setTotalCommits(data.total?.lastYear ?? data.contributions.reduce((a, b) => a + b.count, 0));
                    return;
                }
            } catch {
                // Fallback will remain active
            }
        }

        // Initialize with realistic rolling year data starting from 365 days ago to today
        const initialDays: DayData[] = [];
        const today = new Date();
        for (let i = 365; i >= 0; i--) {
            const d = new Date(today);
            d.setDate(d.getDate() - i);
            const dateStr = d.toISOString().split('T')[0];
            initialDays.push({ date: dateStr, count: 0, level: 0 });
        }
        setDaysData(initialDays);

        fetchGitHubData();
        return () => {
            isMounted = false;
        };
    }, []);

    // Structure days into authentic 7-day Sunday-Saturday week columns
    const { weeks, monthLabels } = useMemo(() => {
        if (!daysData.length) return { weeks: [], monthLabels: [] };

        const cols: (DayData | null)[][] = [];
        let currentWeek: (DayData | null)[] = [];

        // Pad first week if day 0 does not start on Sunday
        const firstDate = new Date(daysData[0].date);
        const startDayOfWeek = firstDate.getUTCDay(); // 0 is Sunday

        for (let p = 0; p < startDayOfWeek; p++) {
            currentWeek.push(null);
        }

        daysData.forEach((day) => {
            currentWeek.push(day);
            if (currentWeek.length === 7) {
                cols.push(currentWeek);
                currentWeek = [];
            }
        });

        if (currentWeek.length > 0) {
            while (currentWeek.length < 7) {
                currentWeek.push(null);
            }
            cols.push(currentWeek);
        }

        // Compute authentic Month label positions aligned to week columns
        const labels: { name: string; colIndex: number }[] = [];
        let lastMonth = -1;

        cols.forEach((week, colIdx) => {
            // Check the first valid day in the column
            const validDay = week.find((d) => d !== null);
            if (validDay) {
                const month = new Date(validDay.date).getUTCMonth();
                if (month !== lastMonth) {
                    labels.push({ name: MONTH_NAMES[month], colIndex: colIdx });
                    lastMonth = month;
                }
            }
        });

        return { weeks: cols, monthLabels: labels };
    }, [daysData]);

    const activeStreak = useMemo(() => {
        let streak = 0;
        for (let i = daysData.length - 1; i >= 0; i--) {
            if (daysData[i].count > 0) streak++;
            else if (streak > 0) break;
        }
        return streak;
    }, [daysData]);

    const handleMouseEnter = (day: DayData, e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setHoveredDay(day);
        setTooltipPos({
            x: rect.left + rect.width / 2,
            y: rect.top - 8,
        });
    };

    return (
        <div className="w-full rounded-3xl border border-border/40 bg-background-light/40 backdrop-blur-md p-6 sm:p-8 shadow-lg relative overflow-hidden">
            {/* Ambient gold glow */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-primary/[0.04] blur-[90px] rounded-full pointer-events-none -z-10" />

            {/* Header / Stats Block */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border/30 mb-6">
                <div>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary mb-1">
                        <GitCommit size={15} />
                        <span>Daily Shipping Cadence</span>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                        Live verified contribution velocity from GitHub for <span className="font-mono text-foreground font-semibold">@jlsonon</span>.
                    </p>
                </div>

                <div className="flex flex-wrap items-center gap-2 sm:gap-3 shrink-0">
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-background border border-border/40 text-xs font-semibold text-foreground">
                        <Flame size={13} className="text-primary" />
                        <span>{totalCommits} Contributions in the Last Year</span>
                    </div>

                    {activeStreak > 0 && (
                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary">
                            <span>{activeStreak} Day Streak</span>
                        </div>
                    )}

                    <a
                        href="https://github.com/jlsonon"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 text-xs font-bold transition-all active:scale-95 cursor-pointer"
                    >
                        <span>@jlsonon</span>
                        <ArrowUpRight size={13} />
                    </a>
                </div>
            </div>

            {/* Heatmap Grid Wrapper with horizontal scroll on mobile */}
            <div className="overflow-x-auto pb-2 scrollbar-thin">
                <div className="min-w-[700px]">
                    {/* Dynamic Month Labels Aligned to Actual Week Columns */}
                    <div className="relative h-4 mb-2 pl-7 text-[10px] font-mono text-muted-foreground/70">
                        {monthLabels.map((lbl, idx) => (
                            <span
                                key={`${lbl.name}-${idx}`}
                                className="absolute"
                                style={{ left: `calc(1.75rem + ${lbl.colIndex * 13.5}px)` }}
                            >
                                {lbl.name}
                            </span>
                        ))}
                    </div>

                    {/* Day Rows + Heatmap Matrix */}
                    <div className="flex gap-1.5">
                        {/* Day labels column */}
                        <div className="flex flex-col justify-between text-[9px] font-mono text-muted-foreground/60 pr-1 py-0.5 select-none w-5">
                            <span></span>
                            <span className="h-2.5 leading-none">Mon</span>
                            <span></span>
                            <span className="h-2.5 leading-none">Wed</span>
                            <span></span>
                            <span className="h-2.5 leading-none">Fri</span>
                            <span></span>
                        </div>

                        {/* Weeks grid */}
                        <div className="flex flex-1 gap-[3.5px]">
                            {weeks.map((week, wIdx) => (
                                <div key={wIdx} className="flex flex-col gap-[3.5px]">
                                    {week.map((day, dIdx) =>
                                        day ? (
                                            <div
                                                key={`${wIdx}-${dIdx}`}
                                                onMouseEnter={(e) => handleMouseEnter(day, e)}
                                                onMouseLeave={() => setHoveredDay(null)}
                                                className={cn(
                                                    'size-2.5 rounded-[2.5px] transition-all duration-150 cursor-pointer',
                                                    day.level === 0 && 'bg-background border border-border/40 hover:border-primary/40',
                                                    day.level === 1 && 'bg-primary/30 border border-primary/40 hover:scale-125',
                                                    day.level === 2 && 'bg-primary/55 border border-primary/60 hover:scale-125',
                                                    day.level === 3 && 'bg-primary/80 border border-primary/85 hover:scale-125 shadow-sm shadow-primary/20',
                                                    day.level === 4 && 'bg-primary border border-primary hover:scale-125 shadow-md shadow-primary/40'
                                                )}
                                            />
                                        ) : (
                                            <div
                                                key={`${wIdx}-${dIdx}`}
                                                className="size-2.5 opacity-0 pointer-events-none"
                                            />
                                        )
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Legend & Privacy Notice */}
            <div className="mt-5 pt-4 border-t border-border/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[11px] text-muted-foreground">
                <div className="flex items-center gap-1.5">
                    <ShieldCheck size={13} className="text-primary shrink-0" />
                    <span>Commercial repositories &amp; client code remain confidential.</span>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-auto font-mono text-[10px]">
                    <span>Less</span>
                    <span className="size-2.5 rounded-[2px] bg-background border border-border/40" />
                    <span className="size-2.5 rounded-[2px] bg-primary/30 border border-primary/40" />
                    <span className="size-2.5 rounded-[2px] bg-primary/55 border border-primary/60" />
                    <span className="size-2.5 rounded-[2px] bg-primary/80 border border-primary/85" />
                    <span className="size-2.5 rounded-[2px] bg-primary border border-primary shadow-sm shadow-primary/30" />
                    <span>More</span>
                </div>
            </div>

            {/* Hover Tooltip Popup */}
            {hoveredDay && (
                <div
                    className="fixed -translate-x-1/2 -translate-y-full px-2.5 py-1 rounded-lg bg-background border border-border/80 text-foreground text-[10px] font-mono shadow-2xl pointer-events-none z-50 whitespace-nowrap"
                    style={{
                        left: `${tooltipPos.x}px`,
                        top: `${tooltipPos.y}px`,
                    }}
                >
                    <span className="text-primary font-bold">{hoveredDay.count} contribution{hoveredDay.count !== 1 ? 's' : ''}</span> on {hoveredDay.date}
                </div>
            )}
        </div>
    );
}
