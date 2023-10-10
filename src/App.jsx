import React from "react";
import { Route, Routes } from "react-router-dom";

//Importing pages for web application
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Service from "./pages/service/service";
import Contact from "./pages/contact/contact";
import Blog from "./pages/blog/blog";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

export default function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </React.Fragment>
  );
}
