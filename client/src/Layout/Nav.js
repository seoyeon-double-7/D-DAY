import React from "react";
import "../styles/nav.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

function Nav() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.userData);

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

  const navigateToLogin = () => {
    navigate("/login");
  };

  return (
    <nav>
      <div className="logo" onClick={navigateToHome}></div>

      <div>
        <div className="footprint" onClick={navigateToFootPrint}></div>

        {/* 게스트이면 className = "sign-in", 로그인 되어있으면 sign-out */}
        <div className="sign-out" onClick={onClickHandler}></div>

        {isExistUser(user) && user.isAuth ? (
          <div className="sign-out" onClick={onClickHandler}></div>
        ) : (
          <div className="sign-in" onClick={navigateToLogin} />
        )}

        {/* 랭킹 넣어주기 */}
        <div className="rank" onClick={navigateToRank}></div>
      </div>
    </nav>
  );
}

const isExistUser = (user) => {
  return user !== undefined;
};

export default Nav;
