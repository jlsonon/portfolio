'use client';
import { GENERAL_INFO } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ArrowUpRight, ShieldCheck, Calendar } from 'lucide-react';
import { useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import TimezoneClock from '@/components/TimezoneClock';
import { FamilyButton } from '@/components/ui/family-button';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const PROJECT_TYPES = [
    { id: 'pos', label: 'Custom Business System / POS' },
    { id: 'saas', label: 'Full-Stack SaaS Platform / MVP' },
    { id: 'internal', label: 'Operations Dashboard / Portal' },
    { id: 'automation', label: 'Workflow Automation & AI' },
];

const ContactCTA = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [selectedType, setSelectedType] = useState<string>('pos');

    useGSAP(
        () => {
            gsap.from('.cta-item', {
                scrollTrigger: {
                    trigger: containerRef.current,
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
        { scope: containerRef }
    );

    const activeTypeObj = PROJECT_TYPES.find((t) => t.id === selectedType) || PROJECT_TYPES[0];
    const mailtoSubject = `Project Inquiry: ${activeTypeObj.label}`;
    const mailtoBody = `Hi Jericho,\n\nI'm reaching out about building a software system:\n- Project Type: ${activeTypeObj.label}\n- What we are currently doing manually: \n- What we want the system to do: \n- Target Timeline: \n\nLooking forward to hearing your thoughts!`;

    return (
        <section className="py-section relative overflow-hidden" id="contact-cta">

            <div className="container" ref={containerRef}>
                <div className="border border-border/50 rounded-2xl p-8 sm:p-14 md:p-16 bg-background-light/40 text-center max-w-4xl mx-auto relative shadow-xl">
                    {/* Live Timezone & Availability Badge */}
                    <div className="cta-item flex justify-center mb-6">
                        <TimezoneClock />
                    </div>

                    {/* Headline */}
                    <h2 className="cta-item text-3xl sm:text-5xl md:text-6xl font-anton leading-tight text-foreground tracking-[-0.03em]">
                        Have a manual business process
                        <br />
                        <span className="text-primary">
                            worth turning into software?
                        </span>
                    </h2>

                    {/* Description */}
                    <p className="cta-item text-muted-foreground mt-4 max-w-xl mx-auto leading-relaxed text-sm sm:text-base">
                        Tell me what your business is currently doing manually, what isn&apos;t working, and your target timeline. I will review and respond with an honest assessment and actionable roadmap within 24 hours.
                    </p>

                    {/* Interactive Project Type Selector */}
                    <div className="cta-item mt-8 mb-8">
                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
                            Select Your Project Focus:
                        </p>
                        <div className="flex flex-wrap justify-center gap-2">
                            {PROJECT_TYPES.map((type) => (
                                <button
                                    key={type.id}
                                    onClick={() => setSelectedType(type.id)}
                                    className={cn(
                                        'px-4 py-2 rounded-full text-xs font-bold tracking-wide border transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none select-none active:scale-95',
                                        selectedType === type.id
                                            ? 'bg-primary text-black border-primary shadow-lg shadow-primary/25'
                                            : 'bg-background/60 border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/40 backdrop-blur-sm'
                                    )}
                                >
                                    {type.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="cta-item flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-6">
                        {GENERAL_INFO.calendarUrl && (
                            <FamilyButton
                                href={GENERAL_INFO.calendarUrl}
                                variant="primary"
                                icon={<Calendar size={18} className="text-black" />}
                                className="h-12 px-7 text-sm font-bold shadow-xl shadow-primary/20"
                            >
                                Book 15-Min Call
                            </FamilyButton>
                        )}

                        <FamilyButton
                            href={`mailto:${GENERAL_INFO.email}?subject=${encodeURIComponent(mailtoSubject)}&body=${encodeURIComponent(mailtoBody)}`}
                            variant="secondary"
                            icon={<ArrowUpRight size={18} />}
                            className="h-12 px-7 text-sm font-bold"
                        >
                            Start a Project
                        </FamilyButton>
                    </div>

                    {/* Trust Signals / Guarantees */}
                    <div className="cta-item flex flex-wrap items-center justify-center gap-6 sm:gap-8 mt-12 pt-8 border-t border-border/30 text-xs text-muted-foreground">
                        <div className="flex items-center gap-2 font-medium">
                            <ShieldCheck size={14} className="text-primary shrink-0" />
                            <span>24-Hour Response Guarantee</span>
                        </div>
                        <div className="flex items-center gap-2 font-medium">
                            <ShieldCheck size={14} className="text-primary shrink-0" />
                            <span>Milestone-Driven Delivery</span>
                        </div>
                        <div className="flex items-center gap-2 font-medium">
                            <ShieldCheck size={14} className="text-primary shrink-0" />
                            <span>100% Architecture &amp; Code Ownership</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactCTA;
