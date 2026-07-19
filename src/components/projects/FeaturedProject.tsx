import { useState } from "react";
import { FaGithub } from "react-icons/fa6";

import Card from "@/components/common/Card";
import { featuredProject } from "@/data/projects";

const FeaturedProject = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [popupImage, setPopupImage] = useState<string | null>(null);

    return (
        <>
            <Card>
                {/* Header */}
                <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
                    {/* Image */}
                    <div>
                        <div className="overflow-hidden rounded-xl border border-theme">
                            <div className="overflow-hidden rounded-lg border border-theme">
                                <img
                                    src={featuredProject.images[selectedImage]}
                                    alt={featuredProject.title}
                                    onClick={() =>
                                        setPopupImage(
                                            featuredProject.images[selectedImage]
                                        )
                                    }
                                    className="w-full cursor-pointer object-contain"
                                />
                            </div>
                        </div>

                        {/* Gallery */}
                        <div className="mt-4 grid grid-cols-4 gap-3">
                            {featuredProject.images.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedImage(index)}
                                    className={`overflow-hidden rounded-lg border transition duration-300 hover:opacity-90 ${
                                        selectedImage === index
                                            ? "border-red-700"
                                            : "border-theme"
                                    }`}
                                >
                                    <img
                                        src={image}
                                        alt={`Project ${index + 1}`}
                                        className="aspect-video w-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Summary */}
                    <div className="flex flex-col">
                        <h3 className="text-3xl font-bold text-main">
                            {featuredProject.title}
                        </h3>

                        <p className="mt-4 leading-7 text-secondary">
                            {featuredProject.shortDescription}
                        </p>

                        {/* Technologies */}
                        <div className="mt-6 flex flex-wrap gap-2">
                            {featuredProject.technologies.map((technology) => (
                                <span
                                    key={technology}
                                    className="rounded-md border border-theme px-3 py-1 text-sm text-main"
                                >
                                    {technology}
                                </span>
                            ))}
                        </div>

                        {/* GitHub */}
                        {featuredProject.github && (
                            <a
                                href={featuredProject.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-8 inline-flex items-center gap-2 text-secondary transition hover:opacity-90 hover:text-main"
                            >
                                <FaGithub size={18} />
                                GitHub
                            </a>
                        )}
                    </div>
                </div>

                {/* Description */}
                <div className="mt-10">
                    <h4 className="mb-3 text-lg font-semibold text-main">
                        Overview
                    </h4>

                    <p className="leading-8 text-secondary">
                        {featuredProject.description}
                    </p>
                </div>

                {/* Features & Contribution */}
                <div className="mt-10 grid gap-8 lg:grid-cols-2">
                    <div>
                        <h4 className="mb-4 text-lg font-semibold text-main">
                            Features
                        </h4>

                        <ul className="space-y-3 text-secondary">
                            {featuredProject.features.map((feature) => (
                                <li key={feature}>• {feature}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-4 text-lg font-semibold text-main">
                            My Contribution
                        </h4>

                        <ul className="space-y-3 text-secondary">
                            {featuredProject.contributions.map((item) => (
                                <li key={item}>• {item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Card>

            {/* Popup */}
            {popupImage && (
                <div
                    onClick={() => setPopupImage(null)}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
                >
                    <img
                        src={popupImage}
                        alt="Project Preview"
                        onClick={(e) => e.stopPropagation()}
                        className="max-h-[80vh] max-w-[90vw] rounded-xl object-contain shadow-2xl"
                    />
                </div>
            )}
        </>
    );
};

export default FeaturedProject;