import { IProject, IExperience, IService, IClient, ITestimonial } from '@/types';

export const GENERAL_INFO = {
    email: 'jlsonon12@gmail.com',
    emailSubject: "Let's Build a Custom System",
    emailBody: 'Tell me what your business is currently doing manually, what isn\'t working, and your target timeline.',
    calendarUrl: 'https://cal.com/jlsonon',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/jlsonon' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/jlsonon/' },
    { name: 'medium', url: 'https://medium.com/@jlsonon12' },
    { name: 'facebook', url: 'https://www.facebook.com/jlsonon' },
];

export const WHO_I_BUILD_FOR = [
    {
        icon: 'Dumbbell',
        title: 'Gyms & Fitness Clubs',
        tagline: 'Memberships, POS & Front-Desk Kiosks',
        description: 'Sub-second QR athlete check-ins, automated subscription renewals, staff PIN security, and multi-branch revenue tracking.',
        example: 'FitLocker (3 Deployed Branches)',
    },
    {
        icon: 'Shirt',
        title: 'Laundromats & Commercial Hubs',
        tagline: 'Job Queues & Thermal QR Receipts',
        description: 'Touch-friendly POS order entry, digital claim ticket lookup, thermal receipt generation, and end-of-day revenue reconciliation.',
        example: 'Laundry POS (Commercial SaaS)',
    },
    {
        icon: 'GraduationCap',
        title: 'EdTech & Review Centers',
        tagline: 'Timed Testing & Diagnostics',
        description: 'Interactive licensure simulation engines, timed mock examinations, subject-specific weakness tracking, and student progress dashboards.',
        example: 'Prime Reviewer PH (500+ Students)',
    },
    {
        icon: 'Building2',
        title: 'Founders & Growing Businesses',
        tagline: 'Custom Portals & Full-Stack MVPs',
        description: 'Bespoke customer portals, subscription billing, document clearance pipelines, and automated business workflows built around your team.',
        example: 'BarangayConnect & MochiMoney',
    },
];

export const CLIENTS: IClient[] = [
    {
        name: 'Playground Fitness',
        category: 'Athletic Facility & Gym',
        description: 'Front-desk operations, automated QR check-in kiosks, and membership subscription tracking.',
        badge: 'Commercial Client',
        location: 'Philippines',
        projectSlug: 'fitlocker',
        metrics: 'Full Facility Operations Digitized',
    },
    {
        name: 'TrainFitness (Kamuning & Visayas)',
        category: 'Multi-Branch Fitness Club',
        description: 'Multi-location branch administration, subscription renewals, and front-desk collection audit trails.',
        badge: '2 Branches Deployed',
        location: 'Quezon City, Metro Manila',
        projectSlug: 'fitlocker',
        metrics: '2 Branches Synchronized',
    },
    {
        name: 'BarangayConnect Communities',
        category: 'Digital Governance & Citizen Portal',
        description: 'Online clearance processing, automated incident ticketing, and community appointment scheduling.',
        badge: 'Citizen Portal',
        location: 'Philippines',
        projectSlug: 'barangayconnect',
        metrics: 'Online Document Queues',
    },
    {
        name: 'Civil Service Exam Reviewers',
        category: 'EdTech & Licensure Prep',
        description: 'Nationwide examinee test simulator with diagnostic prediction and intelligent progress tracking.',
        badge: '500+ Active Examinees',
        location: 'Philippines',
        projectSlug: 'prime-reviewer-ph',
        metrics: '500+ Active Students',
    },
];

export const MY_STACK = {
    frontend: [
        { name: 'React', icon: '/icons/react.svg' },
        { name: 'Next.js', icon: '/icons/next-js.svg' },
        { name: 'Tailwind CSS', icon: '/icons/tailwind-css.svg' },
        { name: 'Zustand', icon: '/icons/zustand.svg' },
        { name: 'Shadcn UI', icon: '/icons/shadcn.png' },
        { name: 'Zod', icon: '/icons/zod.svg' },
    ],
    backend: [
        { name: 'Node.js', icon: '/icons/node-js.svg' },
        { name: 'Express.js', icon: '/icons/express-js.svg' },
        { name: 'FastAPI', icon: '/icons/fastapi.svg' },
        { name: 'Django', icon: '/icons/django.svg' },
        { name: 'Firebase', icon: '/icons/firebase.svg' },
    ],
    database: [
        { name: 'PostgreSQL', icon: '/icons/postgresql.svg' },
        { name: 'Cloud Firestore', icon: '/icons/firestore.svg' },
        { name: 'MongoDB', icon: '/icons/mongodb.svg' },
        { name: 'Redis', icon: '/icons/redis.svg' },
    ],
    infrastructure: [
        { name: 'Docker', icon: '/icons/docker.svg' },
        { name: 'Google Cloud', icon: '/icons/google-cloud.svg' },
        { name: 'Vercel', icon: '/icons/vercel.png' },
        { name: 'Git', icon: '/icons/git.svg' },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Prime Reviewer PH',
        slug: 'prime-reviewer-ph',
        liveUrl: 'https://primereviewerph.online',
        year: 2026,
        category: 'saas',
        clientName: 'Civil Service Review Students',
        userBase: '500+ Active Examinees',
        description: 'A comprehensive digital licensure examination platform engineered for Filipino students. Features timed diagnostic mock exams, subject-specific weakness tracking, passing probability predictors, and individual analytics dashboards.',
        role: 'Full-Stack Developer & Product Designer (Solo Builder)',
        techStack: ['Next.js', 'React', 'Tailwind CSS', 'PostgreSQL'],
        thumbnail: '/prime_reviewer.png',
        longThumbnail: '/prime_reviewer.png',
        images: ['/prime_reviewer.png'],
        problem: 'Civil Service examinees relied on paper booklets with outdated answer keys and no diagnostic analytics to identify weak subject areas before test day.',
        solution: 'Engineered an interactive testing engine with timed simulation modes, category-based weakness tracking, and instant score calculations.',
        highlightMetric: 'Engineered a timed testing engine adopted by 500+ Civil Service examinees with 99.9% uptime.',
        architecture: [
            'Next.js App Router for zero-latency static rendering and responsive mobile test taking',
            'PostgreSQL for secure question banks and detailed student response logs',
            'Tailwind CSS with high-contrast examination view and distraction-free testing layout'
        ],
        outcomes: [
            'Adopted by 500+ active students preparing for nationwide Civil Service examinations',
            'Average student engagement of 45+ minutes per practice session with real-time feedback'
        ],
    },
    {
        title: 'Laundry POS',
        slug: 'laundry-pos',
        liveUrl: 'https://laundryos-xi.vercel.app/login',
        year: 2026,
        category: 'business',
        clientName: 'Commercial Laundromat Hubs',
        userBase: 'Cashiers, Operators & Shop Owners',
        description: 'A Point of Sale (POS) and operations management SaaS engineered for commercial laundromats. Features real-time multi-device order queues, dynamic QR claim tickets, customer CRM, and end-of-day revenue reconciliation.',
        role: 'Full-Stack Developer & Product Designer (Solo Builder)',
        techStack: ['Next.js', 'React', 'Firebase', 'Tailwind CSS', 'jsPDF'],
        thumbnail: '/laundry_pos.png',
        longThumbnail: '/laundry_pos.png',
        images: ['/laundry_pos.png'],
        problem: 'Commercial laundry shops struggled with lost paper claim tickets, untracked unpaid balances, and manual end-of-day cash reconciliation.',
        solution: 'Built a high-speed touch POS with real-time Firebase order sync, instant thermal & PDF receipt generation with dynamic QR tracking codes, and multi-branch management.',
        highlightMetric: 'Replaced paper receipt books with 2-second thermal QR receipts and automated end-of-day revenue reconciliation.',
        architecture: [
            'Next.js & React for high-speed touch-friendly cashier terminal interface',
            'Firebase Firestore for sub-second multi-device order queue synchronization',
            'jsPDF & QR engine for instant thermal and PDF receipt generation'
        ],
        outcomes: [
            'Eliminated lost order slips with digital QR verification and instant customer search',
            'Automated end-of-day gross revenue, unpaid balance tracking, and cash audit trails'
        ],
    },
    {
        title: 'MochiMoney',
        slug: 'mochimoney',
        liveUrl: 'https://mochimoney.online',
        year: 2026,
        category: 'ai',
        clientName: 'Personal Finance Users',
        userBase: 'Active Web App Users',
        description: 'An intelligent personal finance and smart budgeting companion app. Features on-device OCR receipt scanning, automated expense categorization, goal budgeting, and real-time cloud synchronization.',
        role: 'Full-Stack Developer & Product Designer (Solo Builder)',
        techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Firebase', 'Vite'],
        thumbnail: '/mochimoney.png',
        longThumbnail: '/mochimoney.png',
        images: ['/mochimoney.png'],
        problem: 'Manual expense logging is tedious, causing most users to abandon personal budgeting apps within their first two weeks.',
        solution: 'Integrated intelligent OCR receipt ingestion to extract merchant names, totals, and transaction dates in seconds, paired with clear visual spending analytics.',
        highlightMetric: 'Reduced manual receipt logging time from 45 seconds to under 4 seconds with on-device OCR.',
        architecture: [
            'Client-side OCR processing for instant privacy-first receipt scanning',
            'Zustand lightweight state store for zero-delay UI transitions',
            'Firebase Cloud backend for cross-device synchronization'
        ],
        outcomes: [
            'Cuts receipt logging time from 45 seconds to under 4 seconds',
            'Complete real-time monthly budget vs spend analytics with zero data loss'
        ],
    },
    {
        title: 'FitLocker',
        slug: 'fitlocker',
        liveUrl: 'https://fitlocker-5a5ee.web.app/',
        year: 2026,
        category: 'business',
        clientName: 'Playground Fitness & TrainFitness (Kamuning & Visayas)',
        userBase: 'Gym Owners, Coaches, Front-Desk Staff & Members',
        description: 'Gym operations platform engineered for commercial athletic facilities and multi-branch clubs. Brings sub-second QR kiosk check-ins, automated membership renewal alerts, coach shift management, and cash collection audit trails into one controlled workspace.',
        role: 'Full-Stack Developer & Product Designer (Solo Builder)',
        techStack: ['React', 'Firebase', 'Tailwind CSS', 'Node.js', 'Cloud Firestore'],
        thumbnail: '/fitlocker.png',
        longThumbnail: '/fitlocker.png',
        images: ['/fitlocker.png'],
        problem: 'Commercial gym operators struggled with paper logbooks, untracked membership expirations, unauthorized entry, and collection discrepancies at the front desk.',
        solution: 'Architected FitLocker as a centralized gym operations hub with sub-second QR kiosk check-ins, automated subscription renewal pipelines, staff PIN audit trails, and multi-branch revenue analytics.',
        highlightMetric: 'Synchronized member records, subscriptions, and QR check-ins across 3 commercial gym locations with 0 lost logs.',
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
        description: 'Digital governance platform that streamlines community services and brings municipal processes online. Enables residents to request clearances with real-time status tracking, submit incident tickets, book appointments, and receive public safety broadcasts.',
        role: 'Full-Stack Developer & Product Designer (Solo Builder)',
        techStack: ['React', 'Firebase', 'Tailwind CSS', 'Cloud Firestore', 'Vite'],
        thumbnail: '/barangayconnect.png',
        longThumbnail: '/barangayconnect.png',
        images: ['/barangayconnect.png'],
        problem: 'Community residents faced long physical queues and multi-day waiting periods for basic barangay clearances, residency certificates, and complaint submissions.',
        solution: 'Engineered an accessible digital governance platform featuring online document requests, automated queue tracking, incident resolution ticketing, and municipal appointment scheduling.',
        highlightMetric: 'Digitized community document clearances, reducing resident physical queue times from days to minutes.',
        architecture: [
            'React single-page architecture for fast and responsive mobile & desktop resident access',
            'Firebase Cloud Firestore for sub-second document queue workflows and instant status dispatch',
            'Role-based administrative dashboard for barangay officers to review, approve, and track turnaround times'
        ],
        outcomes: [
            'Live web platform for community document processing, appointment booking, and incident reports',
            'Eliminated physical paperwork bottlenecks with automated real-time status tracking',
            'Centralized emergency announcements and public safety alerts in a single resident portal'
        ],
    },
    {
        title: 'Solar Spartz Industries',
        slug: 'solar-spartz',
        liveUrl: 'https://solarspartz.com',
        year: 2026,
        category: 'business',
        clientName: 'Solar Spartz Energy Corporation',
        userBase: 'Residential Homeowners & C&I Facility Managers',
        description: 'Commercial and residential solar engineering platform and EPC operations system. Features an interactive Meralco bill reduction and ROI calculator, real-time hybrid system sizing, Tier-1 Bill of Materials (BOM) visualizer, and Net Metering engineering dispatch.',
        role: 'Lead Full-Stack Engineer & Product Designer (Solo Builder)',
        techStack: ['Next.js 16', 'React 19', 'Tailwind CSS v4', 'GSAP', 'Radix UI', 'Framer Motion'],
        thumbnail: '/solar_spartz.png',
        longThumbnail: '/solar_spartz.png',
        images: ['/solar_spartz.png', '/projects/images/solar-spartz-1.jpg', '/projects/images/solar-spartz-2.jpg'],
        problem: 'Property owners and industrial facility managers lacked transparent engineering calculations for solar sizing, ROI payback periods, and complex Net Metering compliance.',
        solution: 'Built an engineering-grade solar configuration platform that models real-world Philippine solar irradiance, calculates 25-year levelized energy savings, and generates turnkey engineering proposals.',
        highlightMetric: 'Engineered an interactive solar ROI calculator modeling 25-year energy savings with PEE-compliant system sizing.',
        architecture: [
            'Next.js App Router with React 19 server rendering for sub-second quote generation',
            'Dynamic mathematical modeling engine calculating Meralco tariff brackets and Net Metering credits',
            'Tailwind CSS v4 and GSAP for micro-interaction rich energy production visualizers'
        ],
        outcomes: [
            'Turnkey platform deployed for residential and C&I solar operations across Metro Manila & Luzon',
            'Automated system sizing calculations from 5kW residential hybrids to 500kW commercial arrays',
            'Streamlined Net Metering and municipal electrical permit workflows'
        ],
    },
    {
        title: 'OpticBooth',
        slug: 'opticbooth',
        liveUrl: '#',
        year: 2026,
        category: 'business',
        clientName: 'Event Photobooth Operators & Experiential Agencies',
        userBase: 'Photobooth Operators, Event DJs & 10,000+ Event Guests',
        description: 'Paperless digital photobooth kiosk platform with native Nikon Z 50 II mirrorless and DSLR hardware tethering. Features studio-grade optical telemetry HUD, real-time 3-pose composite strip rendering, and an instant 10-second auto-dismiss dynamic QR mobile delivery system.',
        role: 'Hardware Systems & Full-Stack Engineer (Solo Builder)',
        techStack: ['Electron', 'React', 'Tailwind CSS', 'Vite', 'Cloud Firestore', 'Nikon UVC/PTP'],
        thumbnail: '/opticbooth.png',
        longThumbnail: '/opticbooth.png',
        images: ['/opticbooth.png'],
        problem: 'Traditional event photobooths suffer from slow dye-sublimation printer jams, ribbon shortages, and fragile tablet cameras that fail under low-light party conditions.',
        solution: 'Architected a zero-latency kiosk software bridging Nikon mirrorless cameras over USB-C UVC/PTP, delivering high-res composite strips to guest smartphones via instant dynamic QR codes in under 10 seconds.',
        highlightMetric: 'Eliminated physical printer maintenance and jams with 10-second auto-dismiss dynamic QR mobile delivery.',
        architecture: [
            'Low-latency UVC video stream with real-time autofocus reticle and camera telemetry HUD',
            'Real-time HTML5 canvas rendering engine assembling multi-pose photo strips in <300ms',
            'High-concurrency cloud backend powering offline-first kiosk queuing and instant mobile handoff'
        ],
        outcomes: [
            '100% paperless kiosk workflow eliminating dye-sub printer costs and mechanical failures',
            'Sub-10-second guest turnover queue cycle maximizing event attendee throughput',
            'White-label operator studio with custom theme designers and multi-event booking management'
        ],
    },
    {
        title: 'Keebs',
        slug: 'keebs',
        liveUrl: '#',
        year: 2026,
        category: 'ai',
        clientName: 'Mechanical Keyboard Enthusiasts & Power Typists',
        userBase: 'macOS & Windows Power Users',
        description: 'High-performance native mechanical keyboard acoustic synthesis and haptic feedback engine for macOS and Windows. Simulates iconic switches (Holy Panda, Cherry MX, NovelKeys) with sub-5ms audio latency, binaural 3D spatial key panning, MacBook Force Touch trackpad haptics, and smart microphone call muting.',
        role: 'Native Systems Engineer & Product Designer (Solo Builder)',
        techStack: ['Swift 6.0', 'SwiftUI', 'AppKit', 'C# / .NET 8', 'AVAudioEngine', 'Core Haptics'],
        thumbnail: '/keebs.png',
        longThumbnail: '/keebs.png',
        images: ['/keebs.png', '/keebs_icon.png'],
        problem: 'Remote workers and laptop typists miss the tactile and acoustic feedback of physical custom mechanical keyboards, while existing sound apps suffer from noticeable audio lag (>40ms) and interrupt voice calls.',
        solution: 'Engineered a low-latency native utility using low-level Core Audio and AVAudioEngine that maps physical keyboard coordinates to binaural stereo panning, triggers MacBook trackpad haptics, and automatically detects microphone streams to mute during calls.',
        highlightMetric: 'Engineered a native audio & haptic engine delivering switch acoustics with sub-5ms latency and binaural spatial panning.',
        architecture: [
            'AVAudioEngine low-latency audio pipeline with pre-cached high-sample mechanical switch buffers',
            'Physical coordinate mapping calculating real-time binaural stereo panning based on keypress positions',
            'NSHapticFeedbackManager integration simulating physical switch bottom-out on MacBook trackpads',
            'CoreAudio stream monitoring automatically muting keyboard playback during Zoom/Teams/Discord calls'
        ],
        outcomes: [
            'Native multi-platform desktop release packaged for macOS (.dmg) and Windows (.exe)',
            'Sub-5ms global key-to-audio latency imperceptible to power typists typing over 120 WPM',
            'Zero audio pollution on conference calls with intelligent CoreAudio microphone detection'
        ],
    }
];

export const MY_EXPERIENCE: IExperience[] = [
    {
        title: 'Software & Solutions Engineer',
        company: 'Freelance & Independent Consulting',
        duration: '2024 - Present',
        description: 'Architecting custom business platforms, POS systems, multi-branch operations dashboards, and web SaaS applications for commercial clients including Playground Fitness, TrainFitness, and laundromat hubs.',
    },
    {
        title: 'Product Engineer & Solo Builder',
        company: 'Independent SaaS Products',
        duration: '2023 - Present',
        description: 'Engineered and shipped 8 flagship production systems with 10+ commercial deployments serving 500+ active examinees, fitness facilities, and business owners.',
    },
];

export const TESTIMONIALS: ITestimonial[] = [
    {
        author: 'Claire Castro',
        role: 'Operations & Front Desk',
        company: 'Playground Fitness',
        badge: '3 Commercial Branches Deployed',
        quote: 'Jericho eliminated our front-desk logbook bottlenecks and synced our member records across locations. The QR kiosk check-in has run with zero downtime since day one.',
        highlight: 'Zero Downtime QR Kiosks',
    },
    {
        author: 'Miguel Tarnate',
        role: 'Operations & Front Desk',
        company: 'Playground Fitness',
        badge: 'Verified Production Client',
        quote: 'Member check-ins and coach shift tracking used to cause daily front-desk chaos. Jericho built a system that our entire staff adopted in one day with zero training needed.',
        highlight: 'Instant Staff Adoption',
    },
];

export const SERVICES: IService[] = [
    {
        number: '01',
        title: 'Custom Business Systems & POS',
        tagline: 'Replace Spreadsheets & Paper Logbooks',
        description: 'Tailored Point of Sale, inventory management, multi-branch revenue analytics, and staff operation portals designed around how your business actually runs.',
        deliverables: ['Custom Touch POS / Operations Hub', 'Multi-Branch Revenue Sync', 'Dynamic QR & PDF Receipts', 'Staff PIN Security & Cash Audit Trails'],
        timeline: '2 – 4 Weeks',
        badge: 'Core Focus',
        niches: ['Gyms & Fitness Clubs', 'Laundromats & Commercial Hubs', 'Front-Desk Operations'],
        exampleProject: {
            name: 'FitLocker (3 Branches Deployed)',
            slug: 'fitlocker',
        },
    },
    {
        number: '02',
        title: 'SaaS Platforms & Web Applications',
        tagline: 'From Problem to Production in Weeks',
        description: 'End-to-end design, frontend UX, backend APIs, auth, database, and cloud deployment. Fast, secure web applications ready for real paying customers.',
        deliverables: ['Custom Next.js/React Platform', 'Database & API Architecture', 'Auth & Stripe/GCash Billing', 'Vercel / Cloud Infrastructure'],
        timeline: '2 – 4 Weeks',
        badge: 'High Velocity',
        niches: ['EdTech & Review Centers', 'Community Portals', 'Founders & B2B Startups'],
        exampleProject: {
            name: 'Prime Reviewer PH (500+ Students)',
            slug: 'prime-reviewer-ph',
        },
    },
    {
        number: '03',
        title: 'Workflow Automation & AI Systems',
        tagline: 'Intelligent Workflows That Save Hours',
        description: 'Automated document processing, OCR scanning pipelines, appointment queues, and custom business logic that eliminate repetitive manual data entry.',
        deliverables: ['OCR & Document Parsing', 'Automated Renewal / Alert Pipelines', 'Customer CRM & Queue Systems', 'Third-Party API Integrations'],
        timeline: '1 – 3 Weeks',
        badge: 'High Impact',
        niches: ['Receipt OCR & Expense Audits', 'Citizen Municipal Requests', 'Automated Task Queues'],
        exampleProject: {
            name: 'MochiMoney & BarangayConnect',
            slug: 'mochimoney',
        },
    },
];
