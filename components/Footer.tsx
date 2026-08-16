import { SOCIAL_LINKS } from '@/lib/data';
import { SocialIcon } from './SocialIcon';
import Link from 'next/link';
import CopyEmailButton from './CopyEmailButton';
import TimezoneClock from './TimezoneClock';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-border/40 bg-background-light/30 backdrop-blur-sm py-14 relative overflow-hidden" id="contact">
            {/* Ambient glow behind footer */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[150px] bg-primary/5 blur-[100px] pointer-events-none rounded-full" />

            <div className="container relative z-10">
                {/* Top Quick Contact Block */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b border-border/30">
                    <div className="text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                            <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                            <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">
                                Open for Custom Systems &amp; SaaS Contracts
                            </p>
                        </div>
                        {/* 1-Click Copy Email Link */}
                        <CopyEmailButton variant="link" />
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-3">
                        <TimezoneClock />
                        <Link
                            href="/#contact-cta"
                            className="px-6 py-3 rounded-full text-xs font-semibold bg-primary text-black hover:bg-primary-hover shadow-md hover:shadow-primary/25 transition-all duration-200 active:scale-[0.97]"
                        >
                            Start a Conversation
                        </Link>
                    </div>
                </div>

                {/* Bottom Row */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
                    {/* Copyright & Location */}
                    <p className="text-xs text-muted-foreground">
                        © {year} Jericho Sonon • Full-Stack Systems &amp; Product Engineer
                    </p>

                    {/* Social links */}
                    <ul className="flex items-center gap-3 flex-wrap justify-center">
                        {SOCIAL_LINKS.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.url}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="px-3 py-1.5 rounded-lg border border-border/40 hover:border-primary/50 text-xs text-muted-foreground uppercase tracking-wider hover:text-primary transition-all duration-200 flex items-center gap-2 group/link bg-background/40 active:scale-95"
                                >
                                    <SocialIcon name={link.name} size={14} className="text-muted-foreground group-hover/link:text-primary transition-colors" />
                                    <span>{link.name}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
