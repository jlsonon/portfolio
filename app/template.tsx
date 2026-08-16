'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP);

export default function Template({ children }: { children: React.ReactNode }) {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            if (!containerRef.current) return;
            gsap.fromTo(
                containerRef.current,
                { opacity: 0.94, y: 8 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.3,
                    ease: 'power2.out',
                    clearProps: 'all',
                }
            );
        },
        { scope: containerRef }
    );

    return <div ref={containerRef}>{children}</div>;
}
