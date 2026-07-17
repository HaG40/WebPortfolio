type SectionTitleProps = {
    title: string;
    subtitle?: string;
    className?: string;
};

const SectionTitle = ({
    title,
    subtitle,
    className = "",
}: SectionTitleProps) => {
    return (
        <div className={`mb-12 ${className}`}>
            <h2
                className="
                    text-4xl
                    font-bold
                    uppercase
                    tracking-wider
                    text-main
                "
            >
                {title}
            </h2>

            {subtitle && (
                <p className="mt-4 max-w-2xl leading-7 text-secondary">
                    {subtitle}
                </p>
            )}
        </div>
    );
};

export default SectionTitle;