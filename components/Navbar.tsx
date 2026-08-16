'use client';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import { MoveUpRight, Layers, X } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';
import { GENERAL_INFO, SOCIAL_LINKS } from '@/lib/data';
import { SocialIcon } from './SocialIcon';
import Image from 'next/image';
import Link from 'next/link';

const RAINBOW_COLORS = [
    'bg-amber-500',
    'bg-indigo-500',
    'bg-emerald-500',
    'bg-violet-500',
    'bg-sky-500',
    'bg-fuchsia-500',
    'bg-cyan-500',
    'bg-rose-500',
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
    const [isScrolled, setIsScrolled] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu on route change
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    const handleNavClick = (url: string) => {
        setIsMenuOpen(false);
        if (url.startsWith('/#')) {
            if (pathname === '/') {
                const targetId = url.replace('/#', '');
                const targetEl = document.getElementById(targetId);
                if (targetEl) {
                    targetEl.scrollIntoView({ behavior: 'smooth' });
                    return;
                }
            }
        }
        router.push(url);
    };

    return (
        <>
            <header
                className={cn(
                    'fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300',
                    isScrolled
                        ? 'bg-background/85 backdrop-blur-xl border-b border-border/40 py-3 shadow-lg shadow-black/20'
                        : 'bg-background/50 backdrop-blur-md border-b border-transparent py-4'
                )}
            >
                <div className="flex items-center justify-between px-4 sm:px-6 md:px-10 max-w-7xl mx-auto">
                    {/* Brand / Logo */}
                    <button
                        onClick={() => router.push('/')}
                        className="flex items-center gap-3 group cursor-pointer focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-xl p-1"
                        aria-label="Go home"
                    >
                        <div className="relative size-9 rounded-xl overflow-hidden border border-border/60 bg-background-light p-1 group-hover:border-primary/60 transition-colors">
                            <Image
                                src="/icon.svg"
                                alt="JS Logo"
                                width={32}
                                height={32}
                                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                        <div className="flex flex-col text-left">
                            <span className="font-anton text-lg tracking-wide text-foreground group-hover:text-primary transition-colors duration-200">
                                Jericho Sonon
                            </span>
                            <span className="text-[10px] text-muted-foreground -mt-1 hidden sm:block tracking-wider font-medium">
                                Systems &amp; Product Engineer
                            </span>
                        </div>
                    </button>

                    {/* Right controls: Quick CTA + Hamburger toggle */}
                    <div className="flex items-center gap-3">
                        <Link
                            href="/#contact-cta"
                            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-primary text-black hover:bg-primary-hover shadow-sm hover:shadow-md hover:shadow-primary/20 transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none active:scale-[0.97]"
                        >
                            <span>Let&apos;s Talk</span>
                            <MoveUpRight size={13} />
                        </Link>

                        <button
                            className={cn(
                                'group size-11 relative z-[2] flex items-center justify-center rounded-full bg-background-light/60 border border-border/50 hover:border-primary/50 hover:bg-background-light transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none active:scale-[0.97]'
                            )}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                            aria-expanded={isMenuOpen}
                        >
                            <span
                                className={cn(
                                    'inline-block w-5 h-0.5 bg-foreground rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 duration-300 -translate-y-[4px]',
                                    {
                                        'rotate-45 -translate-y-1/2 bg-primary': isMenuOpen,
                                    }
                                )}
                            />
                            <span
                                className={cn(
                                    'inline-block w-5 h-0.5 bg-foreground rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 duration-300 translate-y-[4px]',
                                    {
                                        '-rotate-45 -translate-y-1/2 bg-primary': isMenuOpen,
                                    }
                                )}
                            />
                        </button>
                    </div>
                </div>
            </header>

            {/* Backdrop overlay */}
            <div
                className={cn(
                    'fixed inset-0 z-[55] bg-black/70 backdrop-blur-sm transition-opacity duration-300',
                    isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
                )}
                onClick={() => setIsMenuOpen(false)}
            />

            {/* Slide-out Drawer */}
            <aside
                className={cn(
                    'fixed top-0 right-0 h-[100dvh] w-[420px] max-w-[calc(100vw-2rem)] transform transition-transform duration-500 ease-out z-[60] overflow-y-auto',
                    'bg-background-light/95 backdrop-blur-2xl border-l border-border/50 shadow-2xl p-6 sm:p-10 flex flex-col justify-between',
                    isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                )}
            >
                <div>
                    {/* Drawer Header */}
                    <div className="flex items-center justify-between pb-6 border-b border-border/30 mb-8">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
                            <Layers size={14} />
                            <span>Navigation</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-xs text-muted-foreground font-mono">
                                Jericho Sonon
                            </span>
                            {/* Mobile Only Sleek Circular Close Button */}
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="sm:hidden size-8 rounded-full bg-background border border-border/60 hover:border-primary/50 text-foreground hover:text-primary flex items-center justify-center transition-all active:scale-90 cursor-pointer shadow-sm"
                                aria-label="Collapse drawer menu"
                            >
                                <X size={15} className="text-primary" />
                            </button>
                        </div>
                    </div>

                    <ul className="space-y-2">
                        {MENU_LINKS.map((link, idx) => (
                            <li key={link.name}>
                                <button
                                    onClick={() => handleNavClick(link.url)}
                                    className="w-full group text-left text-xl sm:text-2xl font-anton tracking-wide py-2.5 px-3.5 rounded-xl flex items-center justify-between hover:bg-background/80 transition-all text-foreground/90 hover:text-primary cursor-pointer active:scale-[0.98]"
                                >
                                    <span className="flex items-center gap-3.5">
                                        <span
                                            className={cn(
                                                'size-2.5 rounded-full transition-all duration-300 group-hover:scale-150 shadow-sm shrink-0',
                                                RAINBOW_COLORS[idx % RAINBOW_COLORS.length]
                                            )}
                                        />
                                        <span>{link.name}</span>
                                    </span>
                                    <MoveUpRight
                                        size={16}
                                        className="text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-primary transition-all"
                                    />
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="pt-8 border-t border-border/30 mt-8 space-y-6">
                    <div>
                        <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-3">
                            Connect &amp; Social
                        </p>
                        <ul className="flex flex-wrap gap-2.5">
                            {SOCIAL_LINKS.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.url}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        className="px-3 py-1.5 rounded-lg bg-background/60 border border-border/40 hover:border-primary/40 text-xs text-muted-foreground hover:text-primary transition-all flex items-center gap-2"
                                    >
                                        <SocialIcon name={link.name} size={14} />
                                        <span className="capitalize">{link.name}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1">
                            Direct Inquiry
                        </p>
                        <a
                            href={`mailto:${GENERAL_INFO.email}`}
                            className="text-sm font-semibold text-foreground hover:text-primary transition-colors block truncate"
                        >
                            {GENERAL_INFO.email}
                        </a>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Navbar;
