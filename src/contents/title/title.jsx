import React from "react";
import { TitleBox, TitleContainer, TitleRow, TitleS } from "./titleStyled";

export default function Title(props) {
  return (
    <React.Fragment>
      <TitleContainer>
        <TitleBox>
          <TitleRow>
            <TitleS>{props.children}</TitleS>
          </TitleRow>
        </TitleBox>
      </TitleContainer>
    </React.Fragment>
  );
}
