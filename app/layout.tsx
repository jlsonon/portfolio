import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import { ReactLenis } from 'lenis/react';

import 'lenis/dist/lenis.css';
import './globals.css';
import Footer from '@/components/Footer';
import FloatingNav from '@/components/FloatingNav';
import Navbar from '@/components/Navbar';
import StickyEmail from './_components/StickyEmail';

const spaceGrotesk = Space_Grotesk({
    weight: ['400', '500', '600', '700'],
    style: 'normal',
    subsets: ['latin'],
    variable: '--font-anton',
});

const inter = Inter({
    weight: ['100', '300', '400', '500', '600', '700', '800'],
    style: 'normal',
    subsets: ['latin'],
    variable: '--font-inter',
});

export const metadata: Metadata = {
    metadataBase: new URL('https://jlsonon-portfolio.vercel.app'),
    title: {
        default: 'Jericho Sonon — Full-Stack Systems & Product Engineer',
        template: '%s | Jericho Sonon',
    },
    description:
        'Jericho Sonon is a Full-Stack Systems & Product Engineer building custom business operations platforms, POS systems, and production web applications from Quezon City, Philippines.',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://jlsonon-portfolio.vercel.app',
        siteName: 'Jericho Sonon Portfolio',
        title: 'Jericho Sonon — Full-Stack Systems & Product Engineer',
        description:
            'Engineering production-ready business systems, POS platforms, and full-stack applications.',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Jericho Sonon — Full-Stack Systems & Product Engineer',
        description:
            'Engineering production-ready business systems, POS platforms, and full-stack applications.',
        creator: '@jlsonon',
    },
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Jericho Sonon',
    url: 'https://jlsonon-portfolio.vercel.app',
    image: 'https://jlsonon-portfolio.vercel.app/profile.jpg',
    jobTitle: 'Full-Stack Systems & Product Engineer',
    worksFor: {
        '@type': 'Organization',
        name: 'Freelance & Technical Consulting',
    },
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Quezon City',
        addressCountry: 'Philippines',
    },
    sameAs: [
        'https://github.com/jlsonon',
        'https://www.linkedin.com/in/jlsonon/',
        'https://medium.com/@jlsonon12',
    ],
    knowsAbout: [
        'Full-Stack Systems Engineering',
        'Point of Sale (POS) Systems',
        'Commercial Gym & Business Management',
        'Next.js',
        'React',
        'TypeScript',
        'Firebase & Firestore',
        'PostgreSQL',
        'AI Agent Automations',
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body
                className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}
            >
                <a
                    href="#main-content"
                    className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[999] bg-primary text-black px-4 py-2 rounded-md font-bold text-sm shadow-xl opacity-0 focus:opacity-100 pointer-events-none focus:pointer-events-auto transition-opacity"
                >
                    Skip to content
                </a>
                <ReactLenis
                    root
                    options={{
                        lerp: 0.1,
                        duration: 1.4,
                    }}
                >
                    <Navbar />
                    <main id="main-content" className="pt-16 sm:pt-20">{children}</main>
                    <Footer />

                    <FloatingNav />
                    <StickyEmail />
                </ReactLenis>
            </body>
        </html>
    );
}
