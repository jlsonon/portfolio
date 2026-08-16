'use client';
import { GENERAL_INFO } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ArrowUpRight, Check, Copy } from 'lucide-react';
import { useRef, useState } from 'react';
import { cn } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const PROJECT_TYPES = [
    { id: 'pos', label: 'Point of Sale & Business Hub' },
    { id: 'saas', label: 'Full-Stack SaaS MVP' },
    { id: 'ai', label: 'AI Agent & Automation' },
    { id: 'internal', label: 'Custom Operations Portal' },
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
                    start: 'top 75%',
                    end: 'top 50%',
                    scrub: 0.5,
                },
                y: 40,
                opacity: 0,
                stagger: 0.2,
            });
        },
        { scope: containerRef },
    );

    const activeTypeObj = PROJECT_TYPES.find(t => t.id === selectedType) || PROJECT_TYPES[0];
    const mailtoSubject = `Project Inquiry: ${activeTypeObj.label}`;
    const mailtoBody = `Hi Jericho,\n\nI'm reaching out regarding a project:\n- Project Domain: ${activeTypeObj.label}\n- Timeline: 2 – 6 Weeks\n- Overview / Key Requirements: \n\nLooking forward to discussing!`;

    return (
        <section className="py-section" id="contact-cta">
            <div className="container" ref={containerRef}>
                <div className="border border-border/40 rounded-2xl p-8 sm:p-14 bg-background-light/40 backdrop-blur-sm text-center max-w-4xl mx-auto">
                    {/* Tagline */}
                    <div className="cta-item flex items-center justify-center gap-2 mb-6">
                        <span className="size-2 rounded-full bg-primary animate-pulse" />
                        <p className="text-xs sm:text-sm uppercase tracking-widest text-primary/80 font-semibold">
                            Accepting New Commercial Projects & Consultations
                        </p>
                    </div>

                    {/* Headline */}
                    <h2 className="cta-item text-3xl sm:text-5xl md:text-6xl font-anton leading-tight">
                        Have a system to build or
                        <br />
                        <span className="text-primary">
                            an operation to automate?
                        </span>
                    </h2>

                    {/* Description */}
                    <p className="cta-item text-muted-foreground mt-4 max-w-lg mx-auto leading-relaxed text-sm sm:text-base">
                        Select your project category below to generate an executive brief, or send a direct message. I&apos;ll respond with a clear technical roadmap within 24 hours.
                    </p>

                    {/* Interactive Project Type Selector */}
                    <div className="cta-item mt-8 mb-8">
                        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                            Select What You&apos;re Building:
                        </p>
                        <div className="flex flex-wrap justify-center gap-2">
                            {PROJECT_TYPES.map((type) => (
                                <button
                                    key={type.id}
                                    onClick={() => setSelectedType(type.id)}
                                    className={cn(
                                        'px-4 py-2 rounded-xl text-xs font-semibold border transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none',
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
                            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-black rounded-full font-semibold text-base hover:opacity-95 hover:shadow-xl hover:shadow-primary/25 transition-all duration-200 group cursor-pointer focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                        >
                            <span>Send Project Brief</span>
                            <ArrowUpRight
                                size={18}
                                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                            />
                        </a>

                        <button
                            onClick={handleCopyEmail}
                            className="inline-flex items-center gap-2 px-6 py-4 border border-border/60 hover:border-primary/50 text-foreground hover:text-primary rounded-full font-semibold text-base transition-all bg-background-light/40 cursor-pointer focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
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
                            className="inline-flex items-center gap-2 px-6 py-4 border border-border/60 hover:border-primary/50 text-foreground hover:text-primary rounded-full font-semibold text-base transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                        >
                            <span>LinkedIn</span>
                            <ArrowUpRight size={16} />
                        </a>
                    </div>

                    {/* Trust Signals / Guarantee */}
                    <div className="cta-item flex flex-wrap items-center justify-center gap-6 sm:gap-8 mt-12 pt-8 border-t border-border/30 text-xs text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <span className="text-primary font-bold">✓</span>
                            <span>24-Hour Response Time</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-primary font-bold">✓</span>
                            <span>Milestone & Production Delivery</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-primary font-bold">✓</span>
                            <span>Full Architecture & Source Ownership</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactCTA;
