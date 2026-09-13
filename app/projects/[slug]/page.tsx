import { notFound } from 'next/navigation';
import ProjectDetails from './_components/ProjectDetails';
import { PROJECTS } from '@/lib/data';
import { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://jlsonon.xyz';

export const generateStaticParams = async () => {
    return PROJECTS.map((project) => ({ slug: project.slug }));
};

export const generateMetadata = async ({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> => {
    const { slug } = await params;
    const project = PROJECTS.find((p) => p.slug === slug);

    if (!project) {
        return {
            title: 'Project Not Found | Jericho Sonon',
        };
    }

    const title = `${project.title} — Case Study & Architecture`;
    const description = project.description;
    const canonicalUrl = `${BASE_URL}/projects/${project.slug}`;
    const imageUrl = project.thumbnail.startsWith('http')
        ? project.thumbnail
        : `${BASE_URL}${project.thumbnail}`;

    return {
        title,
        description,
        keywords: [
            project.title,
            project.clientName,
            project.category,
            ...project.techStack,
            'Jericho Sonon',
            'Full-Stack Developer Philippines',
            'System Architecture',
            'Case Study',
            'Production POS Platform',
        ].filter((k): k is string => Boolean(k)),
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            type: 'article',
            locale: 'en_US',
            url: canonicalUrl,
            siteName: 'Jericho Sonon — Software & Solutions Engineer',
            title: `${project.title} | Jericho Sonon`,
            description,
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: `${project.title} Production Architecture Preview`,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${project.title} | Jericho Sonon`,
            description,
            images: [imageUrl],
            creator: '@jlsonon',
        },
    };
};

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;
    const project = PROJECTS.find((p) => p.slug === slug);

    if (!project) {
        return notFound();
    }

    const projectUrl = `${BASE_URL}/projects/${project.slug}`;
    const imageUrl = project.thumbnail.startsWith('http')
        ? project.thumbnail
        : `${BASE_URL}${project.thumbnail}`;

    const projectJsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'BreadcrumbList',
                itemListElement: [
                    {
                        '@type': 'ListItem',
                        position: 1,
                        name: 'Home',
                        item: BASE_URL,
                    },
                    {
                        '@type': 'ListItem',
                        position: 2,
                        name: 'Selected Production Systems',
                        item: `${BASE_URL}#selected-projects`,
                    },
                    {
                        '@type': 'ListItem',
                        position: 3,
                        name: project.title,
                        item: projectUrl,
                    },
                ],
            },
            {
                '@type': 'SoftwareApplication',
                name: project.title,
                description: project.description,
                applicationCategory:
                    project.category === 'ai'
                        ? 'UtilitiesApplication'
                        : 'BusinessApplication',
                operatingSystem:
                    project.slug === 'keebs'
                        ? 'macOS, Windows, Android'
                        : project.slug === 'qota'
                        ? 'macOS, Windows'
                        : 'Web Browser, Cloud',
                image: imageUrl,
                url: projectUrl,
                author: {
                    '@type': 'Person',
                    name: 'Jericho Sonon',
                    url: BASE_URL,
                },
                offers: {
                    '@type': 'Offer',
                    price: '0',
                    priceCurrency: 'USD',
                },
                featureList: project.architecture,
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
            />
            <ProjectDetails project={project} />
        </>
    );
};

export default Page;
