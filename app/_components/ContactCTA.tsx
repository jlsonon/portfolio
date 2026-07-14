'use client';
import { GENERAL_INFO } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ContactCTA = () => {
    const containerRef = useRef<HTMLDivElement>(null);

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

    return (
        <section className="py-section" id="contact-cta">
            <div className="container" ref={containerRef}>
                <div className="border border-border/40 rounded-2xl p-10 sm:p-16 bg-background-light/40 backdrop-blur-sm text-center">
                    {/* Tagline */}
                    <p className="cta-item text-sm uppercase tracking-widest text-primary/70 font-semibold mb-6">
                        Let&apos;s Work Together
                    </p>

                    {/* Headline */}
                    <h2 className="cta-item text-3xl sm:text-5xl md:text-6xl font-anton leading-tight">
                        Have a product idea?
                        <br />
                        <span className="text-primary">
                            Let&apos;s make it real.
                        </span>
                    </h2>

                    {/* Description */}
                    <p className="cta-item text-muted-foreground mt-6 max-w-lg mx-auto leading-relaxed">
                        Send the project context, timeline, and the problem you
                        want solved. I&apos;ll get back to you within 24 hours.
                    </p>

                    {/* Email CTA */}
                    <a
                        href={`mailto:${GENERAL_INFO.email}?subject=${encodeURIComponent(GENERAL_INFO.emailSubject)}&body=${encodeURIComponent(GENERAL_INFO.emailBody)}`}
                        className="cta-item inline-flex items-center gap-3 mt-10 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-base hover:opacity-90 transition-opacity duration-200 group"
                    >
                        {GENERAL_INFO.email}
                        <ArrowUpRight
                            size={18}
                            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ContactCTA;
