import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <Link to={"/service"}>Service</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/blog"}>Blog</Link>
      <Link to={"/contact"}>Contact</Link>
    </div>
  );
}
