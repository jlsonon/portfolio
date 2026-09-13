import type { MetadataRoute } from 'next';
import { PROJECTS } from '@/lib/data';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://jlsonon.xyz';

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();

    const projectRoutes: MetadataRoute.Sitemap = PROJECTS.map((project) => ({
        url: `${BASE_URL}/projects/${project.slug}`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.85,
    }));

    return [
        {
            url: BASE_URL,
            lastModified: now,
            changeFrequency: 'daily',
            priority: 1.0,
        },
        ...projectRoutes,
    ];
}
