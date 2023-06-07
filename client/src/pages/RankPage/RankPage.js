import Nav from "../../Layout/Nav";
import Footer from "../../Layout/Footer";
import "../../styles/Rank.css";

function RankPage() {
  return (
    <div className="home">
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
