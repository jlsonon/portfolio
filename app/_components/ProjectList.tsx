'use client';
import SectionTitle from '@/components/SectionTitle';
import { SlidingTabs } from '@/components/ui/sliding-tabs';
import { PROJECTS } from '@/lib/data';
import { cn } from '@/lib/utils';
import { playKeebsClick } from '@/lib/keebs-audio';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import React, { useRef, useState, MouseEvent } from 'react';
import Project from './Project';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const CATEGORIES = [
    { id: 'all', label: 'All Systems', count: 10 },
    { id: 'business', label: 'Business & POS', count: 4 },
    { id: 'saas', label: 'SaaS & Portals', count: 2 },
    { id: 'ai', label: 'AI & Systems', count: 4 },
] as const;

const ProjectList = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const projectListRef = useRef<HTMLDivElement>(null);
    const imageContainer = useRef<HTMLDivElement>(null);
    const [activeCategory, setActiveCategory] = useState<'all' | 'saas' | 'ai' | 'business'>('all');
    const [selectedProject, setSelectedProject] = useState<string | null>(
        PROJECTS[0].slug,
    );

    const filteredProjects = PROJECTS.filter((p) => {
        if (activeCategory === 'all') return true;
        return p.category === activeCategory;
    });

    useGSAP(
        (context, contextSafe) => {
            if (window.innerWidth < 1024) {
                setSelectedProject(null);
                return;
            }

            const handleMouseMove = contextSafe?.((e: MouseEvent) => {
                if (!containerRef.current || !imageContainer.current) return;

                if (window.innerWidth < 1024) {
                    setSelectedProject(null);
                    return;
                }

                const containerRect = containerRef.current.getBoundingClientRect();
                const imageRect = imageContainer.current.getBoundingClientRect();
                const offsetTop = e.clientY - containerRect.y;

                if (
                    containerRect.y > e.clientY ||
                    containerRect.bottom < e.clientY ||
                    containerRect.x > e.clientX ||
                    containerRect.right < e.clientX
                ) {
                    return gsap.to(imageContainer.current, {
                        duration: 0.3,
                        opacity: 0,
                        scale: 0.96,
                    });
                }

                gsap.to(imageContainer.current, {
                    y: offsetTop - imageRect.height / 2,
                    duration: 0.8,
                    opacity: 1,
                    scale: 1,
                    ease: 'power2.out',
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
            gsap.from(containerRef.current, {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                },
                y: 40,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out',
            });
        },
        { scope: containerRef },
    );

    const handleMouseEnter = (slug: string) => {
        if (window.innerWidth < 1024) {
            setSelectedProject(null);
            return;
        }
        setSelectedProject(slug);
    };

    return (
        <section className="py-section" id="selected-projects">
            <div className="container">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-6 border-b border-border/30">
                    <SectionTitle title="Selected Production Systems" className="mb-0 sm:mb-0" />

                    {/* Category Filter Tabs */}
                    <div className="w-full sm:w-auto overflow-x-auto no-scrollbar">
                        <SlidingTabs
                            tabs={CATEGORIES.map((cat) => ({
                                id: cat.id,
                                label: cat.label,
                                count: cat.count,
                            }))}
                            activeId={activeCategory}
                            onChange={(id) => {
                                playKeebsClick(1.1);
                                setActiveCategory(id as 'all' | 'saas' | 'ai' | 'business');
                            }}
                            className="self-start md:self-auto"
                        />
                    </div>
                </div>

                <div className="group/projects relative" ref={containerRef}>
                    {/* Desktop Floating Live Browser Preview */}
                    {selectedProject !== null && (
                        <div
                            className="hidden lg:block absolute right-0 top-0 z-20 pointer-events-none w-[380px] xl:w-[480px] opacity-0"
                            ref={imageContainer}
                        >
                            <div className="rounded-2xl overflow-hidden border border-border/70 bg-card/95 backdrop-blur-xl shadow-2xl">
                                {/* Browser Chrome */}
                                <div className="flex items-center gap-2 px-3.5 py-2.5 bg-muted/60 border-b border-border/40">
                                    <span className="size-2.5 rounded-full bg-red-500/80" />
                                    <span className="size-2.5 rounded-full bg-yellow-500/80" />
                                    <span className="size-2.5 rounded-full bg-green-500/80" />
                                    <div className="flex-1 mx-2 bg-background border border-border/40 rounded-md px-3 py-0.5 text-center">
                                        <p className="text-xs text-muted-foreground truncate font-mono">
                                            {(() => {
                                                const p = PROJECTS.find((proj) => proj.slug === selectedProject);
                                                return (p?.liveUrl || p?.repoUrl)?.replace('https://', '').replace(/\/$/, '') ?? selectedProject;
                                            })()}
                                        </p>
                                    </div>
                                </div>

                                {/* Preview Images */}
                                <div className="relative aspect-[16/10] w-full overflow-hidden bg-background">
                                    {PROJECTS.map((project) => (
                                        <LivePreview
                                            key={project.slug}
                                            project={project}
                                            isActive={project.slug === selectedProject}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Project Rows */}
                    <div
                        className="flex flex-col gap-6 lg:gap-0"
                        ref={projectListRef}
                    >
                        {filteredProjects.map((project, index) => (
                            <Project
                                index={index}
                                project={project}
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

// Crisp high-resolution static preview
const LivePreview = ({ project, isActive }: { project: typeof PROJECTS[0]; isActive: boolean }) => {
    return (
        <div
            className={cn(
                'absolute inset-0 transition-opacity duration-300 w-full h-full',
                isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
            )}
        >
            <Image
                src={project.thumbnail}
                alt={`${project.title} screenshot`}
                fill
                className="object-cover object-top"
                priority={isActive}
            />
        </div>
    );
};

export default ProjectList;
