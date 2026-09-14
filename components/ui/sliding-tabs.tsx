'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { cn } from '@/lib/utils';
import { playKeebsClick } from '@/lib/keebs-audio';

export interface TabItem {
    id: string;
    label: React.ReactNode;
    count?: number | string;
    icon?: React.ReactNode;
}

interface SlidingTabsProps {
    tabs: TabItem[];
    activeId: string;
    onChange: (_id: string) => void;
    className?: string;
    pillClassName?: string;
    tabClassName?: string;
    variant?: 'primary' | 'subtle';
}

export function SlidingTabs({
    tabs,
    activeId,
    onChange,
    className,
    pillClassName,
    tabClassName,
    variant = 'primary',
}: SlidingTabsProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [indicatorStyle, setIndicatorStyle] = useState<{
        left: number;
        width: number;
        opacity: number;
    }>({
        left: 0,
        width: 0,
        opacity: 0,
    });

    const updateIndicator = useCallback(() => {
        if (!containerRef.current) return;
        const activeElement = containerRef.current.querySelector<HTMLButtonElement>(
            `[data-tab-id="${activeId}"]`
        );

        if (activeElement) {
            setIndicatorStyle({
                left: activeElement.offsetLeft,
                width: activeElement.offsetWidth,
                opacity: 1,
            });
        }
    }, [activeId]);

    useEffect(() => {
        updateIndicator();
        window.addEventListener('resize', updateIndicator);
        return () => window.removeEventListener('resize', updateIndicator);
    }, [updateIndicator]);

    const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
        if (e.key === 'ArrowRight') {
            e.preventDefault();
            const nextIndex = (index + 1) % tabs.length;
            onChange(tabs[nextIndex].id);
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            const prevIndex = (index - 1 + tabs.length) % tabs.length;
            onChange(tabs[prevIndex].id);
        }
    };

    return (
        <div
            ref={containerRef}
            role="tablist"
            className={cn(
                'relative flex items-center p-1 rounded-full bg-background-light/40 border border-border/40 backdrop-blur-md overflow-hidden',
                className
            )}
        >
            {/* Sliding Active Pill Indicator */}
            <div
                aria-hidden="true"
                className={cn(
                    'absolute top-1 bottom-1 rounded-full transition-all duration-300 pointer-events-none shadow-md',
                    variant === 'primary'
                        ? 'bg-primary shadow-primary/20'
                        : 'bg-background border border-border/50 text-foreground',
                    pillClassName
                )}
                style={{
                    left: `${indicatorStyle.left}px`,
                    width: `${indicatorStyle.width}px`,
                    opacity: indicatorStyle.opacity,
                    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                }}
            />

            {/* Tab Buttons */}
            {tabs.map((tab, idx) => {
                const isActive = activeId === tab.id;

                return (
                    <button
                        key={tab.id}
                        role="tab"
                        data-tab-id={tab.id}
                        aria-selected={isActive}
                        tabIndex={isActive ? 0 : -1}
                        onClick={() => {
                            playKeebsClick();
                            onChange(tab.id);
                        }}
                        onKeyDown={(e) => handleKeyDown(e, idx)}
                        className={cn(
                            'relative z-10 px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-bold tracking-wide transition-colors duration-200 flex items-center gap-2 cursor-pointer focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none select-none active:scale-95',
                            isActive
                                ? variant === 'primary'
                                    ? 'text-primary-foreground'
                                    : 'text-foreground'
                                : 'text-muted-foreground hover:text-foreground',
                            tabClassName
                        )}
                    >
                        {tab.icon && <span className="shrink-0">{tab.icon}</span>}
                        <span>{tab.label}</span>
                        {tab.count !== undefined && (
                            <span
                                className={cn(
                                    'size-4 rounded-full text-[10px] flex items-center justify-center font-bold',
                                    isActive
                                        ? variant === 'primary'
                                            ? 'bg-primary-foreground/20 text-primary-foreground'
                                            : 'bg-primary/20 text-primary'
                                        : 'bg-border/40 text-muted-foreground'
                                )}
                            >
                                {tab.count}
                            </span>
                        )}
                    </button>
                );
            })}
        </div>
    );
}
