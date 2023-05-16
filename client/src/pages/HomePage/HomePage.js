import React from "react";
import Footer from "../../Layout/Footer";
import Nav from "../../Layout/Nav";
import "../../styles/HomePage.css";

function HomePage() {
  return (
    <div className="home">
      <Nav />

      <div className="map map-morning"></div>
      <div className="map map-afternonn"></div>
      <div className="map map-dinner"></div>
      <div className="map map-night"></div>


      <Footer />
    </div>
  );
}

export default HomePage;
