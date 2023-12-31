import axios from "axios";
import React, { useEffect } from "react";
import { useQuery } from "react-query";
import Container from "./../../../components/container/container";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  Header__container,
  Header__content,
  Header__text,
  Home__header,
  Header__title,
  Header__img__container,
  Header__img,
  Header__con,
  Header__p,
  Header__span,
  Header__t,
} from "./styled";
import Button from "../../../components/button/button";
import Loader from "../../../contents/loader/loader";
import SocialIcons from "../../../contents/social-icons/social-icons";
async function HomeFunction() {
  const HomeAPI =
    "https://64c073290d8e251fd1121b94.mockapi.io/portfolio/api/izzatillo/clise-center";
  const { data } = await axios(HomeAPI);
  return data;
}

export default function HomeHeader(props) {
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
      {props.children}
      <Home__header>
        {data.map((item, index) => {
          return (
            <Container key={index}>
              <Header__container>
                <Header__content>
                  <Header__title>
                    <Header__t>Clise</Header__t>
                    {item.title}
                  </Header__title>
                  <Header__con>
                    <Header__text>
                      <Header__span>Clise</Header__span>
                      {item.text}
                    </Header__text>
                  </Header__con>
                  <Header__con>
                    <Header__p>Bizning shior:</Header__p>
                    <Header__text
                      style={{
                        color: "#3e9663",
                        fontWeight: "300",
                        fontSize: "18px",
                      }}
                    >
                      {item.moto}
                    </Header__text>
                  </Header__con>
                  <SocialIcons />
                  <Button to={"https://t.me/wetheclise"}>Biz haqimizda</Button>
                </Header__content>
                <Header__img__container>
                  <Header__img
                    src={item.img__url}
                    alt="This is a  Home img !"
                  />
                </Header__img__container>
              </Header__container>
            </Container>
          );
        })}
      </Home__header>
    </React.Fragment>
  );
}
