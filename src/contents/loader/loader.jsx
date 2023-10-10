import React from "react";
import {
  LoaderBox,
  LoaderDiv,
  LoaderSpanBox,
  LoaderSpan,
  LoaderItem,
  LoaderText,
} from "./styled";

export default function Loader() {
  return (
    <React.Fragment>
      <LoaderDiv>
        <LoaderItem>
          <LoaderBox>
            <LoaderSpanBox>
              <LoaderSpan />
              <LoaderSpan />
            </LoaderSpanBox>
            <LoaderSpanBox>
              <LoaderSpan />
              <LoaderSpan />
            </LoaderSpanBox>
          </LoaderBox>
          <LoaderText >Yuklanmoqda ....</LoaderText>
        </LoaderItem>
      </LoaderDiv>
    </React.Fragment>
  );
}
