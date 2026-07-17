import type { AnchorHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    children: ReactNode;
}

const Button = ({ children, className = "", ...props }: ButtonProps) => {
    return (
        <a
            className={`
                inline-flex items-center justify-center
                rounded-xl
                bg-primary
                px-6
                py-3
                font-medium
                text-white
                transition
                hover:bg-primary-hover
                ${className}
            `}
            {...props}
        >
            {children}
        </a>
    );
};

export default Button;