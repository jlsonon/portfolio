'use client';
import SectionTitle from '@/components/SectionTitle';
import { MY_STACK } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { cn } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const CATEGORY_NAMES: Record<string, string> = {
    ai_engineering: 'AI Engineering',
    business_solutions: 'Business Solutions',
    frontend: 'Frontend',
    backend: 'Backend',
    database: 'Database',
    tools: 'Tools & DevOps',
};

const Skills = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    // On mobile: default AI Engineering open, others collapsible
    const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({
        ai_engineering: true,
    });
    const totalSkills = Object.values(MY_STACK).flat().length;

    const toggleCategory = (categoryKey: string) => {
        setOpenCategories((prev) => ({
            ...prev,
            [categoryKey]: !prev[categoryKey],
        }));
    };

    useGSAP(
        () => {
            const slideUpEl =
                containerRef.current?.querySelectorAll('.slide-up');

            if (!slideUpEl?.length) return;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                    end: 'bottom 80%',
                    scrub: 0.5,
                },
            });

            tl.fromTo(
                '.slide-up',
                {
                    autoAlpha: 0,
                    y: 40,
                },
                {
                    autoAlpha: 1,
                    y: 0,
                    ease: 'none',
                    stagger: 0.4,
                }
            );
        },
        { scope: containerRef },
    );

    return (
        <section id="my-stack" ref={containerRef} className="pb-section pt-10">
            <div className="container">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                    <SectionTitle title="My Stack" />
                    <span className="text-xs text-muted-foreground hidden sm:block">
                        {totalSkills}+ Technologies & Frameworks
                    </span>
                </div>

                {/* 1. Mobile-Only: Vertical Collapsible Accordion List */}
                <div className="sm:hidden mt-8 space-y-3">
                    {Object.entries(MY_STACK).map(([key, items]) => {
                        const isOpen = !!openCategories[key];
                        const categoryName = CATEGORY_NAMES[key] || key.replace(/_/g, ' ');

                        return (
                            <div
                                key={key}
                                className={cn(
                                    'rounded-2xl border transition-all duration-200 overflow-hidden',
                                    isOpen
                                        ? 'border-primary/40 bg-background-light/70 shadow-sm'
                                        : 'border-border/40 bg-background-light/40 hover:border-border/70'
                                )}
                            >
                                <button
                                    onClick={() => toggleCategory(key)}
                                    className="w-full p-4 flex items-center justify-between text-left transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                                    aria-expanded={isOpen}
                                >
                                    <div className="flex items-center gap-3">
                                        <span
                                            className={cn(
                                                'size-2 rounded-full transition-colors',
                                                isOpen ? 'bg-primary' : 'bg-muted-foreground/40'
                                            )}
                                        />
                                        <span className="text-base font-semibold text-foreground">
                                            {categoryName}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2.5">
                                        <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-background border border-border/40 text-muted-foreground font-medium">
                                            {items.length} tools
                                        </span>
                                        <ChevronDown
                                            size={16}
                                            className={cn(
                                                'text-muted-foreground transition-transform duration-200',
                                                isOpen && 'rotate-180 text-primary'
                                            )}
                                        />
                                    </div>
                                </button>

                                {isOpen && (
                                    <div className="px-4 pb-4 pt-1 border-t border-border/20 animate-in fade-in-50 duration-200">
                                        <div className="grid grid-cols-2 gap-2.5 pt-3">
                                            {items.map((item) => (
                                                <div
                                                    key={item.name}
                                                    className="flex flex-col items-center justify-center gap-2 p-3.5 rounded-xl bg-background border border-border/30 text-center"
                                                >
                                                    <div className="size-10 rounded-lg bg-background-light border border-border/20 flex items-center justify-center p-2">
                                                        <Image
                                                            src={item.icon}
                                                            alt={item.name}
                                                            width={32}
                                                            height={32}
                                                            className="size-6 object-contain"
                                                        />
                                                    </div>
                                                    <span className="text-xs font-medium text-foreground/90 leading-tight">
                                                        {item.name}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* 2. Desktop & Tablet: Full Category Grid */}
                <div className="hidden sm:block space-y-20 mt-16">
                    {Object.entries(MY_STACK).map(([key, value]) => (
                        <div className="grid sm:grid-cols-12 relative" key={key}>
                            <div className="sm:col-span-4 relative">
                                <p className="slide-up text-3xl sm:text-4xl md:text-5xl font-anton leading-tight text-muted-foreground uppercase sm:sticky sm:top-28 mb-4 sm:mb-0 break-words">
                                    {key.replace(/_/g, ' ')}
                                </p>
                            </div>
                            <div className="sm:col-span-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {value.map((item) => (
                                    <div
                                        className="slide-up group flex flex-col justify-center items-center gap-3 p-5 rounded-2xl bg-background-light border border-border/40 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 hover:-translate-y-1 text-center"
                                        key={item.name}
                                    >
                                        <div className="p-3 bg-background rounded-xl border border-border/30 group-hover:shadow-sm transition-all duration-300 flex items-center justify-center size-14 md:size-16">
                                            <Image
                                                src={item.icon}
                                                alt={item.name}
                                                width={40}
                                                height={40}
                                                className="size-8 md:size-10 object-contain group-hover:scale-110 transition-transform duration-300"
                                            />
                                        </div>
                                        <span className="text-sm md:text-base font-medium text-foreground/80 group-hover:text-primary transition-colors duration-300">
                                            {item.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
