import Footer from "../../Layout/Footer";
import Nav from "../../Layout/Nav";
import "../../styles/HomePage.css";

function HomePage() {

  return (
    <div className="home">
      <Nav/>
     

      <div className="map-morning"></div>
      <div className="map-afternonn"></div>
      <div className="map-dinner"></div>
      <div className="map-night"></div>
     
      {/* <div className="map-afternonn"><Map name="afternonn"/></div>
      <div className="map-dinner"><Map name="dinner"/></div>
      <div className="map-night"><Map name="night"/></div> */}
     
     <Footer/>
      <div className="opening"></div>
      <div className="ending"></div>
    </div>
  );
}

export default HomePage;
