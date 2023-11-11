import React from "react";
import {
  FooterBottom,
  FooterBottomLeft,
  FooterBottomRight,
  HomeFooter,
} from "./footerStyle";
import Container from "../container/container";

export default function Footer() {
  return (
    <React.Fragment>
      <HomeFooter>
        <Container>
          <FooterBottom>
            <FooterBottomLeft>
              © Mualifflik huquqi
              <p style={{fontSize:"17px", marginTop:".7rem", fontWeight:"200"}}>Clisening barcha huquqlar himoyalangan</p>
            </FooterBottomLeft>
            <FooterBottomRight>
              CLISE jamoasi tomonidan qurilgan
            </FooterBottomRight>
          </FooterBottom>
        </Container>
      </HomeFooter>
    </React.Fragment>
  );
}
