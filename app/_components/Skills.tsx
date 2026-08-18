'use client';
import SectionTitle from '@/components/SectionTitle';
import { MY_STACK } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ChevronDown, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { cn } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const CATEGORY_NAMES: Record<string, string> = {
    frontend: 'Frontend & UI Architecture',
    backend: 'Backend Services & APIs',
    database: 'Data & Real-Time Storage',
    infrastructure: 'Cloud, Containers & Deployment',
};

const Skills = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({
        frontend: true,
        backend: true,
    });

    const toggleCategory = (categoryKey: string) => {
        setOpenCategories((prev) => ({
            ...prev,
            [categoryKey]: !prev[categoryKey],
        }));
    };

    useGSAP(
        () => {
            gsap.fromTo(
                '.skill-block',
                { y: 30, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none none',
                    },
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.15,
                    ease: 'power3.out',
                    clearProps: 'all',
                }
            );
        },
        { scope: containerRef }
    );

    return (
        <section id="my-stack" ref={containerRef} className="pb-section pt-10">
            <div className="container">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-border/30 mb-8">
                    <SectionTitle title="Technical Stack & Architecture" />
                    <div className="flex items-center gap-2 text-xs font-semibold text-primary px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 self-start sm:self-auto">
                        <ShieldCheck size={14} />
                        <span>Chosen for Reliability, Not Trends</span>
                    </div>
                </div>

                {/* Grounded Philosophy Subhead */}
                <p className="text-sm sm:text-base text-muted-foreground max-w-3xl mb-10 leading-relaxed">
                    I pick battle-tested tools with proven production stability, strong type safety, and active ecosystems. Every technology in this stack has been deployed in real client applications.
                </p>

                {/* 1. Mobile-Only: Collapsible Accordion List */}
                <div className="sm:hidden space-y-3">
                    {Object.entries(MY_STACK).map(([key, items]) => {
                        const isOpen = !!openCategories[key];
                        const categoryName = CATEGORY_NAMES[key] || key.replace(/_/g, ' ');

                        return (
                            <div
                                key={key}
                                className={cn(
                                    'rounded-2xl border transition-all duration-200 overflow-hidden',
                                    isOpen
                                        ? 'border-primary/40 bg-background-light/80 shadow-md'
                                        : 'border-border/40 bg-background-light/40 hover:border-border/70'
                                )}
                            >
                                <button
                                    id={`skills-category-${key}`}
                                    onClick={() => toggleCategory(key)}
                                    className="w-full p-4 flex items-center justify-between text-left cursor-pointer focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none active:scale-[0.99]"
                                    aria-expanded={isOpen}
                                    aria-controls={`skills-panel-${key}`}
                                >
                                    <div className="flex items-center gap-3">
                                        <span
                                            className={cn(
                                                'size-2 rounded-full transition-colors',
                                                isOpen ? 'bg-primary' : 'bg-muted-foreground/40'
                                            )}
                                        />
                                        <span className="text-sm font-bold text-foreground">
                                            {categoryName}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2.5">
                                        <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-background border border-border/40 text-muted-foreground font-semibold">
                                            {items.length} tools
                                        </span>
                                        <ChevronDown
                                            size={15}
                                            className={cn(
                                                'text-muted-foreground transition-transform duration-200',
                                                isOpen && 'rotate-180 text-primary'
                                            )}
                                        />
                                    </div>
                                </button>

                                {isOpen && (
                                    <div
                                        id={`skills-panel-${key}`}
                                        role="region"
                                        aria-labelledby={`skills-category-${key}`}
                                        className="px-4 pb-4 pt-1 border-t border-border/20 animate-in fade-in-50 duration-200"
                                    >
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
                                                    <span className="text-xs font-semibold text-foreground/90 leading-tight">
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

                {/* 2. Desktop & Tablet: Sticky Category Layout */}
                <div className="hidden sm:block space-y-16">
                    {Object.entries(MY_STACK).map(([key, value]) => {
                        const displayName = CATEGORY_NAMES[key] || key.replace(/_/g, ' ');
                        return (
                            <div className="skill-block grid sm:grid-cols-12 relative gap-6 pt-4" key={key}>
                                <div className="sm:col-span-4 relative">
                                    <div className="sm:sticky sm:top-28">
                                        <p className="text-2xl lg:text-3xl font-anton leading-tight text-foreground tracking-tight break-words">
                                            {displayName}
                                        </p>
                                        <p className="text-xs text-muted-foreground mt-1">
                                            {value.length} core technologies
                                        </p>
                                    </div>
                                </div>
                                <div className="sm:col-span-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
                                    {value.map((item) => (
                                        <div
                                            className="group flex flex-col justify-center items-center gap-2.5 p-4 rounded-2xl bg-background-light/50 border border-border/40 hover:border-primary/50 hover:bg-background-light/90 transition-all duration-200 hover:-translate-y-1 text-center cursor-default active:scale-95 shadow-sm"
                                            key={item.name}
                                        >
                                            <div className="p-2.5 bg-background rounded-xl border border-border/30 group-hover:border-primary/40 group-hover:shadow-sm transition-all duration-200 flex items-center justify-center size-12 md:size-14">
                                                <Image
                                                    src={item.icon}
                                                    alt={item.name}
                                                    width={36}
                                                    height={36}
                                                    className="size-7 md:size-8 object-contain group-hover:scale-105 transition-transform duration-200"
                                                />
                                            </div>
                                            <span className="text-xs md:text-sm font-semibold text-foreground/85 group-hover:text-primary transition-colors">
                                                {item.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;
