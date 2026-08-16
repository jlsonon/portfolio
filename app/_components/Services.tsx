'use client';
import SectionTitle from '@/components/SectionTitle';
import { SERVICES } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { CheckCircle2, Clock, ArrowRight, Sparkles, Layers, Cpu } from 'lucide-react';
import React, { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ICONS = [Layers, Cpu, Sparkles];

const Services = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.fromTo(
                '.service-card',
                {
                    y: 40,
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
                    stagger: 0.15,
                    ease: 'power2.out',
                    clearProps: 'all',
                }
            );
        },
        { scope: containerRef },
    );

    return (
        <section className="py-section" id="services" ref={containerRef}>
            <div className="container">
                <SectionTitle title="What I Build" />

                <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {SERVICES.map((service, idx) => {
                        const ServiceIcon = ICONS[idx % ICONS.length];
                        return (
                            <div
                                key={service.number}
                                className="service-card group relative flex flex-col justify-between p-8 rounded-2xl border border-border/40 bg-background-light/40 backdrop-blur-sm hover:border-primary/50 hover:bg-primary/[0.03] transition-all duration-300 hover:-translate-y-1.5"
                            >
                                {/* Header */}
                                <div>
                                    <div className="flex items-center justify-between gap-4 mb-6">
                                        <div className="flex items-center gap-3">
                                            <div className="size-11 rounded-xl bg-background border border-border/40 flex items-center justify-center text-primary group-hover:scale-110 group-hover:border-primary/40 transition-all duration-300">
                                                <ServiceIcon size={22} />
                                            </div>
                                            <span className="font-anton text-muted-foreground/60 text-lg">
                                                {service.number}
                                            </span>
                                        </div>
                                        <span className="text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary">
                                            {service.badge}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-anton leading-tight text-foreground group-hover:text-primary transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-xs text-primary/80 font-medium tracking-wide mt-1.5 uppercase">
                                        {service.tagline}
                                    </p>

                                    <p className="text-sm text-muted-foreground leading-relaxed mt-4">
                                        {service.description}
                                    </p>

                                    {/* Deliverables List */}
                                    <div className="mt-6 pt-6 border-t border-border/30 space-y-2.5">
                                        <p className="text-xs uppercase tracking-widest text-foreground/60 font-semibold mb-3">
                                            Key Deliverables
                                        </p>
                                        {service.deliverables.map((item) => (
                                            <div key={item} className="flex items-center gap-2.5 text-xs text-foreground/80">
                                                <CheckCircle2 size={14} className="text-primary shrink-0" />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Footer Timeline & Action */}
                                <div className="mt-8 pt-6 border-t border-border/30 flex items-center justify-between gap-4">
                                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                        <Clock size={14} className="text-primary/70" />
                                        <span>Est. {service.timeline}</span>
                                    </div>
                                    <a
                                        href="#contact-cta"
                                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground group-hover:text-primary transition-colors"
                                    >
                                        <span>Inquire</span>
                                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
