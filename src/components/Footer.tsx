import React from "react";
import styled from "styled-components";

const FooterCompWrapper = styled.footer`
  width: 100%;
  height: 12rem;
  background-color: #311023;
`;

function Footer(props: any) {
  return <FooterCompWrapper>여기부턴 푸터야~</FooterCompWrapper>;
}

export default Footer;
