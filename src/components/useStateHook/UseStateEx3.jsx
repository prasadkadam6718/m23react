import React, { useState } from 'react'
const UseStateEx3 = () => {
  let [color, setColor] = useState("white")
  let body = document.body
  body.style.backgroundColor = color
  return (
    <div>
      <button onClick={() => { setColor("red") }}>Red</button>
      <button onClick={() => { setColor("green") }}>green</button>
      <button onClick={() => { setColor("orange") }}>orange</button>
      <button onClick={() => { setColor("blue") }}>blue</button>
    </div>
  )
}
export default UseStateEx3