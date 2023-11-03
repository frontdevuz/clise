import React from "react";
import Title from "../../../contents/title/title";
import {
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
          <Hero>
            <Container>
              <HeroBox>
                <HeroContent>
                  <HeroText>{item.about__part}</HeroText>
                  <HeroText>{item.about__part2}</HeroText>
                </HeroContent>
                <HeroImgBox>
                  <HeroImg src={item.about__img} />
                </HeroImgBox>
              </HeroBox>
            </Container>
          </Hero>
        );
      })}
    </React.Fragment>
  );
}
