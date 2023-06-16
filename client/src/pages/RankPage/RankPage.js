import Nav from "../../Layout/Nav";
import Footer from "../../Layout/Footer";
import "../../styles/Rank.css";
import ReactAudioPlayer from "react-audio-player";
import { useEffect } from "react";

function RankPage() {

  useEffect(() => {
    const audioElement = document.getElementById("rankingAudio");
    audioElement.play();
  }, []);
  return (
    <div className="home">
      <ReactAudioPlayer id="rankingAudio" src={"/audio/ranking.mp3" } autoPlay={true} loop  style={{display:"none"}}/>
      <Nav />

      <div className="rank-box">
        <h1>RANK</h1>

        <div className="rank-data">
          <span>
            {1} {"배요미"} {18000}
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default RankPage;
