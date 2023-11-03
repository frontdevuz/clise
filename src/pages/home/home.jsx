import React from "react";
import Header from "./header/header";
import SocialIcons from "./../../contents/social-icons/social-icons";
import About from "./about/about";
export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <About />
    </React.Fragment>
  );
}
