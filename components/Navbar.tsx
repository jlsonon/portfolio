'use client';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { MoveUpRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { GENERAL_INFO, SOCIAL_LINKS } from '@/lib/data';
import { SocialIcon } from './SocialIcon';
import Image from 'next/image';
import Link from 'next/link';

const COLORS = [
    'bg-indigo-500 text-white',
    'bg-violet-500 text-white',
    'bg-emerald-500 text-white',
    'bg-sky-500 text-white',
    'bg-fuchsia-500 text-white',
    'bg-cyan-500 text-white',
    'bg-amber-500 text-white',
];

const MENU_LINKS = [
    { name: 'Home', url: '/' },
    { name: 'Projects', url: '/#selected-projects' },
    { name: 'About', url: '/#about-me' },
    { name: 'Services', url: '/#services' },
    { name: 'Stack', url: '/#my-stack' },
    { name: 'Experience', url: '/#my-experience' },
    { name: 'Process', url: '/#my-process' },
    { name: 'Contact', url: '/#contact-cta' },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 w-full bg-background/90 backdrop-blur-md border-b border-border/30 transition-all duration-200">
                <div className="flex items-center justify-between px-5 md:px-10 py-3.5 max-w-7xl mx-auto">
                    {/* Brand / Logo */}
                    <button
                        onClick={() => router.push('/')}
                        className="flex items-center gap-2.5 group cursor-pointer focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-lg p-1"
                        aria-label="Go home"
                    >   
                        <Image 
                            src="/icon.svg" 
                            alt="JS Logo" 
                            width={36}
                            height={36}
                            className="size-9 object-contain rounded-lg group-hover:scale-110 transition-transform duration-300"
                        />
                        <span className="font-anton text-lg tracking-wide hidden sm:block text-foreground/80 group-hover:text-primary transition-colors duration-300">
                            jlsonon
                        </span>
                        <span className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 ml-2">
                            <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                            Available
                        </span>
                    </button>

                    {/* Right controls: Quick CTA + Hamburger toggle */}
                    <div className="flex items-center gap-3">
                        <Link
                            href="/#contact-cta"
                            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-primary/10 hover:bg-primary text-primary hover:text-black border border-primary/30 transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                        >
                            <span>Let&apos;s Talk</span>
                            <MoveUpRight size={13} />
                        </Link>

                        <button
                            className={cn('group size-11 relative z-[2] flex items-center justify-center rounded-full bg-background-light/50 border border-border/40 hover:border-primary/40 hover:bg-background-light transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none')}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <span
                                className={cn(
                                    'inline-block w-3/5 h-0.5 bg-foreground rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 duration-300 -translate-y-[5px]',
                                    {
                                        'rotate-45 -translate-y-1/2': isMenuOpen,
                                        'md:group-hover:rotate-12': !isMenuOpen,
                                    },
                                )}
                            ></span>
                            <span
                                className={cn(
                                    'inline-block w-3/5 h-0.5 bg-foreground rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 duration-300 translate-y-[5px]',
                                    {
                                        '-rotate-45 -translate-y-1/2': isMenuOpen,
                                        'md:group-hover:-rotate-12': !isMenuOpen,
                                    },
                                )}
                            ></span>
                        </button>
                    </div>
                </div>
            </header>

            <div
                className={cn(
                    'overlay fixed inset-0 z-[2] bg-black/70 transition-all duration-150',
                    {
                        'opacity-0 invisible pointer-events-none': !isMenuOpen,
                    },
                )}
                onClick={() => setIsMenuOpen(false)}
            ></div>

            <div
                className={cn(
                    'fixed top-0 right-0 h-[100dvh] w-[500px] max-w-[calc(100vw-3rem)] transform translate-x-full transition-all duration-700 z-[3] overflow-hidden gap-y-14',
                    'flex flex-col lg:justify-center py-10',
                    { 
                        'translate-x-0 opacity-100 visible pointer-events-auto': isMenuOpen,
                        'opacity-0 invisible pointer-events-none': !isMenuOpen,
                    },
                )}
            >
                <div
                    className={cn(
                        'fixed inset-0 scale-150 translate-x-1/2 rounded-[50%] bg-background-light duration-700 delay-150 z-[-1] border-l border-primary/20',
                        {
                            'translate-x-0': isMenuOpen,
                        },
                    )}
                ></div>

                <div className="grow flex md:items-center w-full max-w-[300px] mx-8 sm:mx-auto">
                    <div className="flex gap-10 lg:justify-between max-lg:flex-col w-full">
                        <div className="max-lg:order-2">
                            <p className="text-muted-foreground mb-5 md:mb-8">
                                SOCIAL
                            </p>
                            <ul className="space-y-3">
                                {SOCIAL_LINKS.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-lg capitalize hover:underline flex items-center gap-3 group/link"
                                        >
                                            <SocialIcon name={link.name} size={20} className="text-muted-foreground group-hover/link:text-foreground transition-colors" />
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="">
                            <p className="text-muted-foreground mb-5 md:mb-8">
                                MENU
                            </p>
                            <ul className="space-y-3">
                                {MENU_LINKS.map((link, idx) => (
                                    <li key={link.name}>
                                        <button
                                            onClick={() => {
                                                router.push(link.url);
                                                setIsMenuOpen(false);
                                            }}
                                            className="group text-xl flex items-center gap-3"
                                        >
                                            <span
                                                className={cn(
                                                    'size-3.5 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-[200%] transition-all',
                                                    COLORS[idx],
                                                )}
                                            >
                                                <MoveUpRight
                                                    size={8}
                                                    className="scale-0 group-hover:scale-100 transition-all"
                                                />
                                            </span>
                                            {link.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-[300px] mx-8 sm:mx-auto">
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Get in Touch</p>
                    <a
                        href={`mailto:${GENERAL_INFO.email}`}
                        className="text-foreground hover:text-primary transition-colors duration-200"
                    >
                        {GENERAL_INFO.email}
                    </a>
                </div>
            </div>
        </>
    );
};

export default Navbar;
