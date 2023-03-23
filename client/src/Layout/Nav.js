import React from "react";
import "../styles/nav.css"
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div>
        <NavLink to="/" className="item">D-day</NavLink>
      </div>
      <div>
        <NavLink to="/footprint" className="item">발자취 남기기</NavLink>
      </div>

      <div>
        <NavLink to="/login" className="item">로그인</NavLink>
      </div>
      <div>
        <NavLink to="/register" className="item">회원가입</NavLink>
      </div>
    </nav>
  );
}

export default Nav;
