import React, { useEffect, useState } from 'react'
const UseEffectEx3 = () => {
  useEffect(() => {
    fetching()
  })
  const [count, setCount] = useState(0)
  let [data, setData] = useState([])
  let fetching = async () => {
    let resp = await fetch("https://api.github.com/users")
    let apidata = await resp.json()
    console.log(apidata)
    setData(apidata)
  }
  return (
    <div>
      <button onClick={() => { setCount(count + 1) }}>count : {count}</button>
      <div style={{ display: 'flex', flexWrap: "wrap" }}>
        {
          data.length > 0 && data.map((val, i) => {
            return (
              <div key={i} style={{ margin: "10px" }}>
                <h1>{val.login}</h1>
                <img src={val.avatar_url} alt="" width="200px" />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default UseEffectEx3