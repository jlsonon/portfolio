'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';

gsap.registerPlugin(useGSAP);

const Preloader = () => {
    const preloaderRef = useRef<HTMLDivElement>(null);
    const [shouldShow, setShouldShow] = useState(true);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const hasSeenPreloader = sessionStorage.getItem('preloader_shown');
            if (hasSeenPreloader) {
                setShouldShow(false);
            } else {
                sessionStorage.setItem('preloader_shown', 'true');
            }
        }
    }, []);

    useGSAP(
        () => {
            if (!shouldShow || !preloaderRef.current) return;

            const tl = gsap.timeline({
                defaults: {
                    ease: 'power1.inOut',
                },
            });

            tl.to('.name-text span', {
                y: 0,
                stagger: 0.04,
                duration: 0.25,
            });

            tl.to('.preloader-item', {
                delay: 0.6,
                y: '100%',
                duration: 0.5,
                stagger: 0.08,
            })
                .to('.name-text span', { autoAlpha: 0 }, '<0.4')
                .to(
                    preloaderRef.current,
                    {
                        autoAlpha: 0,
                        display: 'none',
                    },
                    '<0.8',
                );
        },
        { scope: preloaderRef, dependencies: [shouldShow] },
    );

    if (!shouldShow) return null;

    return (
        <div className="fixed inset-0 z-[6] flex" ref={preloaderRef}>
            <div className="preloader-item h-full w-[10%] bg-background"></div>
            <div className="preloader-item h-full w-[10%] bg-background"></div>
            <div className="preloader-item h-full w-[10%] bg-background"></div>
            <div className="preloader-item h-full w-[10%] bg-background"></div>
            <div className="preloader-item h-full w-[10%] bg-background"></div>
            <div className="preloader-item h-full w-[10%] bg-background"></div>
            <div className="preloader-item h-full w-[10%] bg-background"></div>
            <div className="preloader-item h-full w-[10%] bg-background"></div>
            <div className="preloader-item h-full w-[10%] bg-background"></div>
            <div className="preloader-item h-full w-[10%] bg-background"></div>

            <p className="name-text flex text-[clamp(2.2rem,12vw,12rem)] font-anton text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-none overflow-hidden text-primary max-w-[95vw] justify-center tracking-tight">
                <span className="inline-block translate-y-full">J</span>
                <span className="inline-block translate-y-full">L</span>
                <span className="inline-block translate-y-full">S</span>
                <span className="inline-block translate-y-full">O</span>
                <span className="inline-block translate-y-full">N</span>
                <span className="inline-block translate-y-full">O</span>
                <span className="inline-block translate-y-full">N</span>
            </p>
        </div>
    );
};

export default Preloader;
