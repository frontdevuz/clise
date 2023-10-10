import React from "react";
import { Link } from "react-router-dom";
import "./button.less";
export default function Button(props) {
  const { to } = props;
  const { style } = props;
  return (
    <React.Fragment>
      <Link to={to} style={style} className="button">
        {props.children}
      </Link>
    </React.Fragment>
  );
}
