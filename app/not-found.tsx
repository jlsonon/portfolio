'use client';

import Link from 'next/link';
import { Home, ArrowUpRight } from 'lucide-react';

export default function NotFound() {
    return (
        <main className="min-h-[90vh] flex flex-col items-center justify-center text-center px-6 gap-6 relative overflow-hidden">
            {/* Ambient gold glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/[0.07] blur-[120px] rounded-full pointer-events-none -z-10" />

            {/* Big 404 Display */}
            <p className="text-[clamp(6rem,22vw,15rem)] font-anton leading-none text-primary/15 select-none tracking-tighter">
                404
            </p>

            <div className="space-y-3 -mt-8 max-w-md mx-auto">
                <h1 className="text-3xl sm:text-5xl font-anton text-foreground tracking-tight">
                    Page Not Found
                </h1>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    The route or system resource you requested could not be located. It may have been relocated or updated.
                </p>
            </div>

            <div className="flex flex-wrap gap-3.5 justify-center mt-2">
                <Link
                    href="/"
                    className="h-12 px-7 bg-primary text-black rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-primary-hover shadow-xl shadow-primary/20 transition-all duration-200 active:scale-[0.97]"
                >
                    <Home size={16} />
                    <span>Return to Home</span>
                </Link>
                <Link
                    href="/#selected-projects"
                    className="h-12 px-7 border border-border/60 hover:border-primary/50 text-foreground hover:text-primary rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 bg-background-light/40 transition-all duration-200 active:scale-[0.97]"
                >
                    <span>View Projects</span>
                    <ArrowUpRight size={16} />
                </Link>
            </div>
        </main>
    );
}
