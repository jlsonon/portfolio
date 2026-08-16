'use client';
import SectionTitle from '@/components/SectionTitle';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { Search, PenTool, Code2, Rocket, RefreshCw } from 'lucide-react';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const STEPS = [
    {
        number: '01',
        title: 'Map Physical Workflow',
        description: 'Study how your business operates today: paper slips, logbooks, cash handling, and where staff lose time.',
        icon: Search,
    },
    {
        number: '02',
        title: 'Design Schema & UI',
        description: 'Design normalized database schemas, staff role permissions, and fast, touch-friendly screen wireframes.',
        icon: PenTool,
    },
    {
        number: '03',
        title: 'Full-Stack Build',
        description: 'Engineer responsive frontend interfaces, real-time cloud data sync, automated receipt engines, and secure APIs.',
        icon: Code2,
    },
    {
        number: '04',
        title: 'Deploy & Verify',
        description: 'Launch on cloud infrastructure, verify real transactions and receipts, and ensure seamless staff onboarding.',
        icon: Rocket,
    },
    {
        number: '05',
        title: 'Iterate & Automate',
        description: 'Monitor daily operations telemetry, refine based on staff feedback, and automate remaining manual steps.',
        icon: RefreshCw,
    },
];

const MyProcess = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.fromTo(
                '.process-step',
                {
                    y: 35,
                    opacity: 0,
                },
                {
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                    },
                    y: 0,
                    opacity: 1,
                    stagger: 0.1,
                    duration: 0.6,
                    ease: 'power3.out',
                    clearProps: 'all',
                }
            );
        },
        { scope: containerRef }
    );

    return (
        <section className="py-section" id="my-process">
            <div className="container" ref={containerRef}>
                <SectionTitle title="How I Build Systems" />

                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
                    {STEPS.map((step, idx) => {
                        const Icon = step.icon;
                        return (
                            <div
                                key={step.number}
                                className="process-step group relative flex flex-col justify-between p-6 sm:p-7 rounded-3xl border border-border/40 bg-background-light/40 backdrop-blur-md hover:border-primary/50 hover:bg-background-light/80 transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-lg hover:shadow-primary/5"
                            >
                                <div>
                                    {/* Number & Icon Header */}
                                    <div className="flex items-center justify-between gap-3 mb-6">
                                        <span className="size-10 rounded-2xl border border-primary/40 bg-background flex items-center justify-center text-primary text-sm font-anton group-hover:bg-primary group-hover:text-black transition-all duration-200 shadow-sm">
                                            {step.number}
                                        </span>

                                        <div className="p-2.5 bg-background rounded-xl border border-border/40 text-muted-foreground group-hover:text-primary group-hover:border-primary/40 transition-colors">
                                            <Icon size={18} />
                                        </div>
                                    </div>

                                    {/* Step Title & Description */}
                                    <h3 className="text-xl font-anton text-foreground group-hover:text-primary transition-colors duration-200">
                                        {step.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mt-2.5">
                                        {step.description}
                                    </p>
                                </div>

                                <div className="mt-6 pt-4 border-t border-border/20 text-[10px] uppercase font-bold tracking-widest text-primary/80">
                                    Step {idx + 1} of 5
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
