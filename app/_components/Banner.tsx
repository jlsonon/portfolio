'use client';
import Button from '@/components/Button';
import { GENERAL_INFO } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Banner = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.fromTo(
                '.hero-item',
                { y: 28, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.1,
                    duration: 0.7,
                    ease: 'power3.out',
                    delay: 0.15,
                    clearProps: 'all',
                }
            );

            gsap.to('.scroll-indicator', {
                y: 6,
                repeat: -1,
                yoyo: true,
                duration: 1.6,
                ease: 'power1.inOut',
            });
        },
        { scope: containerRef }
    );

    const mailtoSubject = 'Project Inquiry: Custom Software Development';
    const mailtoBody = "Hi Jericho,\n\nI'm reaching out about a software project:\n- What we are currently doing manually: \n- What we want the system to do: \n- Target Timeline: \n\nLooking forward to speaking with you!";

    return (
        <section
            className="relative overflow-hidden pt-8 pb-16 sm:py-20 lg:py-24"
            id="banner"
        >
            {/* Ambient radial wash background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/[0.07] blur-[120px] rounded-full pointer-events-none -z-10" />

            <div
                className="container min-h-[82vh] flex flex-col items-center justify-center text-center gap-5 sm:gap-6"
                ref={containerRef}
            >
                {/* Profile Avatar & Status Pill */}
                <div className="hero-item flex flex-col items-center gap-3">
                    <div className="relative group cursor-pointer">
                        <div className="size-28 sm:size-32 rounded-full overflow-hidden border-2 border-primary/50 p-1 bg-background-light shadow-xl shadow-primary/10 group-hover:border-primary group-hover:shadow-primary/20 transition-all duration-300">
                            <Image
                                src="/banner.jpg"
                                alt="Jericho Sonon"
                                width={128}
                                height={128}
                                className="w-full h-full object-cover object-top rounded-full group-hover:scale-105 transition-transform duration-300"
                                priority
                            />
                        </div>
                        <span className="absolute bottom-1.5 right-1.5 size-3.5 sm:size-4 rounded-full bg-emerald-400 border-2 border-background animate-pulse shadow-sm shadow-emerald-500/50" />
                    </div>

                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/25 backdrop-blur-sm">
                        <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-primary">
                            Software &amp; AI Systems Engineer
                        </span>
                    </div>
                </div>

                {/* Headline: Strict 2-line Wide Typography */}
                <div className="hero-item max-w-5xl mx-auto">
                    <h1 className="font-anton leading-[0.96] text-[clamp(2.5rem,5.8vw,5.5rem)] text-foreground tracking-tight">
                        <span className="block">Custom Business Systems</span>
                        <span className="text-primary block mt-1.5">That Replace Manual Work.</span>
                    </h1>
                </div>

                {/* Subtext */}
                <p className="hero-item max-w-2xl text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed px-4">
                    I&apos;m <span className="font-bold text-foreground">Jericho Sonon</span>. I design and deploy software end-to-end: custom POS platforms, AI workflows, and web applications that replace the paper logbooks and messy spreadsheets your business currently runs on.
                </p>

                {/* Opinionated Builder Quote Pill */}
                <div className="hero-item inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background-light/60 border border-border/50 text-xs sm:text-sm text-foreground/80 font-medium italic">
                    <span className="text-primary font-bold">“</span>
                    Working software for real users, not portfolio-only mockups.
                    <span className="text-primary font-bold">”</span>
                </div>

                {/* CTA Buttons */}
                <div className="hero-item flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-2">
                    <Button
                        as="link"
                        href={`mailto:${GENERAL_INFO.email}?subject=${encodeURIComponent(mailtoSubject)}&body=${encodeURIComponent(mailtoBody)}`}
                        variant="primary"
                        className="shadow-xl shadow-primary/20"
                    >
                        <span>Start a Project</span>
                        <ArrowUpRight size={16} />
                    </Button>

                    <Link
                        href="/#selected-projects"
                        className="h-12 px-7 rounded-full text-sm font-semibold border border-border/60 hover:border-primary/50 text-foreground hover:text-primary transition-all duration-200 bg-background-light/40 flex items-center gap-2 active:scale-[0.97]"
                    >
                        <span>View Live Systems</span>
                        <span className="text-primary">↓</span>
                    </Link>
                </div>

                {/* Authority Proof Bar */}
                <div className="hero-item w-full max-w-3xl grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-0 mt-6 sm:mt-8 pt-6 border-t border-border/30 bg-background-light/20 sm:bg-transparent rounded-2xl sm:rounded-none p-4 sm:p-0">
                    <div className="text-center sm:border-r sm:border-border/30 px-2">
                        <p className="text-3xl sm:text-4xl font-anton text-primary">5</p>
                        <p className="text-[11px] text-muted-foreground mt-0.5 uppercase tracking-wider font-semibold">Flagship Systems</p>
                    </div>
                    <div className="text-center sm:border-r sm:border-border/30 px-2">
                        <p className="text-3xl sm:text-4xl font-anton text-primary">10+</p>
                        <p className="text-[11px] text-muted-foreground mt-0.5 uppercase tracking-wider font-semibold">Commercial Deployments</p>
                    </div>
                    <div className="text-center sm:border-r sm:border-border/30 px-2">
                        <p className="text-3xl sm:text-4xl font-anton text-primary">500+</p>
                        <p className="text-[11px] text-muted-foreground mt-0.5 uppercase tracking-wider font-semibold">Active Examinees</p>
                    </div>
                    <div className="text-center px-2">
                        <p className="text-3xl sm:text-4xl font-anton text-primary">100%</p>
                        <p className="text-[11px] text-muted-foreground mt-0.5 uppercase tracking-wider font-semibold">Solo Ownership</p>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <a
                    href="#trusted-by"
                    className="hero-item scroll-indicator text-muted-foreground hover:text-primary transition-colors flex flex-col items-center gap-1.5 mt-4"
                    aria-label="Scroll down to content"
                >
                    <span className="text-[10px] uppercase tracking-widest font-bold">Scroll Down</span>
                    <ArrowDown size={14} className="text-primary" />
                </a>
            </div>
        </section>
    );
};

export default Banner;
