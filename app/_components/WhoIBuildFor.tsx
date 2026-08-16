'use client';
import SectionTitle from '@/components/SectionTitle';
import { WHO_I_BUILD_FOR } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { Dumbbell, Shirt, GraduationCap, Building2, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import React, { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ICONS_MAP: Record<string, React.ReactNode> = {
    Dumbbell: <Dumbbell className="size-5 text-primary" />,
    Shirt: <Shirt className="size-5 text-primary" />,
    GraduationCap: <GraduationCap className="size-5 text-primary" />,
    Building2: <Building2 className="size-5 text-primary" />,
};

const WhoIBuildFor = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.fromTo(
                '.niche-card',
                { y: 30, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                    },
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: 'power3.out',
                    clearProps: 'all',
                }
            );
        },
        { scope: containerRef }
    );

    return (
        <section id="who-i-build-for" ref={containerRef} className="py-section">
            <div className="container">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-border/30 mb-10">
                    <SectionTitle title="Who I Build For" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20 self-start sm:self-auto">
                        Tailored Business Solutions
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {WHO_I_BUILD_FOR.map((niche) => (
                        <div
                            key={niche.title}
                            className="niche-card group flex flex-col justify-between p-6 sm:p-7 rounded-3xl border border-border/40 bg-background-light/40 backdrop-blur-md hover:border-primary/50 hover:bg-background-light/80 transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-lg hover:shadow-primary/5"
                        >
                            <div>
                                <div className="flex items-center justify-between gap-3 mb-5">
                                    <div className="size-11 rounded-2xl bg-background border border-border/40 flex items-center justify-center group-hover:scale-105 group-hover:border-primary/50 transition-all duration-300 shadow-sm">
                                        {ICONS_MAP[niche.icon]}
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary">
                                        Custom System
                                    </span>
                                </div>

                                <h3 className="text-xl font-anton leading-tight text-foreground group-hover:text-primary transition-colors duration-200">
                                    {niche.title}
                                </h3>
                                <p className="text-xs text-primary font-semibold tracking-wider mt-1 uppercase">
                                    {niche.tagline}
                                </p>

                                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mt-3">
                                    {niche.description}
                                </p>
                            </div>

                            <div className="mt-6 pt-4 border-t border-border/30 flex items-center justify-between gap-2 text-xs">
                                <div className="flex items-center gap-1.5 text-foreground/80 font-medium truncate">
                                    <CheckCircle2 size={13} className="text-primary shrink-0" />
                                    <span className="truncate">{niche.example}</span>
                                </div>
                                <Link
                                    href="/#selected-projects"
                                    className="text-primary hover:text-primary-hover p-1"
                                    aria-label={`View projects for ${niche.title}`}
                                >
                                    <ArrowUpRight size={15} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhoIBuildFor;
