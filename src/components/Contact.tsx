import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";

import FadeIn from "@/components/common/FadeIn";
import Card from "@/components/common/Card";
import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";

import { contact } from "@/data/contact";

const Contact = () => {
    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(contact.email);
            alert("Email copied!");
        } catch {
            alert("Unable to copy email.");
        }
    };

    return (
        <Section id="contact">
            <SectionTitle
                title="Contact"
                subtitle="Feel free to contact me."
            />

            <FadeIn>
                <div className="grid gap-6 md:grid-cols-3">
                    {/* Email */}
                    <Card className="text-center transition-all duration-300 hover:-translate-y-1 hover:opacity-95">
                        <FaEnvelope
                            size={34}
                            className="mx-auto text-main"
                        />

                        <h3 className="mt-5 text-xl font-semibold text-main">
                            Email
                        </h3>

                        <p className="mt-3 break-all text-secondary">
                            {contact.email}
                        </p>

                        <button
                            onClick={copyEmail}
                            className="mt-6 cursor-pointer text-primary transition hover:opacity-90"
                        >
                            Copy Email
                        </button>
                    </Card>

                    {/* GitHub */}
                    <Card className="text-center transition-all duration-300 hover:-translate-y-1 hover:opacity-95">
                        <FaGithub
                            size={34}
                            className="mx-auto text-main"
                        />

                        <h3 className="mt-5 text-xl font-semibold text-main">
                            GitHub
                        </h3>

                        <p className="mt-3 text-secondary">
                            github.com/HaG40
                        </p>

                        <a
                            href={contact.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-block text-primary transition hover:opacity-90"
                        >
                            Visit GitHub
                        </a>
                    </Card>

                    {/* LinkedIn */}
                    <Card className="text-center transition-all duration-300 hover:-translate-y-1 hover:opacity-95">
                        <FaLinkedin
                            size={34}
                            className="mx-auto text-main"
                        />

                        <h3 className="mt-5 text-xl font-semibold text-main">
                            LinkedIn
                        </h3>

                        <p className="mt-3 text-secondary">
                            linkedin.com/in/hadsapong-lee-28a783342
                        </p>

                        <a
                            href={contact.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-block text-primary transition hover:opacity-90"
                        >
                            Visit LinkedIn
                        </a>
                    </Card>
                </div>
            </FadeIn>
        </Section>
    );
};

export default Contact;