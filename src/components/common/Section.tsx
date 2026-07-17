import type { ReactNode } from "react";
import Container from "./Container";

interface SectionProps {
    id: string;
    children: ReactNode;
    className?: string;
}

const Section = ({ id, children, className = "" }: SectionProps) => {
    return (
        <section
            id={id}
            className={`
                scroll-mt-24
                py-16
                md:py-20
                lg:py-24
                ${className}
            `}
        >
            <Container>
                {children}
            </Container>            
        </section>
    );
};

export default Section;