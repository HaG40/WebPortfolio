export type Certification = {
  title: string;
  issuer: string;
  image: string;
  credentialUrl?: string;
};

export const certifications: Certification[] = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    image: "src/assets/certifications/aws-ccp.png",
    credentialUrl: "src/assets/certifications/aws-ccp.pdf",
  },
  {
    title: "ISC2 Certified in Cybersecurity (CC)",
    issuer: "ISC2",
    image: "src/assets/certifications/isc2-cc.png",
    credentialUrl: "src/assets/certifications/isc2-cc.pdf",
  },
];
