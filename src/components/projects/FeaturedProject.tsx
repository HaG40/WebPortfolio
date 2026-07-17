import { FaGithub } from "react-icons/fa6";

import Card from "@/components/common/Card";
import { featuredProject } from "@/data/projects";

const FeaturedProject = () => {
    return (
        <Card>
            {/* Header */}
            <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
                {/* Image */}
                <div className="overflow-hidden rounded-xl border border-theme">
                    <div className="aspect-video">
                        <img
                            src={featuredProject.images[0]}
                            alt={featuredProject.title}
                            className="h-full w-full object-cover"
                        />
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

                    {featuredProject.github && (
                        <a
                            href={featuredProject.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-8 inline-flex items-center gap-2 text-secondary transition hover:text-main"
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
    );
};

export default FeaturedProject;