'use client';
import SectionTitle from '@/components/SectionTitle';
import { PROJECTS } from '@/lib/data';
import { cn } from '@/lib/utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import React, { useRef, useState, MouseEvent } from 'react';
import Project from './Project';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ProjectList = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const projectListRef = useRef<HTMLDivElement>(null);
    const imageContainer = useRef<HTMLDivElement>(null);
    const [selectedProject, setSelectedProject] = useState<string | null>(
        PROJECTS[0].slug,
    );

    // update imageRef.current href based on the cursor hover position
    // also update image position
    useGSAP(
        (context, contextSafe) => {
            // show image on hover
            if (window.innerWidth < 768) {
                setSelectedProject(null);
                return;
            }

            const handleMouseMove = contextSafe?.((e: MouseEvent) => {
                if (!containerRef.current) return;
                if (!imageContainer.current) return;

                if (window.innerWidth < 768) {
                    setSelectedProject(null);
                    return;
                }

                const containerRect =
                    containerRef.current?.getBoundingClientRect();
                const imageRect =
                    imageContainer.current.getBoundingClientRect();
                const offsetTop = e.clientY - containerRect.y;

                // if cursor is outside the container, hide the image
                if (
                    containerRect.y > e.clientY ||
                    containerRect.bottom < e.clientY ||
                    containerRect.x > e.clientX ||
                    containerRect.right < e.clientX
                ) {
                    return gsap.to(imageContainer.current, {
                        duration: 0.3,
                        opacity: 0,
                    });
                }

                gsap.to(imageContainer.current, {
                    y: offsetTop - imageRect.height / 2,
                    duration: 1,
                    opacity: 1,
                });
            }) as any;

            window.addEventListener('mousemove', handleMouseMove);

            return () => {
                window.removeEventListener('mousemove', handleMouseMove);
            };
        },
        { scope: containerRef, dependencies: [containerRef.current] },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top bottom',
                    end: 'top 80%',
                    toggleActions: 'restart none none reverse',
                    scrub: 1,
                },
            });

            tl.from(containerRef.current, {
                y: 150,
                opacity: 0,
            });
        },
        { scope: containerRef },
    );

    const handleMouseEnter = (slug: string) => {
        if (window.innerWidth < 768) {
            setSelectedProject(null);
            return;
        }

        setSelectedProject(slug);
    };

    return (
        <section className="pb-section" id="selected-projects">
            <div className="container">
                <SectionTitle title="SELECTED PROJECTS" />

                <div className="group/projects relative" ref={containerRef}>
                    {selectedProject !== null && (
                        <div
                            className="max-md:hidden absolute right-0 top-0 z-[1] pointer-events-none w-[280px] xl:w-[400px] opacity-0 drop-shadow-2xl"
                            ref={imageContainer}
                        >
                            {/* Browser chrome frame */}
                            <div className="rounded-xl overflow-hidden border border-border/60 bg-background-light">
                                {/* Top bar */}
                                <div className="flex items-center gap-2 px-3 py-2 bg-background border-b border-border/40">
                                    <span className="size-2.5 rounded-full bg-red-500/70" />
                                    <span className="size-2.5 rounded-full bg-yellow-500/70" />
                                    <span className="size-2.5 rounded-full bg-green-500/70" />
                                    <div className="flex-1 mx-2 bg-background-light rounded-md px-3 py-0.5">
                                        <p className="text-[10px] text-muted-foreground truncate">
                                            {PROJECTS.find(p => p.slug === selectedProject)?.liveUrl?.replace('https://', '') ?? selectedProject}
                                        </p>
                                    </div>
                                </div>

                                {/* Live iframe preview area */}
                                {PROJECTS.filter(p => p.liveUrl).map((project) => (
                                    <LivePreview
                                        key={project.slug}
                                        project={project}
                                        isActive={project.slug === selectedProject}
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                    <div
                        className="flex flex-col max-md:gap-10"
                        ref={projectListRef}
                    >
                        {PROJECTS.map((project, index) => (
                            <Project
                                index={index}
                                project={project}
                                selectedProject={selectedProject}
                                onMouseEnter={handleMouseEnter}
                                key={project.slug}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

// Live iframe preview with image fallback
const LivePreview = ({ project, isActive }: { project: typeof PROJECTS[0]; isActive: boolean }) => {
    const [iframeBlocked, setIframeBlocked] = React.useState(false);
    const forceImagePreview = project.slug === 'prime-reviewer-ph';

    // Scale: render at 1280px wide, shrink to fit 400px card → 400/1280 = 0.3125
    const RENDER_WIDTH = 1280;
    const RENDER_HEIGHT = 800;
    const CARD_WIDTH = 400;
    const scale = CARD_WIDTH / RENDER_WIDTH;
    const cardHeight = Math.round(RENDER_HEIGHT * scale);

    return (
        <div
            className={cn(
                'relative overflow-hidden transition-opacity duration-500',
                { 'opacity-0 absolute inset-0': !isActive }
            )}
            style={{ width: CARD_WIDTH, height: cardHeight }}
        >
            {!forceImagePreview && !iframeBlocked ? (
                <>
                    <iframe
                        src={project.liveUrl}
                        title={`${project.title} live preview`}
                        style={{
                            width: RENDER_WIDTH,
                            height: RENDER_HEIGHT,
                            transform: `scale(${scale})`,
                            transformOrigin: 'top left',
                            pointerEvents: 'none',
                            border: 'none',
                        }}
                        loading="lazy"
                        sandbox="allow-scripts allow-same-origin"
                        onError={() => setIframeBlocked(true)}
                    />
                    {/* Invisible overlay to catch blocked iframes */}
                    <div
                        className="absolute inset-0"
                        onLoad={() => {}}
                    />
                </>
            ) : (
                <Image
                    src={project.thumbnail}
                    alt={`${project.title} website preview`}
                    width={CARD_WIDTH}
                    height={cardHeight}
                    className="w-full h-full object-cover object-top"
                />
            )}
        </div>
    );
};

export default ProjectList;
