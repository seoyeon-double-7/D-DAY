import Nav from "../../Layout/Nav";
import Footer from "../../Layout/Footer";
import "../../styles/HomePage.css";
import { useEffect, useState } from "react";
function RankPage() {
  // const txt = "안녕하세요 배서연입니다";
  const txt_arr = [
    "그야 쉬어야지!",
    "그럼!! 준비할건 다했지!! 하지만 생각보다 안되는 거 너도 알잖아.. 몰라 잘꺼야",
    "흠냐…벌써 점심시간이야..? 깨워 좀 주지ㅡㅡ",
    "어!!! 여기 의사 썜이 왜?? 저는 왜 여기에 있는거죠??",
    "어..어쩌다가 이렇게 됬지?? 난 분명 학교에서…학교?? 아ㅏ기억이 안나..",
    "아! 휴대폰! 그래 빨리 집이나 가야겠다 더 이상 이런 곳에 있기싫어!",
    "아니..내 폰..아니라 왠 지도? 근데 뭐 이렇게 이상하게 생겼지??",
    "나 지금 지도속으로 들어온건가??",
    "무슨 일인진 모르겠지만 얼른 집으로 가야겠다",
  ];

  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  const [line, setLine] = useState(0);

  const changeScreen = () => {
    setLine((i) => i + 1);
    setText("");
    setCount(0);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      let txt = txt_arr[line];
      console.log(txt);
      setText(text + txt[count]);
      setCount(count + 1);
    }, 50);
    if (count === txt_arr[line].length) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  });
  return (
    <div className="home">
      {/* <Nav /> */}

      <h2>{text}</h2>
      <button onClick={changeScreen}>다음</button>
    </div>
  );
}

export default RankPage;
