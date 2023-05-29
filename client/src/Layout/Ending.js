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
    { bg: "classroom.png", character: "opening_ch1.png" },
    { bg: "hospital.png", character: "opening_ch2.png" },
    { bg: "road.png", character: "opening_ch3.png" },
    { bg: "village.png", character: "opening_ch4.png" },
  ];

  // 엔딩 왼쪽 스크립트
  const linesLeft = [
    "",
    "그야 쉬어야지!",
    "",
    "그럼!! 준비할건 다했지!! 하지만 생각보다 안되는 거 너도 알잖아.. 몰라 잘꺼야",
    "흠냐…벌써 점심시간이야..? 깨워 좀 주지ㅡㅡ",
    "어!!! 여기 의사쌤이 왜?? 저는 왜 여기에 있는거죠??",
    "",
    "",
    "어..어쩌다가 이렇게됐지?? 난 분명 학교에서…학교?? 아ㅏ기억이 안나..",
    "아! 휴대폰! 그래 빨리 집이나 가야겠다 더 이상 이런 곳에 있기싫어!",
    "아니..내 폰..아니라 왠 지도? 근데 뭐 이렇게 이상하게 생겼지??",
    "",
    "나 지금 지도속으로 들어온건가??",
    "무슨 일인진 모르겠지만 얼른 집으로 가야겠다",
  ];

  // 엔딩 오른쪽 스크립트
  const linesRight = [
    "야야 오늘 자습이라는데 너 뭐할거야?",
    "",
    "에이 애들이 다 취업가서 수업을 안 하는건데, 넌 취업 준비 다 했어~?",
    "",
    "",
    "",
    "이런 너무 놀라셔서 잠시 기억을 잃으신것 같군요..",
    "진정하고 심호흡하세요, 오늘은 당신 마지막 날입니다..당신이 하고싶은거 하세요",
    "",
    "",
    "",
    "한번뿐인 인생이니 잘 살아봐",
    "",
    "",
  ];

  // 엔딩 화면 전환 이펙트
  const changeScreen = () => {
    setLine((i) => i + 1);
    setText("");
    setCount(0);
    if (line == 3 || line == 7 || line == 11 || line == 13)
      setIndex((i) => i + 1);
    if (line == 13) goHome();
  };

  function goHome() {
    navigate("/");
  }

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
      <img
        className="next"
        src={`/images/next.png`}
        onClick={changeScreen}
        alt=""
      />
      <img className="bg" src={`/images/${images[index].bg}`} alt="" />

      <img className="skip" src={`/images/skip.png`} onClick={goHome} alt="" />
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
    </div>
  );
};

export default Ending;