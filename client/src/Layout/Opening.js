import React, { useState, useEffect } from "react";
import "../styles/Opening.css";
import { useNavigate } from "react-router-dom";

const Opening = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  const arr = [
    "classroom.png",
    "classroom.png",
    "hospital.png",
    "hospital.png",
    "road.png",
    "village.png",
  ];

  const changeScreen = () => {
    if (index < arr.length - 1) setIndex((i) => i + 1);
    if (index == arr.length - 1) goHome();
  };

  function goHome() {
    navigate("/");
  }

  return (
    <div>
      <img
        className="next"
        src={`/images/next.png`}
        onClick={changeScreen}
        alt=""
      />
      <img className="bg" src={`/images/${arr[index]}`} alt="" />

      <img className="skip" src={`/images/skip.png`} onClick={goHome} alt="" />
      <div>
        <img className="namebox" src={`/images/namebox.png`} alt="" />
        <img className="name" src={`/images/name.png`} alt="" />
      </div>
      <img className="textbox" src={`/images/textbox.png`} alt="" />
    </div>
  );
};

export default Opening;
