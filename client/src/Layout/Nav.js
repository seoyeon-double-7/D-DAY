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
  // const navigateToRank = () => {
  //   navigate("/ranking");
  // };

  const navigateToLogin = () => {
    navigate("/login");
  };

  const navigateToMyPage = () => {
    navigate("/mypage");
  };
  return (
    <nav>
      <div className="logo" onClick={navigateToHome}></div>

      <div>
        <div className="footprint" onClick={navigateToFootPrint}></div>

        {/* 게스트이면 className = "sign-in", 로그인 되어있으면 sign-out */}
        <div
          className={isExistUser(user) && user.isAuth ? "sign-out" : "sign-in"}
          onClick={
            isExistUser(user) && user.isAuth ? onClickHandler : navigateToLogin
          }
        />

        {/* 랭킹 넣어주기 */}
        {/* <div className="rank" onClick={navigateToRank}></div> */}
        {/*
         * 로그인 되있으면 마이페이지
         * TODO : db에서 사용자 이미지 가져와서 보여주기
         */}
        {isExistUser(user) && user.isAuth ? (
          <div className="my-page" onClick={navigateToMyPage} />
        ) : null}
      </div>
    </nav>
  );
}

const isExistUser = (user) => {
  return user !== undefined;
};

export default Nav;
