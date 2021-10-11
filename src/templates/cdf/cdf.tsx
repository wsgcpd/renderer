import React, { FunctionComponent } from "react";
import { TemplateProps } from "@govtechsg/decentralized-renderer-react-components";
import { css } from "@emotion/core";
import { CocTemplateCertificate } from "../samples/customTemplateSample";

const containerStyle = css`
  background-image: url(https://github.com/wsgcpd/renderer/blob/master/src/cdf/images/background.png?raw=true);
  background-size: cover;
  border: #340171;
  border-style: solid; 
  border-width: 10px;
  color: #340171;
  padding: 15px;
  margin: auto;
  width: 80%;
  text-align: center;

p.a {
  font-family: "Lato";
  font-size: 12px;  
  margin-bottom:0;
} 

p.b {
  font-family: "Lato";
  font-size: 12px;  
  margin : 0; 
  padding-top:0;
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
  font-family: "Libre Baskerville";
  font-size: 10px;
  font-weight: bold;
  margin-bottom:0;
}

p.ce {
  font-family: "Lato";
  font-size: 9px;
  margin : 0; 
  padding-top:0;
}

`;

export const CocTemplate: FunctionComponent<
  TemplateProps<CocTemplateCertificate> & { className?: string }
> = ({ document, className = "" }) => {
  return (
    <div css={containerStyle} className={className} id="custom-template">
	<img src="https://github.com/wsgcpd/renderer/blob/master/src/cdf/images/wsglogo.png?raw=true" width="20%" />
	<p class="a">THIS CERTIFIES THAT</p>
	<p class="name"> {document.recipient.name}</p>
        <p class="a">has met all the requirements to be conferred the</p>
        <p class="cred">{document.name}</p>
        <p class="a">credential under the WSG Career Development Framework</p>
        <br />
        <img src="https://www.pngkey.com/png/full/799-7998866_eform-designer-just-drag-a-control-to-the.png" width="10%" />
        <hr width="220px" color="#340171" />
        <p class="cename">MR TAN CHOON SHIAN</p>
        <p class="ce">CHIEF EXECUTIVE</p>
        <p class="ce">WORKFORCE SINGAPORE</p>
        <br />
<table>
  <tr>
    <td width="600px"><img src="https://github.com/wsgcpd/renderer/blob/master/src/cdf/images/cdf.png?raw=true" width="70%" /></td>
    <td><p class="a" align="left">Ref No.: {document.refno}</p> <p class="b" align="left">Certification Date: {document.certdate}</p> <p class="b" align="left">Recertify by: {document.recertifydate}</p></td>
  </tr>
</table>
<br />
<br />
    </div>
  );
};
