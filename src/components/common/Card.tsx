import type { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    className?: string;
}

const Card = ({ children, className = "" }: CardProps) => {
    return (
        <div
            className={`
                rounded-[18px]
                border
                border-theme
                bg-surface
                p-6
                shadow-lg
                transition-all
                duration-300
                hover:border-primary
                hover:-translate-y-1
                ${className}
            `}
        >
            {children}
        </div>
    );
};

export default Card;