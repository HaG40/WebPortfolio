import { FaGithub } from "react-icons/fa6";

import Card from "@/components/common/Card";

import type { AdditionalProject } from "@/data/projects";

type ProjectCardProps = {
    project: AdditionalProject;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <Card className="flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:opacity-95">
            <img
                src={project.image}
                alt={project.title}
                className="aspect-video w-full object-cover"
            />

            <div className="mt-5 flex flex-1 flex-col">
                <h3 className="text-xl font-semibold text-main">
                    {project.title}
                </h3>

                <p className="mt-3 flex-1 leading-7 text-secondary">
                    {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                        <span
                            key={technology}
                            className="rounded-lg border border-theme px-3 py-2 text-sm text-main"
                        >
                            {technology}
                        </span>
                    ))}
                </div>

                {project.github && (
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center gap-2 text-secondary transition hover:opacity-90 hover:text-main"
                    >
                        <FaGithub />
                        GitHub
                    </a>
                )}
            </div>
        </Card>
    );
};

export default ProjectCard;