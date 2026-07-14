'use client';
import SectionTitle from '@/components/SectionTitle';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { Search, PenTool, Code2, Rocket, TrendingUp } from 'lucide-react';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const STEPS = [
    {
        number: '01',
        title: 'Discover',
        description: 'Research the problem, talk to users, define scope.',
        icon: Search,
    },
    {
        number: '02',
        title: 'Design',
        description: 'Wireframe key flows, choose the right stack.',
        icon: PenTool,
    },
    {
        number: '03',
        title: 'Build',
        description: 'Ship fast with clean architecture, iterate weekly.',
        icon: Code2,
    },
    {
        number: '04',
        title: 'Launch',
        description: 'Deploy, monitor, fix real-user issues day one.',
        icon: Rocket,
    },
    {
        number: '05',
        title: 'Grow',
        description: 'Analyze usage, improve based on data.',
        icon: TrendingUp,
    },
];

const MyProcess = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.fromTo(
                '.process-step',
                {
                    y: 50,
                    autoAlpha: 0,
                },
                {
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 70%',
                        end: 'bottom 60%',
                        scrub: 0.6,
                    },
                    y: 0,
                    autoAlpha: 1,
                    stagger: 0.15,
                }
            );
        },
        { scope: containerRef },
    );

    return (
        <section className="py-section" id="my-process">
            <div className="container" ref={containerRef}>
                <SectionTitle title="My Process" />

                {/* Desktop: horizontal grid | Mobile: vertical stack */}
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
                    {STEPS.map((step, idx) => {
                        const Icon = step.icon;
                        return (
                            <div
                                key={step.number}
                                className="process-step group relative flex flex-col gap-5 p-6 rounded-2xl border border-border/40 bg-background-light/40 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
                            >
                                {/* Number + connector line */}
                                <div className="flex items-center gap-3">
                                    <span className="size-10 rounded-full border border-primary/40 flex items-center justify-center text-primary text-sm font-bold font-anton group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                                        {step.number}
                                    </span>

                                    {/* Connector line — hidden on last item and on mobile */}
                                    {idx < STEPS.length - 1 && (
                                        <span className="hidden lg:block flex-1 h-px bg-border/40 group-hover:bg-primary/30 transition-colors duration-300" />
                                    )}
                                </div>

                                {/* Icon */}
                                <div className="p-3 bg-background rounded-xl border border-border/30 w-fit group-hover:border-primary/30 transition-all duration-300">
                                    <Icon
                                        size={22}
                                        className="text-muted-foreground group-hover:text-primary transition-colors duration-300"
                                    />
                                </div>

                                {/* Text */}
                                <div>
                                    <h3 className="text-xl font-anton text-foreground group-hover:text-primary transition-colors duration-300">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default MyProcess;
