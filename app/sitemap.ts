import type { MetadataRoute } from 'next';
import { PROJECTS } from '@/lib/data';

const BASE_URL = 'https://jlsonon-portfolio.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
    const projectRoutes = PROJECTS.map((project) => ({
        url: `${BASE_URL}/projects/${project.slug}`,
        lastModified: new Date('2026-07-01'),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    return [
        {
            url: BASE_URL,
            lastModified: new Date('2026-07-01'),
            changeFrequency: 'monthly' as const,
            priority: 1,
        },
        ...projectRoutes,
    ];
}
