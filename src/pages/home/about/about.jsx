import React from "react";
import Title from "../../../contents/title/title";
import {
  Aside,
  AsideBox,
  AsideContent,
  AsideImg,
  AsideImgBox,
  AsideText,
  AsideTitle,
  Hero,
  HeroBox,
  HeroContent,
  HeroImg,
  HeroImgBox,
  HeroText,
} from "./aboutStyled";
import Container from "../../../components/container/container";
import { useQuery } from "react-query";
import Loader from "../../../contents/loader/loader";
import Dropdown from "../../../components/dropdown/dropdown";
import Arrow from "../../../contents/arrow/arrow";
async function HomeFunction() {
  const HomeAPI =
    "https://64c073290d8e251fd1121b94.mockapi.io/portfolio/api/izzatillo/clise-center";
  const { data } = await axios(HomeAPI);
  return data;
}
export default function About(props) {
  const { data, error, isError, isLoading } = useQuery(
    "home__key",
    HomeFunction
  );
  if (isLoading) {
    return (
      <>
        <Loader />
      </>
    );
  }
  if (isError) {
    return <div>Xatolik ! {error.message}</div>;
  }
  return (
    <React.Fragment>
      <Title>Biz haqimizda</Title>
      {data.map((item, index) => {
        return (
          <>
            <Arrow />
            <Hero id="about">
              <Container>
                <HeroBox>
                  <HeroContent>
                    <HeroText>"Clise" {item.about__part}</HeroText>
                    <HeroText>{item.about__part2}</HeroText>
                  </HeroContent>
                  <HeroImgBox>
                    <HeroImg src={item.about__img} />
                  </HeroImgBox>
                </HeroBox>
              </Container>
            </Hero>
            <Aside>
              <Container>
                <AsideBox>
                  <AsideContent>
                    <AsideTitle>{item.select__title}</AsideTitle>
                    <AsideText>"Clise" {item.select__text}</AsideText>
                    <Dropdown />
                  </AsideContent>
                  <AsideImgBox>
                    <AsideImg
                      src={item.select__img}
                      alt="This is a select img"
                    />
                  </AsideImgBox>
                </AsideBox>
              </Container>
            </Aside>
          </>
        );
      })}
    </React.Fragment>
  );
}
