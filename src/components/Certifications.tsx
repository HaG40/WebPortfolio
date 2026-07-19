import FadeIn from "@/components/common/FadeIn";
import Card from "@/components/common/Card";
import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";
import { useState } from "react";
import { certifications } from "@/data/certifications";
import {smallCertifications} from "@/data/certifications";
import { FaChevronDown, FaChevronUp, FaDownLong } from "react-icons/fa6";

const Certifications = () => {

    const [toggleSmallCertifications, setToggleSmallCertifications] = useState(false);
    const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);

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
                <div className="mt-8">
                    <button
                        onClick={() =>
                            setToggleSmallCertifications(
                                !toggleSmallCertifications
                            )
                        }
                        className="flex items-center justify-between gap-3 rounded-lg border border-theme px-4 py-3 text-main transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
                    >
                        <span>
                            Additional Certifications (
                            {smallCertifications.length})
                        </span>

                        <FaChevronDown
                            className={`transition-transform duration-300 ${
                                toggleSmallCertifications
                                    ? "rotate-180"
                                    : ""
                            }`}
                        />
                    </button>
                    {toggleSmallCertifications && (
                        <>
                            <h3 className="text-xl font-semibold text-main my-5">Additional Certifications</h3>
                            <div className="grid gap-4 md:grid-cols-3">
                                {smallCertifications.map((certification, index) => (
                                    <Card key={index} className="overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:opacity-95">
                                        <img
                                            src={certification.image}
                                            alt={`Small Certification ${index + 1}`}
                                            onClick={() => setSelectedCertificate(certification.image)}
                                            className="aspect-[1.414/1] w-full cursor-pointer object-cover transition duration-500 hover:scale-105"
                                        />
                                    </Card>
                                ))}
                            </div>
                        </>
                    )}
                </div>
                {selectedCertificate && (
                    <div
                        onClick={() => setSelectedCertificate(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
                    >
                        <img
                            src={selectedCertificate}
                            alt="Certificate Preview"
                            onClick={(e) => e.stopPropagation()}
                            className="max-h-[80vh] max-w-[90vw] rounded-xl object-contain shadow-2xl"
                        />
                    </div>
                )}
            </FadeIn>
        </Section>
    );
};

export default Certifications;