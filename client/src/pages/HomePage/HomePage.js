import React from "react";
import Footer from "../../Layout/Footer";
import Nav from "../../Layout/Nav";
import "../../styles/HomePage.css";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  const navigateToGame = () => {
    navigate("/d-day");
  };

  return (
    <div className="home">
      <Nav />
      <div className="game-maps" onClick={navigateToGame}>
        <img className="map map-morning" src={`/images/morning.png`} alt="" />
        <img
          className="map map-afternonn"
          src={`/images/afternoon.png`}
          alt=""
        />
        <img className="map map-dinner" src={`/images/diner.png`} alt="" />
        <img className="map map-night" src={`/images/night.png`} alt="" />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
