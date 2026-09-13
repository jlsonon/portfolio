import { ImageResponse } from 'next/og';

export const alt = 'Jericho Sonon — Software & Solutions Engineer';
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    backgroundColor: '#0a0a0a',
                    padding: '72px',
                    fontFamily: 'sans-serif',
                }}
            >
                {/* Top bar with status & branding */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '48px',
                            height: '48px',
                            borderRadius: '12px',
                            backgroundColor: '#171717',
                            border: '2px solid #f59e0b',
                            color: '#f59e0b',
                            fontWeight: 900,
                            fontSize: '22px',
                        }}
                    >
                        JS
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontSize: '24px', fontWeight: 800, color: '#f5f5f5', letterSpacing: '-0.5px' }}>
                            Jericho Sonon
                        </span>
                        <span style={{ fontSize: '15px', color: '#a3a3a3', fontWeight: 500 }}>
                            Software &amp; Solutions Engineer • Quezon City, PH
                        </span>
                    </div>
                </div>

                {/* Main Headline */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', maxWidth: '1000px' }}>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '6px 14px',
                            borderRadius: '9999px',
                            backgroundColor: 'rgba(245, 158, 11, 0.12)',
                            border: '1px solid rgba(245, 158, 11, 0.3)',
                            color: '#f59e0b',
                            fontSize: '14px',
                            fontWeight: 700,
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase',
                        }}
                    >
                        Production Engineering Portfolio
                    </div>
                    <h1
                        style={{
                            fontSize: '52px',
                            fontWeight: 900,
                            color: '#ffffff',
                            lineHeight: 1.15,
                            margin: 0,
                            letterSpacing: '-1.5px',
                        }}
                    >
                        Custom Business Systems That Replace Manual Work
                    </h1>
                    <p style={{ fontSize: '22px', color: '#a3a3a3', margin: 0, lineHeight: 1.4 }}>
                        Architecting low-latency POS platforms, operational SaaS portals, and automation workflows.
                    </p>
                </div>

                {/* Footer Badges */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%',
                        borderTop: '1px solid #262626',
                        paddingTop: '28px',
                    }}
                >
                    <div style={{ display: 'flex', gap: '10px' }}>
                        {['Next.js 15', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'AVAudioEngine'].map((tech) => (
                            <div
                                key={tech}
                                style={{
                                    padding: '8px 16px',
                                    borderRadius: '8px',
                                    backgroundColor: '#171717',
                                    border: '1px solid #333333',
                                    color: '#d4d4d4',
                                    fontSize: '15px',
                                    fontWeight: 600,
                                }}
                            >
                                {tech}
                            </div>
                        ))}
                    </div>
                    <span style={{ fontSize: '22px', fontWeight: 800, color: '#f59e0b', letterSpacing: '-0.5px' }}>
                        jlsonon.xyz
                    </span>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
