'use client';
import SectionTitle from '@/components/SectionTitle';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { MapPin, Compass, ShieldCheck, Zap, ArrowRight, XCircle, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import React, { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const QUICK_FACTS = [
    { label: 'Years Building', value: '4+', sub: 'Production software' },
    { label: 'Flagship Systems', value: '5', sub: 'Live web & POS apps' },
    { label: 'Active Examinees', value: '500+', sub: 'Civil Service review' },
    { label: 'Commercial Deployments', value: '10+', sub: 'Businesses, Gyms & Hubs' },
];

const SPECIALIZATIONS = [
    'AI Engineering & Intelligent Workflows',
    'Custom POS & Cashier Terminals',
    'Multi-Branch Operations Hubs',
    'Next.js & React SaaS Architecture',
    'PostgreSQL & Cloud Firestore',
    'FastAPI & Node.js Backend Services',
    'OCR & Automated Document Pipelines',
    'Solo End-to-End Ownership',
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
                <SectionTitle title="About & How I Work" />

                {/* Gapless Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mt-6">
                    {/* 1. Core Builder Statement Card - 12 cols */}
                    <div className="about-card md:col-span-12 border border-border/40 rounded-3xl p-7 sm:p-10 bg-background-light/40 backdrop-blur-md relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/[0.04] blur-[100px] rounded-full pointer-events-none" />
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary mb-3">
                            <Compass size={15} />
                            <span>How I Build &amp; What I Value</span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-anton leading-tight text-foreground/95 max-w-4xl tracking-tight">
                            I turn businesses that run on{' '}
                            <span className="text-primary underline decoration-primary/30 underline-offset-8">
                                paper logbooks and messy spreadsheets
                            </span>{' '}
                            into fast, reliable custom software their staff and customers actually enjoy using.
                        </h3>
                    </div>

                    {/* 2. Before -> After Transformation Bento Card - 12 cols */}
                    <div className="about-card md:col-span-12 border border-border/40 rounded-3xl p-6 sm:p-8 bg-background-light/30 backdrop-blur-md">
                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
                            The Transformation I Deliver
                        </p>
                        <div className="grid grid-cols-1 lg:grid-cols-11 gap-4 items-center">
                            {/* Before Box */}
                            <div className="lg:col-span-5 p-5 rounded-2xl bg-red-950/10 border border-red-500/20">
                                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-400 mb-3">
                                    <XCircle size={15} />
                                    <span>Before: Manual Friction</span>
                                </div>
                                <ul className="space-y-2 text-xs sm:text-sm text-foreground/80">
                                    <li className="flex items-center gap-2">
                                        <span className="size-1 rounded-full bg-red-400" />
                                        Paper logbooks &amp; lost receipt claim tickets
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="size-1 rounded-full bg-red-400" />
                                        Disconnected spreadsheets &amp; manual calculations
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="size-1 rounded-full bg-red-400" />
                                        Untracked membership renewals &amp; cash leaks
                                    </li>
                                </ul>
                            </div>

                            {/* Center Arrow */}
                            <div className="lg:col-span-1 flex justify-center py-2 lg:py-0">
                                <div className="size-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary rotate-90 lg:rotate-0">
                                    <ArrowRight size={18} />
                                </div>
                            </div>

                            {/* After Box */}
                            <div className="lg:col-span-5 p-5 rounded-2xl bg-emerald-950/10 border border-emerald-500/20">
                                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3">
                                    <CheckCircle2 size={15} />
                                    <span>After: Centralized Digital Hub</span>
                                </div>
                                <ul className="space-y-2 text-xs sm:text-sm text-foreground/90 font-medium">
                                    <li className="flex items-center gap-2">
                                        <span className="size-1 rounded-full bg-emerald-400" />
                                        One unified touch POS &amp; instant QR check-in
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="size-1 rounded-full bg-emerald-400" />
                                        Real-time cloud database &amp; multi-branch sync
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="size-1 rounded-full bg-emerald-400" />
                                        Automated receipts, renewal alerts &amp; audit trails
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* 3. Portrait Photo Card - 4 cols */}
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
                                    Software &amp; AI Systems Engineer
                                </p>
                            </div>

                            <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-4 pt-3 border-t border-border/30">
                                <MapPin size={13} className="text-primary shrink-0" />
                                <span>Quezon City, Metro Manila, Philippines</span>
                            </div>
                        </div>
                    </div>

                    {/* 4. Bio & Background Card - 4 cols */}
                    <div className="about-card md:col-span-4 border border-border/40 rounded-3xl p-7 bg-background-light/40 backdrop-blur-md flex flex-col justify-between gap-6">
                        <div>
                            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary mb-3">
                                <Compass size={14} />
                                <span>Who I Am</span>
                            </div>
                            <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">
                                I am an independent product engineer who designs and deploys software end-to-end: interface UX, data schema, cloud infrastructure, AI agents, and checkout terminals.
                            </p>
                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mt-3">
                                I specialize in replacing fragile paper logbooks and disconnected tools with bespoke, ultra-fast web platforms and intelligent automated workflows built around actual staff and customer operations.
                            </p>
                        </div>

                        <div className="pt-4 border-t border-border/30">
                            <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-2">
                                Operating Standard
                            </p>
                            <div className="flex items-center gap-2 text-xs text-foreground/80 font-medium">
                                <ShieldCheck size={14} className="text-primary shrink-0" />
                                <span>Direct Communication &amp; 100% Code Ownership</span>
                            </div>
                        </div>
                    </div>

                    {/* 5. Quick Facts & Specializations - 4 cols */}
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
                                Core Capabilities
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
