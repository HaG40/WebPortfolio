import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";

import AdditionalProjects from "./projects/AdditionalProjects";
import FeaturedProject from "./projects/FeaturedProject";

const Projects = () => {
    return (
        <Section id="projects">
            <SectionTitle
                title="Projects"
                subtitle="A selection of projects that showcase my technical skills and development experience."
            />

            <FeaturedProject />

            <AdditionalProjects />
        </Section>
    );
};

export default Projects;