import React, { useEffect, useState } from 'react'
const UseEffectEx1 = () => {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  useEffect(() => { console.log("useEffect gets executed becuase of changes in state") }, [])
  return (
    <div>
      <h1>couunt : {count}</h1>
      <button onClick={() => { setCount(count + 1) }}>Increment</button>
      <h1>couunt2 : {count2}</h1>
      <button onClick={() => { setCount2(count2 + 1) }}>Increment</button>
    </div>
  )
}
export default UseEffectEx1