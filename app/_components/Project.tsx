import TransitionLink from '@/components/TransitionLink';
import { IProject } from '@/types';
import { ArrowUpRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { playKeebsClick } from '@/lib/keebs-audio';
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
            onClick={() => playKeebsClick(1.05)}
            className="project-item group block p-5 sm:p-6 lg:p-0 rounded-2xl lg:rounded-none border border-border/40 lg:border-0 lg:border-b border-border/30 bg-card/60 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none lg:py-8 lg:first:pt-0 lg:last:pb-0 lg:last:border-none lg:group-hover/projects:opacity-40 lg:hover:!opacity-100 hover:border-primary/40 lg:hover:border-border/30 transition-all duration-300 cursor-pointer active:scale-[0.99] lg:active:scale-100"
            onMouseEnter={() => onMouseEnter(project.slug)}
            onFocus={() => onMouseEnter(project.slug)}
        >
            {/* Desktop & Mobile Row Content */}
            <div className="flex gap-4 sm:gap-6 items-start">
                <div className="font-anton tabular-nums text-muted-foreground/60 text-lg sm:text-2xl pt-1 tracking-wider shrink-0">
                    {String(index + 1).padStart(2, '0')}.
                </div>

                <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="flex flex-wrap items-center gap-3">
                            <h3 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-anton text-foreground group-hover:text-primary transition-colors duration-200 tracking-tight break-words flex items-center gap-3">
                                <span>{project.title}</span>
                                <ArrowUpRight
                                    size={24}
                                    className="text-primary opacity-0 -translate-x-1.5 translate-y-1.5 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-200 shrink-0 hidden sm:inline-block"
                                />
                            </h3>

                            {project.clientName && (
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                                    {project.clientName}
                                </span>
                            )}
                        </div>

                        <span className="hidden sm:inline-flex items-center text-xs text-muted-foreground font-semibold uppercase tracking-wider group-hover:text-primary transition-colors">
                            View Case Study →
                        </span>
                    </div>

                    {/* Mobile Only Crisp Screenshot Mockup */}
                    {project.thumbnail && (
                        <div className="lg:hidden mt-4 relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-border/40 bg-background shadow-md">
                            <Image
                                src={project.thumbnail}
                                alt={`${project.title} screenshot`}
                                fill
                                className="object-cover object-top"
                                sizes="(max-width: 1024px) 100vw, 500px"
                            />
                        </div>
                    )}

                    {/* Problem -> Outcome Micro Summary (Desktop / Tablet) */}
                    {project.problem && project.outcomes && project.outcomes.length > 0 && (
                        <div className="mt-3.5 hidden sm:grid sm:grid-cols-2 gap-2 text-xs text-muted-foreground/90 bg-background-light/40 rounded-xl p-3 border border-border/30">
                            <div className="flex items-start gap-1.5">
                                <AlertCircle size={13} className="text-amber-400/80 shrink-0 mt-0.5" />
                                <span className="line-clamp-1 sm:line-clamp-2">
                                    <strong className="text-foreground/90">Problem:</strong> {project.problem}
                                </span>
                            </div>
                            <div className="flex items-start gap-1.5">
                                <CheckCircle2 size={13} className="text-emerald-400 shrink-0 mt-0.5" />
                                <span className="line-clamp-1 sm:line-clamp-2">
                                    <strong className="text-foreground/90">Outcome:</strong> {project.outcomes[0]}
                                </span>
                            </div>
                        </div>
                    )}

                    <div className="mt-3 flex flex-wrap items-center gap-2 sm:gap-3 text-muted-foreground text-xs">
                        <span className="text-foreground/90 font-medium">
                            {project.role.split('(')[0].trim()}
                        </span>
                        <span className="inline-block size-1 rounded-full bg-border" />
                        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                            {project.techStack.slice(0, 4).map((tech) => (
                                <span
                                    key={tech}
                                    className="px-2.5 py-0.5 rounded-md bg-background-light/80 border border-border/40 text-xs text-muted-foreground group-hover:border-primary/30 group-hover:text-foreground/90 transition-colors"
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
