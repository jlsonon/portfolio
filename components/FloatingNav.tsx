'use client';
import { useEffect, useState, useCallback, useRef } from 'react';
import { useLenis } from 'lenis/react';
import { cn } from '@/lib/utils';

interface SectionItem {
    id: string;
    name: string;
    shortName: string;
    number: string;
}

const SECTIONS: SectionItem[] = [
    { id: 'banner', name: 'Overview', shortName: 'Hero', number: '01' },
    { id: 'trusted-by', name: 'Commercial Deployments', shortName: 'Deployments', number: '02' },
    { id: 'selected-projects', name: 'Flagship Systems', shortName: 'Systems', number: '03' },
    { id: 'about-me', name: 'About & How I Work', shortName: 'About', number: '04' },
    { id: 'services', name: 'Commercial Capabilities', shortName: 'Services', number: '05' },
    { id: 'who-i-build-for', name: 'Who I Build For', shortName: 'Niches', number: '06' },
    { id: 'my-stack', name: 'Core Production Stack', shortName: 'Stack', number: '07' },
    { id: 'my-experience', name: 'Experience & History', shortName: 'Experience', number: '08' },
    { id: 'my-process', name: 'How I Build Systems', shortName: 'Process', number: '09' },
    { id: 'contact-cta', name: 'Start a Project', shortName: 'Contact', number: '10' },
];

const BUTTON_HEIGHT = 38; // px per section slot
const PADDING_OFFSET = 8; // container padding top

export default function FloatingNav() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [isDynamicLabelVisible, setIsDynamicLabelVisible] = useState(false);
    const lenis = useLenis();
    const isClickingRef = useRef(false);
    const clickTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const dynamicFadeTimerRef = useRef<NodeJS.Timeout | null>(null);

    // Trigger dynamic fade when entering a new section
    useEffect(() => {
        setIsDynamicLabelVisible(true);
        if (dynamicFadeTimerRef.current) clearTimeout(dynamicFadeTimerRef.current);

        dynamicFadeTimerRef.current = setTimeout(() => {
            setIsDynamicLabelVisible(false);
        }, 1800);

        return () => {
            if (dynamicFadeTimerRef.current) clearTimeout(dynamicFadeTimerRef.current);
        };
    }, [activeIndex]);

    const handleScroll = useCallback(() => {
        if (isClickingRef.current) return;

        // 1. Precise page scroll progress
        const totalScrollable = document.documentElement.scrollHeight - window.innerHeight;
        if (totalScrollable > 0) {
            const progress = (window.scrollY / totalScrollable) * 100;
            setScrollProgress(Math.min(100, Math.max(0, progress)));
        }

        // 2. Near page bottom: lock to final Contact section
        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
            setActiveIndex(SECTIONS.length - 1);
            return;
        }

        // 3. Natural eye-level reading focus line (36% from viewport top)
        const readingFocusLine = window.innerHeight * 0.36;
        let detectedIndex = 0;

        for (let i = 0; i < SECTIONS.length; i++) {
            const el = document.getElementById(SECTIONS[i].id);
            if (el) {
                const rect = el.getBoundingClientRect();
                if (rect.top <= readingFocusLine) {
                    detectedIndex = i;
                }
            }
        }

        setActiveIndex(detectedIndex);
    }, []);

    useEffect(() => {
        handleScroll();

        let ticking = false;
        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
            if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
            if (dynamicFadeTimerRef.current) clearTimeout(dynamicFadeTimerRef.current);
        };
    }, [handleScroll]);

    const scrollToSection = (id: string, index: number) => {
        setActiveIndex(index);
        isClickingRef.current = true;

        if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
        clickTimeoutRef.current = setTimeout(() => {
            isClickingRef.current = false;
        }, 1100);

        const element = document.getElementById(id);
        if (!element) return;

        if (lenis) {
            lenis.scrollTo(element, {
                offset: -65,
                duration: 1.1,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            });
        } else {
            const navOffset = 65;
            const top = element.getBoundingClientRect().top + window.scrollY - navOffset;
            window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
        }

        window.history.pushState(null, '', `#${id}`);
    };

    return (
        <aside
            aria-label="Section shortcuts"
            className="hidden lg:flex fixed right-4 xl:right-7 top-1/2 -translate-y-1/2 z-40 flex-col items-center"
        >
            {/* Main Frosted Glass Capsule */}
            <div className="relative p-2 rounded-full bg-[#0c0c0e]/75 backdrop-blur-2xl border border-white/[0.08] shadow-[0_16px_40px_rgba(0,0,0,0.5),0_1px_0_rgba(255,255,255,0.06)_inset] flex flex-col items-center gap-0">
                {/* Background Reading Progress Spine */}
                <div className="absolute left-1/2 top-4 bottom-4 w-[2px] -translate-x-1/2 bg-white/[0.06] rounded-full overflow-hidden pointer-events-none -z-10">
                    <div
                        className="w-full bg-gradient-to-b from-primary/60 via-primary to-primary transition-all duration-200 ease-out rounded-full shadow-[0_0_8px_rgba(235,160,33,0.4)]"
                        style={{ height: `${scrollProgress}%` }}
                    />
                </div>

                {/* Fluid Sliding Active Indicator Capsule */}
                <div
                    aria-hidden="true"
                    className="absolute left-2 right-2 h-[26px] rounded-full bg-primary shadow-[0_0_18px_rgba(235,160,33,0.38),0_1px_2px_rgba(0,0,0,0.3)_inset] pointer-events-none transition-all duration-300"
                    style={{
                        top: `${PADDING_OFFSET + activeIndex * BUTTON_HEIGHT + 6}px`,
                        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                />

                {/* Section Navigation Buttons */}
                {SECTIONS.map((section, idx) => {
                    const isActive = activeIndex === idx;
                    const isHovered = hoveredIndex === idx;
                    const shouldShowLabel = isHovered || (isActive && isDynamicLabelVisible);

                    return (
                        <button
                            key={section.id}
                            onClick={() => scrollToSection(section.id, idx)}
                            onMouseEnter={() => setHoveredIndex(idx)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="group relative flex items-center justify-center w-8 h-[38px] rounded-full cursor-pointer focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none transition-transform duration-200 active:scale-[0.88] select-none"
                            aria-label={`Jump to ${section.name}`}
                            aria-current={isActive ? 'true' : undefined}
                        >
                            {/* Emil Kowalski Dynamic Fade Flyout Tooltip */}
                            <div
                                className={cn(
                                    'absolute right-12 px-3.5 py-2 rounded-2xl text-xs font-semibold pointer-events-none shadow-[0_12px_32px_rgba(0,0,0,0.6)] flex items-center gap-2.5 border whitespace-nowrap bg-[#121216]/95 backdrop-blur-2xl transition-all duration-250 ease-out',
                                    shouldShowLabel
                                        ? 'opacity-100 translate-x-0 scale-100 border-primary/40 text-foreground'
                                        : 'opacity-0 translate-x-2 scale-95 border-white/[0.08] text-muted-foreground'
                                )}
                            >
                                <span className="text-[10px] font-mono font-bold text-primary px-1.5 py-0.5 rounded-md bg-primary/10 border border-primary/20">
                                    {section.number}
                                </span>
                                <span className="font-anton tracking-tight text-foreground/95 text-xs">
                                    {section.name}
                                </span>
                                {isActive && (
                                    <span className="flex items-center gap-1 text-[10px] font-mono text-primary font-normal pl-1 border-l border-white/10">
                                        <span className="size-1.5 rounded-full bg-primary animate-pulse" />
                                        Reading
                                    </span>
                                )}
                            </div>

                            {/* Center Dot Pip */}
                            <span
                                className={cn(
                                    'rounded-full transition-all duration-200 ease-out relative z-10',
                                    isActive
                                        ? 'size-1.5 bg-black shadow-sm'
                                        : 'size-1.5 bg-white/25 group-hover:bg-primary group-hover:scale-150 group-hover:shadow-[0_0_8px_rgba(235,160,33,0.6)]'
                                )}
                            />
                        </button>
                    );
                })}
            </div>
        </aside>
    );
}
