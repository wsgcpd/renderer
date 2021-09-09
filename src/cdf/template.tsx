import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { CocTemplateCertificate } from "../samples/customTemplateSample";

const containerStyle = css`
  background-image: url(https://merriam-webster.com/assets/mw/images/article/art-wap-article-main/gray-background-7131-98db5e6ffc4972baa4087760291cbc3e@2x.jpg), 
	url(https://i.pinimg.com/564x/88/b3/f6/88b3f63faa8791bf277126fcf307d691.jpg);
  background-repeat: no-repeat,
  border: #340171;
  border-style: solid; 
  box-sizing: border-box;
  border-width: thick;
  color: #340171;
  padding: 15px;
  margin: auto;
  width: 80%;
  text-align: center;
p.a {
  font-family: "Lato";
  font-size: 12px;  
} 

p.name {
  font-family: "Libre Baskerville";
  font-size: 42px;
}

p.cred {
  font-family: "Libre Baskerville";
  font-size: 26px;
}

p.cename {
  margin:0;
  padding:0;
  font-family: "Libre Baskerville";
  font-size: 10px;
  font-weight: bold;
}

p.ce {
  font-family: "Lato";
  font-size: 9px;
}

`;

export const CocTemplate: FunctionComponent<
  TemplateProps<CocTemplateCertificate> & { className?: string }
> = ({ document, className = "" }) => {
  return (
    <div css={containerStyle} className={className} id="custom-template">
	<img src="https://www.wsg.gov.sg/images/content/dam/ssg-wsg/header/wsg-header.png" />
	<p class="a">THIS CERTIFIES THAT</p>
	<p class="name"> {document.recipient.name}</p>
        <p class="a">has met all the requirements to be conferred the</p>
        <p class="cred">{document.name}</p>
        <p class="a">credential under the WSG Career Development Framework</p>
        <br />
        <img src="https://www.wsg.gov.sg/images/content/dam/ssg-wsg/header/wsg-header.png" />
        <hr width="220px" color="#340171" />
        <p class="cename">MR TAN CHOON SHIAN</p>
        <p class="ce">CHIEF EXECUTIVE</p>
        <p class="ce">WORKFORCE SINGAPORE</p>
<table>
  <tr>
    <td width="600px"><img src="https://www.wsg.gov.sg/images/content/dam/ssg-wsg/header/wsg-header.png" /></td>
    <td><p class="a" align="left">Ref No.: {document.refno}</p> <p class="a" align="left">Certification Date: {document.certdate}</p> <p class="a" align="left">Recertify by: {document.recertifydate}</p></td>
  </tr>
</table>
    </div>
  );
};