import React, { createContext } from 'react'
export let contextVariable = createContext()
const MyContext1 = (props) => {
  let a = 10
  let b = 20
  let c = 30
  return (
    <contextVariable.Provider value={{ a, b, c }}>{props.children}</contextVariable.Provider>
  )
}

export default MyContext1