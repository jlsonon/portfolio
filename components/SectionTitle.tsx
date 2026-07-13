import { cn } from '@/lib/utils';

interface Props {
    className?: string;
    classNames?: {
        container?: string;
        title?: string;
    };
    title: string;
}

const SectionTitle = ({ title, className, classNames }: Props) => {
    return (
        <div
            className={cn(
                'flex items-center gap-4 mb-10',
                className,
                classNames?.container,
            )}
        >
            <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-primary shrink-0 animate-[spin_4s_linear_infinite]"
            >
                <path
                    d="M12 0C12 6.62742 17.3726 12 24 12C17.3726 12 12 17.3726 12 24C12 17.3726 6.62742 12 0 12C6.62742 12 12 6.62742 12 0Z"
                    fill="currentColor"
                />
            </svg>
            <h2
                className={cn(
                    'text-sm font-semibold uppercase tracking-[0.2em] text-foreground/80',
                    classNames?.title,
                )}
            >
                {title}
            </h2>
        </div>
    );
};

export default SectionTitle;
