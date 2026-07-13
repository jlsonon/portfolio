import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'jlsonon12@gmail.com',

    emailSubject: "Let's Build Something Useful",
    emailBody: 'Send the project context, timeline, and the problem you want solved.',

    oldPortfolio: '',
    upworkProfile: '',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/jlsonon' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/jlsonon/' },
    { name: 'medium', url: 'https://medium.com/@jlsonon12' },
    { name: 'facebook', url: 'https://www.facebook.com/jlsonon' },
];

export const MY_STACK = {
    frontend: [
        { name: 'React', icon: '/icons/react.svg' },
        { name: 'Next.js', icon: '/icons/next-js.svg' },
        { name: 'Tailwind CSS', icon: '/icons/tailwind-css.svg' },
        { name: 'Material UI', icon: '/icons/material-ui.svg' },
        { name: 'Shadcn', icon: '/icons/shadcn.png' },
        { name: 'Zod', icon: '/icons/zod.svg' },
        { name: 'HTML5', icon: '/icons/html5.svg' },
        { name: 'CSS3', icon: '/icons/css3.svg' },
        { name: 'Zustand', icon: '/icons/zustand.svg' },
    ],
    backend: [
        { name: 'Node.js', icon: '/icons/node-js.svg' },
        { name: 'Express.js', icon: '/icons/express-js.svg' },
        { name: 'Django', icon: '/icons/django.svg' },
        { name: 'FastAPI', icon: '/icons/fastapi.svg' },
        { name: 'Firebase', icon: '/icons/firebase.svg' },
    ],
    database: [
        { name: 'PostgreSQL', icon: '/icons/postgresql.svg' },
        { name: 'MongoDB', icon: '/icons/mongodb.svg' },
        { name: 'MySQL', icon: '/icons/mysql.svg' },
        { name: 'Redis', icon: '/icons/redis.svg' },
        { name: 'Firestore', icon: '/icons/firestore.svg' },
    ],
    tools: [
        { name: 'Git', icon: '/icons/git.svg' },
        { name: 'Docker', icon: '/icons/docker.svg' },
        { name: 'Vercel', icon: '/icons/vercel.png' },
        { name: 'Google Cloud', icon: '/icons/google-cloud.svg' },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Prime Reviewer PH',
        slug: 'prime-reviewer-ph',
        liveUrl: 'https://primereviewerph.online',
        year: 2026,
        description: 'A comprehensive digital learning platform tailored for Filipino students preparing for licensure and entrance exams. I engineered a robust progress-tracking system and interactive practice modules to optimize study efficiency and retention, delivering a seamless, mobile-responsive experience.',
        role: 'Full-Stack Developer & Product Designer (Solo Builder)',
        techStack: ['Next.js', 'React', 'Tailwind CSS', 'PostgreSQL'],
        thumbnail: '/prime_reviewer.png',
        longThumbnail: '/prime_reviewer.png',
        images: ['/prime_reviewer.png'],
    },
    {
        title: 'FitLocker',
        slug: 'fitlocker',
        liveUrl: 'https://fitlocker-5a5ee.web.app/',
        year: 2026,
        description: 'An end-to-end SaaS management platform built to modernize gym operations and member management. The system streamlines administrative workflows—from subscription tracking to class scheduling—empowering fitness business owners to focus on growth rather than manual paperwork.',
        role: 'Full-Stack Developer & Product Designer (Solo Builder)',
        techStack: ['Next.js', 'Node.js', 'MongoDB'],
        thumbnail: '/fitlocker.png',
        longThumbnail: '/fitlocker.png',
        images: ['/fitlocker.png'],
    },
    {
        title: 'BarangayConnect',
        slug: 'barangayconnect',
        liveUrl: 'https://barangayconnect1.web.app/',
        year: 2026,
        description: 'A digital governance portal designed to modernize administrative workflows for local Philippine communities (Barangays). The platform digitizes record-keeping, resident requests, and community announcements, transforming a traditionally paper-heavy process into a centralized, efficient digital system.',
        role: 'Full-Stack Developer & Product Designer (Solo Builder)',
        techStack: ['React', 'Firebase', 'Tailwind CSS'],
        thumbnail: '/barangay_connect.png',
        longThumbnail: '/barangay_connect.png',
        images: ['/barangay_connect.png'],
    }
];

export const MY_EXPERIENCE = [
    {
        title: 'Full-Stack Developer & Product Designer',
        company: 'Freelance',
        duration: '2021 - Present',
        description: 'Built custom, responsive web applications and SaaS products from the ground up for diverse clients.',
    },
    {
        title: 'Freelance Tutor',
        company: 'Self-Employed',
        duration: '2016 - Present',
        description: 'Mentored students in advanced mathematics and programming concepts.',
    },
    {
        title: 'Expert Contributor in Mathematics (Advanced Calculus)',
        company: 'Slader Inc.',
        duration: 'Apr 2021 - Mar 2022',
        description: 'Created high-quality, step-by-step solutions for advanced calculus textbooks.',
    },
    {
        title: 'Professional Tutor',
        company: 'Upswing Inc.',
        duration: 'Aug 2023 - Mar 2025',
        description: 'Delivered personalized, 1-on-1 tutoring sessions to help students excel academically.',
    },
];
