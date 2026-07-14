import { GENERAL_INFO, SOCIAL_LINKS } from '@/lib/data';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-border/30 py-12" id="contact">
            <div className="container">
                {/* CTA row */}
                <div className="text-center mb-10">
                    <p className="text-muted-foreground mb-3 text-sm uppercase tracking-widest font-semibold">
                        Have a project in mind?
                    </p>
                    <a
                        href={`mailto:${GENERAL_INFO.email}`}
                        className="text-2xl sm:text-3xl font-anton hover:text-primary transition-colors duration-200"
                    >
                        {GENERAL_INFO.email}
                    </a>
                </div>

                {/* Divider */}
                <div className="border-t border-border/20 pt-8">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        {/* Copyright */}
                        <p className="text-xs text-muted-foreground">
                            © {year} Jericho Sonon. Designed &amp; built by me.
                        </p>

                        {/* Social links */}
                        <ul className="flex items-center gap-5">
                            {SOCIAL_LINKS.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.url}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        className="text-xs text-muted-foreground uppercase tracking-widest hover:text-primary transition-colors duration-200"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
