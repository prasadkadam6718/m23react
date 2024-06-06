import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
export let contextVaribale = createContext()
import img1 from "../../assets/3d-rendering-cartoon-like-dog.jpg"

const MyContext = (props) => {
  let [myApi, setMyApi] = useState([])
  console.log(props)
  let a = 10
  useEffect(() => {
    fetching()
  }, [])
  let fetching = async () => {
    let res = await fetch("https://api.github.com/users")
    let data = await res.json()
    setMyApi(data)
  }
  return (
    <contextVaribale.Provider value={{ a, img1, myApi }} >{props.children}</contextVaribale.Provider>
  )
}
export default MyContext