import React from "react";
import "../styles/nav.css"
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
       <div className="logo"></div>

      <div>
      <div className="footprint"></div>

      <div className="sign-in"></div>
      <div className="sign-up"></div>
     </div>
    </nav>
  );
}

export default Nav;
