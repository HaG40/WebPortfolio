import awsImage from "@/assets/certifications/aws-ccp.png";
import awsPdf from "@/assets/certifications/aws-ccp.pdf";

import isc2Image from "@/assets/certifications/isc2-cc.png";
import isc2Pdf from "@/assets/certifications/isc2-cc.pdf";

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
    image: awsImage,
    credentialUrl: awsPdf,
  },
  {
    title: "ISC2 Certified in Cybersecurity (CC)",
    issuer: "ISC2",
    image: isc2Image,
    credentialUrl: isc2Pdf,
  },
];
