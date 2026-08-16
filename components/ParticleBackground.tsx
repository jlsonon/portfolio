'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';

gsap.registerPlugin(useGSAP);

const ParticleBackground = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [particleCount, setParticleCount] = useState(30);

    useEffect(() => {
        const isMobile = window.innerWidth < 768;
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        if (prefersReducedMotion) {
            setParticleCount(0);
        } else {
            setParticleCount(isMobile ? 25 : 60);
        }
    }, []);

    useGSAP(
        () => {
            if (!containerRef.current || particleCount === 0) return;

            const particles = containerRef.current.querySelectorAll('.particle-dot');
            particles.forEach((particle) => {
                const startX = Math.random() * window.innerWidth;
                const startY = Math.random() * window.innerHeight;
                const size = Math.random() * 2 + 1;
                const duration = Math.random() * 12 + 12;

                gsap.set(particle, {
                    width: size,
                    height: size,
                    x: startX,
                    y: startY,
                    opacity: Math.random() * 0.4 + 0.1,
                });

                gsap.to(particle, {
                    y: window.innerHeight + 50,
                    duration,
                    opacity: 0,
                    repeat: -1,
                    ease: 'none',
                    delay: Math.random() * 5,
                });
            });
        },
        { scope: containerRef, dependencies: [particleCount] }
    );

    if (particleCount === 0) return null;

    return (
        <div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            {[...Array(particleCount)].map((_, i) => (
                <div
                    key={i}
                    className="particle-dot absolute rounded-full bg-white/60"
                />
            ))}
        </div>
    );
};

export default ParticleBackground;
