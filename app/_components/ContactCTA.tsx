'use client';
import { GENERAL_INFO } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ArrowUpRight, Check, Copy, ShieldCheck } from 'lucide-react';
import { useRef, useState } from 'react';
import { cn } from '@/lib/utils';

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
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(GENERAL_INFO.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

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
            {/* Ambient gold glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-primary/[0.06] blur-[140px] rounded-full pointer-events-none -z-10" />

            <div className="container" ref={containerRef}>
                <div className="border border-border/40 rounded-3xl p-8 sm:p-14 md:p-16 bg-background-light/40 backdrop-blur-md text-center max-w-4xl mx-auto relative shadow-2xl">
                    {/* Tagline */}
                    <div className="cta-item inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
                        <span className="size-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-[11px] sm:text-xs uppercase tracking-widest text-primary font-bold">
                            Open for New Projects &amp; Contracts
                        </span>
                    </div>

                    {/* Headline */}
                    <h2 className="cta-item text-3xl sm:text-5xl md:text-6xl font-anton leading-tight text-foreground tracking-tight">
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
                                        'px-4 py-2 rounded-full text-xs font-bold tracking-wide border transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none active:scale-95',
                                        selectedType === type.id
                                            ? 'bg-primary text-black border-primary shadow-lg shadow-primary/20'
                                            : 'bg-background/60 border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/40'
                                    )}
                                >
                                    {type.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="cta-item flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-6">
                        <a
                            href={`mailto:${GENERAL_INFO.email}?subject=${encodeURIComponent(mailtoSubject)}&body=${encodeURIComponent(mailtoBody)}`}
                            className="inline-flex items-center gap-2.5 px-8 py-4 bg-primary text-black rounded-full font-bold text-sm sm:text-base hover:bg-primary-hover shadow-xl shadow-primary/20 transition-all duration-200 group cursor-pointer focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none active:scale-[0.97]"
                        >
                            <span>Start a Project</span>
                            <ArrowUpRight
                                size={18}
                                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                            />
                        </a>

                        <button
                            onClick={handleCopyEmail}
                            className="inline-flex items-center gap-2 px-6 py-4 border border-border/60 hover:border-primary/50 text-foreground hover:text-primary rounded-full font-semibold text-sm sm:text-base transition-all bg-background-light/40 cursor-pointer focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none active:scale-[0.97]"
                            aria-label="Copy email address"
                        >
                            {copied ? (
                                <>
                                    <Check size={16} className="text-emerald-400" />
                                    <span className="text-emerald-400">Copied to Clipboard!</span>
                                </>
                            ) : (
                                <>
                                    <Copy size={16} />
                                    <span>Copy Email</span>
                                </>
                            )}
                        </button>

                        <a
                            href="https://www.linkedin.com/in/jlsonon/"
                            target="_blank"
                            rel="noreferrer noopener"
                            className="inline-flex items-center gap-2 px-6 py-4 border border-border/60 hover:border-primary/50 text-foreground hover:text-primary rounded-full font-semibold text-sm sm:text-base transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none active:scale-[0.97]"
                        >
                            <span>LinkedIn</span>
                            <ArrowUpRight size={16} />
                        </a>
                    </div>

                    {/* Trust Signals / Guarantees */}
                    <div className="cta-item flex flex-wrap items-center justify-center gap-6 sm:gap-8 mt-12 pt-8 border-t border-border/30 text-xs text-muted-foreground">
                        <div className="flex items-center gap-2 font-medium">
                            <ShieldCheck size={14} className="text-primary shrink-0" />
                            <span>24-Hour Response Time</span>
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
