import React from "react";
import "./social-icons.less";
export default function SocialIcons() {
  return (
    <React.Fragment>
      <div className="icons">
        <a
          href="https://www.instagram.com/wetheclise"
          target="_blank"
          className="bir"
        >
          <i className="fa-brands fa-instagram "></i>
        </a>
        <a href="https://t.me/wetheclise" target="_blank" className="ikki">
          <i className="fa-brands fa-telegram "></i>
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100095097350346"
          target="_blank"
          className="uch"
        >
          <i className="fa-brands fa-facebook "></i>
        </a>
      </div>
    </React.Fragment>
  );
}
