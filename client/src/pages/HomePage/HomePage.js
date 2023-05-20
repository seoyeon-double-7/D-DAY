import React from "react";
import Footer from "../../Layout/Footer";
import Nav from "../../Layout/Nav";
import "../../styles/HomePage.css";

function HomePage() {
  return (
    <div className="home">
      <Nav />

      <img className="map map-morning" src={`/image/morning.png`}/>
      <img className="map map-afternonn" src={`/image/afternonn.png`}/>
      <img className="map map-dinner" src={`/image/diner.png`}/>
      <img className="map map-night" src={`/image/night.png`}/>


      <Footer />
    </div>
  );
}

export default HomePage;
