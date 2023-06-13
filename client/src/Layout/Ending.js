import React, { useState, useEffect } from "react";
import "../styles/Opening.css";
import { useNavigate } from "react-router-dom";

const Ending = () => {
  const navigate = useNavigate();

  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  const [index, setIndex] = useState(0);
  const [line, setLine] = useState(0);
  const [state, setState] = useState("");

  // 엔딩 이미지
  const images = [
    { bg: "village.png", character: "ending_ch1.png" },
    { bg: "gg.png", character: "ending_ch2.png" },
    { bg: "classroom_sunset.png", character: "ending_ch3.png" },
    { bg: "endingbg.png", character: "" },
    { bg: "endingbg.png", character: "" }
  ];

  // 엔딩 왼쪽 스크립트
  const linesLeft = [
    "이대로 모든게 끝나는 건가?",
    "앗 갑자기 빛이??",
    "",
    "어..할아버지?",
    "",
    "확실히 제가 지금 죽은거죠",
    "",
    "너?? 그게 무슨소리세요??",
    "",
    "설마 처음부터 모든게 다 거짓말이었어요!!? 제가 얼마나 힘들게 왔는데!!",
    "",
    "네!! 덕분에 전 친구의 소중함, 저의 진정한 사람, 우리 가족의 행복, 마지막으로 제 삶의 이유까지 잃어버린걸 되찾는 기분이었어요.",
    "",
    "돌아왔네..",
    "생각보다 긴 꿈이었다..",
    "",
    ""
  ];

  // 엔딩 오른쪽 스크립트
  const linesRight = [
    "",
    "",
    "하루를 충분히 즐긴 것 같군, 지금은 어떤가?",
    "",
    "너의 운명을 짠 장본인이다",
    "",
    "사실 너가 오늘 겪은 건 다 꿈이었네",
    "",
    "첫 번째 마을, 두 번째 마을, 세 번째 마을, 네 번째 마을까지 익숙하지 않았니? 다 너의 추억들이었단다",
    "",
    "그래서 결과도 있지 않느냐, 오면서 느낀게 있었지?",
    "",
    "그럼 이제부터 너에게 맡기겠다",
    "",
    "",
    "",
    ""
  ];

  const developers = [
    '김선혜',
    '배서연',
    '편은진'
  ];
  
  const designers = [
    '오은채',
    '한나현'
  ];

  // 엔딩 화면 전환 이펙트
  const changeScreen = () => {
    setLine((i) => i + 1);
    setText("");
    setCount(0);
    if (line == 1 || line == 12 || line == 14 || line == 15)
      setIndex((i) => i + 1);
      if (line == 16) {
       
      }
  };

  const navigateToHome = () => {
    navigate("/");
  };

  // 발자취 화면 이동
  const navigateToFootPrint = () => {
    navigate("/footprint");
  };

  useEffect(() => {
    setState(linesLeft[line].length ? "left" : "right");
    const interval = setInterval(() => {
      let txt = state === "left" ? linesLeft[line] : linesRight[line];
      setText(text + txt[count]);
      setCount(count + 1);
    }, 50);
    if (
      count ===
      (state === "left" ? linesLeft[line].length : linesRight[line].length)
    ) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  });

  return (
    <div className="home">
      <img className="bg" src={`/images/${images[index].bg}`} alt="" />

      {index === 3 && (
        <>
          <img className="ending-logo"
            src={`/images/ending_logo.png`} />
          {/* "한번밖에 없는 삶.멋지게 인생을 꾸며보는 것은 어떨까요?" */}
          <img className="ending-text"
            src={`/images/ending_text.png`} />
        </>
      )}

      {index < 4 && (

        <img
          className="next"
          src={`/images/next.png`}
          onClick={changeScreen}
          alt=""
        />
      )}

      {index < 3 && (
        <>
          <img className="skip" src={`/images/skip.png`} onClick={navigateToHome} alt="" />
          <img className="textbox" src={`/images/textbox.png`} alt="" />

          <img
            className="character"
            src={`/images/${images[index].character}`}
            alt=""
          />

          <div className="line">
            <img className="namebox" src={`/images/namebox.png`} alt="" />
            <img className="name" src={`/images/name.png`} alt="" />
            <div className="line-left">{state === "left" ? text : ""}</div>
            <div className="line-right">{state === "right" ? text : ""}</div>
          </div>
        </>
      )}

      {index === 4 && (
        <>
          <div className='credit-text'>
            <h2>개발자</h2> 
            {developers.map((name, index) => (
              <p key={index}>{name}</p>
            ))}&nbsp;
            <h2>디자이너</h2>
            {designers.map((name, index) => (
              <p key={index}>{name}</p>
            ))}<br></br>
            <img className="mirimlogo" src={`/images/mirimlogo.png`} alt="" />
            <h2 className="thankyou">감사합니다</h2>
            <img className="footprintbtn" src={`/images/footprint.png`} onClick={navigateToFootPrint} alt="" />
          </div>
          
        </>
      )}
    </div>
  );
};

export default Ending;
