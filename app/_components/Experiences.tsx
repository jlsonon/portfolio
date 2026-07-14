'use client';
import SectionTitle from '@/components/SectionTitle';
import { MY_EXPERIENCE } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Experiences = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.from('.experience-item', {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 65%',
                    end: 'bottom 50%',
                    scrub: 0.8,
                },
                x: -40,
                opacity: 0,
                stagger: 0.25,
            });
        },
        { scope: containerRef },
    );

    return (
        <section className="py-section" id="my-experience">
            <div className="container" ref={containerRef}>
                <SectionTitle title="Experience" />

                <div className="flex flex-col gap-6 mt-10">
                    {MY_EXPERIENCE.map((item, idx) => (
                        <div
                            key={item.title + item.company}
                            className="experience-item group flex gap-5 md:gap-8 items-start"
                        >
                            {/* Number badge */}
                            <div className="shrink-0 flex flex-col items-center gap-2">
                                <span className="size-9 rounded-full border border-primary/40 flex items-center justify-center text-primary text-sm font-bold font-anton group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                                    {String(idx + 1).padStart(2, '0')}
                                </span>
                                {idx < MY_EXPERIENCE.length - 1 && (
                                    <span className="w-px grow bg-border/50 min-h-6" />
                                )}
                            </div>

                            {/* Card */}
                            <div className="flex-1 pb-8 border-b border-border/30 last:border-0 last:pb-0">
                                <div className="flex flex-wrap items-center gap-3 mb-2">
                                    <span className="text-xs font-semibold uppercase tracking-widest text-primary/80 bg-primary/10 px-2.5 py-1 rounded-full">
                                        {item.company}
                                    </span>
                                    <span className="text-xs text-muted-foreground border border-border rounded-full px-2.5 py-1">
                                        {item.duration}
                                    </span>
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-anton leading-tight text-foreground group-hover:text-primary transition-colors duration-300">
                                    {item.title}
                                </h3>
                                {item.description && (
                                    <p className="mt-3 text-muted-foreground text-sm leading-relaxed max-w-2xl">
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
