import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            { protocol: 'https', hostname: 'cdn.jsdelivr.net' },
            { protocol: 'https', hostname: 'avatars.githubusercontent.com' },
            { protocol: 'https', hostname: 'raw.githubusercontent.com' },
            { protocol: 'https', hostname: 'user-images.githubusercontent.com' },
            { protocol: 'https', hostname: 'assets.vercel.com' },
            { protocol: 'https', hostname: 'zod.dev' },
        ],
    },
};

export default nextConfig;
