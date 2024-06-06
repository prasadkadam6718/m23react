import React, { useState } from 'react'
import Home from './Home';

const CREX1 = () => {
  let [state, setState] = useState(false)
  return (
    <div>
      <nav style={{ height: "15vh", background: "gray", display: "flex", justifyContent: "space-around", alignItems: "center" }}>
        <div>Logo</div>
        <div>Home</div>
        <div>Contact</div>
        <div>About</div>
        <button style={{ width: "70px" }} onClick={() => setState(!state)} > {state ? "Logout" : "Login"}</button>
      </nav>
      <div>
        {/* how to use || operator */}
        {/* {state == true || <Home />} */}
        {/* how to use && operator */}
        {state == true && <Home />}
      </div>
    </div >
  )
}

export default CREX1