import React, { useEffect } from 'react'
const EventsEx6 = () => {
  let body = document.body
  console.log(window.innerWidth)
  window.addEventListener('resize', (e) => {
    console.log(window.innerWidth, window.innerHeight)
  })
  return (
    <div>
      EventsEx6
    </div>
  )
}
export default EventsEx6