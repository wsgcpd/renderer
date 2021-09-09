import { v2 } from "@govtechsg/open-attestation";

export interface CocTemplateCertificate extends v2.OpenAttestationDocument {
  name: string;
  refno: string;
  certdate: string;
  recertifydate: string;
  recipient: {
    name: string;
  };
}

export const cocTemplateCertificate: CocTemplateCertificate = {
  name: "Certified Career Advisor",
  refno: "123",
  certdate: "123",
  recertifydate: "123",
  issuers: [
    {
      name: "Workforce Singapore",
      documentStore: "0x8aD593607716128c49307743D8CCa1150E4a74FF",
      identityProof: {
        location: "https://nostalgic-galileo-0c9f89.netlify.app/",
        type: v2.IdentityProofType.DNSTxt
      }
    }
  ],
  recipient: {
    name: "Test"
  },
  $template: {
    name: "COC",
    type: v2.TemplateType.EmbeddedRenderer,
    url: "https://nostalgic-galileo-0c9f89.netlify.app/"
  }
};
