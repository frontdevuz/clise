import React from "react";
import Header from "./header/header";
import About from "./about/about";
import Service from "../service/service";
import ContactNumber from "../../contents/contactNumber/contactNumber";
import Contact from "../../contents/contact/contact";
import Footer from "../../components/footer/footer";
import "../../components/responsive/responsive.less"
export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <About />
      <Service />
      <ContactNumber />
      <Contact/>
      <Footer/>
    </React.Fragment>
  );
}
