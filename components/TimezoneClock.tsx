'use client';

import React, { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function TimezoneClock({ className }: { className?: string }) {
    const [timeStr, setTimeStr] = useState<string>('');
    const [isWorkingHours, setIsWorkingHours] = useState<boolean>(true);

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const formatter = new Intl.DateTimeFormat('en-US', {
                timeZone: 'Asia/Manila',
                hour: 'numeric',
                minute: '2-digit',
                second: '2-digit',
                hour12: true,
            });

            const hourFormatter = new Intl.DateTimeFormat('en-US', {
                timeZone: 'Asia/Manila',
                hour: 'numeric',
                hour12: false,
            });

            const currentHour = parseInt(hourFormatter.format(now), 10);
            setIsWorkingHours(currentHour >= 8 && currentHour < 23);
            setTimeStr(formatter.format(now));
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className={cn(
                'inline-flex flex-wrap items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-background/60 border border-border/50 backdrop-blur-md text-xs',
                className
            )}
        >
            <div className="flex items-center gap-1.5 text-foreground font-mono font-medium">
                <Globe size={13} className="text-primary shrink-0" />
                <span className="font-sans font-semibold">Manila, PH:</span>
                <span className="text-primary font-bold">{timeStr || 'Loading...'}</span>
                <span className="text-[10px] text-muted-foreground">(GMT+8)</span>
            </div>

            <span className="w-px h-3 bg-border/60 hidden sm:inline-block" />

            <div className="flex items-center gap-1.5 text-[11px]">
                <span
                    className={cn(
                        'size-1.5 rounded-full',
                        isWorkingHours ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'
                    )}
                />
                <span className="text-muted-foreground font-medium">
                    {isWorkingHours ? 'Available • < 2hr response' : 'Replies first thing morning'}
                </span>
            </div>
        </div>
    );
}
