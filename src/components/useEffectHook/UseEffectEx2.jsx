import React, { useEffect, useState } from 'react'

const UseEffectEx2 = () => {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  useEffect(() => { console.log("Radhey Radhey") }, [count2])
  return (
    <div>
      <h1></h1>
      <button onClick={() => { setCount(count + 1) }}>Increment1:{count}</button>
      <button onClick={() => { setCount2(count2 + 1) }}>Increment2:{count2}</button>
    </div>
  )
}

export default UseEffectEx2