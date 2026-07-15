'use client';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const SECTIONS = [
    { id: 'banner', name: 'Home' },
    { id: 'about-me', name: 'About' },
    { id: 'my-stack', name: 'Stack' },
    { id: 'my-experience', name: 'Experience' },
    { id: 'my-process', name: 'Process' },
    { id: 'selected-projects', name: 'Projects' },
    { id: 'contact-cta', name: 'Contact' },
];

export default function FloatingNav() {
    const [activeSection, setActiveSection] = useState('banner');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: '-40% 0px -40% 0px' }
        );

        SECTIONS.forEach((section) => {
            const element = document.getElementById(section.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop,
                behavior: 'smooth'
            });
            window.history.pushState(null, '', `#${id}`);
        }
    };

    return (
        <div className="fixed right-4 xl:right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
            {SECTIONS.map((section) => (
                <button
                    key={section.id}
                    onClick={() => scrollTo(section.id)}
                    className="group relative flex items-center justify-end w-8 h-8"
                    aria-label={`Scroll to ${section.name}`}
                >
                    <span
                        className={cn(
                            "absolute right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 text-[10px] font-bold tracking-widest uppercase font-anton",
                            activeSection === section.id
                                ? "text-primary translate-x-0"
                                : "text-muted-foreground translate-x-2 group-hover:translate-x-0"
                        )}
                    >
                        {section.name}
                    </span>
                    <div
                        className={cn(
                            "rounded-full transition-all duration-300 ml-auto",
                            activeSection === section.id
                                ? "w-1.5 h-6 bg-primary"
                                : "w-1.5 h-1.5 bg-border hover:bg-primary/50 group-hover:h-3"
                        )}
                    />
                </button>
            ))}
        </div>
    );
}
