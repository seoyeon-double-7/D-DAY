import React from "react";
import "../styles/nav.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Nav() {
  const navigate = useNavigate();

  const onClickHandler = () => {
    // 복잡하지 x 기능이므로 axios 바로 써줌
    axios.get("/api/users/logout").then((response) => {
      if (response.data.success) {
        navigate("/login");
      } else {
        alert("fail logout");
      }
    });
  };

  const navigateToFootPrint = () => {
    navigate("/footprint");
  };

  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <nav>
      <div className="logo" onClick={navigateToHome}></div>

      <div>
        <div className="footprint" onClick={navigateToFootPrint}></div>

        <div className="sign-in" onClick={onClickHandler}></div>

        {/* 랭킹 넣어주기 */}
        {/* <div className="sign-up"></div> */}
      </div>
    </nav>
  );
}

export default Nav;
