'use client';

import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-[100svh] flex flex-col items-center justify-center text-center px-6 gap-8">
            {/* Big 404 */}
            <p className="text-[clamp(6rem,20vw,14rem)] font-anton leading-none text-primary/20 select-none">
                404
            </p>

            <div className="space-y-3 -mt-6">
                <h1 className="text-3xl sm:text-4xl font-anton text-foreground">
                    Page not found
                </h1>
                <p className="text-muted-foreground max-w-sm mx-auto text-base">
                    This URL doesn&apos;t exist. You might have mistyped it, or
                    the page may have been moved.
                </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
                <Link
                    href="/"
                    className="h-11 px-6 bg-primary text-primary-foreground rounded-full text-sm font-medium flex items-center gap-2 hover:opacity-90 transition-opacity"
                >
                    <Home size={16} />
                    Back to Home
                </Link>
                <Link
                    href="/#selected-projects"
                    className="h-11 px-6 border border-border/50 rounded-full text-sm font-medium flex items-center gap-2 hover:border-primary hover:text-primary transition-colors"
                >
                    <ArrowLeft size={16} />
                    View Projects
                </Link>
            </div>
        </div>
    );
}
