import awsImage from "@/assets/certifications/aws-ccp.png";
import awsPdf from "@/assets/certifications/aws-ccp.pdf";

import isc2Image from "@/assets/certifications/isc2-cc.png";
import isc2Pdf from "@/assets/certifications/isc2-cc.pdf";
import isc2completion from "@/assets/certifications/8b7d747a-b7e0-4ad0-8a3c-e8ef8484bf37.png";
import coureseraImage from "@/assets/certifications/courseraimg.png";
import devlab3 from "@/assets/certifications/certificate.png";
import boentodevgit from "@/assets/certifications/borntodev-acdemy_GitHub for Developer _certifiacte.png";
import borntodevcs from "@/assets/certifications/borntodev-acdemy_Introduction to Computer Science_certifiacte.png";
import borntodevcli from "@/assets/certifications/borntodev-acdemy_Command Prompt 101_certifiacte.png";
import crybrarycli from "@/assets/certifications/cybrary-cert-windows-cli-basics.png";

export type Certification = {
  title?: string;
  issuer?: string;
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

export const smallCertifications: Certification[] = [
  {
    image: isc2completion,
  },
  {
    image: coureseraImage,
  },
  {
    image: devlab3,
  },
  {
    image: boentodevgit,
  },
  {
    image: borntodevcs,
  },
  {
    image: borntodevcli,
  },
  {
    image: crybrarycli,
  },
];
