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
                    text-3xl
                    font-bold
                    uppercase
                    tracking-wider
                "
            >
                {title}
            </h2>

            {subtitle && (
                <p
                    className="
                        mt-3
                        max-w-2xl
                        text-secondary
                    "
                >
                    {subtitle}
                </p>
            )}
        </div>
    );
};

export default SectionTitle;