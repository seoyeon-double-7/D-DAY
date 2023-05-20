import React, { useState , useEffect } from 'react'
import "../styles/Opening.css";
import { useNavigate } from 'react-router-dom';

const Opening = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  const arr = [
    "classroom.png",
    "classroom.png",
    "hospital.png",
    "hospital.png",
    "road.png",
    "village.png"
  ];

  const changeScreen = () => {
    if(index < arr.length-1)
      setIndex(i => i + 1);
    if(index == arr.length-1) navigate("/");
  };

  return (
    <div>
    <img className='next' src={`/images/next.png`} onClick={changeScreen} />
        <img className='bg' src={`/images/${arr[index]}`} />

        <div>
            <img className='namebox' src={`/images/namebox.png`}/>
        </div>
        <img className='textbox' src={`/images/textbox.png`}/>
    </div>
  )
}

export default Opening