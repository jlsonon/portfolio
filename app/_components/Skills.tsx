'use client';
import SectionTitle from '@/components/SectionTitle';
import { MY_STACK } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Skills = () => {
    const containerRef = useRef<HTMLDivElement>(null);

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

            tl.from('.slide-up', {
                opacity: 0,
                y: 40,
                ease: 'none',
                stagger: 0.4,
            });
        },
        { scope: containerRef },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.to(containerRef.current, {
                y: -150,
                opacity: 0,
            });
        },
        { scope: containerRef },
    );

    return (
        <section id="my-stack" ref={containerRef} className="pb-section pt-10">
            <div className="container">
                <SectionTitle title="My Stack" />

                <div className="space-y-20 mt-16">
                    {Object.entries(MY_STACK).map(([key, value]) => (
                        <div className="grid sm:grid-cols-12 relative" key={key}>
                            <div className="sm:col-span-4 relative">
                                <p className="slide-up text-5xl font-anton leading-none text-muted-foreground uppercase sm:sticky sm:top-28 mb-8 sm:mb-0">
                                    {key}
                                </p>
                            </div>
                            <div className="sm:col-span-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {value.map((item) => (
                                    <div
                                        className="slide-up group flex flex-col justify-center items-center gap-3 p-5 rounded-2xl bg-background-light border border-border/40 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 hover:-translate-y-1 text-center"
                                        key={item.name}
                                    >
                                        <div className="p-3 bg-background rounded-xl border border-border/30 group-hover:shadow-sm transition-all duration-300">
                                            <img
                                                src={item.icon}
                                                alt={item.name}
                                                width="40"
                                                height="40"
                                                className="size-8 md:size-10 object-contain group-hover:scale-110 transition-transform duration-300"
                                                loading="eager"
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
