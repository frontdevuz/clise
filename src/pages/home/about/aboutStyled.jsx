import styled from "styled-components";
export const Hero = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const HeroBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  padding-top: 4rem;
  /* height: 400px; */
`;
export const HeroContent = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  line-height: 30px;
  flex-wrap: wrap;
`;
export const HeroText = styled.p`
  color: #000;
  font-weight: 300;
  font-size: 16px;
`;
export const HeroImgBox = styled.div`
  height: 100%;
  width: 100%;
  max-width: 600px;
`;
export const HeroImg = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #3e9663;
`;

export const Aside = styled.aside`
  width: 100%;
  margin-top: 5rem
`;

export const AsideBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
 flex-wrap: wrap;
`;
export const AsideContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.2rem 0;
  width: 550px;
`;
export const AsideImgBox=styled.div`
  display: flex;
  justify-content: center;
margin-top: 3rem;
  width: 500px;
`
export const AsideImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
export const AsideTitle = styled.p`
  font-size: 25px;
  color: #3e9663;
  font-weight: 500;
`;
export const AsideText = styled.p`
  font-size: 17px;
  color: #000;
  font-weight: 300;
  line-height: 30px;
`;
export const AsideContainer=styled.div``
export const AsideDropBox=styled.div``
export const  AsideDropTitle=styled.div``
