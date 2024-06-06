import React, { useRef } from 'react'

const UseRefHookEx1 = () => {
  let myDiv = useRef()
  let handleClick = () => {
    myDiv.current.style.background = "red"
  }
  return (
    <div>
      <div ref={myDiv} style={{ width: "200px", height: "200px", border: "10px solid" }}></div>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default UseRefHookEx1