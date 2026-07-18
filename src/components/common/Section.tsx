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
                py-8
                md:py-12
                lg:py-16
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