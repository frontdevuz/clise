import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import Container from "./../../../components/container/container";
import {
  Header__container,
  Header__content,
  Header__text,
  Home__header,
  Header__title,
  Header__img__container,
  Header__img,
} from "./styled";
import Button from "../../../components/button/button";
import Loader from "../../../contents/loader/loader";
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
                  <Header__title>{item.title}</Header__title>
                  <Header__text>{item.text}</Header__text>
                  <Button to={"/about"}>Biz haqimizda</Button>
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
