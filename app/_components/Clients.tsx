'use client';
import { CLIENTS } from '@/lib/data';
import { SpotlightCard } from '@/components/ui/spotlight-card';
import { Award, Building2, CheckCircle2, Dumbbell, GraduationCap, Landmark, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const ICONS_MAP: Record<string, React.ReactNode> = {
    'Playground Fitness': <Dumbbell className="size-5 text-primary shrink-0" />,
    'TrainFitness (Kamuning & Visayas)': <Building2 className="size-5 text-primary shrink-0" />,
    'BarangayConnect Communities': <Landmark className="size-5 text-primary shrink-0" />,
    'Civil Service Exam Reviewers': <GraduationCap className="size-5 text-primary shrink-0" />,
};

const Clients = () => {
    return (
        <section id="trusted-by" className="relative z-[1] py-10 sm:py-14 border-y border-border/40 bg-background-light/20 backdrop-blur-sm">
            <div className="container">
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                            <span className="flex size-8 rounded-xl bg-primary/10 border border-primary/30 items-center justify-center text-primary shrink-0">
                                <Award className="size-4" />
                            </span>
                            <div>
                                <h2 className="text-xs font-bold uppercase tracking-widest text-primary">
                                    Trusted By & Active Deployments
                                </h2>
                                <p className="text-xs text-muted-foreground mt-0.5">
                                    Live production systems engineered for commercial operators, multi-branch clubs & students
                                </p>
                            </div>
                        </div>

                        <span className="text-xs text-muted-foreground font-semibold px-3 py-1 rounded-full bg-background border border-border/40 self-start sm:self-auto flex items-center gap-1.5">
                            <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            100% Production Verified
                        </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                        {CLIENTS.map((client) => {
                            const CardContent = (
                                <SpotlightCard className="h-full p-5 sm:p-6 rounded-2xl flex flex-col justify-between cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                                    <div>
                                        <div className="flex items-start justify-between gap-2.5 mb-3">
                                            <div className="flex items-center gap-2.5">
                                                <div className="p-2 rounded-lg bg-background border border-border/30 group-hover:border-primary/40 transition-colors">
                                                    {ICONS_MAP[client.name] || <CheckCircle2 className="size-4 text-primary shrink-0" />}
                                                </div>
                                                <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                                                    {client.name}
                                                </h3>
                                            </div>
                                            <ArrowUpRight size={14} className="text-muted-foreground opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-primary transition-all shrink-0" />
                                        </div>

                                        <p className="text-xs text-muted-foreground line-clamp-2 mb-4 leading-relaxed">
                                            {client.description}
                                        </p>
                                    </div>

                                    <div className="mt-auto flex items-center justify-between pt-3 border-t border-border/20 text-xs">
                                        <span className="inline-flex items-center gap-1.5 font-semibold text-primary/95 text-xs">
                                            <CheckCircle2 className="size-3 text-primary shrink-0" />
                                            {client.badge}
                                        </span>
                                        {client.location && (
                                            <span className="text-muted-foreground/80 text-xs truncate max-w-[110px]">
                                                {client.location}
                                            </span>
                                        )}
                                    </div>
                                </SpotlightCard>
                            );

                            if (client.projectSlug) {
                                return (
                                    <Link key={client.name} href={`/projects/${client.projectSlug}`}>
                                        {CardContent}
                                    </Link>
                                );
                            }

                            return <div key={client.name}>{CardContent}</div>;
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clients;
