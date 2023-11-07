import React, { useState, useEffect } from "react";
import "./siderbar.less";
const Sidebar = (props) => {
  const [bar, setBar] = useState(false);
  const OpenBar = () => setBar(!bar);
  return (
    <React.Fragment>
      <div className="sidebar">
        <div
          className={bar === false ? "open" : " open close"}
          onClick={OpenBar}
        >
          <span className="sidebar__bir" id="one"></span>
          <span className="sidebar__ikki" id="two"></span>
          <span className="sidebar__uch" id="three"></span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
