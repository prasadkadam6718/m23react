import React from 'react'

const EventsEx7 = () => {
  window.addEventListener('mousemove', () => {
    console.log(+ event.clientX, event.clientY)
  })
  return (
    <div>EventsEx7</div>
  )
}

export default EventsEx7