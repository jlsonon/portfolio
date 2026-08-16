'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useLenis } from 'lenis/react';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(useGSAP);

export default function Template({ children }: { children: React.ReactNode }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const lenis = useLenis();
    const pathname = usePathname();

    useEffect(() => {
        // Reset scroll to top on route transition
        if (lenis) {
            lenis.scrollTo(0, { immediate: true });
        }
        window.scrollTo(0, 0);
    }, [pathname, lenis]);

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
