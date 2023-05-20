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

  // 홈 화면 이동
  const navigateToHome = () => {
    navigate("/");
  };

  // 발자취 화면 이동
  const navigateToFootPrint = () => {
    navigate("/footprint");
  };

  // 랭킹 화면 이동
  const navigateToRank = () => {
    navigate("/ranking");
  };

  return (
    <nav>
      <div className="logo" onClick={navigateToHome}></div>

      <div>
        <div className="footprint" onClick={navigateToFootPrint}></div>

        {/* 게스트이면 className = "sign-in", 로그인 되어있으면 sign-out */}
        <div className="sign-out" onClick={onClickHandler}></div>

        {/* 랭킹 넣어주기 */}
        <div className="rank" onClick={navigateToRank}></div>
      </div>
    </nav>
  );
}

export default Nav;
