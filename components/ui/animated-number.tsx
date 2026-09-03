'use client';

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedNumberProps {
    value: number;
    duration?: number; // duration in seconds
    delay?: number; // delay in ms
    prefix?: string;
    suffix?: string;
    decimals?: number;
    className?: string;
    once?: boolean;
}

export function AnimatedNumber({
    value,
    duration = 1.4,
    delay = 0,
    prefix = '',
    suffix = '',
    decimals = 0,
    className,
    once = true,
}: AnimatedNumberProps) {
    const [displayValue, setDisplayValue] = useState<number>(0);
    const elementRef = useRef<HTMLSpanElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        // Respect reduced motion preference
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
            setDisplayValue(value);
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting && (!hasAnimated.current || !once)) {
                    hasAnimated.current = true;

                    const timeout = setTimeout(() => {
                        const startTime = performance.now();
                        const durationMs = duration * 1000;

                        const animate = (currentTime: number) => {
                            const elapsed = currentTime - startTime;
                            const progress = Math.min(elapsed / durationMs, 1);

                            // Smooth cubic ease-out curve: 1 - Math.pow(1 - progress, 3)
                            const easeOutCubic = 1 - Math.pow(1 - progress, 3);
                            const current = easeOutCubic * value;

                            setDisplayValue(current);

                            if (progress < 1) {
                                requestAnimationFrame(animate);
                            } else {
                                setDisplayValue(value);
                            }
                        };

                        requestAnimationFrame(animate);
                    }, delay);

                    return () => clearTimeout(timeout);
                }
            },
            { threshold: 0.15 }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [value, duration, delay, once]);

    const formattedNumber = decimals > 0
        ? displayValue.toFixed(decimals)
        : Math.round(displayValue).toString();

    return (
        <span ref={elementRef} className={cn('tabular-nums inline-block', className)}>
            {prefix}
            {formattedNumber}
            {suffix}
        </span>
    );
}
