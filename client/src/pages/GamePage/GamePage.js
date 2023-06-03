import { useEffect, useRef, useState } from "react";
// import "../../styles/GamePage.css";
import bgImg from "../../img/mapImg/Morning/gamebg_ocean.png";
import character_front from "../../img/mapImg/Morning/character/character_right.png";
function GamePage() {
  const canvasRef = useRef(null);

  const [background, setBackground] = useState({ x: 0, y: 0 }); // 캐릭터의 초기 x 좌표
  const [character, setCharacter] = useState({
    x: 0,
    y: 800,
    dir: "front",
  }); // 배경 이미지의 초기

  useEffect(() => {
    drawBackground();
    drawCharacter();
  }, [character, background]);

  // 캐릭터 이동
  const handleMove = (e) => {
    // 왼쪽
    if (e.key === "ArrowLeft") {
      if (character.x >= 0) {
        setCharacter({ ...character, x: character.x - 10 });
        setBackground({ ...background, x: background.x + 10 });
      }
    }
    // 오른쪽
    else if (e.key === "ArrowRight") {
      if (character.x <= 1820) {
        setCharacter({ ...character, x: character.x + 10 });
        setBackground({ ...background, x: background.x - 10 });
      }
    }
  };

  // 배경 그려주기
  const drawBackground = () => {
    const ctx = canvasRef.current.getContext("2d");

    const bgImage = new Image();
    bgImage.src = bgImg;
    bgImage.addEventListener("load", () => {
      ctx.drawImage(bgImage, background.x, background.y);
      console.log("배경 이동중 : ", background.x, background.y);
    });
  };

  // 캐릭터 그려주기
  const drawCharacter = () => {
    const ctx = canvasRef.current.getContext("2d");

    const characterImage = new Image();
    characterImage.src = character_front;
    characterImage.addEventListener("load", () => {
      ctx.drawImage(characterImage, character.x, character.y, 100, 150);
      console.log("character 이동중 : ", character.x, character.y);
    });
  };

  return (
    <div>
      {/* canvas 안에서 useRef hook을 사용해서 canvas DOM에 접근 */}
      <canvas
        width={"1920"}
        height={"1080"}
        ref={canvasRef}
        onKeyDown={handleMove}
        tabIndex={0}
      />
    </div>
  );
}

export default GamePage;
