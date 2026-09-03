'use client';

import React, { useRef, useState, useCallback } from 'react';
import { cn } from '@/lib/utils';

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    spotlightColor?: string; // Amber glow by default
    spotlightSize?: number;
}

export function SpotlightCard({
    children,
    className,
    spotlightColor = 'rgba(243, 183, 40, 0.12)',
    spotlightSize = 380,
    ...props
}: SpotlightCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        cardRef.current.style.setProperty('--mouse-x', `${x}px`);
        cardRef.current.style.setProperty('--mouse-y', `${y}px`);
    }, []);

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={cn(
                'group relative rounded-2xl border border-border/40 bg-background-light/40 backdrop-blur-md overflow-hidden transition-all duration-300',
                className
            )}
            {...props}
        >
            {/* Radial Spotlight Overlay */}
            <div
                className="pointer-events-none absolute -inset-px transition-opacity duration-300 ease-out z-0"
                style={{
                    opacity: isHovered ? 1 : 0,
                    background: `radial-gradient(${spotlightSize}px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), ${spotlightColor}, transparent 70%)`,
                }}
                aria-hidden="true"
            />

            {/* Subtle Border Glow Highlight */}
            <div
                className="pointer-events-none absolute -inset-px rounded-[inherit] transition-opacity duration-300 ease-out z-0 border border-primary/30"
                style={{
                    opacity: isHovered ? 1 : 0,
                    maskImage: `radial-gradient(${spotlightSize * 0.75}px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), black 0%, transparent 80%)`,
                    WebkitMaskImage: `radial-gradient(${spotlightSize * 0.75}px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), black 0%, transparent 80%)`,
                }}
                aria-hidden="true"
            />

            {/* Content Layer */}
            <div className="relative z-10 h-full w-full">
                {children}
            </div>
        </div>
    );
}
