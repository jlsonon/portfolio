'use client';
import SectionTitle from '@/components/SectionTitle';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { MapPin, Sparkles } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutMe = () => {
    const container = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.from('.about-card', {
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top 70%',
                    end: 'bottom 60%',
                    scrub: 0.6,
                },
                y: 50,
                opacity: 0,
                stagger: 0.15,
            });
        },
        { scope: container },
    );

    return (
        <section className="pb-section pt-10" id="about-me">
            <div className="container" ref={container}>
                <SectionTitle title="About Me" />

                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mt-6">
                    {/* Statement card - Full Width */}
                    <div className="about-card md:col-span-12 border border-border/40 rounded-2xl p-8 bg-background-light/40 backdrop-blur-sm">
                        <p className="text-2xl sm:text-3xl md:text-4xl font-light leading-snug text-foreground/90 max-w-4xl">
                            I engineer{' '}
                            <span className="text-primary font-semibold">
                                working products for real users
                            </span>
                            , turning complex ideas into resilient, production-ready systems.
                        </p>
                    </div>

                    {/* Portrait Photo Card */}
                    <div className="about-card md:col-span-4 border border-border/40 rounded-2xl overflow-hidden bg-background-light/40 flex flex-col relative group min-h-[380px]">
                        <div className="relative w-full h-[280px] sm:h-[300px] overflow-hidden">
                            <Image
                                src="/DSC_3489.jpg"
                                alt="Jericho Sonon Portrait"
                                fill
                                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                        </div>
                        
                        <div className="p-6 pt-2 flex flex-col justify-between grow">
                            <div>
                                <div className="flex items-center justify-between gap-2">
                                    <h3 className="font-anton text-2xl text-foreground">Jericho Sonon</h3>
                                    <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-semibold">
                                        <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                        Available
                                    </span>
                                </div>
                                <p className="text-xs text-primary font-medium mt-0.5">
                                    Full-Stack Developer & AI Engineer
                                </p>
                            </div>

                            <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-4 pt-3 border-t border-border/30">
                                <MapPin size={13} className="text-primary" />
                                <span>Quezon City, Philippines</span>
                            </div>
                        </div>
                    </div>

                    {/* Bio card */}
                    <div className="about-card md:col-span-4 border border-border/40 rounded-2xl p-8 bg-background-light/40 flex flex-col justify-between gap-5">
                        <div>
                            <p className="text-xs uppercase tracking-widest text-primary/80 font-semibold mb-4 flex items-center gap-2">
                                <Sparkles size={14} />
                                Who I Am
                            </p>
                            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
                                I&apos;m a builder who works across the full product lifecycle: product architecture, UI/UX, full-stack development, database schema, AI workflows, and high-availability deployment.
                            </p>
                            <p className="text-sm text-muted-foreground leading-relaxed mt-4">
                                I partner with startups, business owners, and educators to ship software that saves hours, earns revenue, and delivers immediate ROI.
                            </p>
                        </div>

                        <div className="pt-4 border-t border-border/30">
                            <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold mb-2">Core Focus</p>
                            <p className="text-xs text-foreground/70">
                                Production SaaS • AI Automation • POS Systems
                            </p>
                        </div>
                    </div>

                    {/* Stats + tags card */}
                    <div className="about-card md:col-span-4 border border-border/40 rounded-2xl p-8 bg-background-light/40 flex flex-col justify-between gap-6">
                        <div>
                            <p className="text-xs uppercase tracking-widest text-primary/80 font-semibold mb-4">Quick Facts</p>
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    { label: 'Years Building', value: '4+' },
                                    { label: 'Shipped Products', value: '5' },
                                    { label: 'Active Users', value: '500+' },
                                    { label: 'Clients & Hubs', value: '3+' },
                                ].map((fact) => (
                                    <div key={fact.label} className="border border-border/30 rounded-xl p-3.5 bg-background/50">
                                        <p className="text-2xl font-anton text-primary">{fact.value}</p>
                                        <p className="text-[11px] text-muted-foreground mt-0.5">{fact.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="pt-4 border-t border-border/30">
                            <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold mb-3">Specializations</p>
                            <div className="flex flex-wrap gap-1.5">
                                {['AI Engineering', 'Full-Stack Dev', 'Business Solutions', 'Solo Builder', 'Product Design'].map((tag) => (
                                    <span key={tag} className="text-[11px] border border-primary/30 text-primary/90 bg-primary/5 rounded-full px-2.5 py-0.5">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
