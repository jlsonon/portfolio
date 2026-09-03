'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface ScrollBlurProps {
    className?: string;
    position?: 'top' | 'bottom' | 'both';
    intensity?: 'sm' | 'md' | 'lg';
}

export function ScrollBlur({
    className,
    position = 'both',
    intensity = 'md',
}: ScrollBlurProps) {
    const heightMap = {
        sm: 'h-8',
        md: 'h-14',
        lg: 'h-20',
    };

    const height = heightMap[intensity];

    return (
        <>
            {(position === 'top' || position === 'both') && (
                <div
                    aria-hidden="true"
                    className={cn(
                        'pointer-events-none absolute top-0 left-0 right-0 z-20',
                        height,
                        'bg-gradient-to-b from-background via-background/60 to-transparent backdrop-blur-[1px]',
                        className
                    )}
                />
            )}
            {(position === 'bottom' || position === 'both') && (
                <div
                    aria-hidden="true"
                    className={cn(
                        'pointer-events-none absolute bottom-0 left-0 right-0 z-20',
                        height,
                        'bg-gradient-to-t from-background via-background/60 to-transparent backdrop-blur-[1px]',
                        className
                    )}
                />
            )}
        </>
    );
}
