'use client';
import Button from '@/components/Button';
import { GENERAL_INFO } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ArrowDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Banner = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            // Stagger in on load
            gsap.fromTo('.hero-item', 
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.12,
                    duration: 0.8,
                    ease: 'power3.out',
                    delay: 0.2,
                    clearProps: 'all'
                }
            );

            // Scroll indicator bounce
            gsap.to('.scroll-indicator', {
                y: 10,
                repeat: -1,
                yoyo: true,
                duration: 1.5,
                ease: 'power1.inOut',
            });
        },
        { scope: containerRef },
    );

    return (
        <section className="relative overflow-hidden" id="banner">
            <div
                className="container min-h-[100svh] flex flex-col items-center justify-center text-center gap-4 sm:gap-5 py-12 sm:py-20"
                ref={containerRef}
            >
                {/* Profile Avatar & Status */}
                <div className="hero-item flex flex-col items-center gap-2.5">
                    <div className="relative group">
                        <div className="size-20 sm:size-24 rounded-full overflow-hidden border-2 border-primary/40 p-1 bg-background-light shadow-xl shadow-primary/10 group-hover:border-primary transition-all duration-300">
                            <Image
                                src="/DSC_3489.jpg"
                                alt="Jericho Sonon"
                                width={96}
                                height={96}
                                className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
                                priority
                            />
                        </div>
                        <span className="absolute bottom-1 right-1 size-3.5 sm:size-4 rounded-full bg-emerald-500 border-2 border-background animate-pulse" />
                    </div>

                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                        <span className="size-1.5 rounded-full bg-primary animate-pulse" />
                        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-primary">
                            Available for Q3/Q4 Projects
                        </span>
                    </div>
                </div>

                {/* Headline */}
                <h1 className="hero-item font-anton leading-[.95] text-[clamp(2.2rem,5.2vw,5rem)] bg-gradient-to-br from-foreground via-foreground/90 to-primary bg-clip-text text-transparent">
                    <span className="block md:whitespace-nowrap">Full-Stack Systems</span>
                    <span className="text-primary block mt-1 md:whitespace-nowrap">&amp; Product Engineer</span>
                </h1>

                {/* Subtext */}
                <p className="hero-item max-w-xl text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed px-2">
                    I&apos;m{' '}
                    <span className="font-semibold text-foreground">
                        Jericho Sonon
                    </span>
                    . I engineer custom software, POS platforms, and autonomous AI workflows that run real operations for commercial businesses and solo builders.
                </p>

                {/* CTA Buttons */}
                <div className="hero-item flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-2">
                    <Button
                        as="link"
                        href={`mailto:${GENERAL_INFO.email}?subject=${encodeURIComponent("Project Inquiry: Custom Software Development")}&body=${encodeURIComponent("Hi Jericho,\n\nI'm reaching out about a software project:\n- Type of System (POS / Internal Tool / SaaS MVP / AI Automation): \n- Timeline: \n- Key Requirements: \n\nLooking forward to hearing from you!")}`}
                        variant="primary"
                    >
                        Discuss a Project
                    </Button>
                    <Link
                        href="/#selected-projects"
                        className="px-5 py-3 rounded-full text-sm font-semibold border border-border hover:border-primary/50 text-foreground/90 hover:text-primary transition-all duration-200 bg-background-light/30"
                    >
                        Explore Case Studies →
                    </Link>
                </div>

                {/* Proof Stats */}
                <div className="hero-item flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-12 mt-4 sm:mt-6 pt-4 border-t border-border/20">
                    <div className="text-center">
                        <p className="text-2xl sm:text-3xl md:text-4xl font-anton text-primary">5</p>
                        <p className="text-[10px] sm:text-xs text-muted-foreground mt-0.5 uppercase tracking-wider">Shipped Systems</p>
                    </div>
                    <div className="w-px bg-border/40 hidden sm:block" />
                    <div className="text-center">
                        <p className="text-2xl sm:text-3xl md:text-4xl font-anton text-primary">3</p>
                        <p className="text-[10px] sm:text-xs text-muted-foreground mt-0.5 uppercase tracking-wider">Gym Deployments</p>
                    </div>
                    <div className="w-px bg-border/40 hidden sm:block" />
                    <div className="text-center">
                        <p className="text-2xl sm:text-3xl md:text-4xl font-anton text-primary">500+</p>
                        <p className="text-[10px] sm:text-xs text-muted-foreground mt-0.5 uppercase tracking-wider">Review Students</p>
                    </div>
                    <div className="w-px bg-border/40 hidden sm:block" />
                    <div className="text-center">
                        <p className="text-2xl sm:text-3xl md:text-4xl font-anton text-primary">4+</p>
                        <p className="text-[10px] sm:text-xs text-muted-foreground mt-0.5 uppercase tracking-wider">Years Building</p>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <a
                    href="#about-me"
                    className="hero-item scroll-indicator text-muted-foreground hover:text-primary transition-colors flex flex-col items-center gap-1 mt-2"
                >
                    <span className="text-[10px] uppercase tracking-widest font-semibold">Scroll</span>
                    <ArrowDown size={14} />
                </a>
            </div>
        </section>
    );
};

export default Banner;
