'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP);

const CustomCursor = () => {
    const svgRef = useRef<SVGSVGElement>(null);

    useGSAP((context, contextSafe) => {
        if (window.innerWidth < 768) return;

        const handleMouseMove = contextSafe?.((e: MouseEvent) => {
            if (!svgRef.current) return;

            const { clientX, clientY } = e;

            gsap.to(svgRef.current, {
                x: clientX,
                y: clientY,
                ease: 'power2.out',
                duration: 0.25,
                opacity: 1,
            });
        }) as any;

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    });

    return (
        <svg
            className="hidden md:block fixed top-0 left-0 z-[50] pointer-events-none opacity-0"
            id="cursor"
            ref={svgRef}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: 'translate(-4px, -4px)' }}
        >
            <path
                d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87c.45 0 .67-.54.35-.85L5.5 3.21Z"
                fill="currentColor"
                className="text-primary drop-shadow-md"
            />
        </svg>
    );
};

export default CustomCursor;
