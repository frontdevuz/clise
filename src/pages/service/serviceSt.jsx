import styled from "styled-components";

export const ServiceContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 4rem 2rem;
`;
export const ServiceBox = styled.div`
  width: 300px;
  padding: 25px;
  box-shadow: 0px 0px 10px grey;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 1rem 0;
  cursor: pointer;
  transition: all.4s linear;

  &:hover {
    box-shadow: 0px 0px 20px #3e9663;
    transition: all.4s linear;
  }
`;
export const ServiceLogoContainer = styled.div`
  width: 100%;
  align-items: center;
`;
export const ServiceLogo = styled.i`
  color: #3e9663;
  font-size: 30px;
`;
export const ServiceTitle = styled.p`
  font-size: 22px;
  font-weight: 400;
  color: #3e9663;
`;
export const ServiceSubtitle = styled.p`
  font-size: 15px;
  font-weight: 300;
  color: black;
`;
