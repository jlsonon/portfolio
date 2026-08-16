import { GENERAL_INFO } from '@/lib/data';
import React from 'react';

const StickyEmail = () => {
    return (
        <aside
            aria-label="Direct Email"
            className="hidden xl:flex fixed bottom-24 left-6 z-40 flex-col items-center gap-4 pointer-events-auto"
        >
            <a
                href={`mailto:${GENERAL_INFO.email}`}
                className="text-xs font-mono tracking-widest text-muted-foreground/70 hover:text-primary transition-all duration-200 hover:-translate-y-1 py-2 font-medium"
                style={{
                    textOrientation: 'mixed',
                    writingMode: 'vertical-rl',
                }}
            >
                {GENERAL_INFO.email}
            </a>

            {/* Vertical connector line */}
            <div className="w-px h-16 bg-gradient-to-b from-border/80 via-primary/40 to-transparent" />
        </aside>
    );
};

export default StickyEmail;
