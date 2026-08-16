'use client';
import SectionTitle from '@/components/SectionTitle';
import { MY_EXPERIENCE } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { Calendar } from 'lucide-react';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Experiences = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.fromTo(
                '.experience-item',
                {
                    x: -25,
                    opacity: 0,
                },
                {
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                    },
                    x: 0,
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
        <section className="py-section" id="my-experience">
            <div className="container" ref={containerRef}>
                <SectionTitle title="Experience & Track Record" />

                <div className="flex flex-col gap-8 mt-12 max-w-4xl">
                    {MY_EXPERIENCE.map((item, idx) => (
                        <div
                            key={item.title + item.company}
                            className="experience-item group flex gap-5 md:gap-7 items-start relative"
                        >
                            {/* Numbered circular node + vertical timeline line */}
                            <div className="shrink-0 flex flex-col items-center gap-2">
                                <span className="size-10 rounded-2xl border border-primary/40 bg-background-light flex items-center justify-center text-primary text-sm font-anton group-hover:bg-primary group-hover:text-black group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300 shadow-sm">
                                    {String(idx + 1).padStart(2, '0')}
                                </span>
                                {idx < MY_EXPERIENCE.length - 1 && (
                                    <span className="w-0.5 grow bg-gradient-to-b from-primary/30 via-border/50 to-transparent min-h-12" />
                                )}
                            </div>

                            {/* Card Content */}
                            <div className="flex-1 p-6 sm:p-7 rounded-3xl border border-border/40 bg-background-light/40 backdrop-blur-md group-hover:border-primary/40 group-hover:bg-background-light/80 transition-all duration-300">
                                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                                    <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                                        {item.company}
                                    </span>
                                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                                        <Calendar size={13} className="text-primary/70" />
                                        <span>{item.duration}</span>
                                    </div>
                                </div>

                                <h3 className="text-2xl sm:text-3xl font-anton leading-tight text-foreground group-hover:text-primary transition-colors duration-200">
                                    {item.title}
                                </h3>

                                {item.description && (
                                    <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experiences;
