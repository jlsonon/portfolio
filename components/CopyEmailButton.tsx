'use client';

import React, { useState } from 'react';
import { Copy, Check, ArrowUpRight } from 'lucide-react';
import { GENERAL_INFO } from '@/lib/data';
import { cn } from '@/lib/utils';

interface CopyEmailButtonProps {
    className?: string;
    variant?: 'button' | 'link' | 'badge';
    label?: string;
}

export default function CopyEmailButton({
    className,
    variant = 'button',
    label,
}: CopyEmailButtonProps) {
    const [copied, setCopied] = useState(false);
    const [showToast, setShowToast] = useState(false);

    const handleCopy = async (e: React.MouseEvent) => {
        e.preventDefault();
        try {
            await navigator.clipboard.writeText(GENERAL_INFO.email);
            setCopied(true);
            setShowToast(true);

            if (typeof navigator !== 'undefined' && navigator.vibrate) {
                navigator.vibrate([15, 20]);
            }

            setTimeout(() => setCopied(false), 2500);
            setTimeout(() => setShowToast(false), 3000);
        } catch {
            // Fallback: trigger standard mailto if clipboard blocked
            window.location.href = `mailto:${GENERAL_INFO.email}`;
        }
    };

    return (
        <>
            {variant === 'button' && (
                <button
                    onClick={handleCopy}
                    className={cn(
                        'inline-flex items-center gap-2 px-6 py-4 border border-border/60 hover:border-primary/50 text-foreground hover:text-primary rounded-full font-semibold text-sm sm:text-base transition-all bg-background-light/40 cursor-pointer focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none active:scale-[0.97] group',
                        copied && 'border-emerald-500/40 text-emerald-400',
                        className
                    )}
                    aria-label="Copy email address to clipboard"
                >
                    {copied ? (
                        <>
                            <Check size={16} className="text-emerald-400 animate-in zoom-in-50 duration-200" />
                            <span className="text-emerald-400">{label || 'Copied to Clipboard!'}</span>
                        </>
                    ) : (
                        <>
                            <Copy size={16} className="group-hover:rotate-12 transition-transform duration-200" />
                            <span>{label || 'Copy Email'}</span>
                        </>
                    )}
                </button>
            )}

            {variant === 'link' && (
                <button
                    onClick={handleCopy}
                    className={cn(
                        'text-2xl sm:text-3xl font-anton text-foreground hover:text-primary transition-colors duration-200 inline-flex items-center gap-2.5 text-left group cursor-pointer',
                        className
                    )}
                    aria-label="Copy email to clipboard"
                >
                    <span>{GENERAL_INFO.email}</span>
                    <span className="size-8 rounded-full bg-background border border-border/50 group-hover:border-primary flex items-center justify-center text-muted-foreground group-hover:text-primary transition-all shrink-0">
                        {copied ? (
                            <Check size={14} className="text-emerald-400 animate-in zoom-in-50" />
                        ) : (
                            <Copy size={14} className="group-hover:scale-110 transition-transform" />
                        )}
                    </span>
                </button>
            )}

            {/* Instant Floating Toast Notification */}
            {showToast && (
                <div className="fixed bottom-6 right-6 z-[100] px-4 py-3 rounded-2xl bg-background/95 border border-primary/60 shadow-2xl shadow-primary/20 backdrop-blur-xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-300">
                    <div className="size-8 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                        <Check size={15} />
                    </div>
                    <div className="flex flex-col text-left">
                        <span className="text-xs font-bold text-foreground">
                            {GENERAL_INFO.email}
                        </span>
                        <span className="text-[10px] text-muted-foreground">
                            Copied to clipboard • Ready to paste
                        </span>
                    </div>
                    <a
                        href={`mailto:${GENERAL_INFO.email}`}
                        className="ml-2 px-2.5 py-1 rounded-full bg-primary text-black text-[10px] font-bold hover:bg-primary-hover transition-colors inline-flex items-center gap-1 shrink-0"
                    >
                        <span>Open Mail</span>
                        <ArrowUpRight size={11} />
                    </a>
                </div>
            )}
        </>
    );
}
