import React from "react";
import Footer from "../../Layout/Footer";
import Nav from "../../Layout/Nav";
import "../../styles/HomePage.css";

function HomePage() {
  return (
    <div className="home">
      <Nav />
      <img className="map map-morning" src={`/images/morning.png`} alt="" />
      <img className="map map-afternonn" src={`/images/afternoon.png`} alt="" />
      <img className="map map-dinner" src={`/images/diner.png`} alt="" />
      <img className="map map-night" src={`/images/night.png`} alt="" />
      <Footer />
    </div>
  );
}

export default HomePage;
