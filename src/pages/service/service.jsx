import React from "react";
import {
  ServiceBox,
  ServiceContainer,
  ServiceLogo,
  ServiceSubtitle,
  ServiceTitle,
} from "./serviceSt";
import Container from "../../components/container/container";
import { Servi } from "../../data/if-service-data";
import Title from "../../contents/title/title";

export default function Service() {
  return (
    <React.Fragment>
      <Title>Xizmatlar</Title>
        <Container>
      <ServiceContainer id="services">
          {Servi.map((item, index) => {
              return (
              <>
            <ServiceBox>
                <ServiceLogo>
                  <ServiceLogo className="fa-solid fa-code "></ServiceLogo>
                </ServiceLogo>
                <ServiceTitle>{item.title}</ServiceTitle>
                <ServiceSubtitle>{item.text}</ServiceSubtitle>
            </ServiceBox>
              </>
              );
          })}
      </ServiceContainer>
        </Container>
    </React.Fragment>
  );
}
