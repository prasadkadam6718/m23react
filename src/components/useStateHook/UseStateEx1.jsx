import React, { useState } from 'react'
const UseStateEx1 = () => {
  let [count, setCount] = useState(0)
  let handleInc = () => { setCount(count + 1) }
  return (
    <div>
      <h1>count : {count}</h1>
      <button onClick={handleInc}>increment</button>
    </div>
  )
}
export default UseStateEx1