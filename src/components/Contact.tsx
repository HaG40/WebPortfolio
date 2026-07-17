import { FaEnvelope, FaGithub } from "react-icons/fa6";

import Card from "@/components/common/Card";
import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";

import { contact } from "@/data/contact";

const Contact = () => {
    return (
        <Section id="contact">
            <SectionTitle
                title="Contact"
                subtitle="Feel free to contact me."
            />

            <Card className="mx-auto max-w-2xl">
                <div className="space-y-6">
                    <a
                        href={`mailto:${contact.email}`}
                        className="flex items-center gap-4 text-secondary transition hover:text-main"
                    >
                        <FaEnvelope />
                        {contact.email}
                    </a>

                    <a
                        href={contact.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 text-secondary transition hover:text-main"
                    >
                        <FaGithub />
                        GitHub
                    </a>
                </div>
            </Card>
        </Section>
    );
};

export default Contact;