import { type ReactNode } from "react";

type CardProps = {
    children: ReactNode;
    className?: string;
};

const Card = ({ children, className = "" }: CardProps) => {
    return (
        <div
            className={`
                rounded-xl
                border
                p-6
                ${className}
            `}
        >
            {children}
        </div>
    );
};

export default Card;