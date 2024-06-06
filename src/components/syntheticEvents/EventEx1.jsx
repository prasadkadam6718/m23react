import React from 'react'

const EventEx1 = () => {
  let handleButton = (e) => {
    console.log(e.target.style)
    e.target.style.background = "red"
    e.target.style.width = "200px"
  }
  let handleInput = (e) => {
    console.log(e.target.style)
    e.target.style.background = "gray"
    e.target.style.width = "200px"
    e.target.style.height = "200px"

  }
  return (
    <div>
      <button onClick={handleButton}>click</button>
      <input type="text" onMouseOver={handleInput} />
    </div>
  )
}

export default EventEx1