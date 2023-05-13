import React, { useState} from 'react'
import "../styles/Opening.css";

const Opening = () => {
    const [index, setIndex] = useState(0)
    const arr = [
        "hospital.png",
        "village.png",
        "classroom.png",
        "road.png"
    ]

  return (
    <div>
        <img className='next' src={`/images/next.png`} onClick={() => setIndex(i => i + 1)} />
        <img className='bg' src={`/images/${arr[index]}`} />
        <div>
            <img className='namebox' src={`/images/namebox.png`}/>
        </div>
        <img className='textbox' src={`/images/textbox.png`}/>
    </div>
  )
}

export default Opening