import React from 'react'

const EventEx4 = () => {
  let handleKeyDown = (e) => {
    e.target.style.width = "100vw"
    e.target.style.background = "red"
  }
  let handleKeyUp = (e) => {
    e.target.style.width = ""
    e.target.style.background = "yellow"
  }
  return (
    <div>
      <input type="text" onKeyDown={handleKeyDown} onKeyUp={handleKeyUp} />
    </div>
  )
}

export default EventEx4