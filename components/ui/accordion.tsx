'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface AccordionItemData {
    id: string;
    title: React.ReactNode;
    subtitle?: React.ReactNode;
    badge?: string;
    content: React.ReactNode;
}

interface AccordionProps {
    items: AccordionItemData[];
    defaultOpenId?: string;
    allowMultiple?: boolean;
    className?: string;
    itemClassName?: string;
}

export function Accordion({
    items,
    defaultOpenId,
    allowMultiple = false,
    className,
    itemClassName,
}: AccordionProps) {
    const [openIds, setOpenIds] = useState<string[]>(
        defaultOpenId ? [defaultOpenId] : []
    );

    const toggleItem = (id: string) => {
        if (allowMultiple) {
            setOpenIds((prev) =>
                prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
            );
        } else {
            setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
        }
    };

    return (
        <div className={cn('flex flex-col gap-3', className)}>
            {items.map((item) => {
                const isOpen = openIds.includes(item.id);

                return (
                    <div
                        key={item.id}
                        className={cn(
                            'rounded-2xl border transition-all duration-200 overflow-hidden',
                            isOpen
                                ? 'border-primary/40 bg-background-light/70 shadow-sm'
                                : 'border-border/40 bg-background-light/30 hover:border-border/60 hover:bg-background-light/50',
                            itemClassName
                        )}
                    >
                        <button
                            type="button"
                            onClick={() => toggleItem(item.id)}
                            aria-expanded={isOpen}
                            className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left cursor-pointer select-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                        >
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2.5 flex-wrap">
                                    <span className="font-anton text-base sm:text-lg text-foreground tracking-tight">
                                        {item.title}
                                    </span>
                                    {item.badge && (
                                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary">
                                            {item.badge}
                                        </span>
                                    )}
                                </div>
                                {item.subtitle && (
                                    <p className="text-xs text-muted-foreground mt-0.5 truncate">
                                        {item.subtitle}
                                    </p>
                                )}
                            </div>

                            <div
                                className={cn(
                                    'size-7 rounded-full border border-border/50 bg-background flex items-center justify-center text-muted-foreground transition-transform duration-300 shrink-0',
                                    isOpen && 'rotate-180 text-primary border-primary/40 bg-primary/10'
                                )}
                            >
                                <ChevronDown size={15} />
                            </div>
                        </button>

                        {/* Smooth CSS Grid Row Animation */}
                        <div
                            className={cn(
                                'grid transition-all duration-300 ease-in-out',
                                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                            )}
                        >
                            <div className="overflow-hidden">
                                <div className="px-5 pb-5 pt-1 text-xs text-muted-foreground leading-relaxed border-t border-border/20 mt-1">
                                    {item.content}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
