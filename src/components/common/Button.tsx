import type { AnchorHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    children: ReactNode;
}

const Button = ({ children, className = "", ...props }: ButtonProps) => {
    return (
        <a
            className={`
            inline-flex
            items-center
            justify-center
            rounded-xl
            bg-primary
            px-6
            py-3
            font-medium
            text-white
            transition-all
            duration-300
            hover:-translate-y-1
            hover:opacity-90
            hover:shadow-lg
            active:translate-y-0
            ${className}
            `}
            {...props}
        >
            {children}
        </a>
    );
};

export default Button;