import type { Config } from 'tailwindcss';
import tailwindAnimate from 'tailwindcss-animate';

export default {
    darkMode: ['class'],
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: {
                    DEFAULT: 'hsl(var(--background))',
                    light: 'hsl(var(--background-light))',
                },
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    hover: 'hsl(var(--primary-hover))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    hover: 'hsl(var(--secondary-hover))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            fontFamily: {
                anton: ['var(--font-anton)'],
                grotesk: ['var(--font-anton)'],
                inter: ['var(--font-inter)'],
                'roboto-flex': ['var(--font-inter)'],
            },
            transitionTimingFunction: {
                spring: 'cubic-bezier(0.23, 1, 0.32, 1)',
                'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
                'in-out-smooth': 'cubic-bezier(0.77, 0, 0.175, 1)',
                drawer: 'cubic-bezier(0.32, 0.72, 0, 1)',
            },
            padding: {
                section: 'clamp(60px, 8vw, 120px)',
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: '1rem',
                    sm: '1.5rem',
                    lg: '2rem',
                },
                screens: {
                    xl: '1280px',
                    '2xl': '1280px',
                },
            },
            screens: {
                xs: '420px',
            },
        },
    },
    plugins: [tailwindAnimate],
} satisfies Config;
