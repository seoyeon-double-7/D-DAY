import { useNavigate } from "react-router-dom";
import Footer from "../../Layout/Footer";
import Nav from "../../Layout/Nav";
import "../../styles/GameResult.css";

function GameClear() {
  const navigate = useNavigate();
  return (
    <div className="home">
      <Nav />

      <div className="game-result-box">
        <h1>Game Clear</h1>
        <h3 className="score">18200</h3>

        <p className="quote-content">삶이 있는 한 희망은 있다 </p>
        <span className="quote-author">카케로</span>
        <br />

        <button>다시하기</button>
        <button onClick={() => navigate("/")}>홈으로 가기</button>
      </div>

      <Footer />
    </div>
  );
}

export { GameClear };
