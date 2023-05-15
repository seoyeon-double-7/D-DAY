import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../../Layout/Footer";
import Nav from "../../Layout/Nav";
import "../../styles/HomePage.css";

function HomePage() {
  const navigate = useNavigate();

  // 로그아웃
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

  return (
    <div className="home">
      <Nav />

      <div className="map map-morning"></div>
      <div className="map map-afternonn"></div>
      <div className="map map-dinner"></div>
      <div className="map map-night"></div>

      <button onClick={onClickHandler}>로그아웃</button>

      <Footer />
    </div>
  );
}

export default HomePage;
