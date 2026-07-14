'use client';
import ArrowAnimation from '@/components/ArrowAnimation';
import Button from '@/components/Button';
import { GENERAL_INFO, PROJECTS, MY_STACK } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ArrowDown } from 'lucide-react';
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
                className="container h-[100svh] min-h-[580px] flex flex-col items-center justify-center text-center gap-6"
                ref={containerRef}
            >
                {/* Role tag */}
                <div className="hero-item flex items-center gap-2">
                    <span className="size-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-xs font-semibold uppercase tracking-widest text-primary/80">
                        Available for full-time & freelance
                    </span>
                </div>

                {/* Headline */}
                <h1 className="hero-item font-anton leading-[.9] text-[clamp(3.5rem,10vw,8rem)] bg-gradient-to-br from-foreground via-foreground/90 to-primary bg-clip-text text-transparent">
                    Full-Stack
                    <br />
                    <span className="text-primary">Developer</span>
                </h1>

                {/* Subtext */}
                <p className="hero-item max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
                    I&apos;m{' '}
                    <span className="font-semibold text-foreground">
                        Jericho Sonon
                    </span>
                    , a Filipino builder crafting useful web systems for
                    learners, businesses, and local communities.
                </p>

                {/* CTA */}
                <div className="hero-item flex items-center gap-4 mt-2">
                    <Button
                        as="link"
                        href={`mailto:${GENERAL_INFO.email}`}
                        variant="primary"
                    >
                        Let&apos;s Talk
                    </Button>
                    <Link
                        href="/#selected-projects"
                        className="text-sm text-muted-foreground hover:text-foreground underline underline-offset-4 transition-colors"
                    >
                        View Projects →
                    </Link>
                </div>

                {/* Stats */}
                <div className="hero-item absolute bottom-10 left-0 right-0 container flex justify-center gap-12 sm:gap-20">
                    <div className="text-center">
                        <p className="text-3xl sm:text-4xl font-anton text-primary">{PROJECTS.length}</p>
                        <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">Active Products</p>
                    </div>
                    <div className="w-px bg-border/40" />
                    <div className="text-center">
                        <p className="text-3xl sm:text-4xl font-anton text-primary">4+</p>
                        <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">Years Building</p>
                    </div>
                    <div className="w-px bg-border/40" />
                    <div className="text-center">
                        <p className="text-3xl sm:text-4xl font-anton text-primary">
                            {Object.values(MY_STACK).flat().length}+
                        </p>
                        <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">Technologies</p>
                    </div>
                </div>

                {/* Arrow Animation & Scroll Indicator */}
                <div className="hero-item absolute bottom-20 left-1/2 -translate-x-1/2 hidden md:block opacity-20 pointer-events-none scale-75">
                    <ArrowAnimation />
                </div>
                
                <a
                    href="#about-me"
                    className="hero-item scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors flex flex-col items-center gap-2"
                >
                    <span className="text-xs uppercase tracking-widest font-semibold">Scroll</span>
                    <ArrowDown size={16} />
                </a>
            </div>
        </section>
    );
};

export default Banner;
