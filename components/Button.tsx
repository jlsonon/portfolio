import Link from 'next/link';
import React, { ButtonHTMLAttributes, ComponentProps, ReactNode } from 'react';
import { Variant } from '@/types';
import { cn } from '@/lib/utils';

const Spinner = ({ icon }: { icon?: boolean }) => (
    <span className="inline-flex items-center justify-center gap-2">
        <svg
            className="animate-spin size-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
        >
            <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
            />
            <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
        </svg>
        {!icon && <span className="text-xs font-semibold uppercase tracking-wider">Processing...</span>}
    </span>
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

type Props = {
    as?: 'link' | 'button';
    loading?: boolean;
    icon?: boolean;
    children: ReactNode | ReactNode[];
    className?: string;
    variant?: Variant | 'outline' | 'ghost';
} & (ComponentProps<typeof Link> | ButtonProps);

const Button = ({
    loading,
    variant = 'primary',
    className,
    children,
    as = 'link',
    icon = false,
    ...rest
}: Props) => {
    const variantClasses = {
        primary: 'bg-primary text-black hover:bg-primary-hover shadow-lg shadow-primary/20 border border-primary/30',
        secondary: 'bg-secondary text-black hover:bg-secondary-hover shadow-lg shadow-secondary/20 border border-secondary/30',
        outline: 'bg-background-light/40 text-foreground border border-border/60 hover:border-primary/50 hover:text-primary hover:bg-background-light',
        ghost: 'bg-transparent text-foreground hover:text-primary hover:bg-background-light/40',
        success: 'bg-emerald-500 text-black hover:bg-emerald-400 shadow-lg shadow-emerald-500/20',
        warning: 'bg-orange-500 text-white hover:bg-orange-400',
        danger: 'bg-destructive text-destructive-foreground hover:bg-destructive/80',
        info: 'bg-sky-500 text-white hover:bg-sky-400',
        light: 'bg-foreground text-background hover:bg-foreground/90',
        dark: 'bg-background-light text-foreground border border-border/50 hover:border-primary/40',
        link: 'text-foreground hover:text-primary underline-offset-4 hover:underline p-0 h-auto bg-transparent',
        'no-color': '',
    }[variant] || 'bg-primary text-black hover:bg-primary-hover';

    const baseClasses = cn(
        'group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 ease-out cursor-pointer select-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none active:scale-[0.97]',
        icon ? 'size-11 p-0' : 'h-12 px-7 text-sm',
        variantClasses,
        className,
    );

    if (as === 'link') {
        const props = rest as ComponentProps<typeof Link>;

        if (props.target === '_blank') {
            return (
                <a
                    className={baseClasses}
                    {...props}
                    href={props.href.toString() || '#'}
                >
                    {loading ? <Spinner icon={icon} /> : children}
                </a>
            );
        }

        return (
            <Link className={baseClasses} {...props} href={props.href || '#'}>
                {loading ? <Spinner icon={icon} /> : children}
            </Link>
        );
    }

    const props = rest as ButtonProps;
    return (
        <button className={baseClasses} disabled={loading || props.disabled} {...props}>
            {loading ? <Spinner icon={icon} /> : children}
        </button>
    );
};

export default Button;
