import { v2 } from "@govtechsg/open-attestation";

export interface CDFTemplateCertificate extends v2.OpenAttestationDocument {
  name: string;
  refno: string;
  certdate: string;
  recertifydate: string;
  recipient: {
    name: string;
  };
}

export const cocTemplateCertificate: CDFTemplateCertificate = {
  name: "Certified Career Advisor",
  refno: "123",
  certdate: "123",
  recertifydate: "123",
  issuers: [
    {
      name: "Workforce Singapore",
      documentStore: "0xBBb55Bd1D709955241CAaCb327A765e2b6D69c8b",
      identityProof: {
        location: "few-green-cat.sandbox.openattestation.com",
        type: v2.IdentityProofType.DNSTxt
      }
    }
  ],
  recipient: {
    name: "Test"
  },
  $template: {
    name: "CDF",
    type: v2.TemplateType.EmbeddedRenderer,
    url: "http://localhost:3000"
  }
};