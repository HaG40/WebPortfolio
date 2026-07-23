import { useState } from "react";
import { FaGithub, FaCode } from "react-icons/fa6";

import Card from "@/components/common/Card";
import { additionalProjects } from "@/data/projects";

const AdditionalProjects = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <>
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-2">
                {additionalProjects.map((project) => (
                    <Card
                        key={project.title}
                        className="overflow-hidden"
                    >
                        <div className="aspect-video overflow-hidden rounded-lg border border-theme">
                            <img
                                src={project.image}
                                alt={project.title}
                                onClick={() => setSelectedImage(project.image)}
                                className="h-full w-full cursor-pointer object-cover"
                            />
                        </div>

                        <div className="mt-5">
                            <h3 className="text-xl font-bold text-main">
                                {project.title}
                            </h3>

                            <p className="mt-3 leading-7 text-secondary">
                                {project.description}
                            </p>

                            <div className="mt-5 flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-md border border-theme px-3 py-1 text-sm text-main"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {project.github ? (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-6 inline-flex items-center gap-2 text-secondary transition hover:text-main"
                                >
                                    <FaGithub />
                                    GitHub
                                </a>
                            ) : (
                                <a
                                    href={project.code}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-6 inline-flex items-center gap-2 text-secondary transition hover:text-main"
                                >
                                    <FaCode />
                                    Code
                                </a>
                            )}
                        </div>
                    </Card>
                ))}
            </div>

            {/* Popup */}
            {selectedImage && (
                <div
                    onClick={() => setSelectedImage(null)}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
                >
                    <img
                        src={selectedImage}
                        alt="Project Preview"
                        onClick={(e) => e.stopPropagation()}
                        className="max-h-[80vh] max-w-[90vw] rounded-xl object-contain shadow-2xl"
                    />
                </div>
            )}
        </>
    );
};

export default AdditionalProjects;