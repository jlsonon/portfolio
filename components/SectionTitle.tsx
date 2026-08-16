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
                'flex items-center gap-3.5 mb-8 sm:mb-12',
                className,
                classNames?.container,
            )}
        >
            <div className="size-6 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-primary animate-[spin_8s_linear_infinite]"
                    aria-hidden="true"
                >
                    <path
                        d="M12 0C12 6.62742 17.3726 12 24 12C17.3726 12 12 17.3726 12 24C12 17.3726 6.62742 12 0 12C6.62742 12 12 6.62742 12 0Z"
                        fill="currentColor"
                    />
                </svg>
            </div>
            <h2
                className={cn(
                    'text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-foreground/80 font-inter',
                    classNames?.title,
                )}
            >
                {title}
            </h2>
            <div className="h-px grow bg-gradient-to-r from-border/50 to-transparent max-w-[200px]" />
        </div>
    );
};

export default SectionTitle;
