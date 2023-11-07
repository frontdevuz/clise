import React, { useRef, useEffect } from "react";
import Container from "./../container/container";
import { Link } from "react-router-dom";
import Icon from "../../assets/pngLOGO/image-removebg-preview (20).png";
import { navbarData } from "./../../data/if-navbar-data";
import Sidebar from "../../contents/sidebar/siderbar.jsx";
import "./navbar-responsive.less";
import "./navbar.less";
const Navbar = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("navbar__responsive");
  };
  return (
    <React.Fragment>
      <nav className="navbar">
        <Container>
          <div className="navbar__container">
            <div className="navbar__logo">
              <img
                src={Icon}
                alt="This  is a Navbar icon"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
            <ul className="navbar__items" ref={navRef}>
              {navbarData.slice(1).map((nav) => {
                return (
                  <li
                    className="navbar__item"
                  >
                    <a
                      href={nav.url}
                      className={"navbar__item-link"}
                      onClick={showNavbar}
                    >
                      {nav.name}
                    </a>
                  </li>
                );
              })}
            </ul>
            <button className="navbar__items__sidebar" onClick={showNavbar}>
              <Sidebar />
            </button>
          </div>
        </Container>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
