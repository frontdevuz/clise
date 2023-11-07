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
              © Mualifflik huquqi <em> CLISE </em>.Barcha huquqlar himoyalangan
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
