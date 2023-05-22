import { useNavigate } from "react-router-dom";
import Nav from "../../Layout/Nav";
import "../../styles/FootPrintPage.css";

function GamePage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>게임페이지</h1>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        돌아가기
      </button>
    </div>
  );
}

export default GamePage;
