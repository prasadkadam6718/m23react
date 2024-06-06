import React, { useState } from 'react'

const UseStateEx2 = () => {
  let [toggle, setToggle] = useState(false)
  let handleToggle = () => {
    setToggle(!toggle)
  }
  return (
    <div>
      <button onClick={handleToggle}>{toggle ? "ON" : "OFF"}</button>
    </div>
  )
}

export default UseStateEx2