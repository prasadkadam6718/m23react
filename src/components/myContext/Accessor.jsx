import React, { useContext } from 'react'
import { contextVaribale } from './MyContext'

const Accessor = () => {
  let data = useContext(contextVaribale)
  console.log(data)
  return (
    <div>
      <h1>a : {data.a}</h1>
      <img src={data.img1} alt="" width="300px" />
      <div>
        {
          data.myApi.map((val, i) => {
            return (
              <div key={i}>
                <h1>{val.login}</h1>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Accessor