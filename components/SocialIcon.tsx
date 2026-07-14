import { Facebook, Github, Linkedin, LucideProps } from 'lucide-react';

interface SocialIconProps extends LucideProps {
    name: string;
}

const MediumIcon = (props: LucideProps) => (
    <svg
        width={props.size || 24}
        height={props.size || 24}
        viewBox="0 0 1043.63 592.71"
        fill="currentColor"
        className={props.className}
        {...props}
    >
        <g data-name="Layer 2">
            <g data-name="Layer 1">
                <path d="M588.67,296.36c0,163.67-131.78,296.35-294.33,296.35S0,460,0,296.36,131.78,0,294.34,0,588.67,132.69,588.67,296.36Z" />
                <path d="M911.56,296.36c0,154.06-65.89,279-147.17,279s-147.17-124.94-147.17-279,65.88-279,147.16-279S911.56,142.3,911.56,296.36Z" />
                <path d="M1043.63,296.36c0,138-23.17,249.94-51.76,249.94s-51.75-111.91-51.75-249.94,23.17-249.94,51.75-249.94S1043.63,158.33,1043.63,296.36Z" />
            </g>
        </g>
    </svg>
);

export const SocialIcon = ({ name, ...props }: SocialIconProps) => {
    switch (name.toLowerCase()) {
        case 'github':
            return <Github {...props} />;
        case 'linkedin':
            return <Linkedin {...props} />;
        case 'facebook':
            return <Facebook {...props} />;
        case 'medium':
            return <MediumIcon {...props} />;
        default:
            return null;
    }
};
