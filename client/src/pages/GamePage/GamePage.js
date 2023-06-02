import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react"
import "../../styles/GamePage.css";
import bgImg from '../../gamebg_ocean.png';

function GamePage() {
  const navigate = useNavigate();
  const [characterPositionX, setCharacterPositionX] = useState(50); // 캐릭터의 초기 x 좌표
  const [backgroundPositionX, setBackgroundPositionX] = useState(0); // 배경 이미지의 초기 x 좌표

  const handleKeyDown = (event) => {
    if(event.key == 'ArrowLeft'){
      setBackgroundPositionX(prevX => prevX + 10);
    } else if(event.key == 'ArrowRight'){
      setBackgroundPositionX(prevX => prevX - 10);
    }
  };

  useEffect(()=>{
    window.addEventListener('keydown', handleKeyDown);

    return ()=>{
      window.addEventListener('keydown', handleKeyDown);
    };
  }, []);
  return (
    <div className="screen">
      <div className="bg" 
            style={{
              backgroundImage: `url(${bgImg})`,
              left:`${backgroundPositionX}px`,
              position: 'absolute',
              top: '0',
              height: '1080px',
              width: '5760px'}}>
                
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: '0', // 캐릭터의 초기 y 좌표
          left: `${characterPositionX}px`,
          height: '50px', // 캐릭터의 높이
          width: '50px', // 캐릭터의 너비
          backgroundColor: 'red', // 캐릭터의 색상
        }}
      />
    </div>
  );
}

export default GamePage;
