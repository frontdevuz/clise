import styled from "styled-components";

export const Home__header = styled.header``;

export const Header__container = styled.div`
  height: 400px;
  margin-top: 10em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const Header__content = styled.div`
  width: 600px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const Header__title = styled.h1`
  font-size: 35px;
  font-weight: bold;
`;

export const Header__text = styled.p`
  font-size: 17px;
  letter-spacing: 0.3px;
  color: grey;
  font-weight: 300;
`;

export const Header__img__container = styled.div`
  height: 100%;
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Header__img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  animation: circle 17s linear infinite;
  @keyframes circle {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
