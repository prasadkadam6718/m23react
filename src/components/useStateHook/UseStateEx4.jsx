import React, { useState } from 'react'
const UseStateEx4 = () => {
  let [number, setNumber] = useState(0)
  let handleRandom = () => {
    let ranNum = Math.floor(Math.random() * 10000)
    setNumber(ranNum)
  }
  return (
    <div>
      <h1>ranmdom number : {number}</h1>
      <button onClick={handleRandom}>generate</button>
    </div>
  )
}

export default UseStateEx4