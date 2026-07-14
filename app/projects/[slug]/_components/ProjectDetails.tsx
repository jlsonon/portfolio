'use client';
import parse from 'html-react-parser';
import ArrowAnimation from '@/components/ArrowAnimation';
import TransitionLink from '@/components/TransitionLink';
import { IProject } from '@/types';
import { PROJECTS } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
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
                y: 30,
            });
            const tl = gsap.timeline({
                delay: 0.5,
            });

            tl.to('.fade-in-later', {
                autoAlpha: 1,
                y: 0,
                stagger: 0.1,
            });
        },
        { scope: containerRef },
    );

    // blur info div and make it smaller on scroll
    useGSAP(
        () => {
            if (window.innerWidth < 992) return;

            gsap.to('#info', {
                filter: 'blur(3px)',
                autoAlpha: 0,
                scale: 0.9,
                scrollTrigger: {
                    trigger: '#info',
                    start: 'bottom bottom',
                    end: 'bottom top',
                    pin: true,
                    pinSpacing: false,
                    scrub: 0.5,
                },
            });
        },
        { scope: containerRef },
    );

    return (
        <section className="pt-5 pb-20">
            <div className="container" ref={containerRef}>
                <TransitionLink
                    back
                    href="/"
                    className="mb-12 inline-flex gap-2 items-center group h-10 text-muted-foreground hover:text-foreground transition-colors"
                >
                    <ArrowLeft
                        size={18}
                        className="group-hover:-translate-x-1 transition-transform duration-300"
                    />
                    <span className="text-sm">Back to home</span>
                </TransitionLink>

                <div
                    className="top-0 min-h-[calc(100svh-100px)] flex"
                    id="info"
                >
                    <div className="relative w-full">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 max-w-[800px] mx-auto border-b border-border/40 pb-8">
                            <div>
                                <p className="fade-in-later text-xs font-semibold uppercase tracking-widest text-primary/70 mb-3 flex items-center gap-3">
                                    Project — {project.year}
                                    {project.status === 'ongoing' && (
                                        <span className="bg-primary/10 text-primary px-2 py-0.5 rounded text-[10px] border border-primary/20 flex items-center gap-1.5">
                                            <span>🚧</span> In Development
                                        </span>
                                    )}
                                </p>
                                <h1 className="fade-in-later text-4xl md:text-6xl font-anton leading-none">
                                    {project.title}
                                </h1>
                            </div>

                            <div className="fade-in-later flex gap-3 shrink-0 mt-2">
                                {project.sourceCode && (
                                    <a
                                        href={project.sourceCode}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        className="h-10 px-5 border border-border/50 rounded-full flex items-center justify-center gap-2 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all text-sm font-medium"
                                    >
                                        <Github size={18} />
                                        <span className="hidden sm:inline">Source Code</span>
                                    </a>
                                )}
                                {project.liveUrl && project.liveUrl !== '#' && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        className="h-10 px-6 border border-border/50 rounded-full flex items-center justify-center gap-2 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all text-sm font-medium"
                                    >
                                        <span>Visit Site</span>
                                        <ExternalLink size={18} />
                                    </a>
                                )}
                            </div>
                        </div>

                        <div className="max-w-[800px] space-y-10 pb-20 mx-auto">
                            <div className="fade-in-later">
                                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                                    Tech Stack
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-xs border border-border/50 rounded-full px-3 py-1 text-foreground/70"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="fade-in-later">
                                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                                    Overview
                                </p>
                                <div className="text-lg text-muted-foreground leading-relaxed prose-xl markdown-text">
                                    {parse(project.description)}
                                </div>
                            </div>
                            {project.role && (
                                <div className="fade-in-later">
                                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                                        My Role
                                    </p>
                                    <div className="text-foreground/80 text-sm leading-relaxed">
                                        {parse(project.role)}
                                    </div>
                                </div>
                            )}
                        </div>

                        <ArrowAnimation />
                    </div>
                </div>

                <div
                    className="fade-in-later relative flex flex-col max-w-[1280px] mx-auto w-full aspect-[16/10] overflow-hidden rounded-xl border border-border/60 bg-background-light shadow-2xl"
                    id="images"
                >
                    {/* Browser chrome frame */}
                    <div className="flex items-center gap-2 px-4 py-3 bg-background border-b border-border/40 shrink-0">
                        <span className="size-3 rounded-full bg-red-500/70" />
                        <span className="size-3 rounded-full bg-yellow-500/70" />
                        <span className="size-3 rounded-full bg-green-500/70" />
                        <div className="flex-1 mx-4 bg-background-light rounded-md px-4 py-1.5 flex items-center justify-center">
                            <p className="text-xs text-muted-foreground truncate font-medium tracking-wide">
                                {project.liveUrl?.replace('https://', '').replace(/\/$/, '') ?? project.slug}
                            </p>
                        </div>
                    </div>

                    <div className="relative flex-1 w-full bg-background overflow-hidden">
                        {project.liveUrl && !forceImagePreview && !iframeBlocked ? (
                            <>
                                <iframe
                                    src={project.liveUrl}
                                    title={`${project.title} live preview`}
                                    className="w-full h-full border-none bg-white absolute inset-0"
                                    loading="lazy"
                                    sandbox="allow-scripts allow-same-origin"
                                    onError={() => setIframeBlocked(true)}
                                />
                            </>
                        ) : project.images.length > 0 || project.thumbnail ? (
                            <Image
                                src={project.images[0] || project.thumbnail}
                                alt={`${project.title} website preview`}
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

            {/* Previous / Next navigation */}
            <div className="border-t border-border/30 mt-20">
                <div className="container py-10 flex items-center justify-between gap-6">
                    {prevProject ? (
                        <TransitionLink
                            href={`/projects/${prevProject.slug}`}
                            className="group flex flex-col gap-1 text-left"
                        >
                            <span className="text-xs text-muted-foreground uppercase tracking-widest group-hover:text-primary transition-colors">
                                ← Previous
                            </span>
                            <span className="font-anton text-xl group-hover:text-primary transition-colors">
                                {prevProject.title}
                            </span>
                        </TransitionLink>
                    ) : (
                        <div />
                    )}

                    {nextProject ? (
                        <TransitionLink
                            href={`/projects/${nextProject.slug}`}
                            className="group flex flex-col gap-1 text-right"
                        >
                            <span className="text-xs text-muted-foreground uppercase tracking-widest group-hover:text-primary transition-colors">
                                Next →
                            </span>
                            <span className="font-anton text-xl group-hover:text-primary transition-colors">
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
