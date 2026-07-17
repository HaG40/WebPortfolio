import { FaGithub } from "react-icons/fa6";

import Card from "@/components/common/Card";

import type { AdditionalProject } from "@/data/projects";

type ProjectCardProps = {
  project: AdditionalProject;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden">
      {/* Project Image */}
      <div className="flex aspect-video items-center justify-center border-b border-theme bg-background">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="text-secondary">
            Project Image
          </span>
        )}
      </div>

      {/* Content */}
      <div className="mt-5">
        <h3 className="text-xl font-semibold text-main">
          {project.title}
        </h3>

        <p className="mt-3 text-secondary">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-md border border-theme px-3 py-1 text-sm text-main"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-6 flex gap-5">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-secondary transition hover:text-main"
            >
              <FaGithub size={18} />
              <span>GitHub</span>
            </a>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;