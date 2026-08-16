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

const CATEGORIES = [
    { id: 'all', label: 'All Projects', count: 5 },
    { id: 'saas', label: 'SaaS & Web Apps', count: 2 },
    { id: 'ai', label: 'AI & Automation', count: 1 },
    { id: 'business', label: 'Business & POS', count: 2 },
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
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                    <SectionTitle title="SELECTED PROJECTS" />

                    {/* Category Filter Pills: Desktop & Tablet Only */}
                    <div className="hidden md:flex flex-wrap gap-2">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={cn(
                                    'px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 border',
                                    activeCategory === cat.id
                                        ? 'bg-primary text-black border-primary shadow-lg shadow-primary/20'
                                        : 'bg-background-light/40 border-border/40 text-muted-foreground hover:text-foreground hover:border-primary/40'
                                )}
                            >
                                <span>{cat.label}</span>
                                <span
                                    className={cn(
                                        'size-4 rounded-full text-[10px] flex items-center justify-center font-bold',
                                        activeCategory === cat.id
                                            ? 'bg-black/20 text-black'
                                            : 'bg-border/40 text-muted-foreground'
                                    )}
                                >
                                    {cat.count}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

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
                        {filteredProjects.map((project, index) => (
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

// Crisp high-resolution static preview with zero iframe flash
const LivePreview = ({ project, isActive }: { project: typeof PROJECTS[0]; isActive: boolean }) => {
    return (
        <div
            className={cn(
                'relative overflow-hidden transition-opacity duration-300 w-[280px] xl:w-[400px] aspect-[16/10]',
                { 'opacity-0 absolute inset-0': !isActive }
            )}
        >
            <Image
                src={project.thumbnail}
                alt={`${project.title} screenshot`}
                width={800}
                height={500}
                className="w-full h-full object-cover object-top"
                priority={isActive}
            />
        </div>
    );
};

export default ProjectList;
