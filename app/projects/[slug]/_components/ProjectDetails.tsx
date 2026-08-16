'use client';
import parse from 'html-react-parser';
import TransitionLink from '@/components/TransitionLink';
import { IProject } from '@/types';
import { PROJECTS } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ArrowLeft, ArrowUpRight, CheckCircle2, ChevronLeft, ChevronRight, ShieldAlert, TrendingUp, Terminal } from 'lucide-react';
import { useRef, useState } from 'react';
import Image from 'next/image';

interface Props {
    project: IProject;
}

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ProjectDetails = ({ project }: Props) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [iframeBlocked, setIframeBlocked] = useState(false);
    const forceImagePreview = project.slug === 'prime-reviewer-ph';

    const currentIndex = PROJECTS.findIndex((p) => p.slug === project.slug);
    const prevProject = currentIndex > 0 ? PROJECTS[currentIndex - 1] : null;
    const nextProject = currentIndex < PROJECTS.length - 1 ? PROJECTS[currentIndex + 1] : null;

    useGSAP(
        () => {
            if (!containerRef.current) return;

            gsap.set('.fade-in-later', {
                autoAlpha: 0,
                y: 25,
            });
            const tl = gsap.timeline({
                delay: 0.3,
            });

            tl.to('.fade-in-later', {
                autoAlpha: 1,
                y: 0,
                stagger: 0.08,
                duration: 0.6,
                ease: 'power3.out',
                clearProps: 'all',
            });
        },
        { scope: containerRef }
    );

    return (
        <section className="pt-6 pb-24 relative overflow-hidden">
            {/* Ambient radial wash */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-primary/[0.05] blur-[120px] rounded-full pointer-events-none -z-10" />

            <div className="container" ref={containerRef}>
                {/* Back to Home Breadcrumb */}
                <TransitionLink
                    back
                    href="/"
                    className="mb-8 inline-flex items-center gap-2 group h-10 text-muted-foreground hover:text-foreground transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-lg px-1 active:scale-95"
                >
                    <ArrowLeft
                        size={16}
                        className="group-hover:-translate-x-1 transition-transform duration-200 text-primary"
                    />
                    <span className="text-xs font-semibold uppercase tracking-wider">Back to All Systems</span>
                </TransitionLink>

                <div className="max-w-4xl mx-auto">
                    {/* Header Block */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-8 border-b border-border/40">
                        <div>
                            <div className="fade-in-later flex items-center gap-3 mb-3">
                                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                                    Case Study — {project.year}
                                </span>
                                {project.status === 'ongoing' && (
                                    <span className="bg-primary/10 text-primary px-2.5 py-0.5 rounded-full text-[10px] border border-primary/25 flex items-center gap-1.5 font-bold">
                                        <span className="size-1.5 rounded-full bg-primary animate-pulse" /> Active Development
                                    </span>
                                )}
                            </div>
                            <h1 className="fade-in-later text-4xl sm:text-5xl md:text-6xl font-anton leading-tight text-foreground tracking-tight">
                                {project.title}
                            </h1>
                        </div>

                        <div className="fade-in-later flex flex-wrap gap-3 shrink-0">
                            {project.liveUrl && project.liveUrl !== '#' && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="h-11 px-6 bg-primary text-black rounded-full flex items-center justify-center gap-2 hover:bg-primary-hover shadow-lg shadow-primary/20 transition-all text-xs font-bold tracking-wide active:scale-95"
                                >
                                    <span>Visit Live App</span>
                                    <ArrowUpRight size={16} />
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Main Content Sections */}
                    <div className="space-y-10 pb-16">
                        {/* Client & Production Deployment Context */}
                        {project.clientName && (
                            <div className="fade-in-later p-5 rounded-2xl bg-background-light/50 border border-primary/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
                                <div>
                                    <p className="text-[10px] uppercase font-bold tracking-widest text-primary">
                                        Commercial Deployment & Client
                                    </p>
                                    <p className="text-base font-bold text-foreground mt-0.5">
                                        {project.clientName}
                                    </p>
                                </div>
                                {project.userBase && (
                                    <span className="text-xs px-3.5 py-1 rounded-full bg-background border border-border/50 text-foreground/90 font-semibold self-start sm:self-auto">
                                        {project.userBase}
                                    </span>
                                )}
                            </div>
                        )}

                        {/* Tech Stack Matrix */}
                        <div className="fade-in-later">
                            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
                                Technology Stack & Libraries
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-xs font-semibold border border-border/50 rounded-xl px-3.5 py-1.5 text-foreground/90 bg-background-light/60 hover:border-primary/40 transition-colors"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Project Overview */}
                        <div className="fade-in-later">
                            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
                                Executive Overview
                            </p>
                            <div className="text-base sm:text-lg text-muted-foreground leading-relaxed prose-invert markdown-text">
                                {parse(project.description)}
                            </div>
                        </div>

                        {/* Structured Problem & Solution Case Study */}
                        {project.problem && project.solution && (
                            <div className="fade-in-later grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="p-6 rounded-3xl bg-background-light/40 border border-red-500/20 shadow-sm">
                                    <p className="text-xs font-bold uppercase tracking-wider text-red-400 mb-2.5 flex items-center gap-2">
                                        <ShieldAlert size={15} className="text-red-400 shrink-0" />
                                        <span>The Operational Problem</span>
                                    </p>
                                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                        {project.problem}
                                    </p>
                                </div>

                                <div className="p-6 rounded-3xl bg-background-light/40 border border-emerald-500/20 shadow-sm">
                                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2.5 flex items-center gap-2">
                                        <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                                        <span>The Engineered Solution</span>
                                    </p>
                                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                        {project.solution}
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Architecture Decisions */}
                        {project.architecture && project.architecture.length > 0 && (
                            <div className="fade-in-later p-7 rounded-3xl bg-background-light/40 border border-border/40 shadow-sm">
                                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary mb-4">
                                    <Terminal size={15} />
                                    <span>Key Architectural Decisions</span>
                                </div>
                                <ul className="space-y-3">
                                    {project.architecture.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-foreground/90">
                                            <span className="size-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                            <span className="leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Verified Outcomes */}
                        {project.outcomes && project.outcomes.length > 0 && (
                            <div className="fade-in-later p-7 rounded-3xl bg-background-light/60 border border-primary/25 shadow-md">
                                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary mb-4">
                                    <TrendingUp size={15} />
                                    <span>Verified Production Outcomes</span>
                                </div>
                                <ul className="space-y-2.5">
                                    {project.outcomes.map((outcome, idx) => (
                                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground font-medium">
                                            <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5" />
                                            <span className="leading-relaxed">{outcome}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Role & Responsibilities */}
                        {project.role && (
                            <div className="fade-in-later">
                                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
                                    Engineering Scope & Role
                                </p>
                                <div className="text-foreground/85 text-sm leading-relaxed">
                                    {parse(project.role)}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* High-Fidelity Browser Mockup Frame */}
                <div
                    className="fade-in-later relative flex flex-col max-w-5xl mx-auto w-full aspect-[16/10] overflow-hidden rounded-2xl border border-border/60 bg-background-light/95 shadow-2xl mt-4"
                    id="images"
                >
                    {/* Browser chrome frame */}
                    <div className="flex items-center gap-2 px-4 py-3 bg-background border-b border-border/40 shrink-0">
                        <span className="size-3 rounded-full bg-red-500/80" />
                        <span className="size-3 rounded-full bg-yellow-500/80" />
                        <span className="size-3 rounded-full bg-green-500/80" />
                        <div className="flex-1 mx-4 bg-background-light rounded-md px-4 py-1 flex items-center justify-center">
                            <p className="text-xs text-muted-foreground truncate font-mono">
                                {project.liveUrl?.replace('https://', '').replace(/\/$/, '') ?? project.slug}
                            </p>
                        </div>
                    </div>

                    <div className="relative flex-1 w-full bg-background overflow-hidden">
                        {project.liveUrl && !forceImagePreview && !iframeBlocked ? (
                            <iframe
                                src={project.liveUrl}
                                title={`${project.title} live preview`}
                                className="w-full h-full border-none bg-white absolute inset-0"
                                loading="lazy"
                                sandbox="allow-scripts allow-same-origin"
                                onError={() => setIframeBlocked(true)}
                            />
                        ) : project.images.length > 0 || project.thumbnail ? (
                            <Image
                                src={project.images[0] || project.thumbnail}
                                alt={`${project.title} interface preview`}
                                fill
                                className="object-cover object-top"
                                unoptimized
                            />
                        ) : (
                            <div className="absolute inset-0 flex items-center justify-center border-t border-dashed border-border/40 bg-background-light">
                                <span className="text-muted-foreground text-sm">Screenshots coming soon</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Previous / Next Navigation Rail */}
            <div className="border-t border-border/30 mt-20">
                <div className="container py-10 flex items-center justify-between gap-6">
                    {prevProject ? (
                        <TransitionLink
                            href={`/projects/${prevProject.slug}`}
                            className="group flex flex-col gap-1 text-left active:scale-95"
                        >
                            <span className="text-xs text-muted-foreground uppercase tracking-widest group-hover:text-primary transition-colors flex items-center gap-1">
                                <ChevronLeft size={14} /> Previous Case Study
                            </span>
                            <span className="font-anton text-xl sm:text-2xl text-foreground group-hover:text-primary transition-colors">
                                {prevProject.title}
                            </span>
                        </TransitionLink>
                    ) : (
                        <div />
                    )}

                    {nextProject ? (
                        <TransitionLink
                            href={`/projects/${nextProject.slug}`}
                            className="group flex flex-col gap-1 text-right active:scale-95"
                        >
                            <span className="text-xs text-muted-foreground uppercase tracking-widest group-hover:text-primary transition-colors flex items-center justify-end gap-1">
                                Next Case Study <ChevronRight size={14} />
                            </span>
                            <span className="font-anton text-xl sm:text-2xl text-foreground group-hover:text-primary transition-colors">
                                {nextProject.title}
                            </span>
                        </TransitionLink>
                    ) : (
                        <div />
                    )}
                </div>
            </div>
        </section>
    );
};

export default ProjectDetails;
