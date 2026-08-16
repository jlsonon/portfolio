import { IProject, IExperience, IService, IClient } from '@/types';

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

export const CLIENTS: IClient[] = [
    {
        name: 'Playground Fitness',
        category: 'Fitness & Athletic Facility',
        description: 'Gym operations, membership tracking, and daily athlete workflow automation.',
        badge: 'Commercial Client',
        location: 'Philippines',
        projectSlug: 'fitlocker',
        metrics: 'Full Facility Operations Digitize',
    },
    {
        name: 'TrainFitness (Kamuning & Visayas)',
        category: 'Multi-Branch Fitness Club',
        description: 'Multi-location branch administration, subscription billing, and member scheduling hub.',
        badge: '2 Branches Deployed',
        location: 'Quezon City, Metro Manila',
        projectSlug: 'fitlocker',
        metrics: 'Multi-Branch Synchronized',
    },
    {
        name: 'BarangayConnect Communities',
        category: 'Digital Governance & Citizen Portal',
        description: 'Citizen service portal, online clearances, and automated municipal incident tracking.',
        badge: 'Citizen Portal',
        location: 'Philippines',
        projectSlug: 'barangayconnect',
        metrics: 'Online Document Queues',
    },
    {
        name: 'Civil Service Exam Reviewers',
        category: 'EdTech & Licensure Prep',
        description: 'Nationwide examinee test simulator with diagnostic prediction and intelligent progress tracking.',
        badge: '500+ Students',
        location: 'Philippines',
        projectSlug: 'prime-reviewer-ph',
        metrics: '500+ Active Aspirants',
    },
];

export const MY_STACK = {
    ai_engineering: [
        { name: 'Codex', icon: '/icons/codex.svg' },
        { name: 'Claude', icon: '/icons/claude.svg' },
        { name: 'Antigravity', icon: '/icons/antigravity.svg' },
    ],
    business_solutions: [
        { name: 'POS Systems', icon: '/icons/pos.svg' },
        { name: 'SaaS Platforms', icon: '/icons/saas.svg' },
        { name: 'Workflow Automation', icon: '/icons/automation.svg' },
        { name: 'CRM & Ops Hubs', icon: '/icons/crm.svg' },
    ],
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
        category: 'saas',
        clientName: '500+ Civil Service Review Students',
        userBase: '500+ Examinees',
        description: 'A comprehensive digital licensure examination platform engineered for Filipino students. Features dynamic mock diagnostic exams, step-by-step logic explanations, pass probability predictors, and individual analytics dashboards.',
        role: 'Full-Stack Developer & Product Designer (Solo Builder)',
        techStack: ['Next.js', 'React', 'Tailwind CSS', 'PostgreSQL'],
        thumbnail: '/prime_reviewer.png',
        longThumbnail: '/prime_reviewer.png',
        images: ['/prime_reviewer.png'],
        problem: 'Traditional civil service reviewers in the Philippines relied on physical paper booklets with outdated answer keys and no performance analytics to identify weak subject areas.',
        solution: 'Built an interactive examination engine with timed diagnostic modes, category-based weakness tracking, and instant algorithmic score calculations.',
        architecture: ['Next.js App Router for zero-latency static rendering', 'PostgreSQL for secure question banks and student response logs', 'Tailwind CSS with responsive mobile examination interface'],
        outcomes: ['Trusted by 500+ active students preparing for nationwide civil service exams', 'Average student engagement of 45+ minutes per study session'],
    },
    {
        title: 'Laundry POS',
        slug: 'laundry-pos',
        liveUrl: 'https://laundryos-xi.vercel.app/login',
        year: 2026,
        category: 'business',
        clientName: 'Commercial Laundromat Hubs',
        userBase: 'Multi-Branch Staff & Owners',
        description: 'A multi-branch Point of Sale (POS) and operations management SaaS engineered for commercial laundromats. Features real-time revenue analytics, automated job queues, dynamic QR claim tickets, and customer CRM.',
        role: 'Full-Stack Developer & Product Designer (Solo Builder)',
        techStack: ['Next.js', 'React', 'Firebase', 'Tailwind CSS', 'Framer Motion', 'jsPDF'],
        thumbnail: '/laundry_pos.png',
        longThumbnail: '/laundry_pos.png',
        images: ['/laundry_pos.png'],
        problem: 'Commercial laundry shops struggled with manual paper receipts, lost claim tickets, untracked unpaid balances, and zero cross-branch revenue visibility.',
        solution: 'Created an all-in-one POS dashboard with real-time Firebase order sync, automatic PDF receipt generation with dynamic QR tracking codes, and multi-branch management.',
        architecture: ['Next.js & React for high-speed cashier terminal interface', 'Firebase Firestore for sub-second multi-device order synchronization', 'jsPDF & QR engine for instant thermal and PDF receipt generation'],
        outcomes: ['Eliminated lost order slips with digital QR verification', 'Consolidated daily gross revenue, unpaid balances, and branch analytics in real time'],
    },
    {
        title: 'MochiMoney',
        slug: 'mochimoney',
        liveUrl: 'https://mochimoney.online',
        year: 2026,
        category: 'ai',
        clientName: 'Personal Finance Users',
        userBase: 'Active Web App Users',
        description: 'A cozy, intelligent personal finance and smart budgeting companion app. Features on-device AI receipt scanning and automated expense categorization, interactive financial analytics, goal budgeting, and real-time cloud synchronization.',
        role: 'Full-Stack Developer & Product Designer (Solo Builder)',
        techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Firebase', 'Vite'],
        thumbnail: '/mochimoney.png',
        longThumbnail: '/mochimoney.png',
        images: ['/mochimoney.png'],
        problem: 'Most budgeting applications are tedious to maintain, requiring cumbersome manual text entry for every daily purchase.',
        solution: 'Integrated intelligent OCR receipt ingestion to extract totals, dates, and merchant names automatically, pairing it with delightful visual budgeting analytics.',
        architecture: ['Client-side OCR processing for instant privacy-first receipt scanning', 'Zustand lightweight state store for zero-delay UI transitions', 'Firebase Cloud backend for cross-device synchronization'],
        outcomes: ['Reduces receipt logging time from 45 seconds to under 4 seconds', 'Complete real-time monthly budget vs spend analytics'],
    },
    {
        title: 'FitLocker',
        slug: 'fitlocker',
        liveUrl: 'https://fitlocker-5a5ee.web.app/',
        year: 2026,
        category: 'business',
        clientName: 'Playground Fitness & TrainFitness (Kamuning & Visayas)',
        userBase: 'Gym Owners, Coaches, Front-Desk Staff & Members',
        description: 'Gym operations command center engineered for commercial fitness facilities and multi-branch clubs. Brings real-time QR & PIN kiosk check-ins, automated member billing, coach shifts, lead funnels, and owner financial reports into one controlled workspace.',
        role: 'Full-Stack Developer & Product Designer (Solo Builder)',
        techStack: ['React', 'Firebase', 'Tailwind CSS', 'Node.js', 'Cloud Firestore'],
        thumbnail: '/fitlocker.png',
        longThumbnail: '/fitlocker.png',
        images: ['/fitlocker.png'],
        problem: 'Commercial gym operators like Playground Fitness and TrainFitness struggled with fragmented paper logbooks, untracked membership expirations, unauthorized facility access, and cash collection discrepancies at the front desk.',
        solution: 'Architected FitLocker as a high-security gym operations hub featuring sub-second QR kiosk athlete check-ins, automated subscription renewal pipelines, staff PIN audit trails, and multi-branch revenue analytics.',
        architecture: [
            'Real-time Firebase Firestore database for sub-second front-desk kiosk check-ins',
            'Role-based PIN security ensuring staff audit logs for all cash collections and discounts',
            'Responsive tablet and mobile command center for instant owner revenue oversight'
        ],
        outcomes: [
            'Live commercial deployment across Playground Fitness & TrainFitness (Kamuning & Visayas)',
            'Replaced manual paper logbooks with automated QR kiosk check-ins and member analytics',
            'Eliminated front-desk collection leakage with role-based PIN security and audit trails'
        ],
    },
    {
        title: 'BarangayConnect',
        slug: 'barangayconnect',
        liveUrl: 'https://barangayconnect1.web.app/',
        year: 2026,
        category: 'saas',
        clientName: 'Local Barangay Communities & Residents',
        userBase: 'Barangay Officials & Community Residents',
        description: 'Digital governance platform that streamlines community services and brings government processes online. Enables residents to request clearances and permits with real-time tracking, file incident reports with resolution ticketing, book municipal appointments, and receive emergency broadcast notices.',
        role: 'Full-Stack Developer & Product Designer (Solo Builder)',
        techStack: ['React', 'Firebase', 'Tailwind CSS', 'Cloud Firestore', 'Vite'],
        thumbnail: '/barangayconnect.png',
        longThumbnail: '/barangayconnect.png',
        images: ['/barangayconnect.png'],
        problem: 'Community residents faced long physical queues, paper bottlenecks, and multi-day waiting periods for basic barangay clearances, residency certificates, complaint submissions, and official notices.',
        solution: 'Engineered an accessible digital governance web platform featuring online document requests, automated queue tracking, community incident ticketing, municipal appointment scheduling, and administrative analytics.',
        architecture: [
            'React single-page architecture for fast and responsive mobile & desktop resident access',
            'Firebase Cloud Firestore for sub-second document queue workflows and instant status dispatch',
            'Role-based administrative dashboard for barangay officers to review, approve, and track service turnaround times'
        ],
        outcomes: [
            'Live web platform for community document processing, appointment booking, and incident reports',
            'Eliminated physical paperwork bottlenecks with automated real-time status tracking',
            'Centralized emergency announcements and public safety alerts in a single resident portal'
        ],
    }
];

export const MY_EXPERIENCE: IExperience[] = [
    {
        title: 'Full-Stack & AI Solutions Consultant',
        company: 'Freelance & Consulting',
        duration: '2021 - Present',
        description: 'Architecting production-ready SaaS platforms, autonomous AI agent workflows (Codex, Claude, Antigravity), and custom business systems (POS, multi-branch operations, real-time analytics) for clients including Playground Fitness and TrainFitness.',
    },
    {
        title: 'Product Engineer & Solo Builder',
        company: 'Independent SaaS Products',
        duration: '2023 - Present',
        description: 'Engineered and shipped 15+ production systems and modules (including Laundry POS, MochiMoney, Prime Reviewer PH, FitLocker, BarangayConnect) with 10+ commercial deployments serving 500+ active examinees, multi-branch fitness facilities, and business owners.',
    },
];

export const SERVICES: IService[] = [
    {
        number: '01',
        title: 'Full-Stack SaaS & MVP Development',
        tagline: 'From Idea to Production in Weeks',
        description: 'End-to-end design, frontend, backend, auth, database, and cloud deployment. Engineered with Next.js, React, and scalable architectures so your product is fast, secure, and ready for paying users.',
        deliverables: ['Custom Next.js/React App', 'REST/GraphQL API & Database', 'Auth & Stripe/GCash Billing', 'Vercel/Cloud Deployment'],
        timeline: '2 – 4 Weeks',
        badge: 'High Velocity',
    },
    {
        number: '02',
        title: 'AI Engineering & Autonomous Workflows',
        tagline: 'Intelligent Systems That Save Hours',
        description: 'Integration of LLMs, agent pipelines (Codex, Claude, Antigravity), on-device ML/OCR models, and custom data processing to automate complex business workflows and deliver AI-first user experiences.',
        deliverables: ['LLM & Agent Pipelines', 'Document OCR & Parsing', 'Custom Knowledge Chatbots', 'Automated Business Logic'],
        timeline: '1 – 3 Weeks',
        badge: 'AI-First',
    },
    {
        number: '03',
        title: 'Business Systems, POS & Internal Tools',
        tagline: 'Custom Operations Built Around Your Flow',
        description: 'Tailored Point of Sale, inventory management, multi-branch revenue analytics, and CRM portals that replace fragmented spreadsheets with automated, reliable digital hubs.',
        deliverables: ['Multi-Branch POS / CRM', 'Real-Time Revenue Analytics', 'Dynamic QR & PDF Receipts', 'Role-Based Access Control'],
        timeline: '2 – 5 Weeks',
        badge: 'Enterprise Grade',
    },
];

