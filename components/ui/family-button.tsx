'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

import { playKeebsClick } from '@/lib/keebs-audio';

interface FamilyButtonProps {
    children: React.ReactNode;
    icon?: React.ReactNode;
    successIcon?: React.ReactNode;
    successText?: string;
    onClick?: (_e: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>;
    href?: string;
    variant?: 'primary' | 'secondary' | 'ghost';
    className?: string;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    ariaLabel?: string;
}

export function FamilyButton({
    children,
    icon,
    successIcon,
    successText,
    onClick,
    href,
    variant = 'primary',
    className,
    disabled = false,
    type = 'button',
    ariaLabel,
}: FamilyButtonProps) {
    const [isSuccess, setIsSuccess] = useState(false);
    const [isPending, setIsPending] = useState(false);

    const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
        playKeebsClick();
        if (disabled || isPending) return;

        if (onClick) {
            try {
                const result = onClick(e);
                if (result instanceof Promise) {
                    setIsPending(true);
                    await result;
                    setIsPending(false);
                }
                if (successText || successIcon) {
                    setIsSuccess(true);
                    setTimeout(() => setIsSuccess(false), 2400);
                }
            } catch (err) {
                setIsPending(false);
                throw err;
            }
        }
    };

    const baseStyles = cn(
        'group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full font-semibold text-sm transition-all duration-200 cursor-pointer select-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none active:scale-[0.96] shadow-sm',
        variant === 'primary' && [
            'bg-primary text-primary-foreground hover:bg-primary-hover shadow-primary/20 hover:shadow-md hover:shadow-primary/30',
            isSuccess && 'bg-emerald-500 text-white shadow-emerald-500/20'
        ],
        variant === 'secondary' && [
            'bg-card border border-border/60 text-foreground hover:border-primary/50 hover:text-primary hover:bg-muted/30',
            isSuccess && 'border-emerald-500/50 text-emerald-500'
        ],
        variant === 'ghost' && [
            'bg-transparent text-foreground hover:text-primary hover:bg-muted/40',
            isSuccess && 'text-emerald-500'
        ],
        disabled && 'opacity-50 pointer-events-none',
        className
    );

    const content = (
        <>
            <span className="relative z-10 flex items-center gap-2">
                {isSuccess && successIcon ? (
                    <span className="animate-in zoom-in-50 duration-200">{successIcon}</span>
                ) : (
                    icon && <span className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">{icon}</span>
                )}
                <span>{isSuccess && successText ? successText : children}</span>
            </span>
        </>
    );

    if (href) {
        if (href.startsWith('/') || href.startsWith('#')) {
            return (
                <Link
                    href={href}
                    onClick={() => playKeebsClick()}
                    className={baseStyles}
                    aria-label={ariaLabel}
                >
                    {content}
                </Link>
            );
        }
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playKeebsClick()}
                className={baseStyles}
                aria-label={ariaLabel}
            >
                {content}
            </a>
        );
    }

    return (
        <button
            type={type}
            onClick={handleClick}
            disabled={disabled || isPending}
            className={baseStyles}
            aria-label={ariaLabel}
        >
            {content}
        </button>
    );
}
