import React, { useState } from 'react'
import About from './About';
import Contact from './Contact';
import Help from './Help';
import Home from './Home';

const CREX2 = () => {
  let [key, setKey] = useState("")
  // switch (key) {
  //   case "home": return <Home />; break;
  //   case "about": return <About />; break;
  //   case "contact": return <Contact />; break;
  //   case "help": return <Help />; break;
  //   default: console.log("logo pe kon click karta he bhai.....")
  //     break;
  // }
  if (key == "home") {
    return <Home />
  } else if (key == "about") {
    return <About />
  } else if (key == "contact") {
    return <Contact />
  } else if (key == "help") {
    return <Help />
  }

  return (
    <div>
      <nav style={{ height: "15vh", background: "gray", display: "flex", justifyContent: "space-around", alignItems: "center" }}>
        <div onClick={() => setKey("logo")}>Logo</div>
        <div onClick={() => setKey("home")}>Home</div>
        <div onClick={() => setKey("about")}>About</div>
        <div onClick={() => setKey("contact")}>Contact</div>
        <div onClick={() => setKey("help")}>Help</div>
      </nav >
    </div >
  )
}

export default CREX2