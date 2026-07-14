'use client';
import SectionTitle from '@/components/SectionTitle';
import { PROJECTS, MY_STACK } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
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
        <section className="pb-section" id="about-me">
            <div className="container" ref={container}>
                <SectionTitle title="About Me" />

                <div className="grid md:grid-cols-2 gap-5">
                    {/* Statement card */}
                    <div className="about-card md:col-span-2 border border-border/40 rounded-2xl p-8 bg-background-light/40 backdrop-blur-sm">
                        <p className="text-3xl md:text-4xl font-light leading-snug text-foreground/90">
                            I care about{' '}
                            <span className="text-primary font-semibold">
                                working products for real users
                            </span>
                            , not portfolio-only landing pages.
                        </p>
                    </div>

                    {/* Bio card */}
                    <div className="about-card border border-border/40 rounded-2xl p-8 bg-background-light/40 flex flex-col gap-5">
                        <p className="text-sm uppercase tracking-widest text-primary/70 font-semibold">Who I am</p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Hi, I&apos;m <span className="text-foreground font-medium">Jericho Sonon</span> — a Filipino full-stack developer and product designer. I work across the full product path: planning, interface design, frontend, backend, database, auth, deployment, and iteration.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Based in Quezon City, Philippines. I build for learners, businesses, and local communities.
                        </p>
                    </div>

                    {/* Stats + values card */}
                    <div className="about-card border border-border/40 rounded-2xl p-8 bg-background-light/40 flex flex-col gap-6">
                        <p className="text-sm uppercase tracking-widest text-primary/70 font-semibold">Quick Facts</p>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { label: 'Years building', value: '4+' },
                                { label: 'Products shipped', value: String(PROJECTS.length) },
                                { label: 'Technologies', value: `${Object.values(MY_STACK).flat().length}+` },
                                { label: 'Domain', value: 'Web & SaaS' },
                            ].map((fact) => (
                                <div key={fact.label} className="border border-border/30 rounded-xl p-4">
                                    <p className="text-2xl font-anton text-primary">{fact.value}</p>
                                    <p className="text-xs text-muted-foreground mt-1">{fact.label}</p>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-2 pt-2">
                            {['Product Design', 'Full-Stack Dev', 'Solo Builder', 'Filipino'].map((tag) => (
                                <span key={tag} className="text-xs border border-primary/30 text-primary/80 rounded-full px-3 py-1">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
