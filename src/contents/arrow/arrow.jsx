import React from "react";

export default function Arrow() {
  return (
    <div
      style={{
        background: "#3e9663",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        position: "fixed",
        bottom: "10px",
        right: "10px",
        border:"2px solid white"
      }}
    >
      <a
        href="#"
        style={{
          width: "100%",
          height: "100%",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <i class="fa-solid fa-arrow-up"></i>
      </a>
    </div>
  );
}
