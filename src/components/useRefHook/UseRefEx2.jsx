import React, { useRef } from 'react'

const UseRefEx2 = () => {
  let handleGray = () => { }
  return (
    <div>
      <nav style={{ height: "15vh", background: "gray", display: "flex", justifyContent: "space-around", alignItems: "center" }}>
      </nav>
      <main style={{ height: "65vh", display: "flex", justifyContent: "space-around", alignItems: "center" }}>
        <div style={{ width: "100%", height: "100%", background: "orange" }}></div>
        <div style={{ width: "100%", height: "100%", background: "yellow" }}></div>
        <div style={{ width: "100%", height: "100%", background: "Red" }}></div>
      </main>
      <footer style={{ height: "20vh", background: "green" }}></footer>
    </div>
  )
}
export default UseRefEx2