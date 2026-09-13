import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Jericho Sonon — Software & Solutions Engineer',
        short_name: 'Jericho Sonon',
        description:
            'Software & Solutions Engineer based in Quezon City, Philippines. Custom POS platforms, operations dashboards, and web SaaS applications.',
        start_url: '/',
        display: 'standalone',
        background_color: '#0a0a0a',
        theme_color: '#f59e0b',
        icons: [
            {
                src: '/icon.svg',
                sizes: 'any',
                type: 'image/svg+xml',
            },
        ],
    };
}
