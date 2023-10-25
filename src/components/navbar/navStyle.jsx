import styled from "styled-components";

export const NavbarContainer = styled.nav`
  height: 100px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999 !important;
  background-color: white;
  box-shadow: #3E9663 0px 1px 5px 0px;
  border-radius: 0 0 30px 30px;
`;

export const NavbarWrapper = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .navbar__link {
    width: 100px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const NavbarLogoContainer = styled.div`
  height: 100%;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const NavbarLogo = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

export const NavbarUl = styled.ul`
  height: 100%;
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .active {
    background-color: #3E9663;
    border-radius: 10px;
    &:hover {
      li {
        transform: rotate(0);
      }
    }
    padding: 0 10px;
    li {
      color: white;
      font-weight: 400;
      transition: all 0.3s linear; 
    }
  }
`;

export const NavbarLi = styled.li`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  color: #000;
  transition: all 0.3s linear;
  &:hover {
    transform: rotate(-20deg);
    transition: all 0.3s linear;
  }
`;
