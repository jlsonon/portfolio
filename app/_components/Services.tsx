'use client';
import SectionTitle from '@/components/SectionTitle';
import { SpotlightCard } from '@/components/ui/spotlight-card';
import { FamilyButton } from '@/components/ui/family-button';
import { GENERAL_INFO, SERVICES } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { CheckCircle2, Clock, ArrowUpRight, Layers, Cpu, Boxes } from 'lucide-react';
import Link from 'next/link';
import React, { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ICONS = [Layers, Cpu, Boxes];

const Services = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.fromTo(
                '.service-card',
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
                    duration: 0.6,
                    stagger: 0.12,
                    ease: 'power3.out',
                    clearProps: 'all',
                }
            );
        },
        { scope: containerRef }
    );

    return (
        <section className="py-section" id="services" ref={containerRef}>
            <div className="container">
                <div className="flex flex-row items-center justify-between gap-3 sm:gap-4 pb-6 border-b border-border/30 mb-10 flex-wrap sm:flex-nowrap">
                    <SectionTitle title="Systems I Deliver & Core Capabilities" className="mb-0 sm:mb-0" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary px-3 sm:px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 shrink-0">
                        Bespoke Production Software
                    </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {SERVICES.map((service, idx) => {
                        const ServiceIcon = ICONS[idx % ICONS.length];
                        const mailtoSubject = `Inquiry: ${service.title}`;
                        const mailtoBody = `Hi Jericho,\n\nI'm interested in working together on:\n- Service: ${service.title} (${service.tagline})\n- Target Timeline: ${service.timeline}\n- Key Features Needed:\n\nLet's connect!`;

                        return (
                            <SpotlightCard
                                key={service.number}
                                className="service-card flex flex-col justify-between p-7 sm:p-8 rounded-3xl hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
                            >
                                {/* Header */}
                                <div>
                                    <div className="flex items-center justify-between gap-4 mb-6">
                                        <div className="flex items-center gap-3">
                                            <div className="size-12 rounded-2xl bg-background border border-border/40 flex items-center justify-center text-primary group-hover:scale-105 group-hover:border-primary/50 transition-all duration-300 shadow-sm">
                                                <ServiceIcon size={22} />
                                            </div>
                                            <span className="font-anton text-muted-foreground/50 text-xl">
                                                {service.number}
                                            </span>
                                        </div>
                                        <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-primary/10 border border-primary/25 text-primary">
                                            {service.badge}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl sm:text-3xl font-anton leading-tight text-foreground group-hover:text-primary transition-colors duration-200">
                                        {service.title}
                                    </h3>
                                    <p className="text-xs text-primary font-semibold tracking-wider mt-1.5 uppercase">
                                        {service.tagline}
                                    </p>

                                    <p className="text-sm text-muted-foreground leading-relaxed mt-4">
                                        {service.description}
                                    </p>

                                    {/* Deliverables List */}
                                    <div className="mt-6 pt-6 border-t border-border/30 space-y-2.5">
                                        <p className="text-[11px] uppercase tracking-widest text-muted-foreground font-bold mb-3">
                                            Production Deliverables
                                        </p>
                                        {service.deliverables.map((item) => (
                                            <div key={item} className="flex items-center gap-2.5 text-xs text-foreground/85">
                                                <CheckCircle2 size={14} className="text-primary shrink-0" />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Target Business Niches */}
                                    {service.niches && (
                                        <div className="mt-6 pt-4 border-t border-border/25">
                                            <p className="text-[11px] uppercase tracking-widest text-muted-foreground font-bold mb-2.5">
                                                Target Business Niches
                                            </p>
                                            <div className="flex flex-wrap gap-1.5">
                                                {service.niches.map((niche) => (
                                                    <span
                                                        key={niche}
                                                        className="text-[11px] font-semibold border border-primary/20 text-primary/90 bg-primary/5 rounded-full px-2.5 py-0.5"
                                                    >
                                                        {niche}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Live Case Study Reference */}
                                    {service.exampleProject && (
                                        <div className="mt-4 pt-3 border-t border-border/20 flex items-center justify-between text-xs">
                                            <span className="text-muted-foreground text-[11px] font-medium">Live System:</span>
                                            <Link
                                                href={`/projects/${service.exampleProject.slug}`}
                                                className="inline-flex items-center gap-1 font-bold text-primary hover:underline text-xs"
                                            >
                                                <span>{service.exampleProject.name}</span>
                                                <ArrowUpRight size={12} />
                                            </Link>
                                        </div>
                                    )}
                                </div>

                                {/* Footer Timeline & Action */}
                                <div className="mt-8 pt-6 border-t border-border/30 flex items-center justify-between gap-4">
                                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                        <Clock size={14} className="text-primary/80" />
                                        <span className="font-medium">Est. {service.timeline}</span>
                                    </div>
                                    <FamilyButton
                                        href={`mailto:${GENERAL_INFO.email}?subject=${encodeURIComponent(mailtoSubject)}&body=${encodeURIComponent(mailtoBody)}`}
                                        variant="secondary"
                                        icon={<ArrowUpRight size={14} />}
                                        className="px-4 py-2 text-xs"
                                    >
                                        Inquire
                                    </FamilyButton>
                                </div>
                            </SpotlightCard>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
