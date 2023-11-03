import styled from "styled-components";
export const Hero = styled.section`
  display: flex;
  justify-content: center;
`;

export const HeroBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 4rem;
   height: 400px;
`;
export const HeroContent = styled.div`

  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  line-height: 30px;
`;
export const HeroText = styled.p`
  color: #000;
  font-weight: 300;
  font-size: 15px;
`;
export const HeroImgBox = styled.div`
  height: 100%;
  width: 100%;
  max-width: 500px;
`;
export const HeroImg = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;
