import type { ReactNode } from "react";

import Container from "./Container";

interface SectionProps {
    id?: string;
    children: ReactNode;
}

const Section = ({ id, children }: SectionProps) => {
    return (
        <section
            id={id}
            className="
                py-16
                md:py-24
                lg:py-28
            "
        >
            <Container>
                {children}
            </Container>
        </section>
    );
};

export default Section;