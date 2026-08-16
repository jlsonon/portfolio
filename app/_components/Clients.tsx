'use client';
import { CLIENTS } from '@/lib/data';
import { Award, Building2, CheckCircle2, Dumbbell, GraduationCap, Landmark } from 'lucide-react';
import React from 'react';

const ICONS_MAP: Record<string, React.ReactNode> = {
    'Playground Fitness': <Dumbbell className="size-5 text-primary shrink-0" />,
    'TrainFitness (Kamuning & Visayas)': <Building2 className="size-5 text-primary shrink-0" />,
    'BarangayConnect Communities': <Landmark className="size-5 text-primary shrink-0" />,
    'Civil Service Exam Reviewers': <GraduationCap className="size-5 text-primary shrink-0" />,
};

const Clients = () => {
    return (
        <section id="trusted-by" className="relative z-[1] py-8 sm:py-12 border-y border-border/40 bg-background/50 backdrop-blur-sm">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8">
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                        <span className="flex size-8 rounded-full bg-primary/10 border border-primary/30 items-center justify-center text-primary">
                            <Award className="size-4" />
                        </span>
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-primary">
                                Trusted By & Active Deployments
                            </p>
                            <p className="text-xs text-muted-foreground">
                                Real production systems engineered for commercial operators, municipal communities & students
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                        {CLIENTS.map((client) => (
                            <div
                                key={client.name}
                                className="group relative flex flex-col p-4 rounded-xl bg-background-light/40 border border-border/40 hover:border-primary/40 transition-all duration-300 hover:bg-background-light/80"
                            >
                                <div className="flex items-start gap-2.5 mb-2">
                                    {ICONS_MAP[client.name] || <CheckCircle2 className="size-4 text-primary shrink-0" />}
                                    <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                                        {client.name}
                                    </h3>
                                </div>
                                <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
                                    {client.description}
                                </p>
                                <div className="mt-auto flex items-center justify-between pt-2 border-t border-border/20 text-[11px]">
                                    <span className="inline-flex items-center gap-1 font-semibold text-primary/90">
                                        <CheckCircle2 className="size-3 text-primary" />
                                        {client.badge}
                                    </span>
                                    {client.location && (
                                        <span className="text-muted-foreground/80 text-[10px] truncate max-w-[100px]">
                                            {client.location}
                                        </span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clients;
