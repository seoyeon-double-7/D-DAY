import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/GamePage.css";

// ****** 이미지 ******

// 배경
import bgImg from "./img/morning/map1_bg_ocean.png";

// character
import character_front from "./img/morning/character_front.png";

// character_right
import character_right01 from "./img/morning/character_right/character_right_01.png";
import character_right02 from "./img/morning/character_right/character_right_02.png";
import character_right03 from "./img/morning/character_right/character_right_03.png";
import character_right04 from "./img/morning/character_right/character_right_04.png";

// character_left
import character_left01 from "./img/morning/character_left/character_left_01.png";
import character_left02 from "./img/morning/character_left/character_left_02.png";
import character_left03 from "./img/morning/character_left/character_left_03.png";
import character_left04 from "./img/morning/character_left/character_left_04.png";

// character_jump
import character_jump from "./img/morning/character_jump/character_right_jump.png";

function GamePage() {
  const canvasRef = useRef(null);
  const navigate = useNavigate();

  // init
  const initTop = 800;

  const [background, setBackground] = useState({ x: 0, bNum: 1 }); // 캐릭터의 초기 x 좌표
  const [character, setCharacter] = useState({
    x: 10,
    y: initTop,
    dir: "front",
    ldirNum: 0,
    rdirNum: 0,
    isJump: false,
  }); // 배경 이미지의 초기

  useEffect(() => {
    drawBackground();
    drawCharacter();
  }, [character, background]);

  // 캐릭터 이동
  const handleMove = (e) => {
    // 왼쪽
    if (e.code === "ArrowLeft") {
      if (character.x >= 0) {
        let cnt = 0;
        const timer = setInterval(() => {
          setCharacter((preCharater) => {
            return {
              ...preCharater,
              x: preCharater.x - 10,
              dir: "left",
              ldirNum: (preCharater.ldirNum % 4) + 1,
            };
          });
          cnt++;
          if (cnt === 3) clearInterval(timer);
        }, 20);

        // setBackground({ ...background, x: background.x + 10 });
      }
    }
    // 오른쪽
    else if (e.code === "ArrowRight") {
      if (character.x < 1810) {
        let cnt = 0;
        const timer = setInterval(() => {
          setCharacter((preCharater) => {
            return {
              ...preCharater,
              x: preCharater.x + 10,
              dir: "right",
              rdirNum: (preCharater.rdirNum % 4) + 1,
            };
          });
          cnt++;
          if (cnt === 5) clearInterval(timer);
        }, 20);
        // setBackground({ ...background, x: background.x - 10 });
      } else {
        if (background.bNum < 3) {
          let cnt = 0;
          const timer = setInterval(() => {
            setCharacter((preCharacter) => {
              return {
                ...preCharacter,
                x: preCharacter.x - 91,
              };
            });
            setBackground((preBg) => {
              return {
                ...preBg,
                x: preBg.x - 100,
                bNum: background.bNum + 1,
              };
            });
            cnt++;
            if (cnt === 19) clearInterval(timer);
          }, 40);
        } else {
          navigate("/d-day/clear");
        }
      }
    }
    // 스페이스
    else if (e.code === "Space") {
      if (!character.isJump) {
        jump();
      }
    }
  };

  // 배경 그려주기
  const drawBackground = () => {
    const ctx = canvasRef.current.getContext("2d");

    const bgImage = new Image();
    bgImage.src = bgImg;
    bgImage.addEventListener("load", () => {
      ctx.drawImage(bgImage, background.x, 0);

      console.log("배경 이동중 : ", background.x, background.y);
    });
  };

  // 캐릭터 그려주기
  const drawCharacter = () => {
    const ctx = canvasRef.current.getContext("2d");
    const characterImage = new Image();
    let dir = character.dir;
    if (character.isJump) {
      characterImage.src = character_jump;
    } else if (dir === "right") {
      // eslint-disable-next-line default-case
      switch (character.rdirNum) {
        case 1:
          characterImage.src = character_right01;
          break;
        case 2:
          characterImage.src = character_right02;
          break;
        case 3:
          characterImage.src = character_right03;
          break;
        case 4:
          characterImage.src = character_right04;
          break;
      }
    } else if (dir === "left") {
      // eslint-disable-next-line default-case
      switch (character.ldirNum) {
        case 1:
          characterImage.src = character_left01;
          break;
        case 2:
          characterImage.src = character_left02;
          break;
        case 3:
          characterImage.src = character_left03;
          break;
        case 4:
          characterImage.src = character_left04;
          break;
      }
    } else {
      characterImage.src = character_front;
    }
    characterImage.addEventListener("load", () => {
      ctx.drawImage(characterImage, character.x, character.y, 100, 150);
      console.log(
        "character 이동중 : ",
        character.x,
        character.y,
        character.dir,
        "왼쪽 이동 수: ",
        character.ldirNum,
        "오른쪽 이동 수: ",
        character.rdirNum
      );
    });
  };

  const jump = () => {
    let cnt = 0;
    const timer = setInterval(() => {
      if (cnt < 5) {
        setCharacter((preCharacter) => {
          return {
            ...preCharacter,
            y: preCharacter.y - 40,
            isJump: true,
          };
        });
      } else {
        setCharacter((preCharacter) => {
          character.isJump = false;
          return {
            ...preCharacter,
            y: preCharacter.y + 40,
            isJump: false,
          };
        });
      }

      cnt++;
      if (cnt === 10) clearInterval(timer);
    }, 60);
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
