import React from "react";
import { Link, NavLink } from "react-router-dom";
import { navbarData } from "../../data/if-navbar-data";
import Clise__logo from "../../assets/pngLOGO/Clise__logo (2).png";
import {
  NavbarContainer,
  NavbarLi,
  NavbarLogo,
  NavbarLogoContainer,
  NavbarUl,
  NavbarWrapper,
} from "./navStyle";
import Container from "./../container/container";
export default function Navbar() {
  return (
    <React.Fragment>
      <NavbarContainer>
        <Container>
          <NavbarWrapper>
            {navbarData.slice(0, 1).map((item, index) => (
              <NavbarLogoContainer key={index}>
                <Link to={item.url}>
                  <NavbarLogo src={item.icon} alt="This is a CLISE logo" />
                </Link>
              </NavbarLogoContainer>
            ))}
            <NavbarUl>
              {navbarData.slice(1).map((item, index) => (
                <NavLink to={item.url} key={index}>
                  <NavbarLi>{item.name}</NavbarLi>
                </NavLink>
              ))}
            </NavbarUl>
          </NavbarWrapper>
        </Container>
      </NavbarContainer>
    </React.Fragment>
  );
}
