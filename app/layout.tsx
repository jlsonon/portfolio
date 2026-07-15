import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import { ReactLenis } from 'lenis/react';

import 'lenis/dist/lenis.css';
import './globals.css';
import Footer from '@/components/Footer';
import FloatingNav from '@/components/FloatingNav';
import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import CustomCursor from '@/components/CustomCursor';
import Preloader from '../components/Preloader';
import StickyEmail from './_components/StickyEmail';

const spaceGrotesk = Space_Grotesk({
    weight: ['400', '500', '600', '700'],
    style: 'normal',
    subsets: ['latin'],
    variable: '--font-anton', // reuse the same CSS var so all components work without changes
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
        default: 'Jericho Sonon — Full-Stack Developer & Product Designer',
        template: '%s | Jericho Sonon',
    },
    description:
        'Jericho Sonon builds production-ready web applications for education, operations, and local business workflows from Quezon City, Philippines.',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://jlsonon-portfolio.vercel.app',
        siteName: 'Jericho Sonon Portfolio',
        title: 'Jericho Sonon — Full-Stack Developer & Product Designer',
        description:
            'Filipino builder crafting useful web systems for learners, businesses, and local communities.',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Jericho Sonon — Full-Stack Developer & Product Designer',
        description:
            'Filipino builder crafting useful web systems for learners, businesses, and local communities.',
        creator: '@jlsonon',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">

            <body
                className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}
            >
                <ReactLenis
                    root
                    options={{
                        lerp: 0.1,
                        duration: 1.4,
                    }}
                >
                    {/* <a
                        href="https://forms.gle/t73XYJgWD5cJNr6e8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 block bg-black text-center z-[1] text-sm py-2 hover:text-primary transition-all"
                    >
                        Frontend dev? I&apos;ll help you polish your resume —
                        completely free.
                    </a> */}
                    <Navbar />
                    <main>{children}</main>
                    <Footer />

                    <CustomCursor />
                    <Preloader />
                    <FloatingNav />
                    <ParticleBackground />
                    <StickyEmail />
                </ReactLenis>
            </body>
        </html>
    );
}
