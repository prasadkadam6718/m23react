import React, { useState } from 'react'
const EventsEx3 = () => {
  let [state, setState] = useState("")
  let [suraname, setSurname] = useState("")
  let handleChange = (e) => {
    console.log(e.target.value)
    setState(e.target.value)
  }
  let handleSurname = (e) => {
    setSurname(e.target.value)
  }
  let handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} /> <br /> <br />
        <input type="text" onChange={handleSurname} /> <br /> <br />
        <button >Submit</button>
      </form>
      <h1>Name : {state}</h1>
      <h1>Suraname : {suraname}</h1>
    </div>
  )
}
export default EventsEx3