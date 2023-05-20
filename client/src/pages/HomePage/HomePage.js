import React from "react";
import Footer from "../../Layout/Footer";
import Nav from "../../Layout/Nav";
import "../../styles/HomePage.css";

function HomePage() {
  return (
    <div className="home">
      <Nav />
      <img className="map map-morning" src={`/images/morning.png`} />
      <img className="map map-afternonn" src={`/images/afternoon.png`} />
      <img className="map map-dinner" src={`/images/diner.png`} />
      <img className="map map-night" src={`/images/night.png`} />
      <Footer />
    </div>
  );
}

export default HomePage;
