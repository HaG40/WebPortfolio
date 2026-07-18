import FadeIn from "@/components/common/FadeIn";
import Card from "@/components/common/Card";
import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";

import { certifications } from "@/data/certifications";

const Certifications = () => {
    return (
        <Section id="certifications">
            <FadeIn>
                <SectionTitle
                    title="Certifications"
                    subtitle="Professional certifications and training related to information technology."
                />

                <div className="grid gap-8 md:grid-cols-2">
                    {certifications.map((certification) => (
                        <Card
                            key={certification.title}
                            className="overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:opacity-95"
                        >
                            <a
                                href={certification.credentialUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={certification.image}
                                    alt={certification.title}
                                    className="aspect-[1.414/1] w-full object-cover transition duration-500 hover:scale-105"
                                />
                            </a>

                            <div className="mt-6">
                                <h3 className="text-xl font-semibold text-main">
                                    {certification.title}
                                </h3>

                                <p className="mt-2 text-secondary">
                                    {certification.issuer}
                                </p>
                            </div>
                        </Card>
                    ))}
                </div>
            </FadeIn>
        </Section>
    );
};

export default Certifications;