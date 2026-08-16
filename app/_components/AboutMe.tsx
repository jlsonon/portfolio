'use client';
import SectionTitle from '@/components/SectionTitle';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { MapPin, Sparkles, Terminal, ShieldCheck, Zap } from 'lucide-react';
import Image from 'next/image';
import React, { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const QUICK_FACTS = [
    { label: 'Years Building', value: '4+', sub: 'Production software' },
    { label: 'Shipped Systems', value: '5', sub: 'Live web & POS apps' },
    { label: 'Active Examinees', value: '500+', sub: 'Civil Service review' },
    { label: 'Commercial Deployments', value: '3+', sub: 'Gyms & Laundromat hubs' },
];

const SPECIALIZATIONS = [
    'AI Engineering & Agent Workflows',
    'Commercial POS Systems',
    'Full-Stack SaaS & MVP Dev',
    'Next.js & React App Architecture',
    'Firebase & Cloud Firestore',
    'PostgreSQL Database Design',
    'High-Availability Cloud Deployments',
    'UI/UX Design & Rapid Prototyping',
];

const AboutMe = () => {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.from('.about-card', {
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                },
                y: 35,
                opacity: 0,
                stagger: 0.12,
                duration: 0.7,
                ease: 'power3.out',
                clearProps: 'all',
            });
        },
        { scope: container }
    );

    return (
        <section className="pb-section pt-10" id="about-me">
            <div className="container" ref={container}>
                <SectionTitle title="About & Engineering Philosophy" />

                {/* Gapless Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mt-6">
                    {/* 1. Statement Card - Full Width 12 cols */}
                    <div className="about-card md:col-span-12 border border-border/40 rounded-3xl p-7 sm:p-10 bg-background-light/40 backdrop-blur-md relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/[0.04] blur-[100px] rounded-full pointer-events-none" />
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary mb-3">
                            <Terminal size={15} />
                            <span>Core Engineering Thesis</span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-anton leading-tight text-foreground/95 max-w-4xl tracking-tight">
                            I architect{' '}
                            <span className="text-primary underline decoration-primary/30 underline-offset-8">
                                resilient, production-ready software
                            </span>{' '}
                            that eliminates operational bottlenecks and drives verifiable business ROI.
                        </h3>
                    </div>

                    {/* 2. Portrait Photo Card - 4 cols */}
                    <div className="about-card md:col-span-4 border border-border/40 rounded-3xl overflow-hidden bg-background-light/40 flex flex-col relative group min-h-[400px]">
                        <div className="relative w-full h-[280px] sm:h-[300px] overflow-hidden bg-background">
                            <Image
                                src="/DSC_3489.jpg"
                                alt="Jericho Sonon Portrait"
                                fill
                                className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                        </div>

                        <div className="p-6 pt-3 flex flex-col justify-between grow">
                            <div>
                                <div className="flex items-center justify-between gap-2">
                                    <h3 className="font-anton text-2xl text-foreground">
                                        Jericho Sonon
                                    </h3>
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold">
                                        <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                        Available
                                    </span>
                                </div>
                                <p className="text-xs text-primary font-semibold mt-1">
                                    Full-Stack Systems & Product Engineer
                                </p>
                            </div>

                            <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-4 pt-3 border-t border-border/30">
                                <MapPin size={13} className="text-primary shrink-0" />
                                <span>Quezon City, Metro Manila, Philippines</span>
                            </div>
                        </div>
                    </div>

                    {/* 3. Bio & Background Card - 4 cols */}
                    <div className="about-card md:col-span-4 border border-border/40 rounded-3xl p-7 bg-background-light/40 backdrop-blur-md flex flex-col justify-between gap-6">
                        <div>
                            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary mb-3">
                                <Sparkles size={14} />
                                <span>Who I Am</span>
                            </div>
                            <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">
                                I am an independent product engineer who designs and deploys software end-to-end: interface UX, data schema, cloud infrastructure, AI agents, and checkout terminals.
                            </p>
                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mt-3">
                                I specialize in replacing fragile paper logbooks and bloated off-the-shelf tools with bespoke, ultra-fast web platforms built around actual staff and customer workflows.
                            </p>
                        </div>

                        <div className="pt-4 border-t border-border/30">
                            <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-2">
                                Operating Standard
                            </p>
                            <div className="flex items-center gap-2 text-xs text-foreground/80 font-medium">
                                <ShieldCheck size={14} className="text-primary shrink-0" />
                                <span>100% Code Ownership & Production Guarantees</span>
                            </div>
                        </div>
                    </div>

                    {/* 4. Quick Facts & Specializations - 4 cols */}
                    <div className="about-card md:col-span-4 border border-border/40 rounded-3xl p-7 bg-background-light/40 backdrop-blur-md flex flex-col justify-between gap-6">
                        <div>
                            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary mb-3">
                                <Zap size={14} />
                                <span>Track Record</span>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                {QUICK_FACTS.map((fact) => (
                                    <div
                                        key={fact.label}
                                        className="border border-border/40 rounded-2xl p-3.5 bg-background/60 hover:border-primary/40 transition-colors"
                                    >
                                        <p className="text-2xl sm:text-3xl font-anton text-primary leading-none">
                                            {fact.value}
                                        </p>
                                        <p className="text-[11px] font-semibold text-foreground/90 mt-1">
                                            {fact.label}
                                        </p>
                                        <p className="text-[10px] text-muted-foreground">
                                            {fact.sub}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="pt-4 border-t border-border/30">
                            <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-2.5">
                                Engineering Toolkit
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                                {SPECIALIZATIONS.slice(0, 5).map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-[10px] font-semibold border border-primary/20 text-primary/90 bg-primary/5 rounded-full px-2.5 py-0.5"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
