'use client';

import React, { useState } from 'react';
import { Copy, Check, ArrowUpRight } from 'lucide-react';
import { GENERAL_INFO } from '@/lib/data';
import { cn } from '@/lib/utils';
import { FamilyButton } from '@/components/ui/family-button';

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
                <FamilyButton
                    onClick={handleCopy}
                    variant="secondary"
                    icon={<Copy size={16} />}
                    successIcon={<Check size={16} className="text-emerald-400" />}
                    successText={label ? `${label} (Copied!)` : 'Copied to Clipboard!'}
                    className={cn(
                        'px-6 py-4 text-sm sm:text-base',
                        copied && 'border-emerald-500/50 text-emerald-400 bg-emerald-500/10',
                        className
                    )}
                    ariaLabel="Copy email address to clipboard"
                >
                    {label || 'Copy Email'}
                </FamilyButton>
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
                        <span className="text-xs text-muted-foreground">
                            Copied to clipboard • Ready to paste
                        </span>
                    </div>
                    <a
                        href={`mailto:${GENERAL_INFO.email}`}
                        className="ml-2 px-3 py-1 rounded-full bg-primary text-black text-xs font-bold hover:bg-primary-hover transition-colors inline-flex items-center gap-1 shrink-0"
                    >
                        <span>Open Mail</span>
                        <ArrowUpRight size={12} />
                    </a>
                </div>
            )}
        </>
    );
}
