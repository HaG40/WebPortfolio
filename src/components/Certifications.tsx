import Card from "@/components/common/Card";
import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";

import { certifications } from "@/data/certifications";

const Certifications = () => {
  return (
    <Section id="certifications">
      <SectionTitle
        title="Certifications"
        subtitle="Professional certifications and training related to information technology."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {certifications.map((certification) => (
          <Card key={certification.title} className="overflow-hidden">
            <div className="flex aspect-video items-center justify-center border-b border-theme bg-background">
              {certification.image ? (
                <a
                    href={certification.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={certification.image}
                        alt={certification.title}
                        className="aspect-[1.414/1] w-full rounded-lg object-cover"
                    />
                </a>
              ) : (
                <span className="text-secondary">
                  Certificate Image
                </span>
              )}
            </div>

            <div className="mt-5">
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
    </Section>
  );
};

export default Certifications;