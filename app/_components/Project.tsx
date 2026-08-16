import TransitionLink from '@/components/TransitionLink';
import { IProject } from '@/types';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

interface Props {
    index: number;
    project: IProject;
    onMouseEnter: (_slug: string) => void;
}

const Project = ({ index, project, onMouseEnter }: Props) => {
    return (
        <TransitionLink
            href={`/projects/${project.slug}`}
            className="project-item group block py-6 lg:py-8 lg:border-b border-border/30 first:!pt-0 last:pb-0 last:border-none lg:group-hover/projects:opacity-40 lg:hover:!opacity-100 transition-opacity duration-300 cursor-pointer"
            onMouseEnter={() => onMouseEnter(project.slug)}
            onFocus={() => onMouseEnter(project.slug)}
        >
            {/* Mobile & Tablet Card View (Shown under 1024px) */}
            <div className="lg:hidden rounded-2xl overflow-hidden border border-border/50 bg-background-light/50 shadow-lg mb-4">
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-background">
                    <Image
                        src={project.thumbnail}
                        alt={`${project.title} screenshot`}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                    />
                </div>
            </div>

            {/* Desktop Row & Content */}
            <div className="flex gap-4 sm:gap-6 items-start">
                <div className="font-anton text-muted-foreground/60 text-lg sm:text-2xl pt-1 tracking-wider shrink-0">
                    {String(index + 1).padStart(2, '0')}.
                </div>

                <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="flex flex-wrap items-center gap-3">
                            <h3 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-anton text-foreground group-hover:text-primary transition-colors duration-200 tracking-tight break-words flex items-center gap-3">
                                <span>{project.title}</span>
                                <ArrowUpRight
                                    size={24}
                                    className="text-primary opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-200 shrink-0 hidden sm:inline-block"
                                />
                            </h3>

                            {project.clientName && (
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-primary/10 text-primary border border-primary/20">
                                    {project.clientName}
                                </span>
                            )}
                        </div>

                        <span className="hidden sm:inline-flex items-center text-xs text-muted-foreground font-semibold uppercase tracking-wider group-hover:text-primary transition-colors">
                            View Case Study →
                        </span>
                    </div>

                    <div className="mt-2.5 flex flex-wrap items-center gap-2 sm:gap-3 text-muted-foreground text-xs">
                        <span className="text-foreground/90 font-medium">
                            {project.role.split('(')[0].trim()}
                        </span>
                        <span className="inline-block size-1 rounded-full bg-border" />
                        <div className="flex flex-wrap items-center gap-2">
                            {project.techStack.slice(0, 4).map((tech) => (
                                <span
                                    key={tech}
                                    className="px-2 py-0.5 rounded-md bg-background-light/80 border border-border/40 text-[11px] text-muted-foreground group-hover:border-primary/30 group-hover:text-foreground/90 transition-colors"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </TransitionLink>
    );
};

export default Project;
