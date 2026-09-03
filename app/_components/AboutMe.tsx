'use client';
import SectionTitle from '@/components/SectionTitle';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { MapPin, Compass, ShieldCheck, Quote, Award } from 'lucide-react';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import SystemsArchitectureCard from '@/components/SystemsArchitectureCard';
import { TESTIMONIALS } from '@/lib/data';
import { cn } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutMe = () => {
    const container = useRef<HTMLDivElement>(null);
    const [activeTestimonial, setActiveTestimonial] = useState(0);

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

                    {/* 2. Interactive Systems Architecture Card - 12 cols */}
                    <div className="about-card md:col-span-12">
                        <SystemsArchitectureCard />
                    </div>

                    {/* 3. Portrait Photo Card - 4 cols */}
                    <div className="about-card md:col-span-4 border border-border/40 rounded-3xl overflow-hidden bg-background-light/40 flex flex-col relative group min-h-[400px]">
                        <div className="relative w-full h-[280px] sm:h-[300px] overflow-hidden bg-background">
                            <Image
                                src="/DSC_3489.jpg"
                                alt="Jericho Sonon Portrait"
                                fill
                                className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                        </div>

                        <div className="p-6 pt-3 flex flex-col justify-between grow">
                            <div>
                                <div className="flex items-center justify-between gap-2">
                                    <h3 className="font-anton text-2xl text-foreground">
                                        Jericho Sonon
                                    </h3>
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-bold">
                                        <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                        Available
                                    </span>
                                </div>
                                <p className="text-xs text-primary font-semibold mt-1">
                                    Software &amp; Solutions Engineer
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

                    {/* 5. Verified Client Proof & Endorsement - 4 cols */}
                    <div className="about-card md:col-span-4 border border-border/40 rounded-3xl p-7 bg-background-light/40 backdrop-blur-md flex flex-col justify-between gap-5 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/[0.04] blur-2xl rounded-full pointer-events-none" />
                        <div>
                            <div className="flex items-center justify-between gap-2 mb-3">
                                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
                                    <Quote size={14} />
                                    <span>Client Endorsement</span>
                                </div>
                                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-[11px] font-bold text-primary">
                                    <Award size={12} />
                                    <span>Verified</span>
                                </span>
                            </div>

                            {/* Staff Member Toggle (Claire Castro & Miguel Tarnate) */}
                            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-background/80 border border-border/40 my-3">
                                {TESTIMONIALS.map((item, idx) => (
                                    <button
                                        key={item.author}
                                        type="button"
                                        onClick={() => setActiveTestimonial(idx)}
                                        className={cn(
                                            'flex-1 py-1.5 px-2 rounded-lg text-xs font-bold transition-all text-center cursor-pointer',
                                            activeTestimonial === idx
                                                ? 'bg-primary text-black shadow-sm'
                                                : 'text-muted-foreground hover:text-foreground'
                                        )}
                                    >
                                        {item.author}
                                    </button>
                                ))}
                            </div>

                            <p className="text-xs sm:text-sm text-foreground/90 italic leading-relaxed border-l-2 border-primary/40 pl-3.5 my-3 min-h-[72px]">
                                &ldquo;{TESTIMONIALS[activeTestimonial].quote}&rdquo;
                            </p>

                            <div className="mt-4 pt-3 border-t border-border/25">
                                <div className="flex items-center justify-between gap-2">
                                    <div>
                                        <p className="text-xs font-bold text-foreground">
                                            {TESTIMONIALS[activeTestimonial].author}
                                        </p>
                                        <p className="text-[11px] text-muted-foreground">
                                            {TESTIMONIALS[activeTestimonial].role}, {TESTIMONIALS[activeTestimonial].company}
                                        </p>
                                    </div>
                                    <span className="text-[11px] font-semibold text-primary/90 px-2 py-0.5 rounded-md bg-primary/10 border border-primary/20 shrink-0">
                                        {TESTIMONIALS[activeTestimonial].highlight}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="pt-3 border-t border-border/30">
                            <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-2">
                                Production Standards
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                                {['Zero Downtime Architecture', 'Rapid 2-4 Week Delivery', 'Direct Founder Ownership'].map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-[11px] font-semibold border border-primary/20 text-primary/90 bg-primary/5 rounded-full px-2.5 py-0.5"
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
