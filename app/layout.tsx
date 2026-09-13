import type { Metadata, Viewport } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import { ReactLenis } from 'lenis/react';

import 'lenis/dist/lenis.css';
import './globals.css';
import Footer from '@/components/Footer';
import FloatingNav from '@/components/FloatingNav';
import Navbar from '@/components/Navbar';
import StickyEmail from './_components/StickyEmail';
import { PROJECTS } from '@/lib/data';

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

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://jlsonon.xyz';

export const viewport: Viewport = {
    themeColor: '#0a0a0a',
    colorScheme: 'dark',
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
};

export const metadata: Metadata = {
    metadataBase: new URL(BASE_URL),
    title: {
        default: 'Jericho Sonon — Custom Business Systems That Replace Manual Work',
        template: '%s | Jericho Sonon',
    },
    description:
        'Software & Solutions Engineer based in Quezon City, Philippines. I design and build custom POS platforms, operations dashboards, and web SaaS applications that replace spreadsheets and paper logbooks.',
    keywords: [
        'Jericho Sonon',
        'Jericho Sonon Portfolio',
        'Full-Stack Developer Philippines',
        'Software Engineer Quezon City',
        'Custom Business Systems Developer',
        'POS Systems Developer Manila',
        'Gym Management SaaS',
        'Laundry POS Software',
        'Civil Service Exam Reviewer',
        'Next.js React TypeScript Developer',
        'Workflow Automation Engineer',
        'Native macOS Windows Systems',
    ],
    authors: [{ name: 'Jericho Sonon', url: BASE_URL }],
    creator: 'Jericho Sonon',
    publisher: 'Jericho Sonon',
    category: 'technology',
    alternates: {
        canonical: '/',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: BASE_URL,
        siteName: 'Jericho Sonon — Software & Solutions Engineer',
        title: 'Jericho Sonon — Custom Business Systems That Replace Manual Work',
        description:
            'I design and build custom POS platforms, operations dashboards, and web SaaS applications that replace spreadsheets and paper logbooks.',
        images: [
            {
                url: '/opengraph-image',
                width: 1200,
                height: 630,
                alt: 'Jericho Sonon — Custom Business Systems That Replace Manual Work',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Jericho Sonon — Custom Business Systems That Replace Manual Work',
        description:
            'I design and build custom POS platforms, operations dashboards, and web SaaS applications that replace spreadsheets and paper logbooks.',
        creator: '@jlsonon',
        images: ['/twitter-image'],
    },
    icons: {
        icon: [
            { url: '/icon.svg', type: 'image/svg+xml' },
        ],
        apple: [
            { url: '/icon.svg', type: 'image/svg+xml' },
        ],
    },
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'Person',
            '@id': `${BASE_URL}/#person`,
            name: 'Jericho Sonon',
            url: BASE_URL,
            image: `${BASE_URL}/profile.jpg`,
            jobTitle: 'Full-Stack Systems & Product Engineer',
            description:
                'Software & Solutions Engineer based in Quezon City, Philippines. I design and build custom POS platforms, operations dashboards, and web SaaS applications.',
            worksFor: {
                '@type': 'Organization',
                name: 'Freelance & Technical Consulting',
            },
            address: {
                '@type': 'PostalAddress',
                addressLocality: 'Quezon City',
                addressRegion: 'Metro Manila',
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
                'Next.js & React',
                'TypeScript',
                'Firebase & PostgreSQL',
                'Native Desktop Audio Systems (AVAudioEngine)',
                'Workflow Automation & AI Agents',
            ],
        },
        {
            '@type': 'WebSite',
            '@id': `${BASE_URL}/#website`,
            url: BASE_URL,
            name: 'Jericho Sonon — Software & Solutions Engineer',
            description:
                'Portfolio and case studies of custom business systems, POS platforms, and SaaS applications engineered by Jericho Sonon.',
            publisher: {
                '@id': `${BASE_URL}/#person`,
            },
        },
        {
            '@type': 'ProfilePage',
            '@id': `${BASE_URL}/#profilepage`,
            url: BASE_URL,
            name: 'Jericho Sonon Portfolio',
            mainEntity: {
                '@id': `${BASE_URL}/#person`,
            },
        },
        {
            '@type': 'ItemList',
            name: 'Selected Production Systems',
            description: 'Flagship production software systems engineered by Jericho Sonon',
            itemListElement: PROJECTS.map((project, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                name: project.title,
                url: `${BASE_URL}/projects/${project.slug}`,
                description: project.description,
            })),
        },
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
