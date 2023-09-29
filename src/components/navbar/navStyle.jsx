import styled from "styled-components";

export const NavbarContainer = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999 !important;
  background-color: aliceblue;
  padding: 1rem 0;
  box-shadow: #04364d 0px 1px 5px 0px;
  border-radius: 0 0 30px 30px;
`;

export const NavbarWrapper = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavbarLogoContainer = styled.div`
  width: 60px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavbarLogo = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const NavbarUl = styled.ul`
  height: 100%;
  width: 600px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const NavbarLi = styled.li`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  font-size: 18px;
  font-weight: 400;
`;
