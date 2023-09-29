import React from "react";
import { ContainerBox } from "./styled";

export default function Container(props) {
  return (
    <React.Fragment>
      <ContainerBox>{props.children}</ContainerBox>
    </React.Fragment>
  );
}
